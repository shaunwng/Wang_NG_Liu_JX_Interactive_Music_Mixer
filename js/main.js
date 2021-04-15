(() => {
  // put variables (connections to the web page / DOM) at the top   
  console.log('JS is linked!');

  // leftDrag = document.querySelector("#left_drag img"),
  // rightDrag = document.querySelector("#right_drag img"),
  const dragImages = document.querySelectorAll(".draggable"),
    leftDrop = document.querySelector(".left_drop"),
    rightDrop = document.querySelector(".right_drop"),
    dropZones = document.querySelectorAll('.dropZone'),
    dragZone = document.querySelector(".dragZone"),
    playButton = document.querySelector(".playButton"),
    stopButton = document.querySelector(".stopButton"),
    rewindButton = document.querySelector(".rewindButton");
  let globalPaused = false;
  // resetButton = document.querySelector("#resetBtn")
  // porsche = document.querySelector("#porsche"),
  // ferrari = document.querySelector("#ferrari"),
  // bmw = document.querySelector("#bmw"),
  // tesla = document.querySelector("#tesla"),
  // eco = document.querySelector("#eco"),
  // s = document.querySelector("#s"),
  // splus = document.querySelector("#splus"),
  // corsa = document.querySelector("#corsa");

  // function go in the middle 
  // ---------------------------------------------//
  function dragStart(event) {
    console.log('started draggin');
    event.dataTransfer.setData("savedID", this.id);
  }

  function draggedOver(event) {
    event.preventDefault();
    console.log('dragged over me');
  }

  function dropped(event) {

    console.log('dropped something on me');
    let targetID = event.dataTransfer.getData("savedID"),
      audioPlay = document.querySelector(`audio[data-value="${targetID}"]`);

    if (this.childNodes.length > 0) { return; }
    console.log("You dragged this image:", targetID, "!");
    this.appendChild(document.querySelector(`#${targetID}`));

    if (!audioPlay) { return; }
    audioPlay.currentTime = 0;
    audioPlay.play(),
      audioPlay.volume = 0.6;

  }
  let theAudio = document.querySelector("audio");
  function playAudio() {
    if (globalPaused) {
      console.log('paused');
      resumeTrack();
      return;

    }
  }
  function resumeTrack() {
    globalPaused = false;
    theAudio.play();
  }

  function stopAudio() {
    theAudio.pause();
    document.querySelector('audio').pause()

    globalPaused = true;
  }

  function rewindAudio() {

    document.querySelector('audio').currentTime = 0;

    document.querySelector('audio').play()

  }



  // below are redundancy, change to dynamic data
  // if (targetID == 'porsche') {
  //   let porscheAudio = document.createElement('audio');
  //   porscheAudio.src = "audios/PORSCHE.mp3";

  //   porscheAudio.load();
  //   porscheAudio.currentTime = 0;
  //   porscheAudio.play();
  //   porscheAudio.loop = true;
  //   porscheAudio.volume = 0.2;
  //   console.log("Porsche engine is turn on!");
  // } else if (targetID == 'ferrari') {
  //   let ferrariAudio = document.createElement('audio');
  //   ferrariAudio.src = "audios/FERRARI.mp3";

  //   ferrariAudio.load();
  //   ferrariAudio.currentTime = 0;
  //   ferrariAudio.play();
  //   ferrariAudio.loop = true;
  //   ferrariAudio.volume = 0.2;
  //   console.log("Ferrari engine is turn on!");
  // } else if (targetID == 'bmw') {
  //   let bmwAudio = document.createElement('audio');
  //   bmwAudio.src = "audios/BMW.wav";

  //   bmwAudio.load();
  //   bmwAudio.currentTime = 0;
  //   bmwAudio.play();
  //   bmwAudio.loop = true;
  //   bmwAudio.volume = 0.2;
  //   console.log("BMW engine is turn on!");
  // } else if (targetID == 'tesla') {
  //   let teslaAudio = document.createElement('audio');
  //   teslaAudio.src = "audios/TESLA.m4a";

  //   teslaAudio.load();
  //   teslaAudio.currentTime = 0;
  //   teslaAudio.play();
  //   teslaAudio.loop = true;
  //   teslaAudio.volume = 0.2;
  //   console.log("Tesla engine is turn on!");
  // } else if (targetID == 'eco') {
  //   let ecoAudio = document.createElement('audio');
  //   ecoAudio.src = "audios/ECO.m4a";

  //   ecoAudio.load();
  //   ecoAudio.currentTime = 0;
  //   ecoAudio.play();
  //   ecoAudio.loop = true;
  //   ecoAudio.volume = 1.0;
  // } else if (targetID == 's') {
  //   let sAudio = document.createElement('audio');
  //   sAudio.src = "audios/S.m4a";

  //   sAudio.load();
  //   sAudio.currentTime = 0;
  //   sAudio.play();
  //   sAudio.loop = true;
  //   sAudio.volume = 1.0;
  // } else if (targetID == 'splus') {
  //   let splusAudio = document.createElement('audio');
  //   splusAudio.src = "audios/S+.m4a";

  //   splusAudio.load();
  //   splusAudio.currentTime = 0;
  //   splusAudio.play();
  //   splusAudio.loop = true;
  //   splusAudio.volume = 1.0;
  // } else if (targetID == 'corsa') {
  //   let corsaAudio = document.createElement('audio');
  //   corsaAudio.src = "audios/CORSA.m4a";

  //   corsaAudio.load();
  //   corsaAudio.currentTime = 0;
  //   corsaAudio.play();
  //   corsaAudio.loop = true;
  //   corsaAudio.volume = 1.0;
  // }
  // else {
  //   return;
  // }




  // event handling at the bottom

  // midScreen.addEventListener("click", resetIcon);
  document.addEventListener('dragstart', (e) => {
    e.target.style.border = '5px dashed red';
  }, false);
  document.addEventListener('dragend', (e) => {
    e.target.style.border = 'none';
  }, false);


  dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));

  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  })

  playButton.addEventListener("click", playAudio);
  stopButton.addEventListener("click", stopAudio);
  rewindButton.addEventListener("click", rewindAudio);

})();