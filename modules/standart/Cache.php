<?
$cacheFolder = $_SERVER['DOCUMENT_ROOT']."/cache/"; if (!is_dir($cacheFolder)) { mkdir($cacheFolder, 0777); }
// Проверка файла ======================================================================================================================================================
function RetCache($file, $type="cachepages") {
	global $VARS, $GLOBAL; $ret="true"; $ctime=(int)($VARS[$type]*60); if ($type=="cachewidget") { $ctime=60*60; } 
		list($folder, $filename) = explode("-", $file); if ($filename=="") { $filename=$folder.".cache"; $folder="_other"; } else { $filename=$filename.".cache"; }
	if (is_file($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename)) { $ftime=filemtime($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename); $now=time(); if (($now-$ftime)>$ctime) { $ret="Время истекло"; } } else { $ret="Файл не найден"; }
	$GLOBAL["log"].="<s>КЭШ</s>: загрузка файла &laquo;".$_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename."&raquo; &#8212; <b>".$ret."</b> &#8212; осталось: <b>".round($ctime-($now-$ftime))."</b> c.<hr>"; return $ret;
}



// Сохранение файла =====================================================================================================================================================
function SetCache($file, $text, $cap, $type="cachepages", $title='', $kw='', $ds='') {
	global $VARS, $GLOBAL; $time=(int)($VARS[$type]*60); if ($type=="cachewidget") { $ctime=60*60; }
	list($folder, $filename) = explode("-", $file); if ($filename=="") { $filename=$folder.".cache"; $folder="_other"; } else { $filename=$filename.".cache"; }
	if (!is_dir($_SERVER['DOCUMENT_ROOT']."/cache/".$folder)) { mkdir($_SERVER['DOCUMENT_ROOT']."/cache/".$folder, 0777); $GLOBAL["log"].="<s>КЭШ</s>: создана папка &laquo;<b>cache/".$folder."</b>&raquo;<hr>"; }
	if ($cap!="" || $title!="") { DB("INSERT INTO `_captions` (`page`, `title`, `name`, `data`,`kw`,`ds`) VALUES ('".$folder."/".$filename."', '".$title."', '".$cap."', '".time()."','".$kw."','".$ds."') ON DUPLICATE KEY UPDATE `name`='".$cap."', `title`='".$title."', `kw`='".$kw."', `ds`='".$ds."', `data`='".time()."'"); }
	$bytes=@file_put_contents($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename, $text); $GLOBAL["log"].="<s>КЭШ</s>: записан файл &laquo;cache/".$folder."/".$filename."&raquo; &#8212; <b>".round($bytes/1024, 3)."</b> Кб<hr>";
}


// Получение файла ======================================================================================================================================================
function GetCache($file, $qcap=1) {
	global $GLOBAL; list($folder, $filename) = explode("-", $file); if ($filename=="") { $filename=$folder.".cache"; $folder="_other"; }else{ $filename=$filename.".cache"; } $text=@file_get_contents($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename, $text); 
	if ($qcap==1) { $d=DB("SELECT `name`,`title`,`kw`,`ds` FROM `_captions` WHERE `page`='".$folder."/".$filename."' LIMIT 1");
	if ($d["total"]==1) { @mysql_data_seek($d["result"], 0); $ar=@mysql_fetch_array($d["result"]); $cap=$ar["name"]; $title=$ar["title"]; $kw=$ar["kw"]; $ds=$ar["ds"]; }else{ $cap=""; $title=''; $kw=''; $ds=''; }}
	return array($text, $cap, $title, $kw, $ds);
}

function ClearCache($file) {
	list($folder, $filename) = explode("-", $file); if ($filename=="") { $filename=$folder.".cache"; $folder="_other"; } else { $filename=$filename.".cache"; }
	if (is_file($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename)) { @unlink($_SERVER['DOCUMENT_ROOT']."/cache/".$folder."/".$filename); }
}
?>