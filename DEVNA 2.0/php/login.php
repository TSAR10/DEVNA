<?php
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    require'auth.php';
    $status = auth($_POST["email"],$_POST["pass"]);
    if($status){
      require "user/user.php";
      $user = new User($db = require "config/dbconnect.php");
      $user -> login($_POST["email"],$_POST["pass"]);
      if(isset($_SESSION["user_id"])){
        header('location:../html/caterer.html');
      }
    }
    else{
    }
  }
?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../css/log.css" type="text/css">
        <title></title>
    </head>
    <body>
        <header></header>
        <main>
            <div>
                <img src="../images/welcome.gif" alt="logo">
                <p> Revolutionizing and Empowering the Services & Service Providers with TECH</p>
            </div>
            <div>
                <h1>Account Login</h1>
                <form class="login" action="login.php" method="post">
                    <input type="email" name="email" placeholder="E-Mail / Phone No.">
                    <input type="password" name="pass" placeholder="Password">
                    <input type="submit" name="submit" value="Log-in">
                    <input type="button" name="alter" value="Sign-in" onclick='location.href="signup.html";'>
                </form>
            </div>
        </main>
        <footer></footer>
    </body>
</html>
