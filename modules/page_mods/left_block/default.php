<?
$file="_leftblock-pkdefault"; if (RetCache($file, "cacheblock")=="true") { list($Page["LeftContent"], $cap)=GetCache($file, 0); } else { list($Page["LeftContent"], $cap)=CreateLeftBlock(); SetCache($file, $Page["LeftContent"], "", "cacheblock"); }

if ($link!="adverting") { $Page["LeftContent"]=str_replace(array("<!--yandex1-->","<!--yandex2-->","<!--google-->"), array($yandex1, $yandex2, $google), $Page["LeftContent"]); }

function CreateLeftBlock() {
	global $Domains, $SubDomain, $GLOBAL, $C20, $C10, $C25, $C, $used; $text=''; $src=""; $advs=array(); $news=array(); $list=array(); $tmplist=array(); $advid=0; $advsid=0; $cnt=1;
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

		/*TV*/ $q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`tavto`, `[table]`.`lid`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`onind`=1 [used])"; $endq="ORDER BY `data` DESC LIMIT 1"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $used[$ar["link"]][]=$ar["id"];	$text.="<div class='ONew'><a href='/".$ar["link"]."/view/".$ar["id"]."'>"; if ($i==0 && $ar["pic"]!="") { $text.="<img src='$src/userfiles/pictavto/".$ar["pic"]."'>"; } $text.=$ar["name"]."</a>".$C.Dater($ar)."</div>".$C20; endfor;

		/*OLD PROMO*/ $q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`data`<'".(time()-6*24*60*60)."' && `[table]`.`data`>'".(time()-11*24*60*60)."' && (`[table]`.`promo`=1 || `[table]`.`spromo`=1) [used])"; $endq="ORDER BY `data` DESC"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); if ($ar["link"]!="ls") { $ar["style"]="Oldest"; $ar["data"]=''; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; } $avds[]=$ar; }}

		/*NEWS*/$q="SELECT `[table]`.`id`,`[table]`.`tags`, `[table]`.`name`, `[table]`.`lid`, `[table]`.`tavto`,`[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' [used])"; $endq="ORDER BY `data` DESC LIMIT 50"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $ar["style"]="Editors"; $ar["link"]="/".$ar["link"]."/view/".$ar["id"]; if ($ar["pic"]!="" && $ar["tavto"]==1) { $ar["pic"]=$src."/userfiles/pictavto/".$ar["pic"]; } else { $ar["pic"]=""; } $tmplist[]=$ar; }

		usort($tmplist, ArraySort); foreach ($tmplist as $ar) { $list[]=$ar; if (($cnt+1)%4==0) { if ($avds[$advsid]["name"]!="") { $list[]=$avds[$advsid]; $advsid++; $cnt++; /*Staruhi*/ }} $cnt++; }

		$cnt=1; $ban10=1; foreach($list as $ar) {
		if (strpos($ar["link"], "ls")!==false || strpos($ar["link"], "bubr")!==false) { $rel="target='_blank' rel='nofollow'"; } else { $rel=""; }
		$text.="<div class='ONew'>";
			$text.="<a href='".$ar["link"]."' $rel>";
			$text.=$ar["name"].specIconOnTags($ar)."</a>".$C.Dater($ar);
		$text.="</div>".$C20;
		if ($cnt%4==0) {
			//if ($ban10<10) { $text.="<div class='banner3' id='Banner-10-".$ban10."'></div>"; $ban10=$ban10+2; }
            if($cnt < 9) {
                $text .= $C10 . '
<div id="adfox_152829446223292721-l' . $cnt / 4 . '"></div>
<script>
    window.Ya.adfoxCode.create({
        ownerId: 272568,
        containerId: \'adfox_152829446223292721-l' . $cnt / 4 . '\',
        params: {
            pp: \'g\',
            ps: \'cukh\',
            p2: \'fxrc\'
        }
    });
</script>' . $C10;
            }
/*		if ($cnt == 12){
			$text.="<div><script src='//mediametrics.ru/partner/inject/inject.js' type='text/javascript' id='MediaMetricsInject' data-width='240' data-height='400' data-img='true' data-imgsize='70' data-type='img' data-bgcolor='FFFFFF' data-bordercolor='000000' data-linkscolor='232323' data-transparent='false' data-rows='5' data-inline='' data-font='middle' data-fontfamily='roboto' data-border='false' data-borderwidth='1' data-alignment='vertical' data-country='ru'> </script></div>";
}*/
		}
		$cnt++; }
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='C10'></div>"; return(array($text, ""));
}
?>