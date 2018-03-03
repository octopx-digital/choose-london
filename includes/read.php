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

    mysqli_close($link);
  }

  function getSectionIcons($sectionId) {
    include('connect.php');

    $iconQuery = "SELECT ic.* FROM section sec, icon ic, section_icon secic WHERE sec.id = {$sectionId} AND sec.id = secic.section_id AND secic.icon_id = ic.id ORDER BY position";
    $result = mysqli_query($link, $iconQuery);
    if($result) {
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}

    mysqli_close($link);
  }

  function getCategoryIcons($categoryId) {
    include('connect.php');

    $iconQuery = "SELECT ic.* FROM category cat, icon ic, category_icon catic WHERE cat.id = {$categoryId} AND cat.id = catic.category_id AND catic.icon_id = ic.id ORDER BY position";
    $result = mysqli_query($link, $iconQuery);
    if($result) {
			return $result;
		}
    else {
			$error = "There was a problem accessing this information.";
			return $error;
		}

    mysqli_close($link);
  }

 ?>
