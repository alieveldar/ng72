<?
$Page["Content"].='<div class="WhiteBlock">';

$file="_index-weather"; $VARS["cachepages"] = 180;
if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=WeatherTable(); SetCache($file, $text, ""); }
$Page["Content"].='<h2>Погода на неделю</h2><div class="WeatherImp"><div>'.$text.'</div>'.$C20;

//$Page["Content"].='</div>';
//$Page["RightContent"]='';
//$Page["Right2Content"]='';

function WeatherTable() { $C=""; 
	$txt=file_get_contents("http://www.gismeteo.ru/city/weekly/4501/"); $t=explode('</h1>', $txt); $a=explode("<h2", $t[1]); $text=str_replace('colspan="3"', 'colspan="3" align="left" style="font-size:18px; color:#4887B7;"', $a[0]);
 	return (array($text, $C));
}
?>