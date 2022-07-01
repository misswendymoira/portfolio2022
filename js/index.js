

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

function contactOn() {
document.getElementById("contactOverlay").style.display = "block";
}

function contactClose() {
    document.getElementById("contactOverlay").style.display = "none"; 
    }


