const navToggleBtn = document.getElementById("navToggleBtn");
const navbarMain = document.getElementById("navbarMain");

// show/hide navigation on navToggleBtn click
navToggleBtn.addEventListener("click", function() {
    const that = this;
    setTimeout(function(){ 
        navbarMain.classList.toggle("active");
        that.classList.toggle("click");
    }, 0);
});

// close navigation when clicked outside nav ul
navbarMain.addEventListener("click", function(event) {
    if (event.target===event.currentTarget) {
        hideNav();
    }
});

// hide navigation function
function hideNav() {
    navbarMain.classList.remove("active");
    navToggleBtn.classList.remove("click");
}
