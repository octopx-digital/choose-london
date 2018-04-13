<?php
  function createUser($fname, $username, $password, $email, $level) {
    include('connect.php');

    $userString = "INSERT INTO users (user_fname, user_name, user_pass, user_email, user_date, user_ip, user_level) VALUES ('${fname}', '${username}', '${password}', '${email}', NOW(), 'no', ${level})";

    $userQuery = mysqli_query($link, $userString);
    if($userQuery) {
      $created = true;
    }
    else {
      $created = false;
    }
    return $created;

    mysqli_close($link);
  }

  function editUser($id, $fname, $username, $email, $password, $lastlogin) {
    include('connect.php');

    // check if user has a registered previous login
    // if it is first login
    if(!$lastlogin) {
      // check if password input was filled - a new password is mandatory
      // if password was filled
      if($password) {
        // encrypt password
        $cryptPassword = encryptPassword($password);
        $updateString = "UPDATE users SET user_fname = '{$fname}', user_name = '{$username}', user_email = '{$email}', user_pass = '{$cryptPassword}' WHERE user_id = {$id}";
      }
      //if password was not filled
      else {
        $message = 'A new password has to be defined in your first login';
        return $message;
      }
    }
    // if user has a registered previous login
    else {
      // check if password input was filled - it is not mandatory this time
      // if password was filled
      if($password) {
        // encrypt password
        $cryptPassword = encryptPassword($password);
        $updateString = "UPDATE users SET user_fname = '{$fname}', user_name = '{$username}', user_email = '{$email}', user_pass = '{$cryptPassword}' WHERE user_id = {$id}";
      }
      //if password was not filled
      else {
        $updateString = "UPDATE users SET user_fname = '{$fname}', user_name = '{$username}', user_email = '{$email}' WHERE user_id = {$id}";
      }
    }

    $updateQuery = mysqli_query($link, $updateString);

    if($updateQuery) {
      $_SESSION['user_name'] = $fname;
      $message = 'success';
      return $message;
    }
    else {
      $message = 'Error editing user';
      return $message;
    }

    mysqli_close($link);
  }

  function deleteUser($id) {
    include('connect.php');

    $deleteString = "DELETE FROM users WHERE user_id = {$id}";

    $deleteQuery = mysqli_query($link, $deleteString);

    if($deleteQuery) {
      redirect_to('../admin_index.php'); //called by caller.php
    }
    else {
      $message = 'Error deleting user';
      return $message;
    }

    mysqli_close($link);
  }

  function generatePassword() {
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $length = 8;

    $pass = '';
    for ($i = 0; $i < $length; $i++) {
        $pass .= substr($chars, mt_rand(0, strlen($chars) -1), 1);
    }
    return $pass;
  }

  function encryptPassword($pass) {
    $hash = password_hash($pass, PASSWORD_DEFAULT);
    return $hash;
  }

  function checkPassword($pass, $hash) {
    if (password_verify($pass, $hash)) {
      $check = true;
    }
    else {
      $check = false;
    }
    return $check;
  }

  function updateLogin($id, $ip) {
    include('connect.php');
    // store IP
    $updateIp = "UPDATE users SET user_ip = '{$ip}' WHERE user_id = {$id}";
    $updatequery = mysqli_query($link, $updateIp);

    // reset failed login sttempts
    $resetFail = "UPDATE users SET user_attempt_fail = 0 WHERE user_id = {$id}";
    $runReset = mysqli_query($link, $resetFail);

    // store date and time of last successful login
    $setTime = "UPDATE users SET user_last_login = NOW() WHERE user_id = {$id}";
    $runTime = mysqli_query($link, $setTime);

    mysqli_close($link);
  }

 ?>
