<?
$pg=$dir[1]?$dir[1]:1; $file="_index-mnews".(int)$pg; $VARS["cachepages"]=0; $Page["Caption"]="Новости Тюмени"; $CSSmodules["авто включение ленты"]="/modules/lenta/lenta.css";
if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=KazanNews(); SetCache($file, $text, ""); } $Page["Content"]=$text;
$MPpositin = 0;

function KazanNews() { $C="";
	global $VARS, $GLOBAL, $C10, $C15, $C20, $C25, $C, $used, $VAR, $dir; $onpage=50; $pg=$dir[1]?$dir[1]:1; $from=($pg-1)*$onpage; $onblock=3;
	// Находим все таблицы с lenta ==================

	$q="SELECT `[table]`.`id`, `[table]`.`uid`, `[table]`.`name`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, `[table]`.`onind`, `_users`.`nick`, '[link]' as `link`
	FROM `[table]` LEFT JOIN `_users` ON `_users`.`id`=`[table]`.`uid` WHERE (`[table]`.`stat`='1')"; $endq="ORDER BY `data` DESC LIMIT ".$from.", ".$onpage; $data=getNewsFromLentas($q, $endq); $j=0; $b=1;

	// выводим новости ==============================

    $mp = DB('SELECT id, pic, name, "news" as link FROM news_lenta WHERE preview_mobile = 1 ORDER BY data DESC LIMIT 1');
    $mPreview = mysql_fetch_array($mp['result']);

    $mobile_preview = '<div class="mobile-preview" style="text-align:center; margin:0 auto 15px;"><a href="/' .  $mPreview['link']. '/view/' . $mPreview['id'] . '"><img src="/userfiles/picintv/' .  $mPreview['pic'] .'" width="100%"><h3 style="font-size: 18px;">' . $mPreview['name'] . '</h3></a></div>';

		$position = 1;

	for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { if (strpos($ar["pic"], "old")!=0) { /*Старый вид картинок*/ $pic="<img src='".$ar["pic"]."' title='".$ar["name"]."' />"; } else { /*Новый вид картинок*/ $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }}
		if ($ar["uid"]!=0 && $ar["nick"]!="") { $auth="<a href='/users/view/".$ar["uid"]."/'>".$ar["nick"]."</a>"; } else { $auth="<a href='/add/2/'>Народный корреспондент</a>"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4]).",  Автор: ".$auth."</div>".$coms."</div></div>";
		$text .= '<!--' . $position . '-->';

		if ($position == 2)
		{
			$text .= '<script src="https://yastatic.net/pcode/adfox/loader.js" crossorigin="anonymous"></script><script type="text/javascript" src="https://oriondigital.ru/ad/adorion.js?574856"></script>';
			$text .='<div id="adfox_15108376965161432"></div>
<script>
    window.Ya.adfoxCode.create({
        ownerId: 251657,
        containerId: "adfox_15108376965161432",
        params: {
            pp: "g",
            ps: "cmkq",
            p2: "frcw",
            puid1: "",
            puid2: "",
            puid3: "",
            puid4: "",
            puid5: "",
            puid14: "",
            puid15: "",
            puid16: ""
        }
    });
</script>';
		}

		if ($position == 3){
			$text .= $mobile_preview;
		}

		if ($position === 4)
		{
			$text .= '<div class="Banner" id="Banner-32-1"></div>' . $C15;
		}

		if ($position === 14)
		{
			$text .= '<div class="Banner" id="Banner-33-1"></div>' . $C15;
		}

		if ($position === 24)
		{
			$text .= '<div class="Banner" id="Banner-34-1"></div>' . $C15;
		}

		if ($position === 34)
		{
			$text .= '<div class="Banner" id="Banner-33-1"></div>' . $C15;
		}

		if ($position === 44)
		{
			$text .= '<div class="Banner" id="Banner-34-1"></div>' . $C15;
		}

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
		$position++;
	}

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


	// строим пагер =================================
	$q="SELECT `[table]`.`id` FROM `[table]` WHERE (`[table]`.`stat`='1')"; $endq="";
	$data=getNewsFromLentas($q, $endq);	$text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), "index-mobile/"."[page]");
	// ==============================================
 	return (array($text, $C));
}
?>
