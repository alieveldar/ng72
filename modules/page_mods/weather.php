<?php
 
$Page["Content"].='<div class="WhiteBlock">'; $file="_index-weather"; $VARS["cachepages"] = 180;
if (RetCache($file)=="true") { list($text, $cap)=GetCache($file, 0); } else { list($text, $cap)=WeatherTable(); SetCache($file, $text, ""); }
$text = '<br><br><br><div id="cont_1e150578d2f58f3b9426d79aebdbcf99"><script type="text/javascript" async src="https://www.pogoda.com/wid_loader/1e150578d2f58f3b9426d79aebdbcf99"></script></div> ';
$Page["Content"].='<div class="WeatherImp"><div>'.$text.'</div></div>'.$C20.'</div>';
 
 
function WeatherTable(){
    return ['', ''];
}



