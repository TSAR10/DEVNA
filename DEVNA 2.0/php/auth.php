<?php

function auth(...$args){
  // var_dump($args);die;
  foreach ($args as $key) {

    // var_dump($key);die;
    $regex = preg_match('/[_!#$%^&*()<>?\/\|}{~:]/',$key);
    if(!isset($key) || $key == '' || $regex){
      return false;
    }
  }
  return true;
}

?>
