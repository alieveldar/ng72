<?
session_start();  $_SESSION["version"]=$_GET["to"]; $go=$_SERVER['HTTP_REFERER'];
if ($_GET["to"]=="mobile") { $go='http://m.ng72.ru'; $_SESSION["full"] = false; }
if ($_GET["to"]=="full") { $go='http://ng72.ru'; $_SESSION["full"] = 1; }
header('Location: '.$go); exit();
?>