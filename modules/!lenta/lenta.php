<?
$table=$link."_lenta";
$table2="_widget_pics";
$table3="_widget_votes";
$table4="_widget_video";
$table5="_widget_voting";
$table6="_widget_contacts";
$table7="_widget_eventmap";

if ($start=="") { $start="list"; $dir[1]="list"; }
$file=$table."-".$start.".".$page.".".$id;

#############################################################################################################################################
### Вывод списка новостей общий
if ($start=="list") {
	if ($link=="auto") { if (RetCache($file)=="true") { list($text, $cap, )=GetCache($file, 0); } else { list($text, $cap)=GetLentaListAuto(); SetCache($file, $text, "");}
	} else { if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=GetLentaList(); SetCache($file, $text, ""); }}
	$Page["Content"]=$text; $Page["Caption"]=$node["name"];	
}

### Вывод списка афиши по дате
if ($start=="date" && $link=="afisha") {
	if (RetCache($file)=="true") { list($text, $cap)=GetCache($file); } else { list($text, $cap)=GetAfishaList(); SetCache($file, $text, $cap); }
	$Page["Content"]=$text; $Page["Caption"]=$cap;	
}


#############################################################################################################################################
### Вывод списка новостей в категории
if ($start=="cat") { if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=GetLentaCat(); SetCache($file, $text, $cap); } $Page["Content"]=$text; $Page["Caption"]=$cap; }

#############################################################################################################################################
### Вывод новости
if ($start=="view") {
	$where=$GLOBAL["USER"]["role"]==0?"&& `stat`=1":"";
	if (strpos($dir[2],"-")===false) { $alias="`id`='".(int)$dir[2]."'"; } else { $alias="`alias`='".$dir[2]."'"; }
	$data=DB("SELECT `id`,`alias`,`comments`, `promo`, `pic`,`name`,`title` FROM `".$table."` WHERE (".$alias." ".$where.") LIMIT 1");
	if ($data["total"]==1) {
		@mysql_data_seek($data["result"], 0); $new=@mysql_fetch_array($data["result"]);
		if (strpos($dir[2],"-")===false && $new["alias"]!="") { @header("location: /".$link."/view/".$new["alias"], true, 301); exit(); }
		DB("UPDATE `".$table."` SET `seen`=`seen`+1 WHERE (`id`=".$new["id"].") LIMIT 1"); $file=$table."-".$start.".".$new["id"].".".$id; $page=$new["id"];
		if (RetCache($file)=="true") { list($text, $cap, $title, $kw, $ds)=GetCache($file); } else { list($text, $cap, $title, $kw, $ds)=GetLentaId(); SetCache($file, $text, $cap, "", $title, $kw, $ds); }
		//if ($new["promo"]!=1) { $text.=$C20."<div class='banner' id='Banner-29-1'></div>"; }
		if ($new["promo"]!=1) { $text.=$C20."<div class='banner' id='Banner-6-1'></div>"; }
		UserTracker($link, $page); $text.=UsersComments($link, $page, $new["comments"], null, $page); 
		if ($new["promo"]!=1) { $text.=$C20."<div class='banner' id='Banner-6-2'></div>"; }		
		//$text.=razdelBrandsBattle().$C;
		if ($new["promo"]!=1) { $text.="<div class='banner' id='Banner-6-3'></div>"; }
		//$text.=razdelForumIndex().$C;
		if ($GLOBAL["USER"]["role"]>1) { $text=$C10."<div id='AdminEditItem'><a href='".$GLOBAL["mdomain"]."/admin/?cat=".$link."_edit&id=".(int)$new["id"]."'>Редактировать</a></div>".$C15.InitImageMaster($cap, $new["pic"]).$C15.$text; }
		$Page["Content"]=$text; $Page["Title"]=$title; $Page["Caption"]=$cap;  $Page["Description"]=$ds; $Page["KeyWords"]=$kw;
		
	} else { $cap="Материал не найден"; $text=@file_get_contents($ROOT."/template/404.html"); $Page["Content"]=$text; $Page["Caption"]=$cap; }
}
###########################################################################################################################################

