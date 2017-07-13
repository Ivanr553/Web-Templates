//Function for the information of the projects section
function showInfo() {
  $("#info-icon").css({
    "display" : "none"
  })
  $("#info-content").css({
    "display" : "block",
    "animation" : "shift-right 1s forwards"
  })
}

//Functions to change display and link in rojects section
function showCarla() {
  $("#display").css({
    "background-image" : "url('./images/carla.jpg')"
  })
  $("#info-content").css({
    "background-color" : "rgba(0, 0, 0, 0.8)",
    "color" : "rgb(220, 220, 220)"
  })
  document.getElementById("display").setAttribute("onclick", "openCarla()")
}

function showJk() {
  $("#display").css({
    "background-image" : "url('./images/jk.jpg')"
  })
  $("#info-content").css({
    "background-color" : "rgba(0, 0, 0, 0.8)",
    "color" : "rgb(220, 220, 220)"
  })
  document.getElementById("display").setAttribute("onclick", "openJk()")
}

function showTokiwa() {
  $("#display").css({
    "background-image" : "url('./images/tokiwa.jpg')"
  })
  $("#info-content").css({
    "background-color" : "rgba(255, 255, 255, 0.3)",
    "color" : "rgb(0, 0, 0)"
  })
  document.getElementById("display").setAttribute("onclick", "openTokiwa()")
}

function showRaincheck() {
  $("#display").css({
    "background-image" : "url('./images/raincheck.jpg')"
  })
  $("#info-content").css({
    "background-color" : "rgba(0, 0, 0, 0.8)",
    "color" : "rgb(220, 220, 220)"
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

$(document).ready(function() {

  //Jquery for hover animations in projects section
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

  //Jquery for the information of the projects section
  // $("#info-icon").
})
