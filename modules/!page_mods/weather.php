<?
$Page["Content"].='<div class="WhiteBlock">';
$Page["Content"].='
<!-- Gismeteo informer START -->
<link rel="stylesheet" type="text/css" href="http://www.gismeteo.ru/static/css/informer2/gs_informerClient.min.css">
<div id="gsInformerID-57nuUqTVsTC1Fs" class="gsInformer" style="width:600px;height:227px">
  <div class="gsIContent">
   <div id="cityLink">
     <a href="http://www.gismeteo.ru/city/daily/4501/" target="_blank">Погода в Тюмени</a>
   </div>
   <div class="gsLinks">
     <table>
       <tr>
         <td>
           <div class="leftCol">
             <a href="http://www.gismeteo.ru" target="_blank">
               <img alt="Gismeteo" title="Gismeteo" src="http://www.gismeteo.ru/static/images/informer2/logo-mini2.png" align="absmiddle" border="0" />
               <span>Gismeteo</span>
             </a>
           </div>
           <div class="rightCol">
             <a href="http://www.gismeteo.ru/city/weekly/4501/" target="_blank">Прогноз на 2 недели</a>
           </div>
           </td>
        </tr>
      </table>
    </div>
  </div>
</div>
<script src="http://www.gismeteo.ru/ajax/getInformer/?hash=57nuUqTVsTC1Fs" type="text/javascript"></script>
<!-- Gismeteo informer END -->'.$C20.$C10;
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