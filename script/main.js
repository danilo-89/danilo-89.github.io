function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.toggle("mystyle");
}

console.log("!ok");


document.getElementById("navToggleBtn").addEventListener("click", function() {
    console.log("click");
    document.getElementById("navbarMain").classList.toggle("active");
    this.classList.toggle("click");
  });



  document.getElementById("navbarMain").addEventListener("click", function(event) {
    
    if (event.target===event.currentTarget) {
        console.log("click");
        document.getElementById("navbarMain").classList.remove("active");
        document.getElementById("navToggleBtn").classList.remove("click");
    }
  });
