let currentaudio = new Audio();
let audioKeyID = "";
let audioKey = "";

export function get_currentaudio(){
    return currentaudio;
  }
export function currentaudio_pause(){
    currentaudio.pause();
  }
export function currentaudio_play(){
    currentaudio.play();
  }
 export function currentaudio_volume(value){
    currentaudio.volume = value;
  }
 export function currentaudio_time(value){
    currentaudio.currentTime = value;
  }
 export function currentaudio_src(){
    return currentaudio.src;
  }
 export function loadSourceBuffer(mediaSource, mediaURL, mediaMimeType) {
    console.log("loadSourceBuffer")
    "use strict";
    let sourceBuffer = mediaSource.addSourceBuffer(mediaMimeType);
    // Promise to resolve when our source buffer has updateend
    let fetchedPromise = new Promise(resolve => {
      sourceBuffer.addEventListener("updateend", () => {
        resolve();
      });
    });
    fetchArrayBuffer(mediaURL, buf => {
      sourceBuffer.appendBuffer(buf);
    });
    return fetchedPromise;
  }
 export function fetchArrayBuffer(url, onLoadFunc, onProgressFunc) {
    "use strict";
    console.log("fetchArrayBuffer")
    let xhr = new XMLHttpRequest();
    xhr.onprogress = onProgressFunc;
    xhr.open("get", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = () => {
      onLoadFunc(xhr.response);
    };
    xhr.send();
  }
  export async function setupMediaKeys(video, config) {
    console.log("setupMediaKeys")
    "use strict";
    let keySystemAccess = await navigator.requestMediaKeySystemAccess(
      "org.w3.clearkey",
      config
    );
    let mediaKeys = await keySystemAccess.createMediaKeys();
    return video.setMediaKeys(mediaKeys);
  }
 export function encryptedEventHandler(e) {
    console.log("encryptedEventHandler")
    "use strict";
    let video = e.target;
    let session = video.mediaKeys.createSession();
    session.addEventListener("message",messageHandler);
    console.log("init data " + e.initData);
    return session.generateRequest(e.initDataType, e.initData);
  }
 export function generateLicense(message) {
    console.log("generateLicense")
    "use strict";
    // Parse the clearkey license request.
    let request = JSON.parse(new TextDecoder().decode(message));
    // We expect to only have one key requested at a time
    if (request.kids.length != 1) {
      console.log(
        `Got more than one key requested (got ${request.kids.length})! We don't expect this!`
      );
    }
    console.log(audioKeyID,audioKey);
    // Create our clear key object, looking up the key based on the key id
    let keyObj = {
      kty: "oct",
      alg: "A128KW",
      kid:audioKeyID,
      k: audioKey
    };
    return new TextEncoder().encode(
      JSON.stringify({
        keys: [keyObj]
      })
    );
  }
 export function messageHandler(e) {
    "use strict";
    console.log("messageHandler")
    let session = e.target;
    let license = generateLicense(e.message);
    session.update(license).catch(function(failureReason) {
      console.log("update() failed: " + failureReason.message);
    });
  }
 export function setupPlayer(audioURL,key,keyid) {
    if (!audioURL) return 0;
    audioKey =key;
    audioKeyID=keyid;
    const opusMimeType = 'audio/webm;codecs="opus"';
    console.log("xx", currentaudio, "bb", audioKeyID, "kk", audioKey);
    let mediaElement = currentaudio; //add here my audio object
    mediaElement.controls = true;
    mediaElement.preload = "auto";
    console.log("audio  :",audioURL)
    let audioUrl = audioURL;
    let audioMimeType = opusMimeType;
    // EME handling
    let keySystemConfig = {
      initDataTypes: ["webm"]
    };
    keySystemConfig.audioCapabilities = [{ contentType: audioMimeType }];
    let config = [keySystemConfig];

    let mediaSource = new MediaSource();
    console.log("Media source state: " + mediaSource.readyState); // Should be closed
    mediaElement.addEventListener("error", e => {
      console.log(e.target.error.message);
    });

  setupMediaKeys(mediaElement, config).then(
      () => {
        //console.log("messageHandler")
        mediaElement.addEventListener("encrypted", encryptedEventHandler);
        mediaElement.src = URL.createObjectURL(mediaSource);
        mediaSource.addEventListener("sourceopen", () => {
          let promises = [];
          promises.push(
            loadSourceBuffer(mediaSource, audioUrl, audioMimeType)
          );
          Promise.all(promises).then(() => {
            mediaSource.endOfStream();
            console.log("Media source state: " + mediaSource.readyState); // Should be ended
          });
        });
      },
      failureReason => {
        console.log("Failed to setup media keys: " + failureReason.message);
      }
    );
  }

