function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}

console.log("!ok");


document.getElementById("navToggleBtn").addEventListener("click", function() {
    console.log("click");
    document.getElementById("navbarMain").classList.toggle("active");
  });