### ЛЕНТА НОВОСТЕЙ АВТО ########################################################################################################################

function GetLentaListAuto() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	$onpage=$node["onpage"]; $pg = $dir[2] ? $dir[2] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; /* Новостей в каждом блоке */
	
	$data2=DB("SELECT `".$table."`.id, `".$table."`.cat, `".$table."`.name, `".$table."`.uid, `".$table."`.pic, `".$table."`.data,`".$table."`.comcount, `".$table."`.comments, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`
	FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.`stat`=1 && `".$table."`.`promo`=1 && `".$table."`.`data`>'".(time()-60*60*24)."')  GROUP BY 1 ".$orderby." LIMIT 1");
	if ($data2["total"]==1) { @mysql_data_seek($data2["result"], 0); $ar=@mysql_fetch_array($data2["result"]); $promo=$ar; }
	
	$data=DB("SELECT `".$table."`.id, `".$table."`.cat, `".$table."`.name, `".$table."`.uid, `".$table."`.pic, `".$table."`.data,`".$table."`.comcount, `".$table."`.comments, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`
	FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.`stat`=1 && `".$table."`.`promo`=0)  GROUP BY 1 ".$orderby." LIMIT $from, $onpage");
	
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);
		if ($i==3 && $promo["name"]!="") {
			$ap=$ar; $ar=$promo; $pic=""; $d=ToRusData($ar["data"]); if ($ar["pic"]!="") { $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }
			if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='http://".$VARS["mdomain"]."/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='http://".$VARS["mdomain"]."/add/2/'>Народный корреспондент</a>"; }
			if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$dir[0]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
			$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
			<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  <a href='/".$dir[0]."/cat/".$ar["cat"]."'>".$ar["ncat"]."</a>,  Автор: ".$auth."</div>".$coms."</div></div>".$C25; $ar=$ap;			
		}
		$d=ToRusData($ar["data"]); $pic=""; if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='http://".$VARS["mdomain"]."/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='http://".$VARS["mdomain"]."/add/2/'>Народный корреспондент</a>"; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  <a href='/".$dir[0]."/cat/".$ar["cat"]."'>".$ar["ncat"]."</a>,  Автор: ".$auth."</div>".$coms."</div></div>";
		
		if($data["total"]>($i+1)){ if (($i+1)%$onblock==0) { $text.=$C25."<div class='banner2' style='margin-left:10px;' id='Banner-6-".(floor($i/$onblock)+1)."'></div>".$C; } else { $text.=$C25; }}
	}


	$data=DB("SELECT count(id) as `cnt` FROM `".$table."`"); @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return(array($text, ""));
}

### ЛЕНТА АФИШИ ПО ДАТЕ ########################################################################################################################

