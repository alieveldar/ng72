<?	
$file="_rightblock-rightdefault"; if (RetCache($file, "cacheblock")=="true") { list($Page["RightContent"], $cap)=GetCache($file, 0); } else { list($Page["RightContent"], $cap)=CreateRightBlock(); SetCache($file, $Page["RightContent"], "", "cacheblock"); }



function CreateRightBlock() {
	global $Domains, $SubDomain, $GLOBAL, $C20, $C25, $C, $C10, $C15; $ban10=2; $text=''; $src="";
	
	//$text.="<div id='ngbg'></div>";	
	$text.="<div class='banner' id='Banner-1-1'></div>";
	
//	$text.="<h2>Календарь публикаций</h2><style>.hasDatepicker { font-size:10px; line-height:14px; width:240px; }</style>"; $defdata="";
//	if ($page!="" && isset($page) && $start=="dater") { $tmp=explode(".", $id); $dirs=$tmp[0].".".$tmp[1].".".$tmp[2]; $defdata='$("#datepick5").datepicker("setDate", "'.$dirs.'")'; } $text.='<div id="datepick5" style="width:240px;"></div><script type="text/javascript">';
	//$text.='$("#datepick5").datepicker({ onSelect: function(dateText, inst) { document.location="/news/dater/"+dateText; }}); $.extend($.datepicker.regional["ru"]); $("#datepick5").datepicker("option","dateFormat","dd.mm.yy"); '.$defdata;
	//$text.='</script><div class="C20"></div>';
	
	//Библиотеки инициализации подключаются до вызова баннера на странице (один раз на странице). При использовании новых кодов вызова адфокс на сайте, установка библиотеки Loader.js не требуется.


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

</script>
	
	
	<div class="C20"></div>';
	
		/*Итоги дня $data=DB("SELECT * FROM `itogi_lenta` WHERE (`stat`=1) ORDER BY `data` DESC LIMIT 1"); if ($data["total"]>0) { $text.="<h3><a href='/itogi'>Итоги дня</a></h3>";  }
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $text.="<div class='OCNew'>"; $text.="<a href='/itogi/view/".$ar["id"]."'>";
	$text.="<img src='/userfiles/picintv/".$ar["pic"]."' style='margin:0 0 5px 0; padding:0; float:none; width:100%; height:auto;' />";  $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C10."<hr>".$C10; } */
	
	/*concurs*/
	$data=DB("SELECT *, 'concurs' as `link` FROM `concurs_lenta` WHERE (`stat`=1 && `votingend`>'".time()."') ORDER BY `data` DESC"); if ($data["total"]>0) { $text.="<h3><a href='/concurs'>НАШИ конкурсы</a></h3>";  }
	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $text.="<div class='OCNew ReThreeOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."'>";
		$text.="<img src='/userfiles/picintv/".$ar["pic"]."' style='margin:0 0 5px 0; padding:0; float:none; width:100%; height:auto;' />";  $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C10; 
	}

	/*PodSurikat 1 */
	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`>'".(time()-6*24*60*60)."' && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) [used])";
	$endq="ORDER BY `data` DESC LIMIT 6"; $data=getNewsFromLentas($q, $endq); $list=array(); $cnt=1; if ((int)$data["total"]>0) { for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $list[]=$ar; }
	foreach($list as $ar) { if ($ar["link"]!="ls") { if (strpos($ar["link"], "ls")!==false || strpos($ar["link"], "bubr")!==false) { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; } $text.="<div class='OCNew ReTwoOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."' $rel>"; if ($ar["tavto"]==1 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/pictavto/".$ar["pic"]."'>"; } $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C25; $cnt++; }}} else { $text.="<!--yandex1-->"; }
	
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	
	/*PodSurikat 2 */
	$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`,`[table]`.`data`, '1' as `tavto`, `[table]`.`lid`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`>'".(time()-6*24*60*60)."' && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) [used])";
	$endq="ORDER BY `data` DESC LIMIT 6,6"; $data=getNewsFromLentas($q, $endq); $list=array(); $cnt=1; if ((int)$data["total"]>0) { for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $list[]=$ar; }
	foreach($list as $ar) { if ($ar["link"]!="ls") { if (strpos($ar["link"], "ls")!==false || strpos($ar["link"], "bubr")!==false) { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; } $text.="<div class='OCNew ReTwoOrder'>"; $text.="<a href='/".$ar["link"]."/view/".$ar["id"]."' $rel>"; if ($ar["tavto"]==1 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/pictavto/".$ar["pic"]."'>"; } $text.=$ar["name"].specIconOnTags($ar)."</a>"; $text.="</div>".$C25; $cnt++; }}} else { $text.="<!--yandex2-->"; }	
/*	$text.='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-4113020084267890",
    enable_page_level_ads: true
  });
</script>'.$C20;		*/


	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Самое популярное</h3>".getMaxSeens();
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Самое комментируемое</h3>".getMaxComments();
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.=$C10."<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2;
	$text.="<h3>Выбор читателей</h3>".getMaxLikes();

$text.="<div id=\"unit_87775\"><a href=\"http://smi2.ru/\">Новости smi2.ru</a></div>
<script type=\"text/javascript\" charset=\"utf-8\">
  (function() {
    var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
    sc.src = '//smi2.ru/data/js/87775.js'; sc.charset = 'utf-8';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
  }());
</script>";

	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	return(array($text, ""));
	
	//код сми 2	

}



?>