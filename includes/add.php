<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

function addLinkRow($tbl, $col, $col2, $id, $id2, $position) {
  include('connect.php');

  $addRow = "INSERT INTO {$tbl} ($col, $col2, position) VALUES ($id, $id2, $position)";
  // var_dump($addRow); die;

  $addQuery = mysqli_query($link, $addRow);

  if($addQuery) {
    $message = "success";
  }
  else {
    $message = 'error';
  }
  return $message;

  mysqli_close($link);
}

function addSection($name, $title, $description, $photo, $icon) {
  include('connect.php');

  $titleChar = htmlspecialchars($title, ENT_QUOTES);
  $descChar = htmlspecialchars($description, ENT_QUOTES);

  if($photo['type'] == "image/jpg" || $photo['type'] == "image/jpeg") {
    $photoName = pathinfo($photo['name']);
    $photoPath = "../images/{$photoName['filename']}_large.jpg";

    if(move_uploaded_file($photo['tmp_name'], $photoPath)) {
      copy($photoPath, "../images/{$photoName['filename']}_medium.jpg");
      copy($photoPath, "../images/{$photoName['filename']}_small.jpg");
      if($icon['type'] == "image/png") {
        $iconName = pathinfo($icon['name']);
        $iconPath = "../images/{$iconName['filename']}_large.png";

        if(move_uploaded_file($icon['tmp_name'], $iconPath)) {
          copy($iconPath, "../images/{$iconName['filename']}_medium.png");
          copy($iconPath, "../images/{$iconName['filename']}_small.png");
          $insertQuery = "INSERT INTO section (name, title, description, photo, icon) VALUES ('{$name}', '{$titleChar}', '{$descChar}', '{$photoName['filename']}', '{$iconName['filename']}')";

          $result = mysqli_query($link, $insertQuery);

          return $result;
        }
      }
      else {
        echo "Icon must be a SVG file.";
      }
    }
  }
  else {
    echo "File is not a jpg image.";
  }

  mysqli_close($link);
}

function addCategory($name, $title, $description, $short_desc, $banner_photo, $header_photo) {
  include('connect.php');

  $titleChar = htmlspecialchars($title, ENT_QUOTES);
  $descChar = htmlspecialchars($description, ENT_QUOTES);
  $shortChar = htmlspecialchars($short_desc, ENT_QUOTES);

  if($banner_photo['type'] == "image/jpg" || $banner_photo['type'] == "image/jpeg") {
    $bannerName = pathinfo($banner_photo['name']);
    $bannerPath = "../images/{$bannerName['filename']}_large.jpg";

    if(move_uploaded_file($banner_photo['tmp_name'], $bannerPath)) {
      copy($bannerPath, "../images/{$bannerName['filename']}_medium.jpg");
      copy($bannerPath, "../images/{$bannerName['filename']}_small.jpg");
      if($header_photo['type'] == "image/jpg" || $header_photo['type'] == "image/jpeg") {
        $headerName = pathinfo($header_photo['name']);
        $headerPath = "../images/{$headerName['filename']}_large.jpg";

        if(move_uploaded_file($header_photo['tmp_name'], $headerPath)) {
          copy($headerPath, "../images/{$headerName['filename']}_medium.jpg");
          copy($headerPath, "../images/{$headerName['filename']}_small.jpg");
          $insertQuery = "INSERT INTO category (name, title, description, short_desc, banner_photo, header_photo) VALUES ('{$name}', '{$titleChar}', '{$descChar}', '{$shortChar}', '{$bannerName['filename']}', '{$headerName['filename']}')";

          $result = mysqli_query($link, $insertQuery);

          if($result) {
            $getLastQuery = "SELECT * FROM category ORDER BY id DESC LIMIT 1";

            $lastResult = mysqli_query($link, $getLastQuery);

            $row = mysqli_fetch_array($lastResult);
            $lastId = $row['id'];

            return $lastId;

          }
        }
      }
      else {
        echo "Header must be a JPG file.";
      }
    }
  }
  else {
    echo "Banner must be a JPG file.";
  }

  mysqli_close($link);
}

function addItem($name, $title, $description, $address, $phone, $hours, $website, $photo) {
  include('connect.php');

  $titleChar = htmlspecialchars($title, ENT_QUOTES);
  $descChar = htmlspecialchars($description, ENT_QUOTES);
  $addressChar = htmlspecialchars($address, ENT_QUOTES);
  $phoneChar = htmlspecialchars($phone, ENT_QUOTES);
  $hoursChar = htmlspecialchars($hours, ENT_QUOTES);
  $websiteChar = htmlspecialchars($website, ENT_QUOTES);

  if($photo['type'] == "image/jpg" || $photo['type'] == "image/jpeg") {
    $photoName = pathinfo($photo['name']);
    $photoPath = "../images/{$photoName['filename']}_large.jpg";

    if(move_uploaded_file($photo['tmp_name'], $photoPath)) {
      copy($photoPath, "../images/{$photoName['filename']}_medium.jpg");
      copy($photoPath, "../images/{$photoName['filename']}_small.jpg");
      $insertQuery = "INSERT INTO item (name, title, description, address, phone, hours, website, photo) VALUES ('{$name}', '{$titleChar}', '{$descChar}', '{$addressChar}', '{$phoneChar}', '{$hoursChar}', '{$websiteChar}', '{$photoName['filename']}')";

      $result = mysqli_query($link, $insertQuery);

      if($result) {
        $getLastQuery = "SELECT * FROM item ORDER BY id DESC LIMIT 1";

        $lastResult = mysqli_query($link, $getLastQuery);

        $row = mysqli_fetch_array($lastResult);
        $lastId = $row['id'];

        return $lastId;

      }
    }
  }
  else {
    echo "Photo must be a JPG file.";
  }

  mysqli_close($link);
}

function addStory($name, $message, $photo, $section) {
  include('connect.php');

  $messageChar = htmlspecialchars($message, ENT_QUOTES);

  if($photo['type'] == "image/jpg" || $photo['type'] == "image/jpeg") {
    $photoPath = "../images/{$photo['name']}";

    if(move_uploaded_file($photo['tmp_name'], $photoPath)) {
      $insertQuery = "INSERT INTO stories (name, message, photo, section) VALUES ('{$name}', '{$messageChar}', '{$photo['name']}', '{$section}')";

      $result = mysqli_query($link, $insertQuery);
    }
  }
  else {
    echo "Photo must be a JPG file.";
  }

  mysqli_close($link);
}

 ?>
