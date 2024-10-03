import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { useStateMachine } from 'little-state-machine';
import usePortal from 'react-useportal';

// Form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

// Icons
import HeaderSplash from 'assets/images/baseLogoSplash.png';
import { ReactComponent as ExclamationSVG } from 'assets/icons/exclamationCircle.svg';

// Modals
import CountryErrorModal from 'modals/CountryErrorModal';

// Update Action
import { updateAction, resetStore } from 'utils/wizard';

// Header Control
import useHeaderContext from 'hooks/useHeaderContext';

// Data
import { languageData } from 'data/lang';
import { countryData, countriesWithStates, CountryDataProps } from 'data/country';
import { timeZones } from 'data/timeZones';

// Helper
import { scrollToTop } from 'helper/scrollHelper';

// Styles
import { BlackText, BerryTextBold } from 'components/Texts';
import WizardButtons from 'components/WizardButtons';
import {
  WelcomeContent, WelcomeStyledForm,
  RegionContainer,
  BoldBlackText, WelcomeSelect, TextErrorContainer,
  HeaderImageContainer,
  HeaderImage,
  LogoWhiteBG,
} from '../style';

declare interface OptionsProps {
  label: string;
  value: string;
}

const invalidCountries = ['India', 'France', 'Italy', 'Netherlands', 'Belgium', 'Luxembourg', 'Germany', 'Pakistan'];

const schema = Yup.object().shape({
  country: Yup.string().required().notOneOf(invalidCountries),
  language: Yup.string().required(),
  region: Yup.string().when('country', {
    is: (val: string) => countriesWithStates.includes(val),
    then: Yup.string().required('regionRequired'),
    else: Yup.string(),
  }),
  patientId: Yup.string().when('$isClinical', {
    is: true,
    then: Yup.string().required(),
    else: Yup.string().notRequired(),
  }),
  hospitalId: Yup.string().when('$isClinical', {
    is: true,
    then: Yup.string().required(),
    else: Yup.string().notRequired(),
  }),
}).defined();

type Step1Type = Yup.InferType<typeof schema>;

const getCountry = async () => {
  const res = await fetch('https://ipwho.is/');
  const data = await res.json();

  return data.country;
};

const getCountryInfo = (countryName: string) => {
  const countrySelected = countryData.find(country => country.label === countryName);

  return countrySelected;
};

