<?
$pg=$dir[1]?$dir[1]:1; $file="_index-mnews".(int)$pg; $VARS["cachepages"]=0; $Page["Caption"]="Новости Тюмени"; $CSSmodules["авто включение ленты"]="/modules/lenta/lenta.css";
if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=KazanNews(); SetCache($file, $text, ""); } $Page["Content"]=$text;


function KazanNews() { $C="";
	global $VARS, $GLOBAL, $C10, $C15, $C20, $C25, $C, $used, $VAR, $dir; $onpage=50; $pg=$dir[1]?$dir[1]:1; $from=($pg-1)*$onpage; $onblock=3;
	// Находим все таблицы с lenta ==================

	$q="SELECT `[table]`.`id`, `[table]`.`uid`, `[table]`.`name`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, `[table]`.`onind`, `_users`.`nick`, '[link]' as `link`
	FROM `[table]` LEFT JOIN `_users` ON `_users`.`id`=`[table]`.`uid` WHERE (`[table]`.`stat`='1')"; $endq="ORDER BY `data` DESC LIMIT ".$from.", ".$onpage; $data=getNewsFromLentas($q, $endq); $j=0; $b=1;

	// выводим новости ==============================

	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  Автор: ".$auth."</div>".$coms."</div></div>";
		if($data["total"]>($i+1)){

			if (($i+1)%$onblock==0) {
				if ($j==0) {
					$text.="<div class='Banner' id='Banner-27-1'></div>".$C15;
				} elseif($j==1) {
					$text.="<div class='Banner' id='Banner-27-2'></div>".$C15;
				} else {
					$text.="<div class='Banner' id='Banner-28-".$b."'></div>".$C15; $b++;
				}
				$j++;
			} else { $text.=$C25; }
		}
	}
	// строим пагер =================================
	//$q="SELECT `[table]`.`id` FROM `[table]` WHERE (`[table]`.`stat`='1')"; $endq="";
	//$data=getNewsFromLentas($q, $endq);
    $text.=Pager2($pg, $onpage, ceil($data["found_rows"]/$onpage), "index-mobile/"."[page]");
	// ==============================================
 	return (array($text, $C));
}
?>