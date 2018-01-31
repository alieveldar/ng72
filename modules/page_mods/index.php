<?
$Page["Caption"]=""; $Page["Content"]=""; $Page["LeftContent"]=""; $Page["RightContent"]=""; $src=""; $file="_index-indexpage"; #list($text,$cap)=NewIndexPage();
if (RetCache($file,'cacheblock')=="true") { list($text,$cap)=GetCache($file,0); }else{ list($text,$cap)=NewIndexPage(); SetCache($file,$text); }
$Page["TopContent"].=$C15."<h1>Новости Тюмени".$capcache."</h1>".$C5; if ($GLOBAL["USER"]["role"]>1) { $Page["TopContent"].="<div id='AdminEditItem'><a href='".$BP."?nocache'>Обновить кэш. Не злоупотреблять! =)</a></div>".$C25; } $Page["TopContent"].=$text;



### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ###

function NewIndexPage(){
	global $VARS, $GLOBAL, $Page, $C10, $C20, $C25, $C, $used, $CommerceBlock, $lentas, $src;
	//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -
	$text="<div id='ONLEFT'><div id='TV'>".TV()."</div><div id='LEFT'>".LEFT()."</div><div id='CENTER'>".CENTER()."</div></div><div id='RIGHT'>".RIGHT()."</div>";
	//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -
	return array($text,$cap);
}

### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ###

function TV() {
	global $used, $C, $C5, $C10, $C20, $C25, $lentas, $src; $text="";
	$q="SELECT `[table]`.`id`, `[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`onind`=1 [used])";
	$endq="ORDER BY `data` DESC LIMIT 1"; $data=getNewsFromLentas($q, $endq); if ($data["total"]==1) { @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $used[$ar["link"]][]=$ar["id"];
	$text.="<a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='$src/userfiles/picintv/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' class='TvPic'/></a>";
	$text.="<a href='/".$ar["link"]."/view/".$ar["id"]."' class='TvLink'>".$ar["name"]."</a><div class='TvSpan'>".$ar["lid"].specIconOnTags($ar)."</div>".Dater($ar); } return $text;
}

### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ###

