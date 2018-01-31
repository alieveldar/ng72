<?
	$d1=strtotime($page); $d2=$d1+24*60*60; $links=array();
	$cap=$title=$node["name"]." / ".$page;	
	
	$mods="'lenta'"; $data=DB("SELECT `shortname`,`link` FROM `_pages` WHERE (`module` IN (".$mods.") && `stat`=1) order by `name` ASC");
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $links[$ar["link"]]=$ar["shortname"]; endfor;
	
	$q="SELECT `[table]`.`name`,`[table]`.`id`,`[table]`.`pic`,`[table]`.`comcount`,`[table]`.`data`,`[table]`.`seens`, `[table]`.`stat`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`data`>='".$d1."' && `[table]`.`data`<'".$d2."' && `[table]`.`stat`=1)"; $query="";
	foreach ($links as $link=>$name) { $query.="(".str_replace(array("[table]","[link]"),array($link."_lenta", $link), $q).") UNION "; } $query=trim($query, "UNION ").' order by `data` DESC'; $data=DB($query);
	
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic=""; $dir[0]=$ar["link"];
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2 && (int)$ar["comcount"]!=0) { $coms="<div class='CommentBox'><a href='/".$dir[0]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4])."</div>".$coms."</div></div>"; $text.=$C25; 
	}
?>