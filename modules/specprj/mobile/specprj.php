<?
$table = $link . "_specprj";
if ($start == "") {
    $start = "list";
    $dir[1] = "list";
}
$file = $table . "-" . $start . "." . $page . "." . $id;

#############################################################################################################################################
### Вывод списка спецпроекто
//AddBase(10);
if ($start == "list") {
    if (RetCache($file) == "true") {
        list($text) = GetCache($file);

    } else {
        list($text) = GetLentaList();
        SetCache($file, $text);
    }
    $Page["Content"] = $text;
    $Page["Caption"] = GetCaption($link);
}

#############################################################################################################################################

function GetLentaList()
{
    global $ORDERS, $VARS, $ROOT, $GLOBAL, $dir, $RealHost, $Page, $node, $UserSetsSite, $table, $tag, $C, $C20, $C10, $C25, $C15;
    $query = '';
    $orderby = $ORDERS[$node["orderby"]];
    $tables = array();
    $onpage = 21;
    $pg = $dir[2] ? $dir[2] : 1;
    $from = ($pg - 1) * $onpage;
    $onblock = 4;

    $q = "SELECT " . $table . ".`id`, " . $table . ".`lid`, " . $table . ".`realinfo`, " . $table . ".`name`, " . $table . ".`data`, " . $table . ".`pic`, " . $table . ".`seens`, 'prj_specprj' as `link`
	FROM " . $table . " WHERE " . $table . ".`stat`='1'";


    $endq = "ORDER BY `data` DESC LIMIT " . $from . ", " . $onpage;
    $data = DB($q . $endq);
    $text .= "<section class='spec-articles'>";
    for ($i = 0; $i < $data["total"]; $i++) {
        @mysql_data_seek($data["result"], $i);
        $ar = @mysql_fetch_array($data["result"]);
        $d = ToRusData($ar["data"]);
        $pic = "";
        if ($ar["pic"] != "") {
            if (strpos($ar["pic"], "old") != 0) { /*Старый вид картинок*/
                $pic = "<img class='spec-article-item__img' src='" . $ar["pic"] . "' title='" . $ar["name"] . "' />";
            } else { /*Новый вид картинок*/
                $pic = "<img class='spec-article-item__img' src='/userfiles/pictavto/" . $ar["pic"] . "' title='" . $ar["name"] . "' />";
            }
        }

        $text .= "<article class='spec-article-item'><a class='spec-article-item__link' data-id=" . $ar['id'] . " data-pref='" . $table . "' target='_blank' href='" . $ar["realinfo"] . "'>" . $pic . "<h2 class='spec-article-item__title'>" . $ar["name"] . "</h2><p class='spec-article-item__subtitle'>" . $ar["lid"] . "</p></a><div class='spec-article-item__info'><time class='spec-article-item__info-text' datetime='" . Replace_Data_Days($d[4]) . "'>" . Replace_Data_Days($d[3]) . "</time><span class=\"Seen\" width=\"1%\">" . $ar["seens"] . "</span></div></article>";

        if ($data["total"] > ($i + 1)) {
            if (($i + 1) % $onblock == 0) {
                // $text.=$C25."<div class='banner2' id='Banner-6-".(floor($i/$onblock)+1)."'></div>".$C;
            } else {
                // $text.=$C25;
            }
        }
    }
    $text .= "</section>";
    $q = "SELECT " . $table . ".`id` FROM " . $table . " WHERE " . $table . ".`stat`='1'";
    $endq = "";
    $data = DB($q . $endq);
    $text .= Pager3($pg, $onpage, ceil($data["total"] / $onpage), $dir[0] . "/" . $dir[1] . "/[page]");
    return array($text);
}

function GetCaption($link)
{
    $q = "SELECT _pages.`name` FROM _pages WHERE _pages.`link` = '$link'";
    $data = DB($q);
    $datas = mysql_data_seek($data["result"], 0);
    return mysql_result($data["result"], 0);
}

#############################################################################################################################################
function AddBase($lim)
{
    $count = 0;

    while ($count < $lim) {
        $q = "INSERT INTO prj_specprj (`data`, `adata`, `name`,`title`,`pic`) VALUES('1552308684','1552308684','Плитка$count','Плитка$count','img-20190311175542-569.jpg')";
        $count++;
        $data = DB($q);


    }
}

?>