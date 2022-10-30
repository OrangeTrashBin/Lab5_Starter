// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const imgPicture = document.querySelector("[alt='No image selected']");
  const audio = document.querySelector("[class='hidden']");
  const select = document.querySelector("#horn-select");
  const button = document.querySelector("button");
  const volContrl = document.querySelector("#volume");
  const imgVol = document.querySelector("[alt='Volume level 2']");
  const jsConfetti = new JSConfetti();

  select.addEventListener("change", updateImagePic);

  button.addEventListener("click", playAudio);

  volContrl.addEventListener("input", updateImageVol);

  function updateImageVol() {
    audio.volume = (volContrl.value) / 100;
    if (volContrl.value == 0) {
      imgVol.src = 'assets\\icons\\volume-level-0.svg';
    } else if (volContrl.value > 0 && volContrl.value < 33) {
      imgVol.src = 'assets\\icons\\volume-level-1.svg';
    } else if (volContrl.value > 32 && volContrl.value < 67) {
      imgVol.src = 'assets\\icons\\volume-level-2.svg';
    } else if (volContrl.value > 66){
      imgVol.src = 'assets\\icons\\volume-level-3.svg';
    }
  }

  function playAudio() {
    audio.volume = (volContrl.value) / 100;
    audio.play();
    if (select.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    
  }

  function updateImagePic() {
    if (select.value == "air-horn") {
      imgPicture.src = 'assets\\images\\air-horn.svg';
      audio.src = 'assets\\audio\\air-horn.mp3';
    } else if (select.value == "car-horn") {
      imgPicture.src = 'assets\\images\\car-horn.svg';
      audio.src = 'assets\\audio\\car-horn.mp3';
    } else if (select.value == "party-horn") {
      imgPicture.src = 'assets\\images\\party-horn.svg';
      audio.src = 'assets\\audio\\party-horn.mp3';
    }
  }


}

