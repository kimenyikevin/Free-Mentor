// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navigator").style.padding = "20px 100px";
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("navigator").style.padding = "15px 80px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
function toggleMenu() {
  var menuBox = document.getElementById('navbar-left'); 
  if(menuBox.style.display == "block")
  {
      menuBox.style.display = "none";
  } else{
      menuBox.style.display = "block";
  }
}
