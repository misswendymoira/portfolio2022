

function topScroll() {
document.body.scrollTop = 0;
}



function aboutScroll() {
    const abtscr = document.getElementById("scrollToAbout");
    abtscr.scrollIntoView();
}

function workScroll() {
    const wrkscr = document.getElementById("scrollToWork");
    wrkscr.scrollIntoView();
}


function contactScroll() {
    const cntscr = document.getElementById("scrollToContact");
    cntscr.scrollIntoView();
}

function artistryScroll() {
    const artscr = document.getElementById("scrollToArtistry");
    artscr.scrollIntoView();
}

function aboutOn() {
    document.getElementById("aboutOverlay").style.display = "block";
  }
  

  function aboutClose() {
    document.getElementById("aboutOverlay").style.display = "none"; 
  }

function workOn() {
document.getElementById("workOverlay").style.display = "block";
}

function workClose() {
    document.getElementById("workOverlay").style.display = "none"; 
  }
  
function artistryOn() {
document.getElementById("galleryOverlay").style.display = "block";
}

function galleryClose() {
    document.getElementById("galleryOverlay").style.display = "none"; 
    }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("galleryPics");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
// }
