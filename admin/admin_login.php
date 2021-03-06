<?php
  require_once('../includes/config.php');
  $ip = $_SERVER['REMOTE_ADDR'];
  // $ip = "120.0.0.1";
  // on form submit
  if (isset($_POST['submit'])){
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // check if both input fields are filled
    // if yes, call function to log user in
    if ($username !== '' && $password !== '') {
      $result = logIn($username, $password, $ip);
      $message = $result;
    }
    // if no, display warning message
    else {
      $message = 'Please fill out the required fields';
    }
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
  <link rel="shortcut icon" href="../favicon.ico">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin Login</title>
</head>
<body>
  <h1 class="hidden">Choose London | Admin Login Page</h1>
    <div class="admin-header">
      <img src="../images/logo_white.svg" alt="Choose London Logo">
    </div>

  </div>
  <main id="container" class="login-cont">
    <section id="form-wrapper" class="admin-container">
      <h2 class="title">Choose London | Admin Login</h2>
      <?php if (!empty($message)){
        echo "<p class=\"error-message\">".$message."</p>";
      } ?>
      <form action="admin_login.php" method="post">
        <label for="username">Username</label><br>
        <input class="login-input" type="text" name="username" value=""><br><br><br>
        <label for="password">Password</label><br>
        <input class="login-input" type="password" name="password" value=""><br>
        <input class="button admin-button" type="submit" name="submit" value="Login"><br>
      </form>
    </section>
  </main>
</body>
</html>
