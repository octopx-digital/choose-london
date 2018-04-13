<?php
  require_once('config.php');
  include('connect.php');

  ini_set('display_errors', 1);
  error_reporting(E_ALL);

  // var_dump($_POST);
  // die;

  $tbl = $_POST['tbl'];
  $col = $_POST['col'];
  $id = $_POST['id'];
  $relTbl = $_POST['relTbl'];
  $options = $_POST['option'];
  $position = $_POST['position'];
  // var_dump($options); die;

  // if($tbl === "movie") {
  //   $linkTbl = "{$tbl}_{$relTbl}";
  //   $cover = $_FILES['cover'];
  //
  //   if (!empty($cover)) {
  //     if($cover['type'] == "image/jpg" || $cover['type'] == "image/jpeg") {
  //       $targetPath = "../../images/{$cover['name']}";
  //       if(move_uploaded_file($cover['tmp_name'], $targetPath)) {
  //         $_POST['cover'] = $cover['name'];
  //       }
  //     }
  //     else {
  //       echo "File is not a jpg image";
  //     }
  //   }
  // }
  // else {
  //   $linkTbl = "{$relTbl}_{$tbl}";
  // }

  if(!empty($relTbl)) {
    $linkTbl = "{$relTbl}_{$tbl}";
    $cur = getRelation($tbl, $relTbl, $linkTbl, $col, $col, $id);
    $curRel = mysqli_fetch_array($cur, MYSQLI_ASSOC);

    if(($curRel['id'] != $options) || ($curRel['position'] != $position)) {
      // var_dump($options); die;
      $resultDel = deleteLinkRow($linkTbl, "{$tbl}_{$col}", "{$relTbl}_{$col}", $id, $curRel['id']);
      $resultAdd = addLinkRow($linkTbl, "{$tbl}_{$col}", "{$relTbl}_{$col}", $id, $options, $position);
    }
  }

  unset($_POST['tbl']);
  unset($_POST['col']);
  unset($_POST['id']);
  unset($_POST['relTbl']);
  unset($_POST['submit']);
  unset($_POST['option']);
  unset($_POST['position']);

  $count = 0;
  $num = count($_POST);

  $qstring = "UPDATE {$tbl} SET ";

  foreach($_POST as $key => $value) {
    $count++;
    $qstring .= $key." = '".$value."'";
    if($count < $num) {
      $qstring .= ", ";
    }
  }

  $qstring .= " WHERE {$col} = {$id}";

  $updateQuery = mysqli_query($link, $qstring);

  if($updateQuery) {
    header("Location:../admin/admin_index.php");
  }
  else {
    echo "error updating content";
  }

  mysqli_close($link);

 ?>
