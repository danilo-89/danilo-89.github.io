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
    navbarMain.classList.remove("active");
    navToggleBtn.classList.remove("click");
    // console.log("rest");
    // document.getElementById("hamburger").checked = false;
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("navBar");
var body = document.getElementsByTagName('body')[0];

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky + 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
}