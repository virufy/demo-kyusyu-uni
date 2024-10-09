(this["webpackJsonpdemo-kyusyu-uni"]=this["webpackJsonpdemo-kyusyu-uni"]||[]).push([[36,46],{191:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(200),i=n(6),o=n.n(i),a=n(186),c=n(185),s=n(189);function u(){var e=Object(a.a)(["\n  height: 50px;\n  border-radius: 15px; \n  font-family: 'Source Sans Pro'; /* It could be removed if default on body changes */\n  font-weight: bold;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n\n  ","\n"]);return u=function(){return e},e}var d=c.default.button(u(),(function(e){var t=e.dark,n=e.disabled?s.a.purple_50:s.a.purple;return t?"\n    background-color: ".concat(n,";\n    color: ").concat(s.a.white,";\n    border: none;\n  "):"\n    background-color: ".concat(s.a.white,";\n    color: ").concat(n,";\n    border: 1px solid ").concat(n,";\n  ")})),l=o.a.memo((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return o.a.createElement(d,Object.assign({type:"button"},n),t)}))},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(6),i=n.n(r),o=n(191),a=n(186);function c(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: ",";\n  margin: 0 auto;\n\n  button {\n    flex: 1;\n    min-height: 50px;\n    margin-bottom: 8px;\n\n    &:first-of-type {\n      margin-left: 0px !important;\n    }\n  }\n\n  @media screen and (","){\n    max-width: 470px;\n  }\n"]);return c=function(){return e},e}var s=n(185).default.div(c(),(function(e){return"calc(100% - ".concat(2*e.theme.layout.generalPaddingAmount,"px)")}),(function(e){return e.theme.breakpoints.tablet})),u=i.a.memo((function(e){var t=e.invert,n=void 0!==t&&t,r=e.leftLabel,a=e.leftDisabled,c=e.leftHandler,u=e.rightLabel,d=e.rightDisabled,l=e.rightHandler;return i.a.createElement(s,null,i.a.createElement(o.a,{dark:n,disabled:a,onClick:c},r),u&&l&&i.a.createElement(o.a,{dark:!n,disabled:d,onClick:l},u))})),d=i.a.memo(u)},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(235);function i(e,t){return new Promise((function(n){e.duration===1/0||r.isSafari&&!(r.isSafari&&e.duration>0)?(e.addEventListener("durationchange",(function(){t?e.remove():(e.pause(),e.volume=1,e.currentTime=0),n(e.duration)})),e.currentTime=86400,e.play()):n(e.duration)}))}},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=["ms","s","m","h","d"],r=n.findIndex((function(e){return e===t})),i=[1e3,60,60,24,1],o=[1,1e3,6e4,36e5,864e5];return n.reduce((function(t,n,a){return t[n]=a>r?0:a===r?Math.floor(e/o[a]):Math.floor(e/o[a])%i[a],t}),{ms:0,s:0,m:0,h:0,d:0})}},234:function(e,t,n){e.exports=n.p+"static/media/stop.c2f5fdba.svg"},240:function(e,t,n){"use strict";var r=n(202),i=n.n(r),o=n(203),a=n(217),c=n(226);a.addMethod(a.mixed,"validateAudioLength",(function(e){return this.test("fileDuration","ERROR.FILE_DURATION",function(){var t=Object(o.a)(i.a.mark((function t(n){var r,o,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return r=n,(o=new Audio(URL.createObjectURL(r))).defaultMuted=!0,o.muted=!0,o.load(),t.next=8,new Promise((function(e){return o.addEventListener("loadedmetadata",e)}));case 8:return t.next=10,Object(c.a)(o);case 10:return a=t.sent,t.abrupt("return",a>=e);case 12:return t.abrupt("return",!!n);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})),a.addMethod(a.mixed,"validateAudioSize",(function(e){return this.test("fileSize","ERROR.FILE_SIZE",(function(t){return t?t.size<=Math.pow(1024,3)*e:!!t}))})),t.a=a},241:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(229)),o=r(n(264)),a=r(n(265)),c=function(){function e(e){var t=e.initialTime,n=e.direction,r=e.timeToUpdate,i=e.lastUnit,c=e.checkpoints,s=e.onChange;this.internalTime=o.default(),this.initialTime=t,this.time=t,this.direction=n,this.timeToUpdate=r,this.lastUnit=i,this.checkpoints=c,this.innerState=new a.default(s),this.onChange=s,this.timerId=null}return Object.defineProperty(e.prototype,"state",{get:function(){return this.innerState.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeParts",{get:function(){return this.getTimeParts(this.computeTime())},enumerable:!0,configurable:!0}),e.prototype.getTimeParts=function(e){return i.default(e,this.lastUnit)},e.prototype.setTime=function(e){this.internalTime=o.default(),this.initialTime=e,this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},e.prototype.getTime=function(){return this.time},e.prototype.setLastUnit=function(e){this.innerState.isPlaying()?(this.pause(),this.lastUnit=e,this.resume(!0)):this.lastUnit=e},e.prototype.setTimeToUpdate=function(e){this.innerState.isPlaying()?(this.pause(),this.timeToUpdate=e,this.resume()):this.timeToUpdate=e},e.prototype.setDirection=function(e){this.direction=e},e.prototype.setCheckpoints=function(e){this.checkpoints=e},e.prototype.start=function(){this.innerState.setPlaying()&&this.setTimerInterval(!0)},e.prototype.resume=function(e){void 0===e&&(e=!1),!this.innerState.isStopped()&&this.innerState.setPlaying()&&this.setTimerInterval(e)},e.prototype.pause=function(){this.innerState.setPaused()&&clearInterval(this.timerId)},e.prototype.stop=function(){this.innerState.setStopped()&&clearInterval(this.timerId)},e.prototype.reset=function(){this.time=this.initialTime,this.onChange(this.getTimeParts(this.time))},e.prototype.setTimerInterval=function(e){var t=this;void 0===e&&(e=!1),this.timerId&&clearInterval(this.timerId),this.internalTime=o.default();e&&this.onChange(this.getTimeParts(this.time)),this.timerId=window.setInterval((function(){var e=t.time,n=t.computeTime();t.onChange(t.getTimeParts(n)),t.checkpoints.map((function(r){var i=r.time,o=r.callback,a=i>e&&i<=n,c=i<e&&i>=n;("backward"===t.direction?c:a)&&o()}))}),this.timeToUpdate)},e.prototype.computeTime=function(){if(this.innerState.isPlaying()){var e=o.default(),t=Math.abs(e-this.internalTime);switch(this.direction){case"forward":return this.time=this.time+t,this.internalTime=e,this.time;case"backward":return this.time=this.time-t,this.internalTime=e,this.time<0?(this.stop(),0):this.time;default:return this.time}}return this.time},e}();t.TimerModel=c},243:function(e,t,n){"use strict";n.r(t);var r=n(190),i=n(6),o=n.n(i),a=n(204),c=n.n(a),s=n(780),u=n(198),d=n(216),l=n(240),f=n(201),p=n(202),m=n.n(p),h=n(203),g=n(188),v=n(262),b=n.n(v),y=n(13),T=n(281),x=function(){var e=this,t=[];this.onmessage=function(n){"encode"===n.data[0]?function(e){for(var n=e.length,r=new Uint8Array(2*n*1),i=0;i<n;i+=1){var o=2*i*1,a=e[i];a>1?a=1:a<-1&&(a=-1),a*=32768,r[o]=a,r[o+1]=a>>8}t.push(r)}(n.data[1]):"dump"===n.data[0]?function(e){var n=t.length?t[0].length:0,r=t.length*n,i=new Uint8Array(44+r),o=new DataView(i.buffer);o.setUint32(0,1380533830,!1),o.setUint32(4,36+r,!0),o.setUint32(8,1463899717,!1),o.setUint32(12,1718449184,!1),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,1*e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),o.setUint32(36,1684108385,!1),o.setUint32(40,r,!0);for(var a=0;a<t.length;a+=1)i.set(t[a],a*n+44);t=[];var c=[i.buffer];postMessage(c,[c[0]])}(n.data[1]):"close"===n.data[0]&&e.close()}},C=function(){var e=null,t=[];function n(e){var t=new Float32Array(e),n=new Int16Array(e.length);return function(e,t){for(var n=0;n<e.length;n+=1){var r=Math.max(-1,Math.min(1,e[n]));t[n]=r<0?32768*r:32767*r}}(t,n),n}onmessage=function(r){var i;"encode"===r.data[0]?function(r){for(var i=n(r),o=i.length,a=0;o>=0;a+=1152){var c=i.subarray(a,a+1152),s=e.encodeBuffer(c);t.push(s),o-=1152}}(r.data[1]):"dump"===r.data[0]?function(){var n=e.flush();n.length>0&&t.push(n),postMessage(t),t=[]}(r.data[1]):"init"===r.data[0]?(i=r.data[1],importScripts(i.baseUrl+"/workers/encoders/lame.min.js"),e=new lamejs.Mp3Encoder(1,i.sampleRate,128)):"close"===r.data[0]&&this.close()}},E=function(){var e;importScripts("".concat("/demo-kyusyu-uni","/workers/encoders/libflac.dev.js"));var t=1,n=44100,r=5,i=16,o=1,a=0,c=[],s=[];function u(e,t){c.push(e),a+=e.byteLength}function d(){if(0!==(e=Flac.create_libflac_encoder(n,t,i,r,0))){var a=Flac.init_encoder_stream(e,u);o&=0==a,console.log("flac init     : ".concat(o)),console.log("status encoder: ".concat(a)),!0}else console.error("Error initializing the encoder.")}function l(n){for(var r=n.length,i=new Uint32Array(r),o=new DataView(i.buffer),a=0,c=0;c<r;c+=1)o.setInt32(a,32767*n[c],!0),a+=4;var s=Flac.FLAC__stream_encoder_process_interleaved(e,i,i.length/t);1!=s&&console.log("Error: encode_buffer_pcm_as_flac returned false. ".concat(s))}function f(e,t){var n=function(e,t){for(var n=new Uint8Array(t),r=0,i=e.length,o=0;o<i;o+=1){var a=e[o];n.set(a,r),r+=a.length}return n}(e,t);return new Blob([n],{type:"audio/flac"})}this.onmessage=function(u){if("init"===u.data[0])!function(e){var o=e;o||(o={bps:i,channels:t,samplerate:n,compression:r}),o.channels=o.channels?o.channels:t,o.samplerate=o.samplerate?o.samplerate:n,o.bps=o.bps?o.bps:i,o.compression=o.compression?o.compression:r,r=o.compression,i=o.bps,n=o.samplerate,t=o.channels,Flac.isReady()?d():Flac.onready=function(){setTimeout((function(){d()}),0)}}(u.data[1]);else if("encode"===u.data[0])!function(e){if(Flac.isReady()){if(s.length>0)for(var t=s.length,n=s.splice(0,t),r=0;r<t;++r)l(n[r]);l(e)}else s.push(e),console.info("buffered audio data for Flac encdoing")}(u.data[1]);else if("dump"===u.data[0]){var p;Flac.isReady()?(o&=Flac.FLAC__stream_encoder_finish(e),console.log("flac finish: ".concat(o)),p=f(c,a),Flac.FLAC__stream_encoder_delete(e)):console.error("Flac was not initialized: could not encode data!"),c.splice(0,c.length),a=0,s.splice(0,s.length),postMessage(p),!1}}},k=function e(t){var n=this;Object(T.a)(this,e),this.cleanup=function(){n.config.onRecording&&n.em.removeEventListener("recording",n.recordingFn),n.config.onAudioProcesss&&n.em.removeEventListener("onaudioprocess",n.onAudioProcessFn)},this.createWorker=function(e){var t=e.toString().replace(/^function\s*\(\)\s*{/,"").replace(/}$/,""),n=new Blob([t]);return new Worker(URL.createObjectURL(n))},this.startRecording=function(e){if("inactive"===n.state&&navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){if(n.audioCtx=new AudioContext({sampleRate:n.config.sampleRate}),n.micGainNode=n.audioCtx.createGain(),n.outputGainNode=n.audioCtx.createGain(),n.config.createDynamicsCompressorNode&&(n.dynamicsCompressorNode=n.audioCtx.createDynamicsCompressor()),n.config.createAnalyserNode&&(n.analyserNode=n.audioCtx.createAnalyser()),(n.config.forceScriptProcessor||n.config.broadcastAudioProcessEvents||!n.config.usingMediaRecorder)&&(n.processorNode=n.audioCtx.createScriptProcessor(n.config.processorBufferSize,1,1)),n.audioCtx.createMediaStreamDestination?n.destinationNode=n.audioCtx.createMediaStreamDestination():n.destinationNode=n.audioCtx.destination,!n.config.usingMediaRecorder){if("mp3"===n.config.manualEncoderId){n.encoderWorker=n.createWorker(C);n.encoderWorker.postMessage(["init",{baseUrl:"/demo-kyusyu-uni",sampleRate:n.audioCtx.sampleRate}]),n.encoderMimeType="audio/mpeg"}else"flac"===n.config.manualEncoderId?(n.encoderWorker=n.createWorker(E),n.encoderWorker.postMessage(["init",{sampleRate:n.audioCtx.sampleRate}]),n.encoderMimeType="audio/flac"):(n.encoderWorker=n.createWorker(x),n.encoderMimeType="audio/wav");n.encoderWorker.addEventListener("message",(function(e){var t=new Event("dataavailable");"ogg"===n.config.manualEncoderId||"flac"===n.config.manualEncoderId?t.data=e.data:t.data=new Blob(e.data,{type:n.encoderMimeType}),n._onDataAvailable(t)}))}var t={audio:{echoCancellation:n.config.enableEchoCancellation}};return n.config.deviceId&&(t.audio.deviceId=n.config.deviceId),navigator.mediaDevices.getUserMedia(t).then((function(t){n._startRecordingWithStream(t,e)})).catch((function(e){console.log(e)}))}},this.setMicGain=function(e){n.config.micGain=e,n.audioCtx&&n.micGainNode&&n.micGainNode.gain.setValueAtTime(e,n.audioCtx.currentTime)},this._startRecordingWithStream=function(e,t){n.micAudioStream=e,n.inputStreamNode=n.audioCtx.createMediaStreamSource(n.micAudioStream),n.audioCtx=n.inputStreamNode.context,n.onGraphSetupWithInputStream&&n.onGraphSetupWithInputStream(n.inputStreamNode),n.inputStreamNode.connect(n.micGainNode),n.micGainNode.gain.setValueAtTime(n.config.micGain,n.audioCtx.currentTime);var r=n.micGainNode;n.dynamicsCompressorNode&&(n.micGainNode.connect(n.dynamicsCompressorNode),r=n.dynamicsCompressorNode),n.state="recording",n.processorNode?(r.connect(n.processorNode),n.processorNode.connect(n.outputGainNode),n.processorNode.onaudioprocess=function(e){return n._onAudioProcess(e)}):r.connect(n.outputGainNode),n.analyserNode&&r.connect(n.analyserNode),n.outputGainNode.connect(n.destinationNode),n.config.usingMediaRecorder?(n.mediaRecorder=new MediaRecorder(n.destinationNode.stream,{mimeType:n.encoderMimeType}),n.mediaRecorder.addEventListener("dataavailable",(function(e){return n._onDataAvailable(e)})),n.mediaRecorder.addEventListener("error",(function(e){return n._onError(e)})),n.mediaRecorder.start(t)):(n.outputGainNode.gain.setValueAtTime(0,n.audioCtx.currentTime),t&&(console.log("Time slicing without MediaRecorder is not yet supported. The resulting recording will not be playable."),n.slicing=setInterval((function(){"recording"===this.state&&this.encoderWorker.postMessage(["dump",this.context.sampleRate])}),t)))},this._onAudioProcess=function(e){n.config.broadcastAudioProcessEvents&&n.em.dispatchEvent(new CustomEvent("onaudioprocess",{detail:{inputBuffer:e.inputBuffer,outputBuffer:e.outputBuffer}})),n.config.usingMediaRecorder||"recording"===n.state&&(n.config.broadcastAudioProcessEvents?n.encoderWorker.postMessage(["encode",e.outputBuffer.getChannelData(0)]):n.encoderWorker.postMessage(["encode",e.inputBuffer.getChannelData(0)]))},this.stopRecording=function(){"inactive"!==n.state&&(n.config.usingMediaRecorder?(n.state="inactive",n.mediaRecorder.stop()):(n.state="inactive",n.encoderWorker.postMessage(["dump",n.audioCtx.sampleRate]),clearInterval(n.slicing)))},this._onDataAvailable=function(e){if(n.chunks.push(e.data),n.chunkType=e.data.type,"inactive"===n.state){var t=new Blob(n.chunks,{type:n.chunkType}),r=URL.createObjectURL(t),i={ts:(new Date).getTime(),blobUrl:r,mimeType:t.type,size:t.size};n.chunks=[],n.chunkType=null,n.destinationNode&&(n.destinationNode.disconnect(),n.destinationNode=null),n.outputGainNode&&(n.outputGainNode.disconnect(),n.outputGainNode=null),n.analyserNode&&(n.analyserNode.disconnect(),n.analyserNode=null),n.processorNode&&(n.processorNode.disconnect(),n.processorNode=null),n.encoderWorker&&(n.encoderWorker.postMessage(["close"]),n.encoderWorker=null),n.dynamicsCompressorNode&&(n.dynamicsCompressorNode.disconnect(),n.dynamicsCompressorNode=null),n.micGainNode&&(n.micGainNode.disconnect(),n.micGainNode=null),n.inputStreamNode&&(n.inputStreamNode.disconnect(),n.inputStreamNode=null),n.config.stopTracksAndCloseCtxWhenFinished&&(n.micAudioStream.getTracks().forEach((function(e){return e.stop()})),n.micAudioStream=null,n.audioCtx.close(),n.audioCtx=null),n.em.dispatchEvent(new CustomEvent("recording",{detail:{recording:i}}))}},this._onError=function(e){console.log("error",e),n.em.dispatchEvent(new Event("error"))},window.AudioContext=window.AudioContext||window.webkitAudioContext,this.em=document.createDocumentFragment(),this.state="inactive",this.chunks=[],this.chunkType="",this.encoderMimeType="audio/wav",this.config={broadcastAudioProcessEvents:void 0!==t.broadcastAudioProcessEvents&&t.broadcastAudioProcessEvents,createAnalyserNode:void 0!==t.createAnalyserNode&&t.createAnalyserNode,createDynamicsCompressorNode:void 0!==t.createDynamicsCompressorNode&&t.createDynamicsCompressorNode,forceScriptProcessor:void 0!==t.forceScriptProcessor&&t.forceScriptProcessor,manualEncoderId:void 0!==t.manualEncoderId?t.manualEncoderId:"wav",micGain:void 0!==t.micGain?t.micGain:1,processorBufferSize:void 0!==t.processorBufferSize?t.processorBufferSize:2048,stopTracksAndCloseCtxWhenFinished:void 0===t.stopTracksAndCloseCtxWhenFinished||t.stopTracksAndCloseCtxWhenFinished,usingMediaRecorder:void 0!==t.usingMediaRecorder?t.usingMediaRecorder:"undefined"!==typeof window.MediaRecorder,enableEchoCancellation:void 0===t.enableEchoCancellation||t.enableEchoCancellation,sampleRate:void 0!==t.sampleRate?t.sampleRate:44100,onRecording:t.onRecording,onAudioPress:t.onAudioPress},t.onRecording&&(this.recordingFn=function(e){return t.onRecording(e)},this.em.addEventListener("recording",this.recordingFn)),t.onAudioProcesss&&(this.onAudioProcessFn=function(e){return t.onAudioProcesss(e)},this.em.addEventListener("onaudioprocess",this.onAudioProcessFn))},S=n(250),w=n(226),R=n(244),P=n(267),I=n.n(P),O=n(234),N=n.n(O),M=n(186),_=n(185),j=n(189);function A(){var e=Object(M.a)(["\n  visibility: ",";\n"]);return A=function(){return e},e}function U(){var e=Object(M.a)(["\n  font-size: 16px;\n  line-height: 20px;\n  color: ",";\n  font-family: 'Source Sans Pro';\n  display: flex; \n  margin-left: 20px;\n  margin-top:10px;\n"]);return U=function(){return e},e}function D(){var e=Object(M.a)(["\n  width: 70px;\n  height: 41px;\n  font-size: 1.25rem;\n  color: ",";\n  font-weight: bold;\n  font-family: 'Source Sans Pro';\n  border: 1px solid ",";\n  border-radius: 15px;\n  display: flex; \n  align-items: center; \n  justify-content: center; \n  margin-bottom: 28px;\n\n  @media screen and (",") {\n    font-size: 1.75rem;\n    margin-top: 22px;\n  }\n"]);return D=function(){return e},e}function L(){var e=Object(M.a)(["\n  width: 15px;\n  height: 15px;\n"]);return L=function(){return e},e}function B(){var e=Object(M.a)(["\n  width: 27px;\n  height: 27px;\n"]);return B=function(){return e},e}function F(){var e=Object(M.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transition: opacity 0.25s;\n"]);return F=function(){return e},e}function G(){var e=Object(M.a)(["\n  background-color: ",";\n  width: 56px;\n  height: 56px;\n  position: relative;\n  outline: none !important;\n  border: none;\n  border-radius: 50%;\n  padding: 0;\n  transition: background-color 0.25s;\n  opacity: ",";\n\n  @supports not (-webkit-touch-callout: none) {\n    /* CSS for other than iOS devices */\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n    z-index: 1;\n    border-radius: 50%;\n  }\n\n  @media screen and (",") {\n    width: 66px;\n    height: 66px;\n  }\n"]);return G=function(){return e},e}function z(){var e=Object(M.a)(["\n  font-size: 14px;\n  color: ",";\n  margin-top: 8px;\n  margin-bottom: 0px;\n"]);return z=function(){return e},e}function W(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return W=function(){return e},e}function V(){var e=Object(M.a)(["\n  display:flex;\n  justify-content: space-between;\n  width: 144px;\n  margin: auto;\n"]);return V=function(){return e},e}function Y(){var e=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n"]);return Y=function(){return e},e}var H=_.default.div(Y()),Z=_.default.div(V()),J=_.default.div(W()),$=_.default.p(z(),j.a.lightDarkGray),q=_.default.button(G(),j.a.purple,(function(e){return e.disabled||e.opacity?"0.5":"1"}),j.a.purple,(function(e){return e.theme.breakpoints.tablet})),K=_.default.img(F()),Q=Object(_.default)(K)(B()),X=Object(_.default)(K)(L()),ee=_.default.div(D(),j.a.purple,j.a.purple,(function(e){return e.theme.breakpoints.tablet})),te=_.default.div(U(),j.a.red),ne=_.default.p(A(),(function(e){return e.show?"flex":"hidden"})),re={usingMediaRecorder:!1,sampleRate:48e3,manualEncoderId:"wav",processorBufferSize:2048},ie=o.a.memo((function(e){var t=e.className,n=void 0===t?"":t,r=e.maxTimeInSeconds,i=void 0===r?30:r,a=e.minTimeInSeconds,c=void 0===a?5:a,u=e.onNewRecord,d=e.delay,l=void 0===d?500:d,p=e.recordingFile,v=e.isShortAudioCollection,T=Object(s.a)().t,x=o.a.useRef(),C=o.a.useRef(0),E=o.a.useRef(),P=o.a.useRef(),O=o.a.useRef(),M=o.a.useState(!0),_=Object(g.a)(M,2),j=_[0],A=_[1],U=o.a.useState(),D=Object(g.a)(U,2),L=D[0],B=D[1],F=o.a.useState(!1),G=Object(g.a)(F,2),z=G[0],W=G[1],V=o.a.useState(!1),Y=Object(g.a)(V,2),K=Y[0],ie=Y[1],oe=o.a.useState(!1),ae=Object(g.a)(oe,2),ce=ae[0],se=ae[1],ue=o.a.useCallback((function(e){C.current+=1;for(var t=e.detail,n=t.inputBuffer,r=t.outputBuffer,i=0;i<r.numberOfChannels;i+=1)for(var o=n.getChannelData(i),a=r.getChannelData(i),c=0;c<n.length;c+=1)a[c]=o[c]}),[]),de=o.a.useCallback(function(){var e=Object(h.a)(m.a.mark((function e(t){var n,r,i,o,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.detail,r=n.recording,e.next=4,fetch(r.blobUrl).then((function(e){return e.blob()}));case 4:i=e.sent,o="Filename.".concat(re.manualEncoderId),a=S.a.blobToFile(i,o),c=S.a.sizeAsHuman(a.size,!0),u(a,c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[u]);o.a.useEffect((function(){x.current=new k(Object(f.a)(Object(f.a)({},re),{},{sampleRate:v?16e3:re.sampleRate,onRecording:de,onAudioProcesss:ue}));var e={audio:{echoCancellation:x.current.config.enableEchoCancellation}};if(navigator.mediaDevices.getUserMedia(e).then((function(){A(!0)})).catch((function(e){A(!1),y.a(e)})),p){var t=p;if(t.size){var n=new Audio(URL.createObjectURL(t));n.defaultMuted=!0,n.muted=!0,n.load();var r=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.removeEventListener("loadedmetadata",r),Object(w.a)(n,!0).then((function(e){var t;null===(t=E.current)||void 0===t||t.setTime(1e3*e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n.addEventListener("loadedmetadata",r)}}return function(){x.current&&x.current.cleanup()}}),[]);var le=o.a.useCallback((function(){x.current&&(C.current=0,x.current.startRecording().then((function(){var e;(B(!0),ie(!1),E.current)&&(E.current.reset(),null===(e=E.current)||void 0===e||e.setTime(0),E.current.start())})).catch((function(e){return console.error("ERROR",e)})))}),[]),fe=o.a.useCallback((function(){x.current&&(x.current.stopRecording(),B(!1),E.current&&(E.current.getTime()/1e3<c&&ie(!0),E.current.stop()))}),[c]),pe=o.a.useCallback((function(e){return e<10?"0".concat(e):e}),[]),me=function(e){"touches"in e||e.preventDefault()},he=o.a.useCallback((function(e){e.target&&(e.target.addEventListener("touchend",me,{passive:!1}),O.current=e.target),P.current=setTimeout((function(){W(!0),se(!0),ie(!1)}),l)}),[l]),ge=o.a.useCallback((function(){P.current&&clearTimeout(P.current),ce&&W(!1),se(!1),O.current&&O.current.removeEventListener("touchend",me)}),[ce]);return o.a.createElement(H,{className:n},o.a.createElement(te,null,!K&&o.a.createElement(ne,{show:z},T(L?"recordingsIntroduction:releaseButtonStop":"recordingsIntroduction:releaseButtonStart")),o.a.createElement(R.a,{isOpen:K,modalTitle:"Oops.",onConfirm:le},T("recordingsIntroduction:shortRecording",{seconds:c}))),o.a.createElement(ee,null,o.a.createElement(b.a,{ref:E,startImmediately:!1,checkpoints:[{time:1e3*i,callback:fe}]},o.a.createElement(b.a.Minutes,null),":",o.a.createElement(b.a.Seconds,{formatValue:pe}))),o.a.createElement(Z,null,o.a.createElement(J,null,o.a.createElement(q,{disabled:!j||L,onClick:le,onMouseDown:he,onMouseUp:ge,onTouchStart:he,onTouchEnd:ge,onMouseLeave:ge},o.a.createElement(Q,{src:I.a,alt:"Start"})),o.a.createElement($,null,T("recordingsRecord:record"))),o.a.createElement(J,null,o.a.createElement(q,{disabled:!j||!L,onClick:fe,onMouseDown:he,onMouseUp:ge,onTouchStart:he,onTouchEnd:ge,onMouseLeave:ge},o.a.createElement(X,{src:N.a,alt:"Stop"})),o.a.createElement($,null,T("recordingsRecord:recordStop")))))})),oe=n(193),ae=n(268),ce=n.n(ae),se=n(248),ue={recordYourBreath:5,recordYourSpeech:5,recordYourCough:3},de=l.a.object({recordingFile:l.a.mixed().required("ERROR.FILE_REQUIRED").validateAudioSize(5).when("$_currentLogic",(function(e,t){return t.validateAudioLength(ue[e]||5)}))}).defined();t.default=o.a.memo((function(e){var t=e.onNext,n=e.onManualUpload,i=e.defaultValues,a=e.currentLogic,l=e.action,f=e.isShortAudioCollection,p=c()({bindTo:document&&document.getElementById("wizard-buttons")}).Portal,m=Object(u.e)({mode:"onChange",defaultValues:i,context:{_currentLogic:a},resolver:Object(d.a)(de)}),h=m.handleSubmit,g=m.control,v=m.getValues,b=m.formState,y=Object(s.a)().t,T=b.isValid,x=o.a.useRef(1);return o.a.createElement(o.a.Fragment,null,o.a.createElement(se.MainContainer,null,o.a.createElement(se.MicContainer,null,o.a.createElement(u.a,{control:g,name:"recordingFile",render:function(e){var t=e.onChange;return o.a.createElement(ie,{key:x.current,onNewRecord:t,recordingFile:null===i||void 0===i?void 0:i.recordingFile,minTimeInSeconds:ue[a],isShortAudioCollection:f})}})),o.a.createElement(p,null,o.a.createElement(oe.a,{invert:!0,leftLabel:y("recordingsRecord:next"),leftDisabled:!T,leftHandler:h(t)}),o.a.createElement(se.UploadContainer,{onClick:function(){l(Object(r.a)({},a,{recordingFile:v("recordingFile")||null,uploadedFile:null})),null===n||void 0===n||n()}},o.a.createElement(se.UploadImage,{src:ce.a}),o.a.createElement(se.UploadText,null,y("recordingsRecord:upload"))))))}))},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(200),i=n(6),o=n.n(i),a=n(247),c=n.n(a),s=n(780),u=n(191),d=n(186),l=n(185);function f(){var e=Object(d.a)(["\n  font-family: 'Source Sans Pro';\n  text-align: center;\n  line-height: 25px;\n  font-size: 18px;\n  margin-top: 10px;\n  margin-bottom: 30px;\n"]);return f=function(){return e},e}function p(){var e=Object(d.a)(["\n  font-family: 'Biko';\n  font-size: 30px;\n  line-height: 30px;\n  margin-bottom: 10px;\n  font-weight: 600;\n"]);return p=function(){return e},e}function m(){var e=Object(d.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (",") {\n    margin: auto;\n"]);return m=function(){return e},e}var h=l.default.div(m(),(function(e){return e.theme.breakpoints.tablet})),g=l.default.div(p()),v=l.default.div(f());c.a.setAppElement("#root");var b=o.a.memo((function(e){var t=e.modalTitle,n=e.children,i=e.onConfirm,a=Object(r.a)(e,["modalTitle","children","onConfirm"]),d=Object(s.a)().t;return o.a.createElement(c.a,Object.assign({},a,{style:{content:{height:"281px",maxWidth:"348px",margin:"auto",borderRadius:"10px",border:"none"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}}),o.a.createElement(h,{className:"ModalBody"},o.a.createElement(g,null,t),o.a.createElement(v,null,n),o.a.createElement(u.a,{onClick:i,dark:!0},d("recordingsIntroduction:retryButton","Retry"))))}))},248:function(e,t,n){"use strict";n.r(t),n.d(t,"MainContainer",(function(){return g})),n.d(t,"Text",(function(){return v})),n.d(t,"MicContainer",(function(){return b})),n.d(t,"UploadContainer",(function(){return y})),n.d(t,"UploadImage",(function(){return T})),n.d(t,"UploadText",(function(){return x})),n.d(t,"StopImg",(function(){return C}));var r=n(186),i=n(185),o=n(218),a=n(189),c=n(234),s=n.n(c);function u(){var e=Object(r.a)(["\n  display: inline;\n  height: 10px;\n  margin: 0px 2px 4px;\n"]);return u=function(){return e},e}function d(){var e=Object(r.a)(["\n  cursor: pointer;\n  font-family: Source Sans Pro;\n  font-weight: bold;\n  font-size: 0.75rem;\n  line-height: 24px;\n  color: ",";\n"]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n  cursor: pointer;\n  width: 13px;\n  height: 12px;\n  margin-right: 7px;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 20px 12px;\n  width: fit-content;\n  margin: 0 auto;\n\n  @media screen and (","){\n    padding: 22px;\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)([""]);return p=function(){return e},e}function m(){var e=Object(r.a)(["\n  color: ",";\n  margin-bottom: 2px;\n  text-align: left;\n\n  @media screen and (","){\n    max-width: 470px;\n    margin: 0 auto;\n    font-size: 16px;\n  }\n\n  @media screen and (","){\n    @media (orientation: portrait) {\n      margin-bottom: 248px;\n    }\n\n    @media (orientation: landscape) {\n      margin-bottom: 24px;\n    }\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(r.a)(["\n  padding: 40px 0px;\n"]);return h=function(){return e},e}var g=i.default.div(h()),v=Object(i.default)(o.b)(m(),(function(e){return e.theme.colors.darkBlack}),(function(e){return e.theme.breakpoints.tablet}),(function(e){return e.theme.breakpoints.tablet})),b=i.default.div(p()),y=i.default.div(f(),(function(e){return e.theme.breakpoints.tablet})),T=i.default.img(l()),x=i.default.div(d(),a.a.darkBlack),C=i.default.img.attrs((function(){return{src:s.a}}))(u())},250:function(e,t,n){"use strict";t.a={sizeAsHuman:function(e,t){var n=t?1e3:1024;if(Math.abs(e)<n)return"".concat(e," B");var r=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1;do{e/=n,++i}while(Math.abs(e)>=n&&i<r.length-1);return"".concat(e.toFixed(1)," ").concat(r[i])},blobToFile:function(e,t){var n=e;return n.lastModifiedDate=new Date,n.name=t,e}}},262:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(263)),o=r(n(229));t.getTimeParts=o.default;var a=n(266);t.useTimer=a.useTimer,t.default=i.default},263:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(6)),c=n(241),s=a.default.createContext({ms:0,s:0,m:0,h:0,d:0,formatValue:function(e){return String(e)}}),u=function(e){var t=e.unit,n=e.formatValue;return a.default.createElement(h.Consumer,null,(function(e){return(n||e.formatValue)(e[t])||null}))},d=function(e){return a.default.createElement(u,i({unit:"ms"},e))},l=function(e){return a.default.createElement(u,i({unit:"s"},e))},f=function(e){return a.default.createElement(u,i({unit:"m"},e))},p=function(e){return a.default.createElement(u,i({unit:"h"},e))},m=function(e){return a.default.createElement(u,i({unit:"d"},e))},h=function(e){function t(t){var n=e.call(this,t)||this,r=n.props,o=r.initialTime,a=r.direction,s=r.timeToUpdate,u=r.lastUnit,d=r.checkpoints;return n.timer=new c.TimerModel({initialTime:o,direction:a,timeToUpdate:s,lastUnit:u,checkpoints:d,onChange:n.setState.bind(n)}),n.state=i({},n.timer.timeParts,{timerState:"INITED"}),n.start=n.start.bind(n),n.pause=n.pause.bind(n),n.resume=n.resume.bind(n),n.stop=n.stop.bind(n),n.reset=n.reset.bind(n),n.setTime=n.setTime.bind(n),n.getTime=n.getTime.bind(n),n.getTimerState=n.getTimerState.bind(n),n.setDirection=n.setDirection.bind(n),n.setCheckpoints=n.setCheckpoints.bind(n),n}return r(t,e),t.getUI=function(e,t){if(null===e)return null;if(Array.isArray(e)||a.default.isValidElement(e))return e;if(e.prototype&&e.prototype.isReactComponent)return a.default.createElement(e,t);if("function"===typeof e)return e(t);throw new Error("Please use one of the supported APIs for children")},t.prototype.componentDidMount=function(){this.props.startImmediately&&this.timer.start()},t.prototype.componentWillUnmount=function(){this.timer.stop()},t.prototype.render=function(){var e=this,n=e.start,r=e.pause,i=e.resume,o=e.stop,c=e.reset,u=e.getTime,d=e.getTimerState,l=e.setTime,f=e.setDirection,p=e.setCheckpoints,m=this.state,h=m.ms,g=m.s,v=m.m,b=m.h,y=m.d,T=m.timerState,x=this.props,C=x.formatValue,E=x.children;return a.default.createElement(s.Provider,{value:{ms:h,s:g,m:v,h:b,d:y,formatValue:C}},t.getUI(E,{start:n,resume:i,pause:r,stop:o,reset:c,getTime:u,getTimerState:d,setTime:l,setDirection:f,setCheckpoints:p,timerState:T}))},t.prototype.setTime=function(e){this.timer.setTime(e)},t.prototype.getTime=function(){return this.timer.getTime()},t.prototype.getTimerState=function(){return this.timer.state},t.prototype.setDirection=function(e){this.timer.setDirection(e)},t.prototype.setCheckpoints=function(e){this.timer.setCheckpoints(e)},t.prototype.start=function(){this.timer.start(),this.props.onStart()},t.prototype.stop=function(){this.timer.stop(),this.props.onStop()},t.prototype.pause=function(){this.timer.pause(),this.props.onPause()},t.prototype.reset=function(){this.timer.reset(),this.props.onReset()},t.prototype.resume=function(){this.timer.resume(),this.props.onResume()},t.Consumer=s.Consumer,t.Milliseconds=d,t.Seconds=l,t.Minutes=f,t.Hours=p,t.Days=m,t.defaultProps={timeToUpdate:1e3,direction:"forward",initialTime:0,startImmediately:!0,lastUnit:"d",checkpoints:[],children:null,formatValue:function(e){return String(e)},onStart:function(){},onResume:function(){},onPause:function(){},onStop:function(){},onReset:function(){}},t}(a.default.PureComponent);t.default=h},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"undefined"!==typeof window&&"performance"in window?performance.now():Date.now()}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INITED="INITED",t.PLAYING="PLAYING",t.PAUSED="PAUSED",t.STOPPED="STOPPED";var r=function(){function e(e){var n=this;void 0===e&&(e=function(e){}),this.state=t.INITED,this.onChange=function(){return e({state:n.state})},this.state=t.INITED}return e.prototype.getState=function(){return this.state},e.prototype.setInited=function(){return this.state!==t.INITED&&(this.state=t.INITED,this.onChange(),!0)},e.prototype.isInited=function(){return this.state===t.INITED},e.prototype.setPlaying=function(){return this.state!==t.PLAYING&&(this.state=t.PLAYING,this.onChange(),!0)},e.prototype.isPlaying=function(){return this.state===t.PLAYING},e.prototype.setPaused=function(){return this.state===t.PLAYING&&(this.state=t.PAUSED,this.onChange(),!0)},e.prototype.isPaused=function(){return this.state===t.PAUSED},e.prototype.setStopped=function(){return this.state!==t.INITED&&(this.state=t.STOPPED,this.onChange(),!0)},e.prototype.isStopped=function(){return this.state===t.STOPPED},e}();t.default=r},266:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),a=n(241),c=i(n(229));t.useTimer=function(e){var t=void 0===e?{}:e,n=t.initialTime,i=void 0===n?0:n,s=t.direction,u=void 0===s?"forward":s,d=t.timeToUpdate,l=void 0===d?1e3:d,f=t.startImmediately,p=void 0===f||f,m=t.lastUnit,h=void 0===m?"d":m,g=t.checkpoints,v=void 0===g?[]:g,b=t.onStart,y=t.onResume,T=t.onPause,x=t.onStop,C=t.onReset,E=o.useState(r({},c.default(i<0?0:i,h),{state:"INITED"})),k=E[0],S=E[1],w=o.useMemo((function(){return new a.TimerModel({initialTime:i,direction:u,timeToUpdate:l,lastUnit:h,checkpoints:v,onChange:function(e){return S((function(t){return r({},t,e)}))}})}),[]),R=o.useCallback((function(e){return w.setTime(e)}),[w]),P=o.useCallback((function(){return w.getTime()}),[w]),I=o.useCallback((function(){return w.state}),[w]),O=o.useCallback((function(e){return w.setDirection(e)}),[w]),N=o.useCallback((function(e){return w.setLastUnit(e)}),[w]),M=o.useCallback((function(e){return w.setCheckpoints(e)}),[w]),_=o.useCallback((function(e){return w.setTimeToUpdate(e)}),[w]),j=o.useCallback((function(){w.start(),b&&b()}),[w,b]),A=o.useCallback((function(){w.stop(),x&&x()}),[w,x]),U=o.useCallback((function(){w.pause(),T&&T()}),[w,T]),D=o.useCallback((function(){w.reset(),C&&C()}),[w,C]),L=o.useCallback((function(){w.resume(),y&&y()}),[w,y]),B=o.useMemo((function(){return{start:j,stop:A,pause:U,reset:D,resume:L,setTime:R,getTime:P,getTimerState:I,setDirection:O,setLastUnit:N,setTimeToUpdate:_,setCheckpoints:M}}),[j,A,U,D,L,R,P,I,O,N,_,M]);return o.useEffect((function(){return p&&j(),function(){A()}}),[]),{controls:B,value:k}}},267:function(e,t,n){e.exports=n.p+"static/media/start.1023f927.svg"},268:function(e,t,n){e.exports=n.p+"static/media/upload.e35eb772.svg"}}]);
//# sourceMappingURL=36.90afef54.chunk.js.map