<?	
$file="_bottomblock-new2_default"; if (RetCache($file, "cacheblock")=="true") { list($Page["BottomContent"], $cap)=GetCache($file, 0); } else { list($Page["BottomContent"], $cap)=CreateBottomBlock(); SetCache($file, $Page["BottomContent"], "", "cacheblock"); }	

function CreateBottomBlock() {
	global $Domains, $SubDomain, $GLOBAL, $C20; $text='';
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
		
		$text.=$C20."<div class='TagsCloud'>";
		$data=DB("SELECT * FROM `_tags` ORDER BY RAND()"); for ($i=0; $i<$data["total"]; $i++) {
			@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);
			$text.="<a href='/tags/".$ar["id"]."' class='TagClass".round($ar["stat"]/2)."'>".$ar["name"]."</a> ";
		} $text.="</div>";
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	$text.="<div class='C10'></div>"; return(array($text, ""));
}
?>
