<?php

  function getSectionContent($section) {
    include('connect.php');

    $querySection = "SELECT * FROM section WHERE name = '{$section}'";
    $result = mysqli_query($link, $querySection);
    if($result){
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}

    mysqli_close($link);
  }

  function getCategories($sectionId) {
    include('connect.php');

    $queryCategory = "SELECT cat.* FROM section sec, category cat, section_category seccat WHERE sec.id = {$sectionId} AND sec.id = seccat.section_id AND seccat.category_id = cat.id ORDER BY position";
    $result = mysqli_query($link, $queryCategory);
    if($result){
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}

    mysqli_close($link);
  }

  function getStories($section){
    include('connect.php');
    if($section == 'home'){
      $queryStory = "SELECT * FROM stories ORDER BY id DESC LIMIT 3";
    } else {
      $queryStory = "SELECT * FROM stories WHERE section='{$section}'";
    }
    $result = mysqli_query($link, $queryStory);
    if($result) {
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}
    mysqli_close($link);
  }

  function getItems($categoryId) {
    include('connect.php');

    $itemQuery = "SELECT it.* FROM category cat, item it, category_item catit WHERE cat.id = {$categoryId} AND cat.id = catit.category_id AND catit.item_id = it.id ORDER BY position";
    $result = mysqli_query($link, $itemQuery);
    if($result) {
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}

    mysqli_close($link);
  }
  function getItemsByName($categoryName) {
    include('connect.php');

    $catIdQuery = "SELECT id FROM category WHERE name = {$categoryName}";
    $catIdRun = mysqli_query($link, $catIdQuery);
      if($catIdRun) {
        $category = mysqli_fetch_array($catIdRun);
        $catItems = getItems($category['id']);
        return $catItems;
      }
      else {
        $error = "There was a problem accessing this information.";
        return $error;
      }
    }

  if(isset($_GET['home'])) {
    include('connect.php');
    $query = "SELECT * FROM section";
    $result = mysqli_query($link, $query);

    $rows = array();

      while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
      }
    echo json_encode($rows);
    mysqli_close($link);
  }

  if(isset($_GET['video'])) {
    include('connect.php');
    $query = "SELECT * FROM video";
    $result = mysqli_query($link, $query);

    $rows = array();

      while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
      }
    echo json_encode($rows);
    mysqli_close($link);
  }

  function video(){
    include('connect.php');
    $query = "SELECT * FROM video";
    $result = mysqli_query($link, $query);

    if($result) {
      $info = mysqli_fetch_array($result);
      return $info;
    }
    else {
      $error = "There was a problem accessing this information.";
      return $error;
    }
    mysqli_close($link);
  }

 ?>
