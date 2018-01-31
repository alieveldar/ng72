<?
$file="_topblock-newprodefault";
if (RetCache($file, "cacheblock")=="true") { list($Page["TopContent"], $cap)=GetCache($file, 0); } else { list($Page["TopContent"], $cap)=CreateTopBlock(); SetCache($file, $Page["TopContent"], "", "cacheblock"); }	
$Page["TopContent"]=str_replace("<!--USER-->", $Page["UserAuth"], $Page["TopContent"]); foreach ($MENU as $key=>$value) { $Page["TopContent"]=str_replace('$'.$key, $value, $Page["TopContent"]); }


function CreateTopBlock() {
	global $MENU; 
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text="<div id='ProHead'>
		<div class='logo'><a href='http://ng72.ru'><img src='/template/index/logo.png' /></a></div>
		<div class='navs'>
			<div class='user'><!--USER--></div>
			<div class='navsicon'>".SocialGroups()."</div>
			<div class='navsmenu'>".'$navs'."</div>
		</div><div class='C'></div>
		<div class='menu'>".'$newmenu'."</div><div class='C'></div>
		<div class='wdgt'>".getWidgetsInHead()."</div><div class='C'></div>
	</div>
	<div class='C15'></div>
	<div id='MainTags'>".'$maintags'."</div>";
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	return(array($text, ""));
}


function getWidgetsInHead() {
	$xml=simplexml_load_file("http://export.yandex.ru/bar/reginfo.xml?region=55");
	if ($xml) {
		$lvl=$xml->traffic->level; $icnt=$xml->traffic->icon; $txtt=$xml->traffic->hint; $temp=$xml->weather->day->day_part->temperature; $icnpa=$xml->weather->day->day_part->xpath('//image-v3'); $txtp=$xml->weather->day->day_part->weather_type;
		$icnp=$icnpa[0]; if ($lvl==1) { $balls="<b>".$lvl."</b> балл"; } elseif ($lvl==2 || $lvl==3 || $lvl==4) { $balls="<b>".$lvl."</b> балла"; } else { $balls="<b>".$lvl."</b> баллов"; }
		$text="<a href='/weather' target='_blank' class='info' title='".$txtp."'><img src='".$icnp."' />В Тюмени: <b>".$temp."</b>°C</a><a href='/traffic' target='_blank' class='info' title='".$txtt."'>Пробки: ".$balls."</a>";
	}
	$xml=simplexml_load_file("http://kovalut.ru/webmaster/xml-table.php?kod=1601"); $data=$xml->Central_Bank_RF; $day=$xml->Central_Bank_RF->USD->New->Digital_Date; $usd=$xml->Central_Bank_RF->USD->New->Exch_Rate; $euro=$xml->Central_Bank_RF->EUR->New->Exch_Rate;
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<a href='#' target='_blank' class='info' title='Курс валюты'><b>$</b>=".$usd."  <b>€</b>=".$euro."</a>";
	$text.="<noindex>";
		$text.="<a href='http://pressa-online.com/tabid/140/Default.aspx?aid=e1a68562-61a1-4c57-b0d1-8b7310037e8b&iid=182045&stage=2' target='_blank' class='info' rel='nofollow' title='Свежий номер «Нашей Газеты»'>Читайте свежий номер  «<u>Нашей газеты</u>»</a>";
		$text.="<a href='/search' class='info'><img src='/template/standart/icons/search.png' />Поиск по сайту</a>";
	$text.="</noindex>";
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	return $text;
}
?>