$(document).ready(function(){
    $('header').load("navbar.html");
    $('footer').load("footer.html");
    $('#veg-caterer').click(function(){
        var req = "c1";
        localStorage.setItem("choice",req)
    });
});
// setInterval(function(){
//     alert(req);
//     if(req != null){
//         window.location.href = "all.html";
//     }
// }, 3000);
