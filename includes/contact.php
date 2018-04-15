<?php

  require_once("config.php");

  if(isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $direct = "../index.php";

    if($subject === "") {
      $sendMail = submitMessage($name, $email, $message, $direct);
    }
  }

 ?>
