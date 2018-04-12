<?php

function addLinkRow($tbl, $col, $col2, $id, $id2) {
  include('connect.php');

  $addRow = "INSERT INTO {$tbl} ($col, $col2) VALUES ($id, $id2)";

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

 ?>
