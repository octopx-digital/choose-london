<?php
  require_once('../includes/config.php');
  // confirmLoggedIn();

  $id = $_SESSION['user_id'];
  $ip = $_SERVER['REMOTE_ADDR'];
  $tbl = 'users';
  $col = 'user_id';
  $old = getSingle($tbl, $col, $id);
  $info = mysqli_fetch_array($old);

  // check the origin of request
  // if it is login page, it is the first login of the user
  // display message
  $referer = $_SERVER['HTTP_REFERER'];
  if(strpos($referer, 'admin_login.php')){
    $message = 'This is your first login and you should edit your profile.<br>Your temporary password must be changed';
  }

  if(isset($_POST['submit'])) {
    $fname = trim($_POST['fname']);
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $lastlogin = $info['user_last_login'];
    $result = editUser($id, $fname, $username, $email, $password, $lastlogin);

    if($result === 'success') {
      // if it is first login
      if(!$lastlogin) {
        // update user login information
        updateLogin($id, $ip);
      }
      redirect_to('admin_index.php');
    }
    $message = $result;
  }
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/main.css">
  <title>Admin | Edit User</title>
</head>
<body>
  <h1 class="hidden">Admin Edit User</h1>
  <header>
    <div class="admin-header">
      <nav>
        <h2 class="hidden">Main Navigation</h2>
        <ul>
          <li><a href="admin_index.php">Home</a></li>
          <li><a class="logout-button" href="../includes/caller.php?caller_id=logout">Logout</a></li>
        </ul>
      </nav>
      <img src="../images/logo_white.svg" alt="Choose London Logo">
  </div>
  </header>
  <main id="container" class="create-cont admin-container edit-row">
    <h2 class="greetings">Edit User</h2>
    <?php
      if(!empty($message)) {
        echo "<p class=\"edit-message\">$message</p>";
      }
      if(!empty($created)) {
        echo $created;
      }
    ?>
    <form id="create-form" action="admin_edit_user.php" method="post">
      <label for="fname">First Name:</label>
      <input type="text" name="fname" value="<?php echo $info['user_fname'] ?>" required>
      <label for="username">Username:</label>
      <input type="text" name="username" value="<?php echo $info['user_name'] ?>" required>
      <label for="email">Email:</label>
      <input type="email" name="email" value="<?php echo $info['user_email'] ?>" required>
      <label for="email">Password:</label>
      <input type="password" name="password" value="">
      <div>
        <input class="admin-button" type="submit" name="submit" value="Save">
      </div>
    </form>
    <a class="back-index admin-button" href="admin_index.php">Go Back</a><br><br><br><br>
</main>
</body>
</html>
