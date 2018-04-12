<?php
  require_once('config.php');
  include('connect.php');

  // ini_set('display_errors', 1);
  // error_reporting(E_ALL);

  $tbl = $_POST['tbl'];
  $col = $_POST['col'];
  $id = $_POST['id'];
  $relTbl = $_POST['relTbl'];
  $options = $_POST['option'];

  if($tbl === "movie") {
    $linkTbl = "{$tbl}_{$relTbl}";
    $cover = $_FILES['cover'];

    if (!empty($cover)) {
      if($cover['type'] == "image/jpg" || $cover['type'] == "image/jpeg") {
        $targetPath = "../../images/{$cover['name']}";
        if(move_uploaded_file($cover['tmp_name'], $targetPath)) {
          $_POST['cover'] = $cover['name'];
        }
      }
      else {
        echo "File is not a jpg image";
      }
    }
  }
  else {
    $linkTbl = "{$relTbl}_{$tbl}";
  }
  $cur = getRelation($tbl, $relTbl, $linkTbl, $col, $col, $id);

  $curRel = array();
  while ($row = mysqli_fetch_assoc($cur)) {
    $curRel[] = $row['id'];
  }

  // add new options checked
  $add = array_diff($options, $curRel);
  if(!empty($add)) {
    foreach($add as $row) {
      $result = addLinkRow($linkTbl, "{$tbl}_{$col}", "{$relTbl}_{$col}", $id, $row);
    }
  }
  // remove previous checked options that were unchecked
  $remove = array_diff($curRel, $options);
  if(!empty($remove)) {
    foreach($remove as $row) {
      $result = deleteLinkRow($linkTbl, "{$tbl}_{$col}", "{$relTbl}_{$col}", $id, $row);
    }
  }

  unset($_POST['tbl']);
  unset($_POST['col']);
  unset($_POST['id']);
  unset($_POST['relTbl']);
  unset($_POST['submit']);
  unset($_POST['option']);

  $count = 0;
  $num = count($_POST);

  $qstring = "UPDATE {$tbl} SET ";

  foreach($_POST as $key => $value) {
    $count++;
    $qstring .= $key." = '".htmlspecialchars($value, ENT_QUOTES)."'";
    if($count < $num) {
      $qstring .= ", ";
    }
  }

  $qstring .= " WHERE {$col} = {$id}";

  $updateQuery = mysqli_query($link, $qstring);

  // if($updateQuery) {
  //   header("Location:../admin_index.php");
  // }
  // else {
  //   echo "error";
  // }

  mysqli_close($link);

 ?>
