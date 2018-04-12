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

  function getItemIcons($itemId) {
    include('connect.php');

    $iconQuery = "SELECT ic.* FROM item it, icon ic, item_icon itic WHERE it.id = {$itemId} AND it.id = itic.item_id AND itic.icon_id = ic.id ORDER BY position";
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

  function getAll($tbl, $order = "id") {
		include('connect.php');
		$queryAll = "SELECT * FROM {$tbl} ORDER BY {$order}";
		$runAll = mysqli_query($link, $queryAll);
		if($runAll){
			return $runAll;
		}else{
			$error = "There was a problem accessing this information.";
			return $error;
		}
		mysqli_close($link);
	}

	function getSingle($tbl, $col, $id) {
		include('connect.php');
		$querySingle = "SELECT * FROM {$tbl} WHERE {$col} = {$id}";
		$runSingle = mysqli_query($link, $querySingle);
		if($runSingle){
			return $runSingle;
		}else{
			$error = "There was a problem accessing this information.";
			return $error;
		}
		mysqli_close($link);
	}

	function filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter) {
		include('connect.php');

		$filterQuery = "SELECT * FROM {$tbl}, {$tbl2}, {$tbl3} WHERE {$tbl}.{$col} = {$tbl3}.{$col} AND {$tbl2}.{$col2} = {$tbl3}.{$col2} AND {$tbl2}.{$col3}='{$filter}'";
		//echo $filterQuery;
		$runQuery = mysqli_query($link, $filterQuery);
		if($runQuery){
			return $runQuery;
		}else{
			$error = "There was a problem accessing this information.";
			return $error;
		}
		mysqli_close($link);
	}

  function getRelation($tbl, $tbl2, $tbl3, $col, $col2, $id, $order = "id") {
		include('connect.php');
		$queryRel = "SELECT {$tbl2}.* FROM {$tbl}, {$tbl2}, {$tbl3} WHERE {$tbl}.{$col} = {$id} AND {$tbl}.{$col} = {$tbl3}.{$tbl}_{$col} AND {$tbl3}.{$tbl2}_{$col2} = {$tbl2}.{$col2} ORDER BY {$order}";
		$runRel = mysqli_query($link, $queryRel);
		if($runRel){
			return $runRel;
		}else{
			$error = "There was a problem accessing this information.";
			return $error;
		}
		mysqli_close($link);
	}

 ?>
