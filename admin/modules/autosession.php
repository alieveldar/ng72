<?php
session_start(); $_SESSION["timer"]=time(); 
@require "../../modules/standart/JsRequest.php"; $JsHttpRequest=new JsHttpRequest("utf-8");
$result["text"]=$_SESSION["timer"]." / ".$_SESSION['userid']; $GLOBALS['_RESULT']=$result;
?>
