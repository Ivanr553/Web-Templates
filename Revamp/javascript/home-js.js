function scrollToBio() {
  $("body").animate({ scrollTop:$(window).height()}, 1500);
}

function scrollToWebsites() {
  $("body").animate({ scrollTop: $(window).height()*2}, 3000);
}

function scrollToApplications() {
  $("body").animate({ scrollTop: $(window).height()*3}, 4000);
}

function scrollToContact() {
  $("body").animate({ scrollTop: $(window).height()*4}, 5000);
}

function openCarla() {
  window.open("https://carlakunkelweb.github.io/website/");
}

function openTokiwa() {
  window.open("http://www.ivanraffucci.tech/Tokiwa/index.html");
}
