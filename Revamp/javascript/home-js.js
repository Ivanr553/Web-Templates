function scrollToBio() {
  $("body").animate({ scrollTop: $(".section-1").offset().top}, 1500);
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

$(window).scroll(function() {
  let scroll = $(window).height();
  if($(window).scrollTop() > scroll) {
    document.getElementById("back-to-top").style.display = "flex";
  }
  if($(window).scrollTop() > scroll*1.6) {
    document.getElementById("carla").style.animation = "slide-in-left 1.5s forwards";
    document.getElementById("tokiwa").style.animation = "slide-in-right 1.5s forwards";
  }
  else {
    document.getElementById("back-to-top").style.display = "none";
  }
})
