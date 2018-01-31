<?	
$file="_rightblock-ls_default"; if (RetCache($file, "cacheblock")=="true") { list($Page["RightContent"], $cap)=GetCache($file, 0); } else { list($Page["RightContent"], $cap)=CreateRightBlock(); SetCache($file, $Page["RightContent"], "", "cacheblock"); }	

function CreateRightBlock() {
	global $Domains, $SubDomain, $GLOBAL, $C20, $C25, $C; $text=''; 
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
		
	$CommerceBlock=array(); for ($i=0; $i<$promo["total"]; $i++): @mysql_data_seek($spec["result"], $i); $ar=@mysql_fetch_array($promo["result"]); $used[$ar["link"]][]=$ar["id"]; $CommerceBlock[$i]["data"]=$ar; $CommerceBlock[$i]["used"]=0; endfor;
	$cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<5 && $v["data"]["data"]>date(time()-24*60*60) && $v["used"]==0) { $SpecSecondBlock[$cc]=$v["data"]; $CommerceBlock[$k]["used"]=1; $cc++; }}
			
		$text.="<div class='banner' id='Banner-1-1'></div>".$C;
		
		$text.=newBlogsBox().$C20;
		
		$text.='<div class="banner3" id="Banner-10-2"></div>';
		
		$text.='<div class="banner3" id="Banner-26-1"></div>';
		
		$text.=newPublishBox().$C20;

		$text.='<div class="banner3" id="Banner-10-4"></div>';
		
		$block=searchBlockCommerceNews(7); if ($block!="") { /* КОММЕРСЫ, 1 БЛОК */ $text.="<capt>Это интересно</capt>".$C10."<newsblock>".$block."</newsblock>"; } 
		
		$text.='<div class="banner3" id="Banner-10-6"></div>';

		$text.='<div class="banner3" id="Banner-10-8"></div>';

		$text.='<script type="text/javascript" src="//vk.com/js/api/openapi.js?116"></script><div id="vkm_groups"></div><script type="text/javascript">VK.Widgets.Group("vkm_groups", {mode: 0, width: "240", height: "400", color1: "FFFFFF", color2:"2B587A", color3: "5B7FA6"}, 77470792);</script>'.$C20;
		
/*
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
}(document,"ok_group_widget","57142167928872","{width:240,height:335}");
</script>'.$C20;
*/	

		$block=searchBlockCommerceNews(7); if ($block!="") { /* КОММЕРСЫ, 2 БЛОК */ $text.="<capt>Полезное</capt>".$C10."<newsblock>".$block."</newsblock>"; }			

		$text.='<div class="banner3" id="Banner-10-10"></div>'; 
		
			
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='C10'></div>"; return(array($text, ""));
}

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

function searchNextCommerceNews($data) { global $CommerceBlock; $cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<2 && $v["data"]["data"]>date(time()-3*24*60*60) && $v["used"]==0) { $CommerceBlock[$k]["used"]=1; $text=DrawNewsItem($v["data"], $data, 'IndexComs'); $cc++; }} return $text; }
function searchBlockCommerceNews($total) { global $CommerceBlock; $cc=1; foreach($CommerceBlock as $k=>$v) { if ($cc<=$total && $v["used"]==0) { $CommerceBlock[$k]["used"]=1; $text.=DrawNewsComrs($v["data"], "", 'IndexComs2'); $cc++; }} return $text; }
?>