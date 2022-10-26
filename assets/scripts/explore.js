// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector("#voice-select");
  const textToSpeak = document.getElementById('text-to-speak');
  const img = document.querySelector("[alt='Smiling face']");
  const button = document.querySelector("button");
  const synth = window.speechSynthesis;

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.value = voices[i].name;
      option.innerHTML = voices[i].name;
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();

  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", speak);

  setInterval(checkSpeaking,0);

  function checkSpeaking() {
    if (synth.speaking) {
      img.src = 'assets\\images\\smiling-open.png';
    } else {
      img.src = 'assets\\images\\smiling.png';
    }
  }

  function speak() {
    if (textToSpeak.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
      const voices = speechSynthesis.getVoices();
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name == voiceSelect.value) {
          utterThis.voice = voices[i];
          break;
        }
      }
      synth.speak(utterThis);
    }
  }


}


