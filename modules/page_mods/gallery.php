<?
$Page["Caption"]=""; if ($start=="") { header("location: /".$link."/all"); exit(); }
$file1=$link."-".$start.".".$page.".".$id; $file2=$link."-".$start.".top.".$page.".".$id;
if (RetCache($file1)=="true") { list($text1, $cap1)=GetCache($file1); } else { list($text1, $cap1)=GalleryPage(); SetCache($file1, $text1, $cap1); }
if (RetCache($file2)=="true") { list($text2, $cap2)=GetCache($file2); } else { list($text2, $cap2)=TopGalleryPage(); SetCache($file2, $text2, $cap2); }
$Page["TopContent"].="<h1>".$cap1."</h1>".$C.$text2; $Page["Content"]=$text1; $Page["Title"]=$cap1;
	
function GalleryPage() {
	$dir=explode("/", trim($_SERVER["REQUEST_URI"], "/")); $link = $dir[0]; $start = $dir[1]; $page = $dir[2]; $id = $dir[3];
	if ($start=="all") { list($text, $cap)=AllGallery(); } if ($start=="photo") { list($text, $cap)=PhotoGallery(); }
	if ($start=="video") { list($text, $cap)=VideoGallery(); } if ($start=="multimedia") { list($text, $cap)=MultimediaGallery(); }
	return (array($text, $cap));
}

function TopGalleryPage() {
	$dir=explode("/", trim($_SERVER["REQUEST_URI"], "/")); $link = $dir[0]; $start = $dir[1]; $page = $dir[2]; $id = $dir[3];
	if ($start=="all") { list($text, $cap)=AllGalleryTop(); } if ($start=="photo") { list($text, $cap)=PhotoGalleryTop(); }
	if ($start=="video") { list($text, $cap)=VideoGalleryTop(); } if ($start=="multimedia") { list($text, $cap)=MultimediaGalleryTop(); }
	return (array($text, $cap));
}

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

function AllGallery() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; $cap=$node["name"];
	$onpage=15; $pg=$dir[2]?$dir[2]:1; $from=($pg-1)*$onpage; $onblock=4;
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, `[table]`.`comcount`, '[link]' as `link` FROM `[table]`
	WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%' OR `[table]`.`tags` LIKE '%,143,%' OR `[table]`.`tags` LIKE '%,168,%'))";
	$endq="ORDER BY `data` DESC LIMIT $from, $onpage"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4])."</div>".$coms."</div></div>".$C25;
	endfor;
	$q="SELECT `[table]`.`id`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%' OR `[table]`.`tags` LIKE '%,143,%' OR `[table]`.`tags` LIKE '%,168,%'))";
	$endq=""; $data=getNewsFromLentas($q, $endq); $text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return (array($text, $cap));
}

function AllGalleryTop() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; 
	$text="<div class='TagListGal'><b>Все категории</b><a href='/".$link."/photo'>Фото</a><a href='/".$link."/video'>Видео</a><a href='/".$link."/multimedia'>Мультимедиа</a></div>";
	$text.="<div class='galleryHead' style='width:auto; height:460px' data-cols='5' data-rows='4' data-bigcell-limit='3' data-bg-size='cover' data-update-interval='10000' data-transition-time='500'>";
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%' OR `[table]`.`tags` LIKE '%,72,%' OR `[table]`.`tags` LIKE '%,19,%'))";
	$endq="ORDER BY `data` DESC LIMIT 30"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); 
	$text.="<a  href='/$ar[link]/view/$ar[id]' title='$ar[name]'><img src='/userfiles/picitem/$ar[pic]' title='$ar[name]'></a>"; endfor; $text.="</div>".$C10; return (array($text, ""));
}

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

function PhotoGallery() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; $cap="Фото / ".$node["name"];
	$onpage=15; $pg=$dir[2]?$dir[2]:1; $from=($pg-1)*$onpage; $onblock=4;
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, `[table]`.`comcount`, '[link]' as `link` FROM `[table]`
	WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%'))";
	$endq="ORDER BY `data` DESC LIMIT $from, $onpage"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4])."</div>".$coms."</div></div>".$C25;
	endfor;
	$q="SELECT `[table]`.`id`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%'))";
	$endq=""; $data=getNewsFromLentas($q, $endq); $text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return (array($text, $cap));
	
	
	return (array($text, $cap));
}

function PhotoGalleryTop() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; 
	$text="<div class='TagListGal'><a href='/".$link."/all'>Все категории</a><b>Фото</b><a href='/".$link."/video'>Видео</a><a href='/".$link."/multimedia'>Мультимедиа</a></div>";
	$text.="<div class='galleryHead' style='width:auto; height:460px' data-cols='5' data-rows='4' data-bigcell-limit='3' data-bg-size='cover' data-update-interval='10000' data-transition-time='500'>";
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,93,%'))";
	$endq="ORDER BY `data` DESC LIMIT 30"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); 
	$text.="<a  href='/$ar[link]/view/$ar[id]' title='$ar[name]'><img src='/userfiles/picitem/$ar[pic]' title='$ar[name]'></a>"; endfor; $text.="</div>".$C10; return (array($text, ""));
}

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


