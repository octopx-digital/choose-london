<?php
  session_start();

  function confirmLoggedIn() {
    if(!isset($_SESSION['user_id'])) {
      redirect_to('admin_login.php');
    }
  }

  function loggedOut() {
    session_destroy();
    redirect_to('../admin_login.php');
  }

 ?>
