<?php
$config = require 'config.php';
try{
  $pdo = new PDO(
       $config['database_dsn'],
       $config['database_user'],
       $config['database_pass']
    );
    return $pdo;
}
catch( PDOException $e){
  exit($e -> getMessage());
}
