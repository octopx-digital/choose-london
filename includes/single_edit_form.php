<?php
  function singleEdit($tbl, $col, $id) {
    $result = getSingle($tbl, $col, $id);
    $getResult = mysqli_fetch_array($result);
    $options = null;
    $optionTbl = null;

    if ($tbl === "category") {
      echo "<h1>{$tbl}: {$getResult['name']}</h1>";
      $optionTbl = "section";
      $options = getAll($optionTbl, "name");
      $selections = getRelation($tbl, $optionTbl, $optionTbl."_".$tbl, "id", "id", $id);

      $sel = mysqli_fetch_array($selections, MYSQLI_ASSOC);
      $selected = $sel['id'];
      $position = $sel['position'];
    }
    else if ($tbl === "item") {
      echo "<h1>{$tbl}: {$getResult['name']}</h1>";
      $optionTbl = "category";
      $options = getAll($optionTbl, "name");
      $selections = getRelation($tbl, $optionTbl, $optionTbl."_".$tbl, "id", "id", $id);
      // $selected = array();

      // while ($sel = mysqli_fetch_assoc($selections)) {
      //   $selected[] = $sel['id'];
      // }
      $sel = mysqli_fetch_array($selections, MYSQLI_ASSOC);
      $selected = $sel['id'];
      $position = $sel['position'];
    }
    else {
      echo "<h1>{$tbl}: {$getResult['name']}</h1>";
    }

    echo "<form action=\"../includes/edit.php\" method=\"post\" enctype=\"multipart/form-data\">";

    echo "<input hidden name=\"tbl\" value=\"{$tbl}\">";
    echo "<input hidden name=\"col\" value=\"{$col}\">";
    echo "<input hidden name=\"id\" value=\"{$id}\">";
    echo "<input hidden name=\"relTbl\" value=\"{$optionTbl}\">";

    for($i = 0; $i < mysqli_num_fields($result); $i++) {
      $dataType = mysqli_fetch_field_direct($result, $i);
      $fieldName = $dataType->name;
      $fieldType = $dataType->type;

      if($fieldName != $col) {
        echo "<label>{$fieldName}</label><br>";
        if($fieldType != "252") { //not equal to text
          echo "<input type=\"text\" name=\"{$fieldName}\" value=\"{$getResult[$i]}\"><br><br>";
          if($fieldName === 'cover') {
            echo "<input type=\"file\" name=\"cover\" value=\"\">";
          }
        }
        else {
          echo "<textarea rows=\"8\" name=\"{$fieldName}\">{$getResult[$i]}</textarea>";
        }
      }
    }
    echo "<input hidden name=\"option\" value=\"\">";
    if($options) {
      echo "<fieldset class=\"form-options\">";
      echo "<legend>{$optionTbl}:</legend>";

      // echo "<div>";
      echo "<select name=\"option\">";
      while($option = mysqli_fetch_array($options)) {
        $checked = "";
        // if(in_array($option['id'], $selected)) {
        if($option['id'] == $selected) {
          $checked = "selected";
        }
        // echo "<input type=\"checkbox\" name=\"option[]\" value=\"{$option['id']}\" {$checked}>{$option[1]}<br>";
        echo "<option value=\"{$option['id']}\" {$checked}>{$option['name']}</option>";
      }
      // echo "</div>";
      echo "</select>";

      echo "<legend>Position:</legend>";
      echo "<input type=\"text\" name=\"position\" value=\"{$position}\">";
      echo "</fieldset>";
    }
    echo "<input type=\"submit\" name=\"submit\" value=\"Save Content\">";
    echo "</form>";
  }

 ?>
