const navToggleBtn = document.getElementById("navToggleBtn");
const navbarMain = document.getElementById("navbarMain");


navToggleBtn.addEventListener("click", function() {
    
    navbarMain.classList.toggle("active");
    this.classList.toggle("click");
});

// close navigation when clicked outside nav ul
navbarMain.addEventListener("click", function(event) {
    if (event.target===event.currentTarget) {
        hideNav();
    }
});

function hideNav() {
    navbarMain.classList.remove("active");
    navToggleBtn.classList.remove("click");
}