function GetAfishaList() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	
	$ar=explode(".",$dir[2]); $sdata=mktime(10, 10, 10, $ar[1], $ar[0], $ar[2]); $d=ToRusData($sdata); $cap=$node["name"].": ".$d[2];
	
	$onpage=$node["onpage"]; $pg = $dir[3] ? $dir[3] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; /* Новостей в каждом блоке */
	$q="SELECT `".$table."`.id, `".$table."`.cat, `".$table."`.name, `".$table."`.uid, `".$table."`.pic, `".$table."`.data,`".$table."`.comcount, `".$table."`.comments, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`
	FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat`
	WHERE (`".$table."`.`stat`=1 && `".$table."`.`datafrom`<'".$sdata."' && `".$table."`.`datato`>'".$sdata."')  GROUP BY 1 ".$orderby." LIMIT $from, $onpage"; $data=DB($q);
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='http://".$VARS["mdomain"]."/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='http://".$VARS["mdomain"]."/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2 && (int)$ar["comcount"]!=0) { $coms="<div class='CommentBox'><a href='/".$dir[0]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  <a href='/".$dir[0]."/cat/".$ar["cat"]."'>".$ar["ncat"]."</a>,  Автор: ".$auth."</div>".$coms."</div></div>";
		if($data["total"]>($i+1)){ if (($i+1)%$onblock==0) { $text.=$C25."<div class='banner2' style='margin-left:10px;' id='Banner-6-".(floor($i/$onblock)+1)."'></div>".$C; } else { $text.=$C25; }}
	}
	$data=DB("SELECT count(id) as `cnt` FROM `".$table."`"); @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/".$dir[2]."/[page]");
	return(array($text, $cap));
}


### ЛЕНТА НОВОСТЕЙ ОСТАЛЬНЫЕ ########################################################################################################################

function GetLentaList() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	$onpage=$node["onpage"]; $pg = $dir[2] ? $dir[2] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; /* Новостей в каждом блоке */
	$data=DB("SELECT `".$table."`.id, `".$table."`.cat, `".$table."`.name, `".$table."`.uid, `".$table."`.pic, `".$table."`.data,`".$table."`.comcount, `".$table."`.comments, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`
	FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.`stat`=1)  GROUP BY 1 
	ORDER BY `".$table."`.`gis` DESC, `".$table."`.`data` DESC LIMIT $from, $onpage");
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='http://".$VARS["mdomain"]."/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='http://".$VARS["mdomain"]."/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2 && (int)$ar["comcount"]!=0) { $coms="<div class='CommentBox'><a href='/".$dir[0]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  <a href='/".$dir[0]."/cat/".$ar["cat"]."'>".$ar["ncat"]."</a>,  Автор: ".$auth."</div>".$coms."</div></div>";
		if($data["total"]>($i+1)){ if (($i+1)%$onblock==0) { $text.=$C25."<div class='banner2' style='margin-left:10px;' id='Banner-6-".(floor($i/$onblock)+1)."'></div>".$C; } else { $text.=$C25; }}
	}
	$data=DB("SELECT count(id) as `cnt` FROM `".$table."`"); @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/[page]");
	return(array($text, ""));
}

##### КАТЕГОРИЯ НОВОСТЕЙ ########################################################################################################################################

function GetLentaCat() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	
	/* баброимпорт $xml = simplexml_load_file("http://bubr.ru/prokazan_news.xml"); $bubr=array(); $bubrj=0; if (!empty($xml)) { $count_str = count($xml->channel->item); $i = 0; while ($i <= ($count_str-1)): 
	$name=$xml->channel->item[$i]->title; $name2=$xml->channel->item[$i]->ttwo; $linkd=$xml->channel->item[$i]->link; $pic=$xml->channel->item[$i]->pic; $bubr[$i]["name"]=$name.". ".$name2; $bubr[$i]["link"]=$linkd.""; $bubr[$i]["pic"]=$pic.""; $i++; endwhile; } */	
	
	$onpage=$node["onpage"]; $pg = $dir[3] ? $dir[3] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; /* Новостей в каждом блоке */
	$data=DB("SELECT `".$table."`.name, `".$table."`.uid, `".$table."`.cat, `".$table."`.pic, `".$table."`.data, `".$table."`.id, `".$table."`.comcount, `".$table."`.comments, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`
	FROM `".$table."`	LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.`cat`='".(int)$dir[2]."' && `".$table."`.`stat`=1) GROUP BY 1 
	ORDER BY `".$table."`.`gis` DESC, `".$table."`.`data` DESC LIMIT $from, $onpage");
	for ($i=0; $i<$data["total"]; $i++) {
		
		#if (($i+1)%4==0){ $text.="<div class='NewsLentaList' id='NewsLentaList-".$bubr[$bubrj]["id"]."'><a href='".$bubr[$bubrj]["link"]."' target='_blank'><img src='".$bubr[$bubrj]["pic"]."' /></a><h2><a href='".$bubr[$bubrj]["link"]."' target='_blank'>".$bubr[$bubrj]["name"]."</a></h2>".$C."</div>".$C25; $bubrj++; }
		
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='http://".$VARS["mdomain"]."/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='http://".$VARS["mdomain"]."/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2 && (int)$ar["comcount"]!=0) { $coms="<div class='CommentBox'><a href='/".$dir[0]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  <a href='/".$dir[0]."/cat/".$ar["cat"]."'>".$ar["ncat"]."</a>,  Автор: ".$auth."</div>".$coms."</div></div>";
		if($data["total"]>($i+1)){ if (($i+1)%$onblock==0) { $text.=$C25."<div class='banner2' style='margin-left:10px;' id='Banner-6-".(floor($i/$onblock)+1)."'></div>".$C; } else { $text.=$C25; }}
	}
	$ncat=$ar["ncat"]; $data=DB("SELECT count(id) as `cnt` FROM `".$table."` WHERE (`cat`='".(int)$dir[2]."')"); @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/".$dir[2]."/[page]");
	return(array($text, $ncat));
}


