<?
### НАСТРОЙКИ САЙТА
if ($GLOBAL["sitekey"]==1 && $GLOBAL["database"]==1) {
	$table=$alias."_lenta"; $table2="_widget_pics"; $table3="_widget_votes"; $vid=(int)$_GET["vid"];
	include("sxgeo.php"); $geo = new SxGeo('modules/concurs/sxgeocity.dat'); $ip = $_SERVER['REMOTE_ADDR']; 
	

// РАЗДЕЛ
	$data=DB("SELECT `id`,`shortname`,`link`, `sets` FROM `_pages` WHERE (`link`='".$alias."') LIMIT 1");
	if ($data["total"]!=1) { $AdminText=ATextReplace('Item-Module-Error', $id, "_pages"); $GLOBAL["error"]=1; } else {
	@mysql_data_seek($data["result"], 0); $raz=@mysql_fetch_array($data["result"]);

	// ВЫВОД ПОЛЕЙ И ФОРМ
	$data=DB("SELECT * FROM `$table` WHERE (`id`=".(int)$id.") LIMIT 1"); 
	if ($data["total"]!=1) { $AdminText=ATextReplace('ItemError', $raz["shortname"]." (".$alias.")", $id); $GLOBAL["error"]=1; } else {
		
	### Заполнение данных
	@mysql_data_seek($data["result"], 0); $node=@mysql_fetch_array($data["result"]); if ($node["stat"]==1) { $chk="checked"; }
	$AdminText='<h2>Голосование: &laquo'.$node["name"].'&raquo;</h2>'.$_SESSION["Msg"];
	
	$data=DB("SELECT * FROM `_widget_pics` WHERE (`pid`='".(int)$id."' && `vid`='".(int)$vid."' && `link`='".$alias."')"); @mysql_data_seek($data["result"],0); $nom=@mysql_fetch_array($data["result"]); 
	$data=DB("SELECT * FROM `_widget_votes` WHERE (`pid`='".(int)$id."' && `link`='".$alias."' && `vid`=".$vid.")");
	
	$AdminText.='<h2>Номинант: '.$nom["name"].', голосов всего: '.$data["total"].'</h2>'.$C10;
	$tables.='<div class="RoundText"><table>';
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"],$i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]);
		$pos=$geo->get($ar["ip"]); $city=iconv("windows-1251","UTF-8",$pos["city"]["name_ru"]); $country=$pos["country"]["iso"];
		if ($country!="RU") { $style='background:#c71414; color:#FFF;'; $pr++; } else { $style=''; } 
		$tables.="<tr class='TRLine TRLine".($i%2)."' style='".$style."'><td>".($i+1)."</td><td>".$country."</td><td>".$city."</td><td>".$ar["ip"]."</td><td>".$d[2]."</td></tr>";
	endfor; $tables.='</table></div>';
	
	$AdminText.="<hr>".$C10."<b style='font-size:24px;'>".round($pr/($data["total"])*100)."%</b> голосов не из России: малая часть друзья, но вероятнее прокcи и покупные голоса".$C5."<hr>".$tables;

	// ПРАВАЯ КОЛОНКА
	$AdminRight="<br><br>
	<div class='SecondMenu'><a href='?cat=".$alias."_edit&id=".$id."'>Основные настройки</a></div>
	<div class='SecondMenu'><a href='?cat=".$alias."_photo&id=".$id."'>Основная фотография</a></div>
	<div class='SecondMenu'><a href='?cat=".$alias."_text&id=".$id."'>Основное содержание</a></div>
	<div class='SecondMenu2'><a href='?cat=".$alias."_voting&id=".$id."'>Виджет: Голосование</a></div>
	$C5<div class='SecondMenu'><a href='/$alias/view/$id/' target='_blank'>Просмотр</a></div>
	<br><div class='RoundText'><table><tr class='TRLine'><td class='CheckInput'><input type='checkbox' id='RS-".$id."-".$alias."_lenta' ".$chk."></td><td><b>Материал опубликован</b></td></tr></table></div>";
}}} $_SESSION["Msg"]="";
?>