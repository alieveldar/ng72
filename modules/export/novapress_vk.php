<?php
### Запрашиваемый файл должен определять переменную $rsstext 

$rsstext='<?xml version="1.0" encoding="UTF-8" ?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
<channel>
<atom:link href="http://'.$GLOBAL["host"].'/vk_np.xml" rel="self" type="application/rss+xml"/>
<title>'.$VARS["sitename"].'</title>
<link>http://'.$GLOBAL["host"].'</link>
<description>'.$VARS["sitename"].'</description>
<lastBuildDate>'.date("r").'</lastBuildDate>
<image>
  <url>http://'.$GLOBAL["host"].'/template/index/logo.png</url>
  <title>'.$VARS["sitename"].'</title>
  <link>http://'.$GLOBAL["host"].'</link>
</image>';



$q="";
foreach($tables as $table) {
    $tmp=explode("_", $table);
    $link=$tmp[0];
    // Если нет столбца vk_np
    $vk_np_if = "AND 0 != ( SELECT ( SELECT vk_np FROM $table AS t WHERE t.id = $table.id ) FROM ( SELECT 0 AS vk_np ) AS dummy)";
    $q.="(SELECT `$table`.name, `$table`.pic, `$table`.id, `$table`.alias, `$table`.data, `$table`.lid, '$link' as `link` FROM `$table` WHERE (`$table`.`stat`='1' $vk_np_if) GROUP BY 1) UNION ";
    //$q.="(SELECT `$table`.`id`,`$table`.`alias`, `$table`.`name`, `$table`.`lid` as `text`, `$table`.`data`, `$table`.`pic`, `_pages`.`link` FROM `$table` LEFT JOIN `_pages` ON `_pages`.`link`='$link'  WHERE (`$table`.`stat`='1' && `$table`.`promo`!='1') GROUP BY 1) UNION ";
}
$datat=DB(trim($q, "UNION ")." ORDER BY `data` DESC LIMIT 20");
for($it=0; $it<$datat["total"]; $it++) {
    @mysql_data_seek($datat["result"], $it);
    $at=@mysql_fetch_array($datat["result"]);
    if ($at["pic"]!="") {
        $rsstexti='
        <enclosure url="http://'.$GLOBAL["host"].'/userfiles/picoriginal/'.$at["pic"].'" type="image/jpeg" />';
        $rsstextim='
        <a href="http://'.$GLOBAL["host"].'/'.$at["link"].'/view/'.$at["id"].'"><img src="http://'.$GLOBAL["host"].'/userfiles/picitem/'.$at["pic"].'" style="float:left; margin:0 10px 10px 0;"></a>';
    }
    if ($at["alias"]!="") { $at["id"]=$at["alias"]; }
    $rsstext.='
    <item>
        <title>'.$at["name"].'</title>
        <pubDate>'.date("r", $at["data"]).'</pubDate>
        <link>http://'.$GLOBAL["host"].'/'.$at["link"].'/view/'.$at["id"].'</link>'.$rsstexti.'
        <guid isPermaLink="true">http://'.$GLOBAL["host"].'/'.$at["link"].'/view/'.$at["id"].'</guid>
        <description><![CDATA[ '.$rsstextim.$at["lid"].'<div style="clear:both;"></div> ]]></description>';	
    $rsstext.='
    </item>';
}

$rsstext.='
</channel>
</rss>';
?>