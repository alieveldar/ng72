<?	
$file="_leftblock-new_default"; if (RetCache($file, "cacheblock")=="true") { list($Page["LeftContent"], $cap)=GetCache($file, 0); } else { list($Page["LeftContent"], $cap)=CreateLeftBlock(); SetCache($file, $Page["LeftContent"], "", "cacheblock"); }

// #### ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####	

if ($link=="afisha") {
	$defdata=""; if ($start=="date") { $tmp=explode(".", $dir[2]); $dirs=$tmp[0].".".$tmp[1].".".$tmp[2]; $defdata='$("#datepick1").datepicker("setDate", "'.$dirs.'")'; }
	$Calendar='<link rel="stylesheet" type="text/css" href="/modules/standart/js/ui-theme/JQuery.UI.css"><script type="text/javascript" language="javascript" src="/modules/standart/js/JQuery.UI.js"></script>';
	$Calendar.='<div id="datepick1" style="width:200px;"></div><script type="text/javascript">$("#datepick1").datepicker({ onSelect: function(dateText, inst) { document.location="/afisha/date/"+dateText; }});
	$.extend($.datepicker.regional["ru"]); $("#datepick1").datepicker("option","dateFormat","dd.mm.yy"); '.$defdata.'</script>'; 
	$Page["LeftContent"]="<h2>Выбери дату:</h2>".$Calendar.$C20.$Page["LeftContent"];
}

// #### ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####

if ($link=="blogs") {
	global $Domains, $SubDomain, $GLOBAL, $C20, $C10, $C25, $C; $text=''; 
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
		if ($GLOBAL["USER"]["role"]>=1) { $text.="<a href='/blogs/user/".$GLOBAL["USER"]["id"]."' class='BlogBtn'>Мой блог</a><a href='/blogs/temp' class='BlogBtn'>Черновики</a><a href='/blogs/add' class='BlogBtn'>Добавить пост</a>".$C10;
		} else { $text.="<a href='/add/2' class='BlogBtn'>Как стать блогером?</a>".$C10; }
		$text.="<h2>Топ блоггеров:</h2>".$C5;
		$data=DB("SELECT `blogs_lenta`.`uid`, count(`blogs_lenta`.`id`) as `cnt`, `_users`.`avatar`, `_users`.`nick` FROM `blogs_lenta` LEFT JOIN `_users` ON  `_users`.`id`=`blogs_lenta`.`uid` WHERE (`blogs_lenta`.`stat`=1) GROUP BY `blogs_lenta`.`uid` ORDER BY `cnt` DESC LIMIT 15");
		for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);
			$text.="<div class='itemlist'><a href='/blogs/user/".$ar["uid"]."' style='font-size:15px;'><img src='/".$ar["avatar"]."' style='width:53px; margin-right:10px; float:left;' />";
			$text.=str_replace(" ", "<br>", $ar["nick"])."</a><br><span style='color:#777; font-size:10px; line-height:20px;'>Записей: ".(int)$ar["cnt"]."</span></div>".$C15;
		}
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$Page["LeftContent"]=$text.$C20.$Page["LeftContent"];
}

// #### ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####

if ($link=="all") {
	$defdata=""; if ($start=="date") { $tmp=explode(".", $dir[2]); $dirs=$tmp[0].".".$tmp[1].".".$tmp[2]; $defdata='$("#datepick1").datepicker("setDate", "'.$dirs.'")'; }
	$Calendar='<link rel="stylesheet" type="text/css" href="/modules/standart/js/ui-theme/JQuery.UI.css"><script type="text/javascript" language="javascript" src="/modules/standart/js/JQuery.UI.js"></script>';
	$Calendar.='<div id="datepick1" style="width:200px;"></div><script type="text/javascript">$("#datepick1").datepicker({ onSelect: function(dateText, inst) { document.location="/all/date/"+dateText; }});
	$.extend($.datepicker.regional["ru"]); $("#datepick1").datepicker("option","dateFormat","dd.mm.yy"); '.$defdata.'</script>'; 
	$Page["LeftContent"]=$Calendar.$C20.$Page["LeftContent"];
}

// #### ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####

function CreateLeftBlock() {
	global $Domains, $SubDomain, $GLOBAL, $C20, $C10, $C25, $C; $text=''; 
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
		$text.='<div class="banner3" id="Banner-10-1"></div>';
		$text.='<capt>Главное в городе</capt>'.$C.TheNewestInKazan(7);
		$text.='<div class="banner3" id="Banner-10-3"></div>';
		$com=TheCommerceInKazan(4, 0); if ($com!="") { $text.='<capt>Интересно</capt>'.$C.$com; }
		$text.='<div class="banner3" id="Banner-10-5"></div>';
		$text.='<div class="banner3" id="Banner-10-7"></div>';
		$com=TheCommerceInKazan(4, 8); if ($com!="") { $text.='<capt>Интересно</capt>'.$C.$com; }
		$text.='<div class="banner3" id="Banner-10-9"></div>';
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='C10'></div>"; return(array($text, ""));
}

// #### ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  ####  #### 
?>