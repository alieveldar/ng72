<?
$Page["Caption"]=""; $Page["TopContent"]=""; $Page["Content"]=""; $Page["LeftContent"]=""; $Page["RightContent"]=""; if ((int)$VARS["cacheblock"]<1) { $VARS["cacheblock"]=0; }
$file="_index-agreg111ator"; if (RetCache($file,'cacheblock')=="true") { list($text,$cap)=GetCache($file,0); }else{ list($text,$cap)=NewIndexPage(); SetCache($file,$text,'','cacheblock'); }
$Page["TopContent"]="<h1 style='float:left'>Новости Тюмени</h1>".$C10.$text;

### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### --- ### 

function NewIndexPage(){
	global $VARS, $GLOBAL, $C10, $C20, $C25, $C, $used, $CommerceBlock, $lentas;
	$pnews=0; // порядковые номера использованных обычных новостей
	$ban6=1; // порядковые номера использованных баннеров типа 6
	$data2week=date(time()-1*7*24*60*60); // период, за который берем коммерческие новости
		
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`tags`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`onind`=1 [used])";
	$endq="ORDER BY `data` DESC LIMIT 5"; $tv=getNewsFromLentas($q, $endq);
	//--- СПИСОК ТЕЛЕВИЗОРА --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='TVList'><capt><a href='/all/date/".date("d.m.Y")."' style='color:#FFF;'><u>Главное сегодня</u></a></capt>".$C; for ($i=0; $i<$tv["total"]; $i++): @mysql_data_seek($tv["result"], $i); $ar=@mysql_fetch_array($tv["result"]); $used[$ar["link"]][]=$ar["id"];
			$text.="<div class='tvitem' pic='/userfiles/picintv/".$ar["pic"]."' link='/".$ar["link"]."/view/".$ar["id"]."' capt='".htmlentities($ar["name"], ENT_QUOTES, "UTF-8")."'>";
			$text.="<a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='/userfiles/picsquare/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' />".$ar["name"].TaGi($ar["tags"])."</a>";
			if ((int)$ar["comcount"]!=0) { $text.=" <span class='ComCnt' title='Комментарии'>".$ar["comcount"]."</span>"; }
	$text.="</div>"; endfor; $text.="</div>";
		
	//--- ТЕЛЕВИЗОР --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='TVBox'>"; @mysql_data_seek($tv["result"], 0); $ar=@mysql_fetch_array($tv["result"]); $used[$ar["link"]][]=$ar["id"];
	$text.="<div class='TVPicture'><a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='/userfiles/picintv/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' /></a></div>";
	$text.="<div class='TVLink'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></div>"; $text.="</div>";

	//--- 2 спец места под ТЕЛЕВИЗОРОМ ---- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`data`, `[table]`.`comcount`,`[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`spec`=1 && `promo`!=1 [used])"; $endq="ORDER BY `data` DESC LIMIT 6 /* SPECIAL */"; $spec=getNewsFromLentas($q, $endq);
	$SpecSecondBlock=array(); for ($i=0; $i<$spec["total"]; $i++): @mysql_data_seek($spec["result"], $i); $ar=@mysql_fetch_array($spec["result"]); $used[$ar["link"]][]=$ar["id"]; $SpecSecondBlock[$i]=$ar; endfor;
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`promo`=1  && `[table]`.`data`>'".$data2week."' [used])"; $endq="ORDER BY `data` DESC LIMIT 20"; 
	$promo=getNewsFromLentas($q, $endq);
	$CommerceBlock=array(); for ($i=0; $i<$promo["total"]; $i++): @mysql_data_seek($spec["result"], $i); $ar=@mysql_fetch_array($promo["result"]); $used[$ar["link"]][]=$ar["id"]; $CommerceBlock[$i]["data"]=$ar; $CommerceBlock[$i]["used"]=0; endfor;
	$cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<5 && $v["data"]["data"]>date(time()-2*24*60*60) && $v["used"]==0) { $SpecSecondBlock[$cc]=$v["data"]; $CommerceBlock[$k]["used"]=1; $cc++; }}		
	$text.="<div class='TVSpc'>";
		$ar=$SpecSecondBlock[0]; $text.="<box><div class='SPPicture'><a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='/userfiles/picitem/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' /></a></div><div class='SPLink'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></div></box>";
		$ar=$SpecSecondBlock[1]; $text.="<box><div class='SPPicture'><a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='/userfiles/picitem/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' /></a></div><div class='SPLink'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></div></box>";
	$text.="</div>";
	$text.="<div class='banner' id='Banner-1-1'></div>".$C;
	
	//--- СПЕЦ РАЗМЕЩЕНИЕ ГОРИЗОНТ -- ----- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='TVSpc2'>"; foreach($SpecSecondBlock as $key=>$ar):
	if ($key>1) { $text.="<box><div class='SPPicture'><a href='/".$ar["link"]."/view/".$ar["id"]."'><img src='/userfiles/picitem/".$ar["pic"]."' title='".$ar["name"]."' alt='".$ar["name"]."' /></a></div><div class='SPLink'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></div></box>"; }
	endforeach; $text.="</div>".$C;
	
	//--- ЛЕВАЯ КОЛОНКА  --- --- --- - --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$q="SELECT `[table]`.`id`, `[table]`.`name`,`[table]`.`tags`, `[table]`.`data`, `[table]`.`comcount`, `[table]`.`pic`, `[table]`.`onind`, '[link]' as `link` FROM `[table]` 
	WHERE (`[table]`.`stat`='1' && `[table]`.`promo`!=1 [used])"; $endq="ORDER BY `data` DESC LIMIT 50"; 
	$news=LSgetNewsFromLentas($q, $endq);
	
	$text.="<div class='DIVSMAIN'>";
		// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		$text.="<div class='DIVSM'>"; 
			
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;
		
			$text.='<div class="banner3" id="Banner-10-2"></div>'; 
		
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;
		
			$text.='<div class="banner3" id="Banner-10-4"></div>';
								
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;
		
			$text.='<div class="banner3" id="Banner-10-6"></div>';
			
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;
			
			$text.='<div class="banner" id="Banner-10-8"></div>';
			
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;

			$text.='<div class="banner3" id="Banner-10-10"></div>';			 
			
			$text.="<newsblock>"; $limit=4; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;
			
			#$text.="<newsblock>"; $limit=15; for ($i=$pnews; $i<$pnews+$limit; $i++): @mysql_data_seek($news["result"], $i); $ar=@mysql_fetch_array($news["result"]);
			#if ($i-$pnews==2) { $text.=searchNext2CommerceNews($ar["data"]); } $used[$ar["link"]][]=$ar["id"]; if ($ar["name"]!="") { $text.=DrawNewsItem($ar, 0); } 
			#endfor; $text.="</newsblock>"; $pnews=$pnews+$limit;

		$text.="</div>";

		//---- ЦЕНТРАЛЬНАЯ РЕДКОЛОНКА ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		$LinksOrder=array('news', 'afisha', 'auto', 'lifehistory', 'publishnews', 'accidents');
		
		$text.="<div class='DIVBG'>".$C; $pgs=''; foreach($lentas as $k=>$v) { $pgs.=$k."','"; } $razdelcount=0; $red=array(); $pages=array(); 
		$q="SELECT `link`,`shortname` as `name` FROM `_pages` WHERE (`link` IN ('".trim($pgs, "',")."'))"; $data=DB($q); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $pages[$ar["link"]]=$ar["name"]; endfor;
		$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`tags`,`[table]`.`lid`, `[table]`.`data`, `[table]`.`pic`, `[table]`.`comcount`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && `[table]`.`redak`=1) ORDER BY `data` DESC LIMIT 4";
		$endq=""; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $red[$ar["link"]][]=$ar; endfor;
		foreach ($LinksOrder as $linked): $table=$red[$linked]; $incount=1; $cap=$pages[$table[0]["link"]]; /* все новости по всем разделам */ 
			$text.='<div class="banner2" id="Banner-6-'.$ban6.'" style="float:none !impoortant;"></div>'.$C; $ban6++;
			#if ($razdelcount==1) { /*МОДА УЛИЦ*/ $text.=razdelStreetFashion(); $text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++; }
			#if ($razdelcount==2) { /*МНОГО КОММЕНТОВ */ $text.=getMoreCommentsNews(7).$C20; $text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++;  }
			#if ($razdelcount==3) { /*ТАТБРЕНД*/ $text.=razdelBrandsBattle(); $text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++; }
			#if ($razdelcount==4) { /*ФОТОДЕНЬ*/ $text.=razdelPhotoDay(); $text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++; }
			#if ($razdelcount==5) { /*ФОРУМ*/ $text.=razdelForumIndex(); $text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++; }
			#if ($razdelcount==1) { /*АФИША*/$text.='<div class="banner2" id="Banner-6-'.$ban6.'"></div>'.$C; $ban6++; $text.=$C.razdelAfishaKazan(); }
			$text.="<h2><a href='/".$table[0]["link"]."'>".$cap."</a></h2><div class='RedBlock'>";			
			foreach ($table as $ar): $d=ToRusData($ar["data"]); // новости определенного раздела
				if ($incount==1) { $text.="<div class='FirstNews'><a href='/$ar[link]/view/$ar[id]'><img src='/userfiles/picnews/$ar[pic]' /><div class='Cap'>$ar[name]</h3></div></a><div class='Lid'>".CutText($ar["lid"], 100).TaGi($ar["tags"])."</div><div class='Data'>".ToLocalDay($d[4])."</div></div>";
				} else { $text.="<div class='OtherNewsItem'><a href='/$ar[link]/view/$ar[id]'><img src='/userfiles/pictavto/$ar[pic]' /><div class='Cap'>".$ar["name"].TaGi($ar["tags"])."</h3></div></a><div class='Data'>".ToLocalDay($d[4])."</div></div>"; }
			$incount++; endforeach; $text.="</div>";
		$razdelcount++; endforeach; $text.="</div>"; 
		
		// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		// ПРАВАЯ КОЛОНКА -- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		 $text.="<div class='DIVRM'>";
			$text.='<div class="banner3" id="Banner-10-1"></div>';
			$text.=newBlogsBox().$C20;
			$block=searchBlock2CommerceNews(7); if ($block!="") { $text.="<capt>Это интересно</capt>".$C10."<newsblock>".$block."</newsblock>"; } 
			$text.='<div class="banner3" id="Banner-10-3"></div>';
			$block=searchBlock2CommerceNews(7); if ($block!="") { $text.="<capt>Полезное</capt>".$C10."<newsblock>".$block."</newsblock>"; }
			$text.='<div class="banner3" id="Banner-10-5"></div>';
			$text.=newPublishBox().$C20;
			$text.='<div class="banner3" id="Banner-10-7"></div>'; 
			$text.='<div class="banner3" id="Banner-10-9"></div>';
			$text.='<script type="text/javascript" src="//vk.com/js/api/openapi.js?116"></script><div id="vkm_groups"></div><script type="text/javascript">VK.Widgets.Group("vkm_groups", {mode: 0, width: "200", height: "400", color1: "FFFFFF", color2:"2B587A", color3: "5B7FA6"}, 77470792);</script>'.$C20;
			$text.='<div id="ok_group_widget"></div>
