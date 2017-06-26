//Triggered by mouseout event -- reverts changes made to overlay from mouseover event
function clearOverlay()  {
  document.getElementById("selection-display").style.display = "none"
  document.getElementById("selection-about-me").style.opacity = "0"
  document.getElementById("selection-portfolio").style.opacity = "0"
  document.getElementById("selection-contact").style.opacity = "0"
  document.getElementById("selection-display").style.backgroundColor = ""
  document.getElementById("panel-about-me").style.zIndex = "0"
  document.getElementById("panel-portfolio").style.zIndex = "0"
  document.getElementById("panel-contact").style.zIndex = "0"
}

//mouseover events to change overlay
function showAboutMe() {
  document.getElementById("selection-display").style.display = "block"
  document.getElementById("selection-about-me").style.opacity = "1"
  document.getElementById("selection-display").style.backgroundColor = "rgba(250, 250, 250, 0.5)"
  document.getElementById("panel-about-me").style.zIndex = "10"
}

function showPortfolio() {
  document.getElementById("selection-display").style.display = "block"
  document.getElementById("selection-portfolio").style.opacity = "1"
  document.getElementById("selection-display").style.backgroundColor = "rgba(250, 250, 250, 0.5)"
  document.getElementById("panel-portfolio").style.zIndex = "10"
}

function showContact() {
  document.getElementById("selection-display").style.display = "block"
  document.getElementById("selection-contact").style.opacity = "1"
  document.getElementById("selection-display").style.backgroundColor = "rgba(250, 250, 250, 0.5)"
  document.getElementById("panel-contact").style.zIndex = "10"
}
