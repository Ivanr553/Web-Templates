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

function openRaincheck() {
  window.open("https://frozen-springs-75857.herokuapp.com/");
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
  let wHeight = $(window).height();
  let scrollT = $(this).scrollTop();

    $(".grey-box-bottom").css({
      "transform" : "translate(0px, "+ scrollT /3 +"px)"
    })
    $(".me").css({
      "transform" : "translate(0px, -"+ scrollT /10 +"px)"
    })

  if(scrollT < wHeight*1.4) {
    $("#back-to-top").css({
      "display" : "none"
    });
  }
  if(scrollT > wHeight*1.4) {
    $("#back-to-top").css({
      "display" : "flex",
      "animation" : "fade-in 1s forwards"
    });
  }
  if(scrollT > wHeight*1.9) {
    $("#carla").css({"animation" : "slide-in-left 1.5s forwards"});
    $("#tokiwa").css({"animation" : "slide-in-right 1.5s forwards"});
  }
})

$(".about-me-span").each(function() {
  if($(".about-me-span").css("font-size") < 12) {
    $("about-me-span").css("font-size") = 12;
  }
})

// DRAGGABLE FUNCTIONALITY FOR APPLICATION BUBBLES
// $($(".bubble").each(function() {
//   const leftC = Math.floor($(this).parent().width())/2;
//   const leftP = (Math.floor($(this).position().left)) + (Math.floor($(this).height()/2));
//   const leftD = (leftC - leftP) + "px";
//   const topC = Math.floor($(this).parent().height())/2;
//   const topP = (Math.floor($(this).position().top)) + (Math.floor($(this).width()/2));
//   const topD = (topC - topP) + "px";
//   $(this).draggable();
//   $(this).mouseup(function(){$(this).css({
//     "animation" : "return 2s forwards"
//   })})
//   $(this).mousedown(function() {
//     console.log(leftD, topD);
//     $(this).css({
//       "animation" : "none",
//       "left" : leftD,
//       "top" : topD
//     })
//   })
// })
// )


function openApps() {
  $("#application-title").css({
    "animation" : "slide-up 4s forwards",
    "position" : "absolute"
  })
  $(".bubble").each(function() {
    $(this).css({
      "animation" : "fade-in-bubble 4.7s forwards",
      "display" : "flex",
    })
  })
 setTimeout(function() {addHoverAnim()}, 3200);
}
function addHoverAnim() {
  $(".bubble-container").css({
    "animation" : "show-back 500ms forwards"
  })

}

function openRaincheckInfo() {
  $(".information-container").each(function() {
    $(this).css({
      "display" : "flex",
      "animation" : "open-up 1.5s forwards"
    })
  })
  $(".bubble-wrap").each(function() {
    $(this).css({
      "animation" : "move-left 1.5s forwards"
    })
  })
  $(".raincheck-information").each(function() {
    $(this).css({
      "animation" : "fade-in-info 2.5s forwards"
    })
  })
}
