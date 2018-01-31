<?
$pg=$dir[1]?$dir[1]:1; $file="_index-ngztnewsm".(int)$pg; $VARS["cachepages"]=0; $CSSmodules["авто включение ленты"]="/modules/lenta/mobile.lenta.css";
list($text, $cap)=ngztnewsm(); $Page["Content"]=$text; $Page["Caption"]=$node["name"];


function ngztnewsm() { $C=""; 
	global $VARS, $GLOBAL, $C10, $C20, $C25, $C, $used, $VAR, $C, $C20, $C10, $C25, $dir; $onpage=43; $pg=$dir[1]?$dir[1]:1; $from=($pg-1)*$onpage; $onblock=4;
	
	// Находим все таблицы с lenta ==================

	$q="SELECT `[table]`.`id`, `[table]`.`uid`, `[table]`.`name`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, `[table]`.`onind`, `_users`.`nick`, '[link]' as `link`
	FROM `[table]` LEFT JOIN `_users` ON `_users`.`id`=`[table]`.`uid` WHERE (`[table]`.`stat`='1')"; $endq="ORDER BY `data` DESC LIMIT ".$from.", ".$onpage; 
	$data=getNewsFromLentas($q, $endq);
	
	$big=1; $sm=1;
	// выводим новости ==============================
	
	for ($i=0; $i<$data["total"]; $i++) {
		
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  Автор: ".$auth."</div>".$coms."</div></div>";
		
		if($data["total"]>($i+1)){ if (($i+1)%$onblock==0) {
			if ($big<3) { $text.=$C25."<div class='banner2' style='margin-bottom:15px;' id='Banner-27-".$big."'></div>".$C; $big++;
			} else { $text.=$C25."<div class='banner2' style='margin-bottom:15px;' id='Banner-28-".$sm."'></div>".$C; $sm++; }
		} else { $text.=$C25; }}
	}
	
	// строим пагер =================================
	
	
	$q="SELECT `[table]`.`id` FROM `[table]` WHERE (`[table]`.`stat`='1')"; $endq="";
	$data=getNewsFromLentas($q, $endq);	$text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), $dir[0]."/"."[page]");
	// ==============================================
 	return (array($text, $C));
}
?>