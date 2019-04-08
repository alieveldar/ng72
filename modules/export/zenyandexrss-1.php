<?
### Запрашиваемый файл должен определять переменную $rsstext

$rsstext = '<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:media="http://search.yahoo.com/mrss/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:georss="http://www.georss.org/georss">
<channel>
    <title>' . htmlspecialchars( $VARS["sitename"] ) . '</title>
    <link>http://' . $GLOBAL["host"] . '</link>
    <description>' . htmlspecialchars( $VARS["sitename"] ) . '</description>
    <language>ru</language>';

$q = "";
foreach ( $tables as $table ) {
    $tmp = explode( "_", $table );
    $link = $tmp[0];
    $q .= "(SELECT `$table`.`id`, `$table`.`name`, `$table`.`text`, `$table`.`data`, `$table`.`pic`, `_pages`.`link` FROM `$table` LEFT JOIN `_pages` ON `_pages`.`link`='$link' WHERE (`$table`.`stat`='1' && `$table`.`promo`!='1' && `$table`.`yarss`='1') GROUP BY 1) UNION ";
}
$datat = DB( trim( $q, "UNION " ) . " ORDER BY `data` DESC LIMIT 20" );
for ( $it = 0; $it < $datat["total"]; $it ++ ) {
    @mysql_data_seek( $datat["result"], $it );
    $at = @mysql_fetch_array( $datat["result"] );
    $rsstext .= '
        <item>
            <title>' . htmlspecialchars( $at["name"] ) . '</title>
            <link>http://' . $GLOBAL["host"] . '/' . $at["link"] . '/view/' . $at["id"] . '</link>
            <pdalink>http://m.' . $GLOBAL["host"] . '/' . $at["link"] . '/view/' . $at["id"] . '</pdalink>
            <pubDate>' . date( "r", $at["data"] ) . '</pubDate>
            <author>ng72.ru</author>
            <content:encoded>
                ' . htmlspecialchars( str_replace(['<div ', '</div>'], ['<p ', '</p>'], $at["text"]) ) . '
            </content:encoded>';
            if ( $at["pic"] != "" ) {
                $rsstext .= '
            <enclosure url="http://' . $GLOBAL["host"] . '/userfiles/picpreview/' . $at["pic"] . '" length="' .
                            abs( intval( filesize($_SERVER['DOCUMENT_ROOT'] . '/userfiles/picpreview/' . $at["pic"] ) ) ) .
                            '" type="image/jpeg" />';
            }
            $rsstext .= '
        </item>';
}

$rsstext .= '
    </channel>
</rss>';
?>