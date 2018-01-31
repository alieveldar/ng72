var GET=parseGetParams(); var pid=GET["id"]; var ids; $(".JsVerify").live("focus", function(){ $(this).toggleClass("ErrorInput",false);});

function ItemDelete(id, tab) { $("#Act"+id).html(loader); caption="Подтвердите удаление"; text='Удалить запись?<br>Все публикации этого раздела потеряют категорию и не будут привязаны к другим категориям.<br><br>Данное действие будет невозможно отменить.'+"<div class='C25'></div><div class='LinkG' style='float:left; margin-right:5px;'><a href='javascript:void(0);' onclick='ActionAndUpdate("+id+", \"DEL\", \""+tab+"\", \"\");'>Удалить</a></div><div class='LinkR'><a href='javascript:void(0);' onclick='CloseBlank(); ReturnI("+id+", \""+tab+"\")'>Отмена</a></div><div class='C10'></div>"; ViewBlank(caption, text); }
function MultiDelete(tab) { ids = []; $('.selectItem:checked').each(function(){ ids.push($(this).attr('id')); }); caption="Подтвердите удаление"; text='Удалить записи?<br>Данное действие будет невозможно отменить.'+"<div class='C25'></div><div class='LinkG' style='float:left; margin-right:5px;'><a href='javascript:void(0);' onclick='ActionAndUpdate(\""+ids.join()+"\", \"DEL\", \""+tab+"\", \"\");'>Удалить</a></div><div class='LinkR'><a href='javascript:void(0);' onclick='CloseBlank();'>Отмена</a></div><div class='C10'></div>"; ViewBlank(caption, text); }

function ItemUp(id, tab, ord) { var adiv=$("#Line"+id).prev(); $("#Line"+id).insertBefore(adiv); ActionAndUpdate(id, "UP", tab, ord); }
function ItemDown(id, tab, ord) { var adiv=$("#Line"+id).next(); $("#Line"+id).insertAfter(adiv); ActionAndUpdate(id, "DOWN", tab, ord); }

function ActionAndUpdate(id, act, tab, ord) { CloseBlank(); $("#Msg2").html("Идет сохранение данных...").removeClass().addClass("SaveDiv"); JsHttpRequest.query('modules/lenta/cats-JSReq.php',{'id':id,'act':act,'tab':tab,'ord':ord},function(result,errors){ if(result){ $("#Msg2").html("Данные успешно сохранены").removeClass().addClass("SuccessDiv"); /**/ if (act=="DEL"){ if(!$('.loader').size()) $('.MultiDel').hide(); if(/,/.test(id)){ for(var i = 0; i<ids.length; i++) $("#Line"+ids[i]).remove(); } else { $("#Line"+id).remove(); } } /**/ }},true); }
function ReturnI(id, tab) { $("#Act"+id).html('<a href="javascript:void(0);" onclick="ItemDelete(\''+id+'\',\''+tab+'\')"><img src="/admin/images/icons/exit.png" valign="middle" title="" style="margin:-2px 3px 0 0;"></a>'); }




function AddNewCat(table) { var cap="Добавить новую категорию"; var text=""; var button='<div class="CenterText" id="JSLoader"><input type="submit" class="SaveButton" value="Добавить" onclick="AddNewMenuAct(\''+table+'\');"></div>';
text=text+'<tr class="TRLine0"><td>Название категории<star>*</star></td><td class="NormalInput"><input id="Rn0" type="text" class="JsVerify"></td></tr>'; text=text+'<tr class="TRLine0"><td>Включено</td><td class="NormalInput"><input id="Rb0" type="checkbox" checked></td></tr>'; text="<div class='RoundText' id='Tgg' style='width:500px;'><table>"+text+"</table><div class='C10'></div>"+button+"</div>"; ViewBlank(cap, text); $('#Rb0').tzCheckbox({labels:['да ','нет']}); }

function AddNewMenuAct(table) { chk=$('#Rb0').attr('checked'); if(chk=='checked'){chk=1;}else{chk=0;} name=$('#Rn0').val(); error=0; if (name=="" || name=="NULL"){ error=1; $("#Rn0").toggleClass("ErrorInput", true);} if (error==0) { $("#JSLoader").html(loader2); JsHttpRequest.query('modules/lenta/cats-add-JSReq.php',{'table':table, 'chk':chk, 'name':name },function(result,errors){if(result){ /*s*/ UpdateCats(table); /*e*/ }},true); }}


function ItemEdit(id, table, name) { var cap="Редактировать категорию"; text=""; var button='<div class="CenterText" id="JSLoader"><input type="submit" class="SaveButton" value="Сохранить" onclick="SaveMenuItem(\''+id+'\', \''+table+'\');"></div>';
text=text+"<tr class='TRLine0'><td>Название категории<star>*</star></td><td class='NormalInput'><input id='Rned' type='text' class='JsVerify' value='"+name+"'></td></tr>"; text="<div class='RoundText' id='Tgg' style='width:500px;'><table>"+text+"</table><div class='C10'></div>"+button+"</div>"; ViewBlank(cap, text); }

function SaveMenuItem(id, table) { name=$('#Rned').val(); error=0; if (name=="" || name=="NULL"){ error=1; $("#Rned").toggleClass("ErrorInput", true);} $("#JSLoader").html(loader2); JsHttpRequest.query('modules/lenta/cats-edit-JSReq.php',{'table':table, 'id':id, 'name':name},function(result,errors){if(result){ /*s*/ UpdateCats(table); /*e*/ }},true); }

function UpdateCats(table) { CloseBlank(); $("#Msg2").html("Идет сохранение данных..."); $("#Msg2").removeClass(); $("#Msg2").addClass("SaveDiv"); JsHttpRequest.query('modules/lenta/cats-update-JSReq.php',{'table':table},function(result,errors){ if(result){  /*s*/ $("#Tgg").html(result["content"]); $("#Msg2").html("Данные успешно сохранены"); $("#Msg2").removeClass(); $("#Msg2").addClass("SuccessDiv"); $('#Tgg input').tzCheckbox({labels:['да ','нет']}); /*e*/ }},true); }