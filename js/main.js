(() => {
  // put variables (connections to the web page / DOM) at the top   
  console.log('JS is linked!');

  const leftDrag = document.querySelector("#left_drag img"),
    rightDrag = document.querySelector("#right_drag img"),
    dragImages = document.querySelectorAll(".draggable"),
    leftDrop = document.querySelector(".left_drop"),
    rightDrop = document.querySelector(".right_drop"),
    dropZones = document.querySelectorAll('.dropZone');






  // function go in the middle 

  function dragStart(event) {
    console.log('started draggin');
    event.dataTransfer.setData("savedID", this.id);
  }

  function draggedOver(event) {
    event.preventDefault();
    console.log('dragged over me');
  }

  function dropped(event) {
    event.preventDefault();
    console.log('dropped somthing on me');

    let targetID = event.dataTransfer.getData("savedID");
    console.log("You dragged this image:", targetID, "!");

    event.target.appendChild(document.querySelector(`#${targetID}`));
  }




  // event handling at the bottom
  dragImages.forEach(piece => piece.addEventListener('dragstart', dragStart));

  dropZones.forEach(zone => {
    zone.addEventListener("dragover", draggedOver);
    zone.addEventListener("drop", dropped);
  })


  // leftDrag.addEventListener()

})();