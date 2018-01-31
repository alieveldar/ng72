<?
### КРОССЛИНКОВКА СТРАНИЦ
if ($GLOBAL["sitekey"]==1 && $GLOBAL["database"]==1) {
	global $pg;
	
	$alias="news"; $table=$alias."_lenta"; $table2=$alias."_cats";
	
	$d1=strtotime($id); $d2=$d1+24*60*60; $AdminText.='<h2>Публикации всех разделов за '.$id.'</h2>'; $links=array();
	
	$mods="'lenta'"; $data=DB("SELECT `shortname`,`link` FROM `_pages` WHERE (`module` IN (".$mods.") && `stat`=1) order by `name` ASC");
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $links[$ar["link"]]=$ar["shortname"]; endfor;
	
	$q="SELECT `[table]`.`name`,`[table]`.`id`,`[table]`.`data`,`[table]`.`seens`, `[table]`.`stat`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`data`>='".$d1."' && `[table]`.`data`<'".$d2."')"; $query="";
	foreach ($links as $link=>$name) { $query.="(".str_replace(array("[table]","[link]"),array($link."_lenta", $link), $q).") UNION "; } $query=trim($query, "UNION ").' order by `data` DESC'; $data=DB($query);
	
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);
		if ($ar["stat"]==1) { $chk="checked"; } else { $chk=""; }
		$datan=ToRusData($ar["data"]); $alias=$ar["link"];
		$text.='<tr class="TRLine TRLine'.($i%2).'" id="Line'.$ar["id"].'">';				
		$text.='<td class="CheckInput"><input type="checkbox" id="RS-'.$ar["id"].'-'.$table.'" '.$chk.'></td>';		
		$text.="<td class='BigText'><a href='/".$alias."/view/".$ar["id"]."' target='_blank'>".$ar["name"]."</a><br><i>".$links[$ar["link"]]."</i></td>";	
		$text.='<td class="Act" width="1%" style="white-space:nowrap; font-size:10px;" ><i>'.$datan[4].'</i></td>';
		$text.='<td class="Act Seen" width="1%" style="white-space:nowrap; font-size:10px;" >'.$ar["seen"].'</i></td>';
		$text.='<td class="Act"><a href="?cat='.$alias.'_edit&id='.$ar["id"].'" title="Править">'.AIco('28').'</a></td>';
		$text.="</tr>";
	endfor;
	
	
	$AdminText.="<div class='RoundText' id='Tgg'><table>".$text."</table></div>";
	
	// ПРАВАЯ КОЛОНКА
	$AdminRight="<div class='C20'></div><h2>Календарь всех публикаций</h2>"; $defdata=""; if ($id!="" && isset($id)) { $tmp=explode(".", $id); $dirs=$tmp[0].".".$tmp[1].".".$tmp[2]; $defdata='$("#datepick1").datepicker("setDate", "'.$dirs.'")'; }
	$AdminRight.='<div id="datepick1" style="width:200px;"></div><script type="text/javascript">$("#datepick1").datepicker({ onSelect: function(dateText, inst) { document.location="?cat=adm_alldater&id="+dateText; }});$.extend($.datepicker.regional["ru"]); $("#datepick1").datepicker("option","dateFormat","dd.mm.yy"); '.$defdata.'</script>';
	$AdminRight.="<div class='C20'></div><h2>Разделы публикаций</h2>"; foreach($links as $link=>$name) { $AdminRight.='<div class="AdminFastIcon"><a href="?cat='.$link.'_list">'.AIco('26').'</a><a href="?cat='.$link.'_list" style="font-size:12px;">'.$name.'</a></div>'.$C5; }}

//=============================================
$_SESSION["Msg"]="";
?>