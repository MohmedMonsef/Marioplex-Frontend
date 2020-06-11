const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
 /**
* Voice Detection in search helper 
* @public This is a public method
* @example [none]
*/
export default {
  methods: {
    /**
     * Voice Detection Method for searching in web player by using microphone
     * @public This is a public method
     * @example [none]
     */
    detectvoice() {
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        //will continue recording while talking
        recognition.continuous = true;

        const microphoneicon = document.getElementById("microphone");
        if (microphoneicon.className == "fa fa-microphone") {
          microphoneicon.className = "fa fa-microphone-slash";
          //start recording
          recognition.start();
        } else {
          microphoneicon.className = "fa fa-microphone";
          //stop recording
          recognition.stop();
        }
        recognition.addEventListener("start", () => {
          const searchinput = document.getElementById("search-box");
          searchinput.focus();
        });

        recognition.addEventListener("end", () => {
          const searchinput = document.getElementById("search-box");
          searchinput.focus();
        });

        recognition.addEventListener("result", event => {
          const currentindex = event.resultIndex;
          const searchinput = document.getElementById("search-box");
          const transcript = event.results[currentindex][0].transcript;
          if (transcript.toLowerCase().trim() === "reset") {
            searchinput.value = "";
          } else if (transcript.toLowerCase().trim() === "stop recording") {
            microphoneicon.className = "fa fa-microphone";
            recognition.stop();
          } else {
            searchinput.value = transcript;
            this.Value = searchinput.value;
          }
        });
      } else {
        alert("Sorry,Your Browser doesnot support VoiceRecognition!");
      }
    }
  }
};
