function showContact() {
  document.getElementsByClassName("contact")[0].style.display = "flex";
  document.getElementsByClassName("contact")[0].style.animation = "showit 500ms forwards";
}
function hideContact() {

  document.getElementsByClassName("contact")[0].style.display = "none";
  document.getElementsByClassName("contact")[0].style.animation = "";
}

function grab(element) {
  element.style.cursor = "-webkit-grabbing";
}

function stopGrab(element) {
  element.style.cursor = "pointer";
}
