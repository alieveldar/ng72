<?
$table=$link."_lenta";
$table2="_widget_pics";
$table3="_widget_votes";
$table4="_widget_video";
$table5="_widget_voting";
$table6="_widget_contacts";
$table7="_widget_eventmap";



if ($start=="") { $start="list"; $dir[1]="list"; } $file=$table."-".$start.".".$page.".".$id; $edit="";
#############################################################################################################################################
### Вывод списка новостей общий
if ($start=="list") { if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=GetLentaList(); SetCache($file, $text, ""); } $Page["Content"]=$text; $Page["Caption"]=$node["name"]; }
if ($start=="user") { list($text, $cap)=GetLentaUser(); $Page["Content"]=$text; $Page["Caption"]=$cap; }
if ($start=="temp") { list($text, $cap)=GetLentaTemp(); $Page["Content"]=$text; $Page["Caption"]=$cap; }
if ($start=="delete") { list($text, $cap)=GetLentaDel(); $Page["Content"]=$text; $Page["Caption"]=$cap; }
if ($start=="add") { list($text, $cap)=GetLentaAdd(); $Page["Content"]=$text; $Page["Caption"]=$cap; }
if ($start=="edit") { list($text, $cap)=GetLentaEdit(); $Page["Content"]=$text; $Page["Caption"]=$cap; }
if ($start=="view") { ### Вывод публикации
	$data=DB("SELECT `comments`, `stat`, `pic`, `uid` FROM `".$table."` WHERE (`id`='".(int)$dir[2]."' && (`stat`=1 OR `uid`='".(int)$GLOBAL["USER"]["id"]."' OR ".(int)$GLOBAL["USER"]["role"].">1)) LIMIT 1");
	if ($data["total"]==1) {
		@mysql_data_seek($data["result"], 0); $new=@mysql_fetch_array($data["result"]); DB("UPDATE `".$table."` SET `seen`=`seen`+1 WHERE (`id`='".(int)$dir[2]."' ".$where.") LIMIT 1");
		if (RetCache($file)=="true") { list($text, $cap, $title, $kw, $ds)=GetCache($file); } else { list($text, $cap, $title, $kw, $ds)=GetLentaId(); SetCache($file, $text, $cap, "", $title, $kw, $ds); }
		UserTracker($link, $page); $text.=$C20.UsersComments($link, $page, $new["comments"], 1, $page);
		if ($GLOBAL["USER"]["role"]>1) { $edit=$C10."<div id='AdminEditItem'><a href='".$GLOBAL["mdomain"]."/admin/?cat=".$link."_edit&id=".(int)$dir[2]."'>Редактировать</a></div>"; }
		if ($new["uid"]==$GLOBAL["USER"]["id"]) { $edit=$C10."<div id='AdminEditItem'><a href='/".$link."/edit/".(int)$dir[2]."'>Редактировать пост</a></div>"; }
		if ($GLOBAL["USER"]["role"]>1 || $GLOBAL["USER"]["id"]==$new["uid"]) { if ($new["stat"]==1) { $dttus="Опубликовано"; } else { $dttus="Черновик"; } $edit.="<div class='dttus'>".$dttus."</div>".$C15; }	
		$Page["Content"]=$edit.$text; $Page["Title"]=$title; $Page["Caption"]=$cap;  $Page["Description"]=$ds; $Page["KeyWords"]=$kw;
	} else { $cap="Материал не найден"; $text=@file_get_contents($ROOT."/template/404.html"); $Page["Content"]=$text; $Page["Caption"]=$cap; }
}
### ЛЕНТА ПОСТОВ ########################################################################################################################
function GetLentaList() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25; $cap=$node["name"];
	$onpage=$node["onpage"]; $pg = $dir[2] ? $dir[2] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; 
	$data=DB("SELECT `".$table."`.name, `".$table."`.uid, `".$table."`.data, `".$table."`.id, `_users`.`avatar`, `_users`.`nick` FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` WHERE (`".$table."`.`stat`=1) GROUP BY 1 ".$orderby." LIMIT $from, $onpage");
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); 
		$auth="<a href='/".$dir[0]."/user/".$ar["uid"]."'>".$ar["nick"]."</a>"; $pic="<img src='/".$ar["avatar"]."' title='".$ar["name"]."' />"; 
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C;
		$text.="<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).", ".$auth;
		$text.="</div>".$C."</div></div>".$C25;
	}
	$data=DB("SELECT count(id) as `cnt` FROM `".$table."` WHERE (`uid`='".$GLOBAL["USER"]["id"]."' && `stat`=0)"); @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]);
	$text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return(array($text, $cap));
}
##### ПОЛЬЗОВАТЕЛИ  ########################################################################################################################################
function GetLentaUser() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	$onpage=$node["onpage"]; $pg = $dir[2] ? $dir[2] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; 
	$data=DB("SELECT `".$table."`.name, `".$table."`.uid, `".$table."`.data, `".$table."`.id, `_users`.`avatar`, `_users`.`nick` FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` 
	WHERE (`".$table."`.`uid`='".$dir[2]."' && `".$table."`.`stat`=1) GROUP BY 1 ".$orderby);
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); 
		$auth="<a href='/".$dir[0]."/user/".$ar["uid"]."'>".$ar["nick"]."</a>"; $pic="<img src='/".$ar["avatar"]."' title='".$ar["name"]."' />";
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$dir[0]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C;
		$text.="<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).", ".$auth;
		if ($ar["uid"]==$GLOBAL["USER"]["id"]) { $text.=" - <a href='/".$dir[0]."/edit/".$ar["id"]."' style='color:green;'>редактировать</a></div><div class='Other' style='float:right; '><a href='/".$dir[0]."/delete/".$ar["id"]."' style='color:red;'>удалить</a>"; }
		$text.="</div>".$C."</div></div>".$C25;
	}
	return(array($text, "Блоггер: ".$ar["nick"]));
}
##### ЧЕРНОВИКИ  ########################################################################################################################################
function GetLentaTemp() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	if ($GLOBAL["USER"]["role"]<1) { return(array("У вас нет доступа к этому разделу", "")); }
	$onpage=$node["onpage"]; $pg = $dir[2] ? $dir[2] : 1; $orderby=$ORDERS[$node["orderby"]]; $from=($pg - 1)*$onpage; $onblock=4; 
	$data=DB("SELECT `".$table."`.name, `".$table."`.uid, `".$table."`.data, `".$table."`.id, `_users`.`avatar`, `_users`.`nick` FROM `".$table."` LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` 
	WHERE (`".$table."`.`uid`='".$GLOBAL["USER"]["id"]."' && `".$table."`.`stat`=0) GROUP BY 1 ".$orderby." LIMIT $from, $onpage");
	for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); 
		$auth="<a href='/".$dir[0]."/user/".$ar["uid"]."'>".$ar["nick"]."</a>";
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><h2><a href='/".$dir[0]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C;
		$text.="<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).", ".$auth;
		if ($ar["uid"]==$GLOBAL["USER"]["id"]) { $text.=" - <a href='/".$dir[0]."/edit/".$ar["id"]."' style='color:green;'>редактировать</a></div><div class='Other' style='float:right; '><a href='/".$dir[0]."/delete/".$ar["id"]."' style='color:red;'>удалить</a>"; }
		$text.="</div>".$C."</div></div>".$C25;
	}
	$data=DB("SELECT count(id) as `cnt` FROM `".$table."` WHERE (`uid`='".$GLOBAL["USER"]["id"]."' && `stat`=0)");
	@mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text.=Pager2($pg, $onpage, ceil($ar["cnt"]/$onpage), $dir[0]."/".$dir[1]."/[page]");
	return(array($text, "Неопубликованные записи"));
}
##### УДАЛИТЬ ЗАПИСЬ  ########################################################################################################################################
function GetLentaDel() {
	global $VARS, $GLOBAL, $dir, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $table, $table2, $table3, $table4, $table5, $C, $C20, $C10, $C25;
	if ($GLOBAL["USER"]["role"]<1) { return(array("У вас нет доступа к этому разделу", "")); }
	$data=DB("SELECT `".$table."`.uid, `".$table."`.name FROM `".$table."` WHERE (`".$table."`.`id`='".$dir[2]."') limit 1"); @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); 
	if ($ar["uid"]==$GLOBAL["USER"]["id"] && $GLOBAL["USER"]["id"]!=0) { DB("DELETE FROM `".$table."` WHERE (`".$table."`.`id`='".$dir[2]."') LIMIT 1"); $text="Запись «".$ar["name"]."» успешно удалена!"; }
	return(array($text, "Удаление записи"));
}


