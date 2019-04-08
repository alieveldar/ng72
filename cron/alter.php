<?
if ($GLOBAL["sitekey"]!=1) {
	$ROOT = $_SERVER['DOCUMENT_ROOT'];
	$GLOBAL["sitekey"] = 1; $now=time();
	@require_once($ROOT."/modules/standart/DataBase.php");	
}

$i=0; $r=mysql_query("SHOW TABLES"); if (mysql_num_rows($r)>0) { while($row = mysql_fetch_array($r, MYSQL_NUM)) { $table = $row[0]; if (mb_strpos($table, "_lenta")!==false) { $i++;
$q="ALTER TABLE `".$table."` ADD `seen` MEDIUMINT NOT NULL AFTER `stat`,  ADD INDEX (`seen`) ;"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
$q="ALTER TABLE `".$table."` ADD `likes` MEDIUMINT NOT NULL AFTER `stat`, ADD `dislikes` MEDIUMINT NOT NULL AFTER `likes`, ADD INDEX (`likes`) ;"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
$q="ALTER TABLE `".$table."` ADD `title` VARCHAR(255) NOT NULL  AFTER `name`"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
$q="ALTER TABLE `".$table."` ADD `alias` VARCHAR(255) NOT NULL  AFTER `title`"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
$q="ALTER TABLE `".$table."` ADD `spromo` VARCHAR(1) NOT NULL  AFTER `promo`"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
$q="ALTER TABLE `".$table."` CHANGE `seen` `seens` MEDIUMINT(9) NOT NULL"; $d=DB($q); echo "<b>$table</b>: ".$q."<br>";
echo "<hr>";
}}}  $cronlog.="Обновлено таблиц: <b>$i</b><br>";
?>