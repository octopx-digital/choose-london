<?php

function deleteRow($tbl, $col, $id) {
  include('connect.php');

  $deleteString = "DELETE FROM {$tbl} WHERE {$col} = {$id}";

  $deleteQuery = mysqli_query($link, $deleteString);

  if($deleteQuery) {
    redirect_to('../admin/admin_index.php'); //called by caller.php
  }
  else {
    $message = 'Error deleting row';
    return $message;
  }

  mysqli_close($link);
}

function deleteLinkRow($tbl, $col, $col2, $id, $id2) {
  include('connect.php');

  $deleteLinkRow = "DELETE FROM {$tbl} WHERE {$col} = {$id} AND {$col2} = {$id2}";

  $deleteQuery = mysqli_query($link, $deleteLinkRow);

  if($deleteQuery) {
    $message = "success";
  }
  else {
    $message = 'error';
  }
  return $message;

  mysqli_close($link);
}

 ?>
