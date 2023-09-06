const stickyDiv = document.querySelector(".nav");
let isSticky = false;

window.addEventListener("scroll", () => {
    const rect = stickyDiv.getBoundingClientRect();
    
    if (rect.top <= 0 && !isSticky) {
        stickyDiv.style.borderBottom = "1px solid #23a7d7";
        isSticky = true;
    } else if (rect.top > 0 && isSticky) {
        stickyDiv.style.borderBottom = "none"; 
        isSticky = false;
    }
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
