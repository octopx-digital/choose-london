<?php
  require_once(',,/includes/config.php');
  confirmLoggedIn();

  if(isset($_POST['submit'])) {
    $fname = trim($_POST['fname']);
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $level = $_POST['level'];
    if(empty($level)) {
      $message = 'Please select a user level';
    }
    else {
      // generate random password
      $password = generatePassword();
      // encrypt password to be stored
      $cryptPassword = encryptPassword($password);
      // store user information in database
      $result = createUser($fname, $username, $cryptPassword, $email, $level);

      // check if user was created
      // user created successully
      if($result) {
        // send email to user
        $sendMail = submitNewUserMessage($fname, $email, $username, $password);

        // display message containing username and password
        $created = '<div class="created-message"><p>User created successfully</p><p>Username: '.$username.'</p><p>Password: '.$password.'</p><p>An email was sent to '.$email.' with user credentials.</p></div>';
      }
      // failed to created user
      else {
        $message = '<div class="error-message"><p>Fail to register user</p></div>';
      }
    }
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | Create User</title>
</head>
<body>
  <h1 class="hidden">Admin Create User</h1>
  <header>
    <a class="logout-button" href="../includes/caller.php?caller_id=logout">Logout</a>
    <nav>
      <h2 class="hidden">Main Navigation</h2>
      <ul>
        <li><a href="admin_index.php">Home</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Profiles</a></li>
      </ul>
    </nav>
  </header>
  <main id="container" class="create-cont">
    <h2 class="greetings">Create User</h2>
    <?php
      if(!empty($message)) {
        echo $message;
      }
      if(!empty($created)) {
        echo $created;
      }
    ?>
    <form id="create-form" action="admin_create_user.php" method="post">
      <label for="fname">First Name:</label>
      <input type="text" name="fname" value="" required>
      <label for="username">Username:</label>
      <input type="text" name="username" value="" required>
      <label for="email">Email:</label>
      <input type="email" name="email" value="" required>
      <div>
        <select name="level">
          <option value="">Select User Level</option>
          <option value="2">Web Admin</option>
          <option value="1">Web Master</option>
        </select>
        <input type="submit" name="submit" value="Save">
      </div>
    </form>
    <a class="back-index" href="admin_index.php">Go Back</a>
</main>
</body>
</html>
