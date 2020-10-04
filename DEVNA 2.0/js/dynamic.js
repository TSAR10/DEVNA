$(document).ready(function(){
    $('header').load("navbar.html");
    $('footer').load("footer.html");
    var ch = localStorage.getItem("choice");
    alert(ch);
});
// setInterval(function(){ alert(req); }, 3000);
// var queryString = decodeURIComponent(window.location.search);
// paramString = queryString.split('?')[1];
// alert(queryString);
