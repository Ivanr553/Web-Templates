function yelp() {
  window.open("https://www.yelp.com/biz/tokiwa-sushi-moorpark-3");
}

function menu() {
  window.open("http://image.zmenu.com/menupic/1897058/7b0a62c4-27aa-4189-b85e-43a49e437891.jpg")
}

function photos() {
  window.open("https://www.yelp.com/biz_photos/tokiwa-sushi-moorpark-3");
}


//taken from internt, edit to make images fade in and out
let slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    x[slideIndex-1].style.animation = "fade-in 3700ms forwards";
    setTimeout(carousel, 3500);
}
