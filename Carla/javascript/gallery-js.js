function backDrop(element) {
    let buttons = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "rgb(46, 47, 48)";
    }
    element.style.backgroundColor = "white";
}
//also change the color of text ^^^
