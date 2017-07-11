//Functions to change display and link in rojects section
function showCarla() {
  $("#display").css({
    "background-image" : "url('./images/carla.jpg')"
  })
  document.getElementById("display").setAttribute("onclick", "openCarla()")
}

function showJk() {
  $("#display").css({
    "background-image" : "url('./images/jk.jpg')"
  })
  document.getElementById("display").setAttribute("onclick", "openJk()")
}

function showTokiwa() {
  $("#display").css({
    "background-image" : "url('./images/tokiwa.jpg')"
  })
  document.getElementById("display").setAttribute("onclick", "openTokiwa()")
}

function showRaincheck() {
  $("#display").css({
    "background-image" : "url('./images/raincheck.jpg')"
  })
  document.getElementById("display").setAttribute("onclick", "openRaincheck()")
}

//Function for links
function openCarla() {
  window.open("https://carlakunkelweb.github.io/website/")
}

function openJk() {
  console.log("WIP")
}

function openTokiwa() {
  window.open("http://www.ivanraffucci.tech/Tokiwa/index.html")
}

function openRaincheck() {
  window.open("https://tranquil-chamber-53541.herokuapp.com/rainchecks")
}

//Jquery for hover animations in projects section
$(document).ready(function() {
  $("#carla").hover( function() {
    showCarla()
  })
  $("#jk").hover( function() {
    showJk()
  })
  $("#tokiwa").hover( function() {
    showTokiwa()
  })
  $("#raincheck").hover(function() {
      showRaincheck()
  })
})
