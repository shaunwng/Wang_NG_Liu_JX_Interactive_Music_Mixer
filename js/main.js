(() => {
    // put variables (connections to the web page / DOM) at the top   
    console.log('JS is linked!');

    // leftDrag = document.querySelector("#left_drag img"),
    // rightDrag = document.querySelector("#right_drag img"),
    const dragImages = document.querySelectorAll(".draggable"),
        leftDrag = document.querySelectorAll("#left_drag img"),
        dropZones = document.querySelectorAll('.dropZone'),
        playButton = document.querySelector(".playButton"),
        stopButton = document.querySelector(".pauseButton"),
        rewindButton = document.querySelector(".rewindButton"),
        midScreen = document.querySelector("#mid_Screen");

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
        audioPlay.classList.add('playing');
        audioPlay.currentTime = 0;
        audioPlay.play(),
            audioPlay.volume = 0.6;

    }

    // audio control
    function playBeat() {

        let beat = document.querySelectorAll('.playing');
        beat.forEach(beat => beat.play());
        console.log('You play the beat!');

    }

    function stopBeat() {
        let beat = document.querySelectorAll('.playing');
        beat.forEach(beat => beat.pause());
        console.log('You pause the beat!');
    }

    function rewindBeat() {

        let beat = document.querySelectorAll('.playing');
        beat.forEach(beat => beat.currentTime = 0);
        beat.forEach(beat => beat.play());
        console.log('You rewind the beat!');

    }




    // event handling at the bottom

    document.addEventListener('dragstart', (e) => {
        e.target.style.border = '5px dashed red';
    }, false);
    document.addEventListener('dragend', (e) => {
        e.target.style.border = 'none';
    }, false);


    // TEST FUNCTION - CHANGE mid screen background when drag the left icon

    function changeBGImage() {
        let currentImage = this.dataset.imageref;
        midScreen.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;

    }
    leftDrag.forEach(button => button.addEventListener("drag", changeBGImage));

    // ---------------------------------

    dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", draggedOver);
        zone.addEventListener("drop", dropped);
    })

    playButton.addEventListener("click", playBeat);
    stopButton.addEventListener("click", stopBeat);
    rewindButton.addEventListener("click", rewindBeat);

})();