<?php
$GLOBAL["sitekey"]=1;
require_once $_SERVER['DOCUMENT_ROOT'] . "/modules/standart/DataBase.php";
require_once $_SERVER['DOCUMENT_ROOT'] . "/modules/standart/Settings.php";
(isset($_POST["id"])) ? $id = $_POST["id"] : $id = 0;
(isset($_POST["pref"]))? $table = $_POST["pref"]: $table=0;
UpdateSeens($table,$id);
function UpdateSeens($table, $id){
    $dber = "value";
    $q = "UPDATE `".$table."` SET `seens`=`seens`+ 1 WHERE `id`= '$id'";
    $data = DB($q);
    return $data;
}