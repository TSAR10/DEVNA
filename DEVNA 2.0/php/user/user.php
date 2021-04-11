<?php

class User{
  private $pdo;
  function __construct($db){
    $this -> $pdo = $db;  
  }
  public function login($umail,$upass){
    try{
      $query = 'SELECT phone from consumer where email = :umail and password = :upass';
      $stmt = $this -> $pdo -> prepare($query);
      $stmt -> bindParam('umail',$umail);
      $stmt -> bindParam('upass',$upass);
      $stmt -> execute();
      $result = $stmt -> fetch();
      session_start();
      $_SESSION["user_id"] = $result;
    }
    catch(PDOException $e){
      $result = $e->getMessage();
    }

  }

}

?>