function LEFT() {
	global $used, $C, $C10, $C20, $C25, $lentas, $src; $adv=array(); $news=array(); $list=array(); $advid=0; $cnt=1; $ban10=1;

	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`tavto`, `[table]`.`lid`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`redak`!=1 && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) && `[table]`.`data`<'".(time()-5*24*60*60)."' && `[table]`.`data`>'".(time()-7*24*60*60)."')"; $endq="ORDER BY `data` DESC"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $ar["pic"]=""; $ar["data"]=''; if ($ar["link"]!="ls") { $adv[]=$ar; }}

	$q="SELECT `[table]`.`id`, `[table]`.`tags`, `[table]`.`name`, `[table]`.`tavto`, `[table]`.`lid`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`redak`!=1 && `[table]`.`promo`<>1 && `[table]`.`spromo`<>1 [used])"; $endq="ORDER BY `data` DESC LIMIT 37"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);if (($i+1)%4==0 && $adv[$advid]["name"]!="") { $list[]=$adv[$advid]; $advid++; } $list[]=$ar; }
	$cnt = 0;
	foreach($list as $ar) {
		$text.="<div class='ONew'>";
			if ($ar["link"]=="ls") { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; }
			$text.="<a href='/".$ar["link"]."/view/".$ar["id"]."' $rel>";
			if ($ar["tavto"]==1 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/pictavto/".$ar["pic"]."'>"; }
			$text.=$ar["name"].specIconOnTags($ar)."</a>".$C.Dater($ar);
			$text.="</div>".$C20;
		if ($cnt%4==0) {
			if ($cnt==4) { $text.='<!-- VK block --><script type="text/javascript" src="//vk.com/js/api/openapi.js?105"></script><div id="vk_groupsVK"></div><script type="text/javascript">VK.Widgets.Group("vk_groupsVK", {mode: 1, width: "200", height: "140", color1: "FFFFFF", color2: "2B587A", color3: "5B7FA6"}, 77470792);</script>'.$C25; }
		if ($ban10<10) { $text.="<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2; }
/*		if ($cnt == 12)
		{
			$text.="<div><script src='//mediametrics.ru/partner/inject/inject.js' type='text/javascript' id='MediaMetricsInject' data-width='200' data-height='310' data-img='true' data-imgsize='70' data-type='img' data-bgcolor='FFFFFF' data-bordercolor='000000' data-linkscolor='232323' data-transparent='' data-rows='5' data-inline='' data-font='big' data-fontfamily='roboto' data-border='' data-borderwidth='0' data-alignment='vertical' data-country='ru' data-site='mmet/ng72_ru'> </script></div>".$C20;

			}*/
		}


	$cnt++; } return $text;
}

### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ###

function CENTER() {
	global $used, $C, $C10, $C20, $C25, $C30, $lentas, $src; $text="<div id='RedColumn'>";
	$adv=array(); $advs=array(); $news=array(); $list=array(); $tmplist=array(); $redlist=array(); $advid=0; $advsid=0; $cnt=1; $ban6=1; $lastdata=0;

	/*Surikat*/
	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`, `[table]`.`pic`,`[table]`.`data`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`>'".(time()-1*24*60*60)."' && `[table]`.`spromo`=1 [used])"; $endq="ORDER BY `data` DESC LIMIT 1"; $data=getNewsFromLentas($q, $endq);	if ($data["total"]==1) { @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $ar["style"]="NorN"; $cnt++; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; $ar["data"]=''; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; } if ($ar["link"]!="ls") { $list[]=$ar; $lastdata=$ar["data"]; }}


	/*PodSurikat*/
	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`>'".(time()-1*24*60*60)."' && `[table]`.`promo`=1 [used])"; $endq="ORDER BY `data` DESC"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $ar["style"]="ReOneOrder"; $ar["data"]=''; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; } if ($ar["link"]!="ls") { $avd[]=$ar; }}

	/*Staruhi*/
	$q="SELECT `[table]`.`id`, `[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`<'".(time()-7*24*60*60)."' && `[table]`.`data`>'".(time()-11*24*60*60)."' && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) [used])"; $endq="ORDER BY `data` DESC LIMIT 30"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $ar["style"]="Oldest"; $ar["data"]=''; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; } if ($ar["link"]!="ls") { $avds[]=$ar; }}

	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`redak`=1 [used])"; $endq="ORDER BY `data` DESC LIMIT 60"; $data=getNewsFromLentas($q, $endq);
	$sc=0; for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $ar["style"]="Editors"; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; }
	if ($sc<4 && $ar["link"]!="ls") { $redlist[]=$ar; $sc++; } else { $tmplist[]=$ar; }}

	usort($tmplist, ArraySort);

	foreach ($redlist as $ar) { $list[]=$ar;
		if (($cnt+1)%4==0) {
			if ($avd[$advid]["name"]!="") { $list[]=$avd[$advid]; $advid++; $cnt++; /*PodSurikat*/
			} else { if ($avds[$advsid]["name"]!="") { $list[]=$avds[$advsid]; $advsid++; $cnt++; /*Staruhi*/ }}
		}
	$cnt++; }

	foreach ($tmplist as $ar) { $list[]=$ar;
		if (($cnt+1)%4==0) {
			if ($avd[$advid]["name"]!="") { $list[]=$avd[$advid]; $advid++; $cnt++; /*PodSurikat*/
			} else { if ($avds[$advsid]["name"]!="") { $list[]=$avds[$advsid]; $advsid++; $cnt++; /*Staruhi*/ }}
		}
	$cnt++; }


	$cnt=1; foreach($list as $ar) {
		$text.="<div class='RedNews ".$ar["style"]."'>";
			if (strpos($ar["link"], "ls")!==false || strpos($ar["link"], "bubr")!==false) { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; $lastdata=$ar["data"]; }
			if ($ar["pic"]!="") { $text.="<div class='img'><a href='".$ar["link"]."' $rel><img src='".$ar["pic"]."'></a></div><div class='stext'>"; } else { $text.="<div class='ftext'>"; }
			$text.="<a href='".$ar["link"]."' class='caption' $rel>".$ar["name"].specIconOnTags($ar)."</a>"; if ($ar["lid"]!="") { $text.="<div class='lid'>".$ar["lid"]."</div>"; } $text.=$C.Dater($ar);
		$text.="</div></div>".$C30;
		if ($cnt%4==0) {
			if ($ban6<10) { $text.="<div class='banner2' id='Banner-6-".$ban6."'></div>"; $ban6++; }
		}
	$cnt++; }

	$text.="</div><input id='lastdata' value='".$lastdata."' type='hidden'>".$C10."<div id='ShowMoreInd'><a href='javascript:void(0);' onclick='ShowMoreInd();'>Показать больше новостей</a></div>";


	return $text;
}

### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ###

function RIGHT() {
	global $used, $C, $C10, $C20, $C25, $C15, $lentas, $src, $yandex1, $yandex2; $ban10=2;


	//$text.="<div id='ngbg'></div>";
	$text.="<div class='banner' id='Banner-1-1'></div>";

	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---



//	$text.="<h2>Календарь публикаций</h2><style>.hasDatepicker { font-size:10px; line-height:14px; width:240px; }</style>"; $defdata="";
//	if ($page!="" && isset($page) && $start=="dater") { $tmp=explode(".", $id); $dirs=$tmp[0].".".$tmp[1].".".$tmp[2]; $defdata='$("#datepick5").datepicker("setDate", "'.$dirs.'")'; }
//	$text.='<div id="datepick5" style="width:240px;"></div><script type="text/javascript">';
//	$text.='$("#datepick5").datepicker({ onSelect: function(dateText, inst) { document.location="/news/dater/"+dateText; }}); $.extend($.datepicker.regional["ru"]); $("#datepick5").datepicker("option","dateFormat","dd.mm.yy"); '.$defdata;
//	$text.='</script><div class="C20"></div>';

$text.='<!-- Orion inizialize start -->
<script type="text/javascript" src="https://oriondigital.ru/ad/adorion.js?574856"></script>
<script src="https://yastatic.net/pcode/adfox/loader.js"></script>
<script type="text/javascript">
(function loadExtData(w) {
	w.adv = new Adv();

})(window);
</script>
<!-- Orion inizialize end -->

	<div id="adfox_1479814870"></div>
<script type="text/javascript">
adv.banner(function(webmd) {
		console.log("Showing banner 1", webmd);
           var wmclusters = webmd["clusters"].toString();
           var audiences =  webmd["audiences"].toString();
           wmclusters = wmclusters.replace(/,/g,":");
           audiences = audiences.replace(/,/g,":");
    window.Ya.adfoxCode.create({
        ownerId: 251657,
        containerId: "adfox_1479814870",
        params: {
            pp: "g",
            ps: "cmkq",
            p2: "fkuh",
            puid1: webmd["socio_demographics"]["age"],
            puid2: webmd["socio_demographics"]["gender"],
            puid3: webmd["socio_demographics"]["social_class"],
            puid4: wmclusters,
            puid5: audiences
        },
        onRender: function() {  },
           onError: function(error) { console.log(error); },
           onStub: function() {

				//Ваш код JS для возврата показа

			}


    });
	});

</script>	<div class="C20"></div>';



	/*Итоги дня $data=DB("SELECT * FROM `itogi_lenta` WHERE (`stat`=1) ORDER BY `data` DESC LIMIT 1"); if ($data["total"]>0) { $text.="<h3><a href='/itogi'>Итоги дня</a></h3>";  }
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $text.="<div class='OCNew'>"; $text.="<a href='/itogi/view/".$ar["id"]."'>";
	$text.="<img src='/userfiles/picintv/".$ar["pic"]."' style='margin:0 0 5px 0; padding:0; float:none; width:100%; height:auto;' />";  $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C10."<hr>".$C10; } */

	/*concurs*/
	$data=DB("SELECT *, 'concurs' as `link` FROM `concurs_lenta` WHERE (`stat`=1 && `votingend`>'".time()."') ORDER BY `data` DESC"); if ($data["total"]>0) { $text.="<h3><a href='/concurs'>НАШИ конкурсы</a></h3>";  }
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $text.="<div class='OCNew ReThreeOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."'>";
	$text.="<img src='/userfiles/picintv/".$ar["pic"]."' style='margin:0 0 5px 0; padding:0; float:none; width:100%; height:auto;' />";  $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C10; }

	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

	/*PodSurikat*/
	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`<'".(time()-1*24*60*60)."' && `[table]`.`data`>'".(time()-5*24*60*60)."' && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) [used])"; $endq="ORDER BY `data` DESC LIMIT 6"; $data=getNewsFromLentas($q, $endq); $list=array(); $cnt=1; if ((int)$data["total"]>0) { $text.="<h3>Интересно:</h3>";
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $list[]=$ar; } foreach($list as $ar) { if ($ar["link"]!="ls") { $text.="<div class='OCNew ReTwoOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."'>"; if ($ar["tavto"]==1 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/picsquare/".$ar["pic"]."'>"; } $text.=$ar["name"]."</a>"; $text.="</div>".$C25; $cnt++; }}} else { $text.=$yandex1; }

	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;

	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`data`, '1' as `tavto`, `[table]`.`lid`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`<'".(time()-2*24*60*60)."' && `[table]`.`data`>'".(time()-5*24*60*60)."' && `[table]`.`promo`=1 [used])";
	$endq="ORDER BY `data` DESC LIMIT 6, 6"; $data=getNewsFromLentas($q, $endq); $list=array(); $cnt=1; if ((int)$data["total"]>0) { for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $list[]=$ar; }
	foreach($list as $ar) { if ($ar["link"]!="ls") { if (strpos($ar["link"], "ls")!==false || strpos($ar["link"], "bubr")!==false) { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; } $text.="<div class='OCNew ReTwoOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."' $rel>"; if ($ar["tavto"]==1 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/picsquare/".$ar["pic"]."'>"; } $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C25; $cnt++; }}} else { $text.=$yandex2; }


/*$text.='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-4113020084267890",
    enable_page_level_ads: true
  }); 
</script>'.$C20;
*/


	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Самое популярное</h3>".getMaxSeens();
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Самое комментируемое</h3>".getMaxComments();
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Выбор читателей</h3>".getMaxLikes();
	//Код сми2

	$text.="<div id=\"unit_87775\"><a href=\"http://smi2.ru/\">Новости smi2.ru</a></div>
<script type=\"text/javascript\" charset=\"utf-8\">
  (function() {
    var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
    sc.src = '//smi2.ru/data/js/87775.js'; sc.charset = 'utf-8';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
  }());
</script>";


	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	return $text;
}
?>