#############################################################################################################################################
function GetRelevantNews($art, $limit, $tags2) {
	return;
	global $dir, $table; $tab=$table; $dtags='<div class="Dtags">'; $r=rand(0, 4);
	/* новость из телека */	$tables=array("auto_lenta", "business_lenta", "news_lenta" , "sport_lenta", "concurs_lenta", "demotivators_lenta");
	foreach($tables as $table) { $tmp=explode("_", $table); $link=$tmp[0]; $q1.="(SELECT `$table`.`id`, `$table`.`name`, `$table`.`data`, `$table`.`pic`, `_pages`.`domain`, `_pages`.`link` FROM `$table` LEFT JOIN `_pages` ON `_pages`.`link`='$link' WHERE (`$table`.`stat`='1' && `$table`.`onind`='1') GROUP BY 1) UNION "; }	
	$data=DB(trim($q1, "UNION ")." ORDER BY `data` DESC LIMIT 6"); for($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $tv[]=$ar; } $new=$tv[$r];
	if ($new["name"]!="" && $new["name"]) { $d=ToRusData($new["data"]); $dtags.="<a href='/$new[link]/view/$new[id]/' title='".$new["name"]."'><img src='/userfiles/picintv/".$new["pic"]."' style='width:200px; height:110px; border:none; border-radius:5px; margin-bottom:7px;' title='".$new["name"]."' alt='".$new["name"]."' /></a><a href='/$new[link]/view/$new[id]/' title='".$new["name"]."'>".$new["name"]."</a><br><b>".$d[4]."</b><div class='C'></div><div class='CB'></div>"; }
	/* новости по тэгам */ $q=""; foreach ($art as $k=>$v) { if ($v!='') { $q.="`tags` LIKE '%,".$v.",%' OR "; }} $qr="SELECT `pic`,`data`,`name`,`id` FROM `".$tab."` WHERE ((".trim($q, "OR ").") AND (`id`!='".(int)$dir[2]."') AND (`stat`='1')) ORDER BY `data` DESC LIMIT ".$limit; $data2=DB($qr);
	if ($data2["total"]>0) { for ($i=0; $i<$data2["total"]; $i++): @mysql_data_seek($data2["result"],$i); $ar=@mysql_fetch_array($data2["result"]); $d=ToRusData($ar["data"]); $dtags.="<a href='/$dir[0]/view/$ar[id]/' title='".$ar["name"]."'>".$ar["name"]."</a><br><b>".$d[4]."</b><div class='C'></div><div class='CB'></div>"; endfor; $dtags.="<div class='C10'></div>Темы: ".$tags2; }
	$dtags.='</div>'; return $dtags;
}