const Step1 = (p: Wizard.StepProps) => {
  const [activeStep, setActiveStep] = React.useState(true);
  const [supportedLang, setSupportedLang] = React.useState<{ value: string; label: string; }[]>([]);
  const [ipLimit, setIpLimit] = React.useState(false);
  const { Portal } = usePortal({
    bindTo: document && document.getElementById('wizard-buttons') as HTMLDivElement,
  });
  const {
    setType, setDoGoBack, setLogoSize,
  } = useHeaderContext();
  const resetExecuted = React.useRef(false);

  const { state, actions } = useStateMachine({ update: updateAction(p.storeKey), reset: resetStore() });

  const store = state?.[p.storeKey];

  const {
    control,
    formState,
    handleSubmit,
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: store,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const history = useHistory();
  const { isValid, errors } = formState;

  useEffect(() => {
    if (resetExecuted.current) {
      resetExecuted.current = false;
      reset(store);
    }
  }, [store, reset]);

  const onSubmit = async (values: Step1Type) => {
    if (values) {
      actions.update(values);
      if (p.nextStep) {
        setActiveStep(false);
        history.push(p.nextStep);
      }
    }
  };

  const resetRegion = () => {
    setValue('region', '');
  };

  useEffect(() => {
    scrollToTop();
    // Hide back arrow in header if neccesary
    setDoGoBack(null);
    setType('tertiary');
    setLogoSize('big');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { t, i18n } = useTranslation();

  const lang = watch('language');
  const country = watch('country');

  useEffect(() => {
    i18n.changeLanguage(lang);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n, lang]);

  const invalidCountryModal = React.useMemo(() => invalidCountries.includes(country),
  // eslint-disable-next-line react-hooks/exhaustive-deps
    [country]);

  const regionSelectOptions = useMemo(() => {
    const output = [
      { label: t('main:selectRegion'), value: '' },
    ];
    if (country) {
      const elem = countryData.find(a => a.value === country);
      if (elem) {
        elem.states.forEach(s => {
          output.push({ label: t(`main:regionOpt.${s}`, s), value: s });
        });
      }
    }
    return output;
  }, [t, country]);

  const getOptionsCountry = () => {
    const options = countryData;
    const formattedOptions = options.reduce((acc: CountryDataProps[], current) => {
      acc.push({ ...current, label: t(`main:countries.${current.value}`) });
      return acc;
    }, []);
    return formattedOptions;
  };

  useEffect(() => {
    const localStorageCountry = localStorage.getItem('countryResult');
    const virufyWizard = localStorage.getItem('pcrnow-wizard');
    if (virufyWizard) {
      const parsedVirufyWizard = JSON.parse(virufyWizard);
      setValue('country', parsedVirufyWizard.welcome.country);
      setValue('language', parsedVirufyWizard.welcome.language);
      setValue('region', parsedVirufyWizard.welcome.region);
      if (localStorageCountry) {
        setSupportedLang(JSON.parse(localStorageCountry)?.supported);
      }
    } else if (localStorageCountry) {
      const parsedLocalStorageCountry = JSON.parse(localStorageCountry);
      setValue('country', parsedLocalStorageCountry.country);
      setValue('language', parsedLocalStorageCountry.lang[0].value);
      setSupportedLang(parsedLocalStorageCountry.supported);
    } else {
      getCountry()
        .then(countryName => {
          const cInfo = getCountryInfo(countryName);
          const countryDataLS = {
            country: countryName,
            lang: cInfo?.defaultLang,
            supported: cInfo?.supportedLang,
          };
          localStorage.setItem('countryResult', JSON.stringify(countryDataLS));
          setValue('country', countryName);
          if (cInfo) {
            setValue('language', cInfo.defaultLang[0].value);
            setSupportedLang(cInfo.supportedLang);
          }
          setIpLimit(false);
        })
        .catch(error => {
          console.error(error);
          setIpLimit(true);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (ipLimit && Intl) {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const tzArr = userTimeZone.split('/');
      const userCity = tzArr[tzArr.length - 1];
      const userCountry = timeZones[userCity];
      const cInfo = getCountryInfo(userCountry);
      setValue('country', userCountry);
      if (cInfo) {
        setValue('language', cInfo.defaultLang[0].value);
        setSupportedLang(cInfo.supportedLang);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipLimit]);

  return (
    <>
      <WelcomeStyledForm>
        <HeaderImageContainer>
          <HeaderImage
            src={HeaderSplash}
          />
          <LogoWhiteBG />
        </HeaderImageContainer>
        <WelcomeContent mt={4}>

          <BoldBlackText>
            {t('main:selectLocation', 'Location')}
          </BoldBlackText>

          <Controller
            control={control}
            name="country"
            defaultValue=""
            render={({ onChange, value: valueController }) => (
              <WelcomeSelect
                placeholder={t('main:selectCountry', 'Select country')}
                options={getOptionsCountry()}
                onChange={(e: any) => {
                  onChange(e?.value);
                  resetRegion();
                  const cInfo = getCountryInfo(e.value);
                  if (cInfo) {
                    setSupportedLang(cInfo.supportedLang);
                    setValue('language', cInfo.defaultLang[0].value);
                  }
                }}
                value={getOptionsCountry().filter(({ value }) => value === valueController)}
                className="custom-select"
                classNamePrefix="custom-select"
                noOptionsMessage={({ inputValue }) => (
                  !inputValue ? `${t('main:noOptionsError')}` : `${t('main:noValueError')}`
                )}
              />
            )}
          />

          <BoldBlackText>
            {t('main:selectYourLanguage', 'Language')}
          </BoldBlackText>

          {/* Language */}
          <Controller
            control={control}
            name="language"
            defaultValue={languageData[0].value}
            render={({ onChange, value: valueController }) => (
              <WelcomeSelect
                placeholder={t('main.selectYourLanguage', 'Language')}
                options={supportedLang}
                onChange={(e: any) => { onChange(e?.value); }}
                value={languageData.filter(({ value }) => value === valueController)}
                className="custom-select"
                classNamePrefix="custom-select"
                isDisabled={supportedLang?.length <= 1}
              />
            )}
          />

          <Controller
            control={control}
            name="region"
            defaultValue=""
            render={({ onChange, value: valueController }) => (regionSelectOptions.length > 1 ? (
              <>
                <BoldBlackText>
                  {t('main:region', 'Region')}
                </BoldBlackText>

                <RegionContainer>
                  <WelcomeSelect
                    options={regionSelectOptions}
                    onChange={(e: any) => { onChange(e?.value); }}
                    value={regionSelectOptions.filter(({ value }) => value === valueController) || ''}
                    className="custom-select"
                    classNamePrefix="custom-select"
                    error={errors.region}
                  />
                  {errors.region && (
                    <TextErrorContainer>
                      <ExclamationSVG />
                      {t(errors.region.message, 'Please select a region')}
                    </TextErrorContainer>
                  )}
                </RegionContainer>
              </>
            ) : <></>)}
          />

          <BlackText>
            <BerryTextBold>
              {t('main:servicePurposeTitle', 'Service purpose and positioning')}
            </BerryTextBold>
            <Trans i18nKey="main:servicePurposeText">
              {/* eslint-disable-next-line max-len */}
              <p>Virufy is a service that uses artificial intelligence (Al) to analyze voice patterns to determine whether they resemble the coughs of patients suffering from COVID-19. This service is not a medical device, so it only provides information and is not intended for medical advice, diagnosis, treatment, prevention, etc. The Service is not a substitute for a doctor or other medical professional, so please do not make any medical decisions or take or stop any action (such as taking any medication) based on the information we provide. Also, do not use it in life-threatening or emergency situations. This service does not take any responsibility for the disease the user originally suffers from or the consequences of actions taken by the user based on the information provided.
              </p>
            </Trans>
          </BlackText>

          <BlackText>
            <Trans i18nKey="helpVirufy:introParagraphJapanFooter">
              <strong>
                Purpose and positioning of the service <br />
                Terms of Use and Privacy Policy<br />
                Please use this service after agreeing to the following
              </strong>
            </Trans>
          </BlackText>

          {
            activeStep && (
              <Portal>
                <WizardButtons
                  invert
                  leftLabel={t('helpVirufy:nextButton')}
                  leftHandler={handleSubmit(onSubmit)}
                  leftDisabled={!isValid}
                />
              </Portal>
            )
          }
        </WelcomeContent>
      </WelcomeStyledForm>
      <CountryErrorModal
        isOpen={invalidCountryModal}
        modalTitle="Oops."
      >
        {t('main:errorCountry', 'We are unable to collect coughs from your region at this time. Check back with us soon!')}
      </CountryErrorModal>
    </>
  );
};

export default React.memo(Step1);
