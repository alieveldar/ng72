var GET=parseGetParams(); var pid=GET["id"]; var ids;

function ItemDelete(id, tab) { $("#Act"+id).html(loader); caption="Подтвердите удаление"; text='Удалить запись?<br>Данное действие будет невозможно отменить.'+"<div class='C25'></div><div class='LinkG' style='float:left; margin-right:5px;'><a href='javascript:void(0);' onclick='ActionAndUpdate("+id+", \"DEL\", \""+tab+"\", \"\");'>Удалить</a></div><div class='LinkR'><a href='javascript:void(0);' onclick='CloseBlank(); ReturnI("+id+", \""+tab+"\")'>Отмена</a></div><div class='C10'></div>"; ViewBlank(caption, text); }
function MultiDelete(tab) { ids = []; $('.selectItem:checked').each(function(){ ids.push($(this).attr('id')); }); caption="Подтвердите удаление"; text='Удалить записи?<br>Данное действие будет невозможно отменить.'+"<div class='C25'></div><div class='LinkG' style='float:left; margin-right:5px;'><a href='javascript:void(0);' onclick='ActionAndUpdate(\""+ids.join()+"\", \"DEL\", \""+tab+"\", \"\");'>Удалить</a></div><div class='LinkR'><a href='javascript:void(0);' onclick='CloseBlank();'>Отмена</a></div><div class='C10'></div>"; ViewBlank(caption, text); }

function ItemUp(id, tab, ord) { var adiv=$("#Line"+id).prev(); $("#Line"+id).insertBefore(adiv); ActionAndUpdate(id, "UP", tab, ord); }
function ItemDown(id, tab, ord) { var adiv=$("#Line"+id).next(); $("#Line"+id).insertAfter(adiv); ActionAndUpdate(id, "DOWN", tab, ord); }

function ActionAndUpdate(id, act, tab, ord) { CloseBlank(); $("#Msg2").html("Идет сохранение данных...").removeClass().addClass("SaveDiv"); JsHttpRequest.query('modules/lenta/dater-JSReq.php',{'id':id,'act':act,'tab':tab,'ord':ord},function(result,errors){ if(result){ $("#Msg2").html("Данные успешно сохранены").removeClass().addClass("SuccessDiv"); /**/ if (act=="DEL"){ if(!$('.loader').size()) $('.MultiDel').hide(); if(/,/.test(id)){ for(var i = 0; i<ids.length; i++) $("#Line"+ids[i]).remove(); } else { $("#Line"+id).remove(); } } /**/ }},true); }
function ReturnI(id, tab) { $("#Act"+id).html('<a href="javascript:void(0);" onclick="ItemDelete(\''+id+'\',\''+tab+'\')"><img src="/admin/images/icons/exit.png" valign="middle" title="" style="margin:-2px 3px 0 0;"></a>'); }