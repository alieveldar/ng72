var GET=parseGetParams(); var pid=GET["id"];
function ItemDelete(id, tab) { $("#Act"+id).html(loader); caption="Подтвердите удаление"; text='Удалить запись?<br>Данное действие будет невозможно отменить.'+"<div class='C25'></div><div class='LinkG' style='float:left; margin-right:5px;'><a href='javascript:void(0);' onclick='ActionAndUpdate("+id+", \"DEL\", \""+tab+"\", \"\");'>Удалить</a></div><div class='LinkR'><a href='javascript:void(0);' onclick='CloseBlank(); ReturnI("+id+", \""+tab+"\")'>Отмена</a></div><div class='C10'></div>"; ViewBlank(caption, text); }
function ActionAndUpdate(id, act, tab, ord) { CloseBlank(); JsHttpRequest.query('modules/banners/arhive-JSReq.php',{'id':id,'act':act,'tab':tab,'ord':ord},function(result,errors){ if(result){ /**/ if (act=="DEL"){ $("#Line"+id).remove(); } /**/ }},true); }
function ReturnI(id, tab) { $("#Act"+id).html('<a href="javascript:void(0);" onclick="ItemDelete(\''+id+'\',\''+tab+'\')"><img src="/admin/images/icons/exit.png" valign="middle" title="" style="margin:-2px 3px 0 0;"></a>'); }