####### ВЫВОД СОДЕРЖАНИЯ НОВОСТИ ######################################################################################################################################
function GetLentaId() {
	global $VARS, $GLOBAL, $dir, $RealHost, $Page, $node, $table, $table2, $table3, $table4, $table5, $table6, $table7, $link, $C, $C5, $C10, $C15, $C20, $ROOT, $forums; 
	
	### Основной запрос
	### Основной запрос
	if (strpos($dir[2],"-")===false) { $alias="`id`='".(int)$dir[2]."'"; } else { $alias="`alias`='".$dir[2]."'"; }
	$q="SELECT `".$table."`.*, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`, `_users`.`avatar`, `$table5`.`id` as `vvid` FROM `".$table."`
	LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `$table5` ON `$table5`.`pid`=`$table`.`id` AND `$table5`.`link`='".$dir[0]."' AND `$table5`.`vid`='0' AND `$table5`.`stat`=1	
	LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.".$alias.") GROUP BY 1 LIMIT 1";
	$data=DB($q); @mysql_data_seek($data["result"], 0); $item=@mysql_fetch_array($data["result"]);
	
	$ds=$item["ds"]; $kw=$item["kw"]; $cap=$item["name"]; $title=$item["title"]; $dir[2]=$item["id"];
	
	####################################################################################
	if ($item["promo"]!=1) { $ban="<div class='banner5' id='Banner-11-1'></div>"; }
	####################################################################################
	
	### Фотография
	if ($item["pic"]!="") {
		$pic="<div class='PicItem' title='$cap'>"; 
			if (strpos($item["pic"], "old")!=0) { $path='/'.$item["pic"]; } else { $path='/userfiles/picitem/'.$item["pic"]; } $pic.="<img src='".$path."' title='$cap' alt='$cap' />";
			if ($item["cens"]!="") { $pic.="<div class='Cens'>".$item["cens"]."</div>"; } if ($item["picauth"]!="") { $pic.="<div class='PicAuth'>Фото: ".$item["picauth"]."</div>"; }
		$pic.="</div>".$C20;
	}
	
	### Претекст текст
	if ($item["lid"]!="") { $lid="<div class='ItemLid'>".$item["lid"]."</div>".$C15; }
	
	### Основной текст
	$maintext=CrossLinks($item["text"]).$C15;
	 
	### Фото-отчет
	$p=DB("SELECT * FROM `".$table2."` WHERE (`pid`='".(int)$dir[2]."' && `link`='".$dir[0]."' && `point`='report' && `stat`=1) order by `rate` ASC"); $report='';
	if ($p["total"]>0) { for ($i=0; $i<$p["total"]; $i++): mysql_data_seek($p["result"],$i); $ar=@mysql_fetch_array($p["result"]); 
		if ($ar["sets"]==0) { $report.="<a href='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' rel='prettyPhoto[gallery]'><img src='/userfiles/picnews/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' class='ReportPicSmall'></a><h4>".$ar["name"]."</h4>";
		} else { $report.="<h4>".$ar["name"]."</h4><a href='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' rel='prettyPhoto[gallery]'><img src='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' class='ReportPicBig'></a>"; }
		$report.=CrossLinks($ar["text"]).$C15;
	endfor; $report.=$C; }
	
	### Фото-альбом
	$p=DB("SELECT * FROM `".$table2."` WHERE (`pid`='".(int)$dir[2]."' && `link`='".$dir[0]."' && `point`='album' && `stat`=1) order by `rate` ASC");
	if ($p["total"]>0) { $album="<h3>Фотоальбом:</h3>$C10<div class='ItemAlbum'>"; for ($i=0; $i<$p["total"]; $i++): mysql_data_seek($p["result"],$i); $ar=@mysql_fetch_array($p["result"]); $album.="<a href='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' rel='prettyPhoto[gallery]'><img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."'></a>"; endfor; $album.="</div>".$C; }
	
	### Голосование
	if ((int)$item["vvid"]!=0) { $voting=$C5."<div id='ItemVotingDiv'></div><script>GetItemVoting(".(int)$item["vvid"].");</script>".$C5; }
	
	### Видео
	$p=DB("SELECT * FROM `".$table4."` WHERE (`pid`='".(int)$dir[2]."' && `link`='".$dir[0]."') LIMIT 1"); if ($p["total"]>0) { $video=""; for ($i=0; $i<$p["total"]; $i++): mysql_data_seek($p["result"],$i); $ar=@mysql_fetch_array($p["result"]); if ($ar["text"]!="") { if ($ar["name"]!="") { $video.="<h4>".$ar["name"]."</h4>"; } $vid=GetNormalVideo($ar["text"]); $video.=$C15.$vid.$C15; } endfor; }
	
	
	### Читайте также
	$readmore='<h2>Читайте также:</h2>'.$C5;
	$p=DB("SELECT `id`,`name`,`pic`,`tags` FROM `".$link."_lenta` WHERE (`stat`=1 && `id`!='".(int)$dir[2]."') ORDER BY `data` DESC LIMIT 5"); for ($i=0; $i<$p["total"]; $i++): mysql_data_seek($p["result"],$i); $ar=@mysql_fetch_array($p["result"]);
	$readmore.="<div class='ReadMore'><a href='/".$link."/view/".$ar["id"]."' title='$ar[name]'><img src='/userfiles/pictavto/$ar[pic]'>".$ar["name"].TaGi($ar["tags"])."</a></div>"; endfor; $readmore.=$C10;
	
	
	### Тэги
	$t=trim($item["tags"], ","); $tags=""; if ($t!="") { $ta=DB("SELECT * FROM `_tags` WHERE (`id` IN (".$t.")) LIMIT 3"); for ($i=0; $i<$ta["total"]; $i++): @mysql_data_seek($ta["result"],$i); $ar=@mysql_fetch_array($ta["result"]);
	$tags.="<a href='/tags/$ar[id]'>$ar[name]</a>, "; endfor; $tags2=trim($tags, ", "); $tags="Тэги: ".trim($tags, ", "); } $mixblock.="<div class='ItemTags'>".$tags."</div>".$C10;
	
	### Аватар автора, Автор и дата
	if ($item["avatar"]=="" || !is_file($ROOT."/".$item["avatar"]) || filesize($ROOT."/".$item["avatar"])<100) { $avatar="<img src='/userfiles/avatar/no_photo.jpg'>"; } else { $avatar="<img src='/".$item["avatar"]."'>"; }
	$d=ToRusData($item["data"]); if ($item["uid"]!=0 && $item["nick"]!="") { $auth=$avatar."Автор: <a href='http://".$VARS["mdomain"]."/users/view/".$item["uid"]."/'>".$item["nick"]."</a>, ".$d[1]; } else { $auth="<img src='/userfiles/avatar/no_photo.jpg' />Автор: Народный корреспондент, ".$d[1]; }
	$mixblock.="<div class='ItemAuth'>".$auth."<br />Если Вы нашли ошибку, <u>выделите фразу с ошибкой</u> и нажмите Ctrl+Enter</div>";
	
	### Карта событий
	$edata=DB("SELECT `".$table7."`.*, `_pages`.`sets` FROM `".$table7."` LEFT JOIN `_pages` ON `_pages`.`module`='eventmap' WHERE (`".$table7."`.`pid`=".$item['id']." AND `".$table7."`.`link`='".$link."' AND `".$table7."`.`stat`=1)"); if($edata["total"]) {
		@mysql_data_seek($edata["result"],0); $ev=@mysql_fetch_array($edata["result"]);
		if($ev['maps']){
			$event = '<script type="text/javascript" src="	http://maps.api.2gis.ru/1.0"></script><div id="Map" style="width:500px; height:300px;"></div>';
			$event .= '<script type="text/javascript">initMap(['.$ev['id'].', "'.htmlspecialchars($ev['name']).'", "'.$ev['maps'].'", "'.($ev['icon'] ? '/userfiles/mapicon/'.$ev['icon'] : '').'"]);</script>';
		}
		else if($ev['data']){
			$event_month_days = date('t', $ev['data']);
			$event_day = date('j', $ev['data']);
			$event_month = date('n', $ev['data']);
			$event_first_day = getdate(mktime(0, 0, 0, date('m', $ev['data']), 1, date('Y', $ev['data'])));
			$event_last_day = getdate(mktime(0, 0, 0, date('m', $ev['data']), $event_month_days, date('Y', $ev['data'])));		
						
			$calendar = '<div class="Calendar"><table>';
			$calendar .= '<tr><th colspan="7">'.$GLOBAL["mothi"][date('n', $ev['data'])].' '.date('Y', $ev['data']).'</th></tr>';
			$calendar .= '<tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';				
			for($i = 2 - $event_first_day['wday'], $j = 1; $i <= $event_month_days + (7 - ($event_last_day['wday'] == 0 ? 7 : $event_last_day['wday'])); $i++, $j++){
				$calendar .= '<td><span'.($i == $event_day ? ' class="active" title="Начало"' : '').'>'.($i > 0 && $i <= $event_month_days ? $i : '').'</span></td>';
				if($j % 7 == 0) $calendar .= '</tr><tr>';
			}
			$calendar .= '</tr></table></div>';
			$event = $calendar;
		}
	}
	### Лого и контакты
	$cdata=DB("SELECT * FROM `".$table6."` WHERE (`pid`=".$item['id']." AND `link`='".$link."')"); if($cdata["total"]) { @mysql_data_seek($cdata["result"],0); $con=@mysql_fetch_array($cdata["result"]);
	if($con['name']){ $contacts = $C10.'<div class="WhiteBlock">'; if ($con["pic"]!="") { $contacts .= "<div style='float:left; margin-right:10px;'><img src='/userfiles/picpreview/".$con["pic"]."' title='".$con["name"]."' width='80' /></div>"; }
	$contacts .= "<h4>".$con["name"]."</h4><p class='contacts'><img src='/template/standart/address.png' style='vertical-align:middle;' />"; if($con["address"]) { $contacts.="<strong class='address'>".$con["address"]."</strong>"; }
	if($con["address"] && $con["phone"]) { $contacts.="<strong class='address'>. </strong>"; } if($con["phone"]) { $contacts.="<strong class='phone'>тел: <span>".$con["phone"]."</span></strong>"; } $contacts.="</p>".$con["anonce"].$C.'</div>'; }}
	
	### Лайки 
	$likes=$C10."<div class='Likes' style='text-align:center;'>".Likes(Hsc($cap), "", "http://".$RealHost.$path, Hsc(strip_tags($lid))).$C."</div>".$C10;
	
	if ($item["pay"]!="") { $mixblock.=$C20."<div class='PayBlock'>".$item["pay"]."</div>".$C; }

	### Платные ссылки
	if ($item["adv"]!="") { $mixblock.=$C10."<div class='CBG'></div>".$C5."<div class='AdvBlock'>".$item["adv"]."</div>".$C; }
	
	### Новости по таким же тэгам
	//$dtags=''; $art=explode(",", $item["tags"]); if (count($art)>2 && mb_strlen(strip_tags($maintext))>1000 && $item["promo"]!="1") {	$limit=(round(mb_strlen(strip_tags($maintext))/900)); $dtags=GetRelevantNews($art, $limit, $tags2); }
	
	### Заключительный текст
	if ($item["endtext"]!="") { $endtext=$C20."<div class='EndText'>".CrossLinks($item["endtext"])."</div>".$C10; }
	$text=$pic.$ban."<div class='ArticleContent'>".$lid.$dtags.$maintext.$voting.$report.$video.$endtext.$album.$event.$contacts.$frm.$likes.$readmore.$mixblock."</div>";
	
	return(array($text, $cap, $title, $kw, $ds));
}


?>