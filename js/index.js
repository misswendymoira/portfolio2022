

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


function flag4Scroll() {
    const fl4scr = document.getElementById("scrollToFlag4");
    fl4scr.scrollIntoView();
}

function contactScroll() {
    const cntscr = document.getElementById("scrollToContact");
    cntscr.scrollIntoView();
}

function aboutOn() {
    document.getElementById("aboutOverlay").style.display = "block";
  }
  

  function aboutClose() {
    document.getElementById("aboutOverlay").style.display = "none"; 
  }