<script>
!function (d, id, did, st) {
  var js = d.createElement("script");
  js.src = "http://connect.ok.ru/connect.js";
  js.onload = js.onreadystatechange = function () {
  if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
    if (!this.executed) {
      this.executed = true;
      setTimeout(function () {
        OK.CONNECT.insertGroupWidget(id,did,st);
      }, 0);
    }
  }}
  d.documentElement.appendChild(js);
}(document,"ok_group_widget","57142167928872","{width:200,height:335}");
</script>';

		$text.="</div>"; 
		// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
		// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
	$text.="</div>".$C;
	
	//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -
	return array($text,$cap);
}

//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -
//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -
//--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- -

function razdelStreetFashion() { global $C10; return ""; $data=DB("SELECT `id`,`name`,`pic`,`comcount` FROM `news_lenta` WHERE (`stat`='1' && `cat`=3) ORDER BY `data` DESC LIMIT 2"); if ($data["total"]>0) { $text="<h2><a href='/news/cat/3'>Мода улиц</a></h2>".$C10."<div class='FashionMain'>"; for ($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"],$i); $ar=@mysql_fetch_array($data["result"]); $text.="<div class='ModaDiv'><a href='/news/view/$ar[id]'><img src='/userfiles/picnews/$ar[pic]' />$ar[name]</a></div>"; } $text.="</div><div class='C'></div><div class='TextAbout'>Каждый день на нашем портале жители и гости города выбирают <b>«модника дня»</b>. Именно от вас зависит, кто станет победителем недели и кто получит наши призы. <b>Для участия в рубрике</b> присылайте свои фотографии с описанием вещей на почту <u>gorod@prokazan.ru</u></div>"; return $text; }}

function razdelPhotoDay() { 
	$data=DB("SELECT `id`,`name`,`pic`,`lid`,`data`,`comcount` FROM `news_lenta` WHERE (`stat`='1' && `cat`=2) ORDER BY `data` DESC LIMIT 1"); if ($data["total"]>0) { @mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $text="<h2><a href='/news/cat/2'>Фотодень - моменты из жизни города</a></h2><div class='RedBlock'>";
	$d=ToRusData($ar["data"]); $text.="<div class='FirstNews'><a href='/news/view/$ar[id]'><img src='/userfiles/picnews/$ar[pic]' /><div class='Cap'>$ar[name]</h3></div></a><div class='Lid'>".CutText($ar["lid"], 100)."</div><div class='Data'>".$d[1]."</div></div>";
	$data=DB("SELECT `pic` FROM `_widget_pics` WHERE (`link`='news' && `pid`='$ar[id]') ORDER BY `data` DESC LIMIT 10"); if ($data["total"]>0) { $text.="<a href='/news/view/$ar[id]'><div class='PhotoDayPics'>"; 
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ap=@mysql_fetch_array($data["result"]); $text.="<img src='/userfiles/picsquare/$ap[pic]' />"; endfor; $text.="</div></a>"; } $text.="</div>"; return $text; }
}

function searchNext2CommerceNews($data) { global $CommerceBlock; $cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<2 && $v["data"]["data"]>date(time()-3*24*60*60) && $v["used"]==0) { $CommerceBlock[$k]["used"]=1; $text=DrawNewsItem($v["data"], $data, 'IndexComs'); $cc++; }} return $text; }
function searchBlock2CommerceNews($total) { global $CommerceBlock; $cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<=$total && $v["used"]==0) { $CommerceBlock[$k]["used"]=1; $text.=DrawNewsComrs($v["data"], "", 'IndexComs2'); $cc++; }} return $text; }


?>