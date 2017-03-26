function backDrop(element) {
    let buttons = document.getElementsByClassName("nav-btn");
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("nav-btn-animated");
      buttons[i].classList.remove("nav-btn-no-anim");
    }
    element.classList.remove("nav-btn-animated");
    element.classList.add("nav-btn-no-anim");
}