####### ВЫВОД СОДЕРЖАНИЯ ######################################################################################################################################
function GetLentaId() {
	global $VARS, $GLOBAL, $dir, $RealHost, $Page, $node, $table, $table2, $table3, $table4, $table5, $table6, $table7, $link, $C, $C5, $C10, $C15, $C20, $ROOT, $forums; 
	### Основной запрос
	$data=DB("SELECT `".$table."`.*, `".$dir[0]."_cats`.`name` as `ncat`, `_users`.`nick`, `_users`.`avatar`, `$table5`.`id` as `vvid` FROM `".$table."`
	LEFT JOIN `_users` ON `".$table."`.`uid`=`_users`.`id` LEFT JOIN `$table5` ON `$table5`.`pid`=`$table`.`id` AND `$table5`.`link`='".$dir[0]."' AND `$table5`.`vid`='0' AND `$table5`.`stat`=1	
	LEFT JOIN `".$dir[0]."_cats` ON `".$dir[0]."_cats`.`id`=`".$table."`.`cat` WHERE (`".$table."`.`id`='".(int)$dir[2]."') GROUP BY 1 LIMIT 1");
	
	@mysql_data_seek($data["result"], 0); $item=@mysql_fetch_array($data["result"]); $ds=$item["ds"]; $kw=$item["kw"]; $cap=$item["name"]; $title=$item["title"];
	### Фотография
	if ($item["pic"]!="") { $pic="<div class='PicItem' title='$cap'>"; $pic.="<img src='".'/userfiles/picitem/'.$item["pic"]."' title='$cap' alt='$cap' />";
	if ($item["picauth"]!="") { $pic.="<div class='PicAuth'>Фото: ".$item["picauth"]."</div>"; } $pic.="</div>".$C20;	}
	### Претекст текст
	if ($item["lid"]!="") { $lid="<div class='ItemLid'>".$item["lid"]."</div>".$C15; }
	### Основной текст
	$maintext=$item["text"].$C15;
	### Фото-отчет
	$p=DB("SELECT * FROM `".$table2."` WHERE (`pid`='".(int)$dir[2]."' && `link`='".$dir[0]."' && `point`='report' && `stat`=1) order by `rate` ASC"); $report='';
	if ($p["total"]>0) { for ($i=0; $i<$p["total"]; $i++): mysql_data_seek($p["result"],$i); $ar=@mysql_fetch_array($p["result"]); 
		if ($ar["sets"]==0) { $report.="<a href='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' rel='prettyPhoto[gallery]'><img src='/userfiles/picnews/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' class='ReportPicSmall'></a><h4>".$ar["name"]."</h4>";
		} else { $report.="<h4>".$ar["name"]."</h4><a href='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' rel='prettyPhoto[gallery]'><img src='/userfiles/picoriginal/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' class='ReportPicBig'></a>"; }
		$report.=$ar["text"].$C15;
	endfor; $report.=$C; }
	### Аватар автора, Автор и дата
	if ($item["avatar"]=="" || !is_file($ROOT."/".$item["avatar"]) || filesize($ROOT."/".$item["avatar"])<100) { $avatar="<img src='/userfiles/avatar/no_photo.jpg'>"; } else { $avatar="<img src='/".$item["avatar"]."'>"; }
	$d=ToRusData($item["data"]); if ($item["uid"]!=0 && $item["nick"]!="") { $auth=$avatar."Автор: <a href='http://".$VARS["mdomain"]."/".$link."/user/".$item["uid"]."/'>".$item["nick"]."</a>, ".$d[1]; } else { $auth="<img src='/userfiles/avatar/no_photo.jpg' />Автор: Народный корреспондент, ".$d[1]; }
	$mixblock.="<div class='ItemAuth'>".$auth."</div>";
	### Лайки 
	$likes=$C10."<div class='Likes' style='text-align:center;'>".Likes(Hsc($cap), "", "http://".$RealHost.$path, Hsc(strip_tags($lid))).$C."</div>".$C10;
	$text=$pic.$ban."<div class='ArticleContent'>".$lid.$dtags.$maintext.$report.$video.$endtext.$voting.$album.$event.$contacts.$frm.$likes.$readmore.$mixblock."</div>";
	return(array($text, $cap, $title, $kw, $ds));
}
#############################################################################################################################################

function GetLentaAdd() {
	global $VARS, $GLOBAL, $dir, $RealHost, $RealPage, $Page, $node, $table, $table2, $table3, $link, $C, $C5, $C10, $C15, $C20, $ROOT;
	if ($GLOBAL["USER"]["role"]<1) { return(array("У вас нет доступа к этому разделу", "Добавить запись в блог")); }
	$P=$_SESSION['Data']; if (isset($P["sendbutton"])) { $postname = trim(Dbcut(strip_tags($P['postname']))); $posttext=trim(Dbcut($P['posttext'])); $showit=(int)$P['showit']; 
		$q="INSERT INTO `".$link."_lenta` (`data`,`uid`,`name`,`text`,`stat`) VALUES ('".time()."','".$GLOBAL["USER"]["id"]."','".$postname."','".$posttext."','".$showit."')"; DB($q); $last=DBL();
		$_SESSION["Msg"]="<div class='SuccessDiv'>Ваша тема успешно добавлена! <a href='/$node[link]/view/$last'><u>Перейти к созданной записи</u></a></div>"; SD();
	}
	$text.=$_SESSION["Msg"].'<div class="RoundText" id="Tgg"><form action="/modules/SubmitForm.php?bp='.$RealPage.'" enctype="multipart/form-data" method="post"><table>';
	$text.='<script src="/modules/standart/wysiwygblog/editor.js"></script><script src="/modules/standart/wysiwygblog/ru.js"></script><link rel="stylesheet" href="/modules/standart/wysiwygblog/editor.css" />
	<script>$(document).ready(function() { var buttons=["html","|","bold","italic","deleted","|","unorderedlist","orderedlist","outdent","indent","|","image","video","link","|","alignment","|","horizontalrule","table"];
	var tags=["span", "a", "br", "p", "b", "i", "strike", "u", "img", "iframe", "video", "object", "embed", "param", "blockquote", "ul", "ol", "li", "hr", "strong", "h3", "table", "tr", "td"];
	$("#newtheme").redactor({focus:true, lang:"ru", buttons:buttons, allowedTags:tags, autoresize:false, imageUpload:"/modules/standart/wysiwyg/imageupload.php" }); })</script>';
	$text.='<tr class="TRLine0"><td class="VarText"><h3>Заголовок<star>*</star></h3></td></tr><tr><td class="LongInput"><input name="postname" type="text" value="" class="JsVerify2" style="width:97% !important;"></td></tr>';
	$text.='<tr class="TRLine1"><td class="VarText"><h3>Текст</h3></td></tr><tr><td class="LongInput"><textarea id="newtheme" name="posttext" style="outline:none; width:98% !important; height:500px;"></textarea></td></tr>';
	$text.='<tr class="TRLine0"><td class="VarText"><input type="checkbox" name="showit" value="1"> опубликовать запись (иначе останется в черновиках)</td></tr>';
	$text.='</table>'.$C10.'<div class="CenterText"><input type="submit" name="sendbutton" id="sendbutton" class="SaveButton" value="Добавить пост"></div>';
	$text.='</form></div>'; $_SESSION["Msg"]=""; return(array($text, "Добавить запись в блог"));
}

#############################################################################################################################################

function GetLentaEdit() {
	global $VARS, $GLOBAL, $dir, $RealHost, $RealPage, $Page, $node, $table, $table2, $table3, $link, $C, $C5, $C10, $C15, $C20, $ROOT;
	if ($GLOBAL["USER"]["role"]<1) { return(array("У вас нет доступа к этому разделу", "Редактировать запись")); }
	$P=$_SESSION['Data']; if (isset($P["sendbutton"])) { $postname = trim(Dbcut(strip_tags($P['postname']))); $posttext=trim(Dbcut($P['posttext'])); $showit=(int)$P['showit']; 
		$q="UPDATE `".$link."_lenta` SET `name`='".$postname."', `text`='".$posttext."', `stat`='".$showit."' WHERE (`uid`='".$GLOBAL["USER"]["id"]."' && `id`='".(int)$dir[2]."')"; DB($q);
		$_SESSION["Msg"]="<div class='SuccessDiv'>Ваша тема успешно отредактирована! <a href='/$node[link]/view/".(int)$dir[2]."'><u>Перейти к просмотру записи</u></a></div>"; SD();
	}
	
	$data=DB("SELECT `".$table."`.`name`, `".$table."`.`stat`, `".$table."`.`text` FROM `".$table."` WHERE (`".$table."`.`id`='".$dir[2]."' && `uid`='".$GLOBAL["USER"]["id"]."') LIMIT 1");
	if ($data["total"]!=1) { return(array("У вас нет доступа к этой записи", "Редактировать запись")); }
	@mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); if ($ar["stat"]==1) { $chk="checked"; }
	
	$text.=$_SESSION["Msg"].'<div class="RoundText" id="Tgg"><form action="/modules/SubmitForm.php?bp='.$RealPage.'" enctype="multipart/form-data" method="post"><table>';
	$text.='<script src="/modules/standart/wysiwygblog/editor.js"></script><script src="/modules/standart/wysiwygblog/ru.js"></script><link rel="stylesheet" href="/modules/standart/wysiwygblog/editor.css" />
	<script>$(document).ready(function() { var buttons=["html","|","bold","italic","deleted","|","unorderedlist","orderedlist","outdent","indent","|","image","video","link","|","alignment","|","horizontalrule","table"];
	var tags=["span", "a", "br", "p", "b", "i", "strike", "u", "img", "iframe", "video", "object", "embed", "param", "blockquote", "ul", "ol", "li", "hr", "strong", "h3", "table", "tr", "td"];
	$("#newtheme").redactor({focus:true, lang:"ru", buttons:buttons, allowedTags:tags, autoresize:false, imageUpload:"/modules/standart/wysiwyg/imageupload.php" }); })</script>';
	$text.='<tr class="TRLine0"><td class="VarText"><h3>Заголовок<star>*</star></h3></td></tr><tr><td class="LongInput"><input name="postname" type="text" value="'.$ar['name'].'" class="JsVerify2" style="width:97% !important;"></td></tr>';
	$text.='<tr class="TRLine1"><td class="VarText"><h3>Текст</h3></td></tr><tr><td class="LongInput"><textarea id="newtheme" name="posttext" style="outline:none; width:98% !important; height:500px;">'.$ar['text'].'</textarea></td></tr>';
	
	$text.='<tr class="TRLine0"><td class="VarText"><input type="checkbox" name="showit" value="1" '.$chk.'> опубликовать запись (иначе останется в черновиках)</td></tr>';
	$text.='</table>'.$C10.'<div class="CenterText"><input type="submit" name="sendbutton" id="sendbutton" class="SaveButton" value="Сохранить пост"></div>';
	$text.='</form></div>'; $_SESSION["Msg"]=""; return(array($text, "Редактировать запись"));
}

#############################################################################################################################################

?>