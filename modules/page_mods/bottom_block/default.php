<?
$file="_bottomblock-newprodefault"; if (RetCache($file, "cacheblock")=="true") { list($Page["BottomContent"], $cap)=GetCache($file, 0); } else { list($Page["BottomContent"], $cap)=CreateBottomBlock(); SetCache($file, $Page["BottomContent"], "", "cacheblock"); }	

function CreateBottomBlock() {
	global $C,$C10;
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	
	$text.=$C."<hr>".$C10."<div class='TagsCloud'>";
		$data=DB("SELECT * FROM `_tags` ORDER BY RAND()"); for ($i=0; $i<$data["total"]; $i++) {
		@mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]);
		$text.="<a href='/tags/".$ar["id"]."' class='TagClass".round($ar["stat"]/2)."'>".$ar["name"]."</a> ";
	} $text.="</div>"; 
	
	// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
	return(array($text, ""));
}

?>