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




// Get the header
var header = document.getElementById("navBar");
var body = document.getElementsByTagName('body')[0];

var sticky = header.offsetTop;



(function() {
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {

        if (window.pageYOffset > sticky + 100) {
            header.classList.add("transparent");
          } else {
            header.classList.remove("transparent");
          }


      var scrollPosition = 60 + document.documentElement.scrollTop || 60 + document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.current').classList.remove("current");
          document.querySelector('a[href*=' + i + ']').classList.add("current");
        }
      }
    };
  })();