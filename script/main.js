const navToggleBtn = document.getElementById("navToggleBtn");
const changeColorThemeBtn = document.getElementById("changeColorThemeBtn");
const navbarMain = document.getElementById("navbarMain");

// Get the header
var header = document.getElementById("navBar");
var body = document.getElementsByTagName('body')[0];
var sticky = header.offsetTop;


// togle color theme dark/light
changeColorThemeBtn.addEventListener("click", function(event) {
    this.classList.toggle("sun");
    body.classList.toggle("light");
});

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
}








(function() {
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {

        if (window.pageYOffset > sticky + 10) {
            header.classList.add("transparent");
          } else {
            header.classList.remove("transparent");
          }



      var scrollPosition = 60 + document.documentElement.scrollTop || 60 + document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition + 10) {
          document.querySelector('.current').classList.remove("current");
          document.querySelector('a[href*=' + i + ']').classList.add("current");
        }
      }
    };
  })();



  async function getCWData() {
    let response = await fetch('https://www.codewars.com/api/v1/users/danilo-89');
    let data = await response.json();
    return data;
}     
getCWData().then(data => console.log(data));

// window.addEventListener("load", function(){
//     // setTimeout(function(){
        
//     // }, 0);
//     // getCWData().then(data => console.log(data));
//     // alert("true");
// });
