<?
### СТРОЧНЫЕ ОБЪЯВЛЕНИЯ ######################################################################################################################
$table1=$link."_objects"; $table2=$link."_razdels"; $table3=$link."_users"; $table4=$link."_pays"; $start=(string)$start;
### ОТДЕЛЬНЫЙ suid - UID для строчек ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### #
if (!$_SESSION["str_userid"]) { $_SESSION["str_userid"]=0; } $GLOBAL["suid"]=$_SESSION["str_userid"];


// FSpk0RBVsi
// 7EiDDqccnD
$data=DB("SELECT `sets` FROM `_pages` WHERE (`module`='strochki' && `stat`='1') LIMIT 1");
if ($data["total"]!=1) { $text=@file_get_contents($ROOT."/template/404.html"); $cap="Страница не найдена - 404"; $Page404=1;
} else {
	@mysql_data_seek($data["result"], 0); $ar=@mysql_fetch_array($data["result"]); $SETS=explode("|", $ar["sets"]);
	if ($start=="" || $start=="0") { list($text, $cap)=GetNewAdd(); }
	if ($start=="result") { list($text, $cap)=GetResult(); }
}

$Page["Content"]=$text; $Page["Caption"]=$cap;
#
#############################################################################################################################################

function GetPayClear() { global $dir; $_SESSION['OrderId']=0; SD(); @header("location: /".$dir[0]); exit(); }
function Email_check($Email) { if (!preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i",trim($Email))) { return false; } else { return true; }}

#############################################################################################################################################

function GetResult() {
	global $SETS, $VARS, $GLOBAL, $dir, $RealPage, $Page, $node, $table1, $table2, $table3, $table4, $C15, $C10, $C, $C5;
	if ($dir[2]=="success") { $cap="Успешная оплата"; $text='<div class="SuccessDiv">Спасибо! Счет №'.$_SESSION['OrderId'].' успешно оплачен.</div>';
	$text.="<div class='WhiteBlock'><img src='/modules/strochki/success.png' style='float:left; margin:0 15px 0 0;'> <a href='/".$dir[0]."/'><b><u>Вернуться в раздел</u></b></a>".$C."</div>".$C10; }
	if ($dir[2]=="fail") { $cap="Ошибка оплаты"; $text='<div class="ErrorDiv">Внимание! Возникла ошибка при оплате счета №'.$_SESSION['OrderId'].'.</div>';
	$text.="<div class='WhiteBlock'><img src='/modules/strochki/error.png' style='float:left; margin:0 15px 0 0;'> <a href='/".$dir[0]."/'><b><u>Вернуться в раздел</u></b></a>".$C."</div>".$C10; }
	$_SESSION['OrderId']=0; SD(); return(array($text, $cap));
}

#############################################################################################################################################

function GetNewAdd() { global $SETS, $VARS, $GLOBAL, $dir, $Page, $RealPage, $node, $table1, $table2, $table3, $table4, $C15, $C10, $C, $C5, $C20;
	$text="<div class='WhiteBlock'>".$node["text"]."</div>".$C15; 
	$raz=array(); $prses=array(); $sel=array(); $selr=""; $first=0;
	$data=DB("SELECT * FROM `".$dir[0]."_razdels` WHERE (`stat`='1') ORDER BY `rate` DESC");
	for($i=0; $i<$data["total"]; $i++) { @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $raz[]=$ar; }
	foreach ($raz as $main) { if ($main["pid"]==0) {
			$mid=$main["id"]; $selr.="<option value='".$mid."'>".$main["name"]."</option>"; if ($first==0) { $first=$mid; }
			$sel[$mid]='<select id="cat" name="cat" style="width:335px; font-size:13px;" onchange="ChangePrice();">';
			foreach ($raz as $sec) {
				if ($main["id"]==$sec["pid"]) { $sel[$mid].="<option value=\"".$sec["id"]."\">... ".$sec["name"]."</option>"; $prses[$sec["id"]]=$sec["price"]; $prs.="prices[".$sec["id"]."]='".$sec["price"]."';"; }
			} $sel[$mid].="</select>"; $func.="if (rid==".$mid.") { $('#cattd').html('".$sel[$mid]."'); } ";
	}}
	$text.="<script>function ChangeRazdel() { var rid=$('#rcat :selected').val(); $('#stoimost').html(''); ".$func." var ret=ChangePrice(); }</script>";
	$Data=$_SESSION["Data"]; SD();
	if (isset($Data["regbutton"])) { $er=0; $l1=mb_strlen(trim($Data["obj"])); $l2=mb_strlen(trim($Data["phone"])); $ll=$l1+$l2; $arpr=explode(",", $prses[$Data["cat"]]);
	
	$price=$arpr[5];
	if ($ll<191) { $price=$arpr[4]; }
	if ($ll<153) { $price=$arpr[3]; }
	if ($ll<115) { $price=$arpr[2]; }
	if ($ll<77) { $price=$arpr[1]; }
	if ($ll<39) { $price=$arpr[0]; }

	$sets=$Data["dop1"].",".$Data["dop2"].",".$Data["dop3"].",".$Data["dop4"].",".$Data["dop5"]; $onznak=$price; $exit=(int)$Data["srok"]; $dts=""; 
	if ((int)$Data["dop1"]==1) { $price=$price+500; } if ((int)$Data["dop2"]==1) { $price=$price+300; } if ((int)$Data["dop3"]==1) { $price=$price+200; } if ((int)$Data["dop4"]==1) { $price=$price+300; } if ((int)$Data["dop5"]==1) { $price=$price+250; }
	$oneprice=$price; $price=$price*$exit*$Data["hs"]; $price=(int)$price; if ((int)$Data["lico"]==2) { $utype="ЮЛ"; } else { $utype="ФЛ"; }
	$data=DB("INSERT INTO `".$table3."` (`login`,`pass`,`name`,`phone`) VALUES ('auto".date("Y.m.d.H.i.s-").rand(100,999)."', 'pass".date("Y.m.d.H.i.s-").rand(100,999)."', '".str_replace(array("select","in","or","delete","drop","insert","update","<br>","h1","h2","h3","from","union","*"),"",strip_tags($Data["fio"]))." (".$utype.")', '".htmlspecialchars($Data["phuser"])."')");
	$uid=DBL(); $q="INSERT INTO `".$dir[0]."_objects` (`uid`, `text`, `phone`, `rid`, `price`, `stat`, `sets`, `data`, `datas`, `dop`) VALUES ('".$uid."', '".$Data["obj"]."', '".$Data["phone"]."', '".(int)$Data["cat"]."', '$price', '0', '".$sets."', '".time()."', '".$exit."', 'Выходов: ".$exit.". Символов: ".$ll.". По разделу: ".$onznak."p. Скидка: ".round(100-100*$Data["hs"])."%. ".(int)$oneprice."p. x ".$exit."шт. - ".(100-100*$Data["hs"])."% = ".$price."p.')";
	$d=DB($q); $dbl=DBL(); DB("INSERT INTO `".$dir[0]."_pays` (`uid`, `oid`, `price`, `data`) VALUES ('".$uid."', '".$dbl."', '".$price."', '".time()."');"); $PAYMENT=DBL();
	 
	SD(); if ($er==0) { $signature=md5($SETS[0].":".(int)$price.":".(int)$PAYMENT.":".$SETS[1]); $paylink=$SETS[3]."?MrchLogin=".$SETS[0]."&OutSum=".(int)$price."&InvId=".$PAYMENT."&SignatureValue=".$signature; header("location: ".$paylink); exit(); }}
	
	 
	$text.='<hr>'.$C5.'<div class="RoundText WhiteBlock" id="Tgg"><script>prices=new Array(); '.$prs.'prices[0]=\'0,0,0,0\';</script><form action="/modules/SubmitForm.php?bp='.$RealPage.'" enctype="multipart/form-data" method="post" onsubmit="return SubmitForm();"><table>';
	$text.='<h2>Контактные данные</h2><tr class="TRLine0"><td class="VarText"><b>ФИО</b></td><td class="LongInput"><input name="fio" id="fio" style="width:320px;" value="" placeholder="для уточнения информации, не публикуется" /></td>
	<td rowspan="3" style="color:red; text-align:right; font-size:18px; line-height:24px;">Скидка от 4 выходов - 20%</td></tr>
	<tr class="TRLine0"><td class="VarText"><b>Телефон</b></td><td class="LongInput"><input name="phuser" id="phuser" style="width:320px;" value="" placeholder="для уточнения информации, не публикуется"/></td><td></td></tr>
	<!--<tr class="TRLine0"><td class="VarText"><b>Организация</b></td><td class="LongInput"><select id="lico" name="lico" style="width:335px; font-size:13px;"><option value="1">Физическое лицо</option><option value="2">Юридическое лицо</option></select></td><td></td></tr>-->
	<tr class="TRLine0"><td class="VarText" colspan="3">'.$C10.'<hr>'.$C10.'</td></tr>
	<tr class="TRLine0"><td class="VarText" style="width:20%;"><b>Выберите рубрику</b></td><td class="LongInput" style="width:35%;"><select id="rcat" name="rcat" style="width:335px; font-size:13px;" onchange="ChangeRazdel();">'.$selr.'</select></td><td style="width:40%;"></td></tr>
	<tr class="TRLine0"><td class="VarText" style="width:20%;"><b>Выберите подрубрику</b></td><td class="LongInput" style="width:35%;" id="cattd">'.$sel[$first].'</td><td style="width:40%;"></td></tr>
	<tr class="TRLine0"><td class="VarText"><b>Текст объявления</b><br><span style="color:#777; font-size:10px;">(указывайте здесь только текст, телефон указывается ниже)</span></td>
	<td class="LongInput"><textarea name="obj" id="obj" style="width:320px; height:70px;" maxlength="288"></textarea><script>$("#obj").maxlength({max: 288});</script><input name="hs" id="hs" value="1" type="hidden" /></td><td style="color:#777; font-size:10px;"><div id="stoimost"></div><div class="C10"></div>Всего символов: <b><span id="leng">0</span></b></td></tr>
	<tr class="TRLine0"><td class="VarText"><b>Телефон в объявлении</b></td><td class="LongInput"><input name="phone" id="phone" style="width:320px;" /></td><td><span style="color:#777; font-size:10px;">входит в общее количество</span></td></tr>
	<tr class="TRLine0"><td class="VarText"><b>Срок размещения</b><br><span style="color:#777; font-size:10px;">(количество выходов газеты)</span></td><td class="LongInput"><input name="srok" id="srok" style="width:320px;" value="1" /></td><td></td></tr>
	<!--<tr class="TRLine0"><td class="VarText" colspan="3"><div class="C5"></div><h3>Даты выходов объявлений. Всего выходов: <span id="texit">1</span></h3><div class="C10"></div><i style="font-size:11px; font-family:Arial;color:red;">Выберите желаемые даты выхода объявления, для этого кликните на соответствующие желтые ячейки календаря. Выход газеты  
    происходит 1 раз в неделю по средам. Внимание! Понедельник - последний день приема объявлений в текущую неделю.</i></td></tr><tr class="TRLine0"><td colspan="3"><i style="font-size:11px; font-family:Arial;">При размещении объявления на длительный период (от 4 выходов газеты подряд) действуют значительные скидки:<br>2 выхода и более - 10%, 5 выходов и более - 15%, 8 выходов и более - 20%, 15 выходов и более - 25%</i></td></tr>-->
	<tr class="TRLine0"><td class="VarText" colspan="3">'.$C10.'<h3>Сделайте ваше объявление более заметным:</h3>'.$C10.'</td></tr><tr class="TRLine0"><td colspan="3">
	<input type="hidden" name="dop1" value="0" /><input type="hidden" name="dop2" value="0" /><input type="hidden" name="dop3" value="0" /><input type="hidden" name="dop4" value="0" /><input type="hidden" name="dop5" value="0" />
	<input type="checkbox" id="dop3" name="dop3" value="1" /> <b>выделено жирным шрифтом</b><span style="color:#777; font-size:10px;"> ... увеличение стоимости объявления на <b>200 рублей</b></span><div class="C10"></div>
	<input type="checkbox" id="dop5" name="dop5" value="1" /> <b>цвет + выделено жирным шрифтом</b><span style="color:#777; font-size:10px;"> ... увеличение стоимости объявления на <b>250 рублей</b></span><div class="C10"></div>
	<input type="checkbox" id="dop4" name="dop4" value="1" /> <b>выделено обводкой</b><span style="color:#777; font-size:10px;"> ... увеличение стоимости объявления на <b>300 рублей</b></span><div class="C10"></div>
	<input type="checkbox" id="dop2" name="dop2" value="1" /> <span style="border:1px solid black;">выделено  рамкой</span><span style="color:#777; font-size:10px;"> ... увеличение стоимости объявления на  <b>300 рублей</b></span><div class="C10"></div>
	<input type="checkbox" id="dop1" name="dop1" value="1" /> <span style="border:1px solid black; background-color:#90c2df">синий фон + рамка + <b>крупный номер</b></span><span style="color:#777; font-size:10px;"> ... увеличение стоимости объявления на  <b>500 рублей</b></span><div class="C10"></div>
	</td></tr><tr class="TRLine0"><td class="VarText" colspan="3">'.$C10.'<hr>'.$C10.'</td></tr><tr class="TRLine0"><td><b>Стоимость одного выхода:</b><br><div id="sum" class="summa">0<b>р.</b></div></td>
	<td><b>Скидка за долгосрок:</b><br><div id="skidka" class="summa">0<b>%</b></div></td><td><b>Общая стоимость:</b><br><div id="sumall" class="summa">0<b>.</b></div></td></tr>';
	$text.='</table>'.$C15.'<div class="CenterText"><input type="hidden" id="datss" name="datss"><input type="submit" name="regbutton" class="SaveButton" value="Добавить и оплатить"></div></form><div class="C10"></div></div>';

	$cap="Подать объявление в газету";
return(array($text, $cap)); }


#############################################################################################################################################

?>