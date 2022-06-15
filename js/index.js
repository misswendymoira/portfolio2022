

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
  
