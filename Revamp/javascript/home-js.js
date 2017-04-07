function scrollToBio() {
  $("body").animate({ scrollTop: $(".section-1-1").offset().top}, 1500);
}

function scrollToWebsites() {
  $("body").animate({ scrollTop: $(".section-2").offset().top}, 3000);
}

function scrollToApplications() {
  $("body").animate({ scrollTop: $(".section-3").offset().top}, 4000);
}

function scrollToBlog() {
  $("body").animate({ scrollTop: $(".section-4").offset().top}, 5000);
}

function scrollToContact() {
  $("body").animate({ scrollTop: $(".section-5").offset().top}, 6000);
}

function openCarla() {
  window.open("https://carlakunkelweb.github.io/website/");
}

function openTokiwa() {
  window.open("http://www.ivanraffucci.tech/Tokiwa/index.html");
}

function backToTop() {
  $("body").animate({ scrollTop: 0}, 2500)
}

function allowOverflow(element) {
  if(element.style.overflowY == "hidden") {
  element.style.overflowY = "scroll";
  }
  else {
    element.style.overflowY = "hidden";
  }
}

$(window).scroll(function() {
  let scroll = $(window).height();
  let scrollT = $(this).scrollTop();

    $(".grey-box-bottom").css({
      "transform" : "translate(0px, "+ scrollT /3 +"px)"
    })
    $(".me").css({
      "transform" : "translate(0px, -"+ scrollT /10 +"px)"
    })


  if($(window).scrollTop() > scroll*0.5) {
    $("#back-to-top").css({"display" : "flex"});
  }
  if($(window).scrollTop() > scroll*1.6) {
    $("#carla").css({"animation" : "slide-in-left 1.5s forwards"});
    $("#tokiwa").css({"animation" : "slide-in-right 1.5s forwards"});
  }
  else {
    $("#back-to-top").css({"display" : "none"});
  }
})

$(".about-me-span").each(function() {
  if($(".about-me-span").css("font-size") < 12) {
    $("about-me-span").css("font-size") = 12;
  }
})