function VideoGallery() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; $cap="Видео / ".$node["name"];
	$onpage=15; $pg=$dir[2]?$dir[2]:1; $from=($pg-1)*$onpage; $onblock=4;
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, `[table]`.`comcount`, '[link]' as `link` FROM `[table]`
	WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,143,%'))";
	$endq="ORDER BY `data` DESC LIMIT $from, $onpage"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4])."</div>".$coms."</div></div>".$C25;
	endfor;
	$q="SELECT `[table]`.`id`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,72,%'))";
	$endq=""; $data=getNewsFromLentas($q, $endq); $text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return (array($text, $cap));
	return (array($text, $cap));
}

function VideoGalleryTop() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; 
	$text="<div class='TagListGal'><a href='/".$link."/all'>Все категории</a><a href='/".$link."/photo'>Фото</a><b>Видео</b><a href='/".$link."/multimedia'>Мультимедиа</a></div>";
	$text.="<div class='galleryHead' style='width:auto; height:460px' data-cols='5' data-rows='4' data-bigcell-limit='3' data-bg-size='cover' data-update-interval='10000' data-transition-time='500'>";
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,143,%'))";
	$endq="ORDER BY `data` DESC LIMIT 30"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); 
	$text.="<a  href='/$ar[link]/view/$ar[id]' title='$ar[name]'><img src='/userfiles/picitem/$ar[pic]' title='$ar[name]'></a>"; endfor; $text.="</div>".$C10; return (array($text, ""));
}

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---


function MultimediaGallery() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; $cap="Мультимедиа / ".$node["name"];
	$onpage=15; $pg=$dir[2]?$dir[2]:1; $from=($pg-1)*$onpage; $onblock=4;
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, `[table]`.`comcount`, '[link]' as `link` FROM `[table]`
	WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,168,%'))";
	$endq="ORDER BY `data` DESC LIMIT $from, $onpage"; $data=getNewsFromLentas($q, $endq);
	for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); $d=ToRusData($ar["data"]); $pic="";
		if ($ar["pic"]!="") { $pic="<img src='/userfiles/pictavto/".$ar["pic"]."' title='".$ar["name"]."' />"; }
		if ($UserSetsSite[3]==1 && $ar["comments"]!=2) { $coms="<div class='CommentBox'><a href='/".$ar["link"]."/view/".$ar["id"]."#comments'>".$ar["comcount"]."</a></div>"; } else { $coms=""; }
		$text.="<div class='NewsLentaList' id='NewsLentaList-".$ar["id"]."'><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$pic."</a><h2><a href='/".$ar["link"]."/view/".$ar["id"]."'>".$ar["name"]."</a></h2>".$C."
		<div class='Info'><div class='Other'>".Replace_Data_Days($d[4])."</div>".$coms."</div></div>".$C25;
	endfor;
	$q="SELECT `[table]`.`id`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,19,%'))";
	$endq=""; $data=getNewsFromLentas($q, $endq); $text.=Pager2($pg, $onpage, ceil($data["total"]/$onpage), $dir[0]."/".$dir[1]."/[page]"); return (array($text, $cap));
	return (array($text, $cap));
}

function MultimediaGalleryTop() {
	global $VARS, $GLOBAL, $dir, $link, $ORDERS, $RealHost, $Page, $node, $UserSetsSite, $C, $C20, $C10, $C25; 
	$text="<div class='TagListGal'><a href='/".$link."/all'>Все категории</a><a href='/".$link."/photo'>Фото</a><a href='/".$link."/video'>Видео</a><b>Мультимедиа</b></div>";
	$text.="<div class='galleryHead' style='width:auto; height:460px' data-cols='5' data-rows='4' data-bigcell-limit='3' data-bg-size='cover' data-update-interval='10000' data-transition-time='500'>";
	$q="SELECT `[table]`.`id`, `[table]`.`name`, `[table]`.`pic`, `[table]`.`data`, '[link]' as `link` FROM `[table]` WHERE (`[table]`.`stat`='1' && (`[table]`.`tags` LIKE '%,168,%'))";
	$endq="ORDER BY `data` DESC LIMIT 30"; $data=getNewsFromLentas($q, $endq); for ($i=0; $i<$data["total"]; $i++): @mysql_data_seek($data["result"], $i); $ar=@mysql_fetch_array($data["result"]); 
	$text.="<a  href='/$ar[link]/view/$ar[id]' title='$ar[name]'><img src='/userfiles/picitem/$ar[pic]' title='$ar[name]'></a>"; endfor; $text.="</div>".$C10; return (array($text, ""));
}

# --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --

?>