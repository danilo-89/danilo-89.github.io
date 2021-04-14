const navToggleBtn = document.getElementById("navToggleBtn");
const navbarMain = document.getElementById("navbarMain");

// show/hide navigation on navToggleBtn click
navToggleBtn.addEventListener("click", function(event) {
    navbarMain.classList.toggle("active");
    this.classList.toggle("click");
    event.stopPropagation();
});

// close navigation when clicked outside nav ul
navbarMain.addEventListener("click", function(event) {
    if (event.target===event.currentTarget) {
        hideNav();
    }
});

// hide navigation function
function hideNav() {
    // navbarMain.classList.remove("active");
    // navToggleBtn.classList.remove("click");
    document.getElementById("hamburger").checked = false;
}
