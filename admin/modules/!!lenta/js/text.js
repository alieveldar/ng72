var autosave=30; var autosaveon=0; $(document).ready(function() { maxlen(); autosavef(); setInterval(maxlen, 100); setInterval(autosavef, 1000); }); function maxlen() { var ch=$("#lid").val(); var chl=ch.length; if (chl==0) { cht="<span style='color:#000;'>0</span>"; } if (chl>0 && chl<100) { cht="<span style='color:#ff7e00;' title='Короткий лид'>"+chl+"</span>"; } if (chl>=100 && chl<=200) { cht="<span style='color:#37921e;' title='Лид нужного размера'>"+chl+"</span>"; } if (chl>200) { cht="<span style='color:#dd0000;' title='Большой лид'>"+chl+"</span>"; } $("#dcount").html(cht); } function autosavef() { if (autosaveon==0) { autosave=autosave-1; $("#autosave").html("<span style='color:#AAA;'>Автосохранение через: <b>"+autosave+"</b> сек.</span>"); } if (autosave==0) { if (autosaveon==0) { $("#autosave").html("<span style='color:#D00;'><img src='/admin/images/loader.gif' style='width:12px; height:12px; padding-top:1px; float:left; margin-right:5px;'>Идет автосохранение...</span>"); autosaveon=1; var GET=parseGetParams(); var id=GET["id"]; var cat=GET['cat'].split('_'); link=cat[0]; lid=$("#lid").val(); text = CKEDITOR.instances['textedit'].getData(); JsHttpRequest.query('modules/lenta/autosave-JSReq.php',{'lid':lid,'text':text,'id':id,'link':link},function(result,errors){ if(result){ $("#autosave").html("<span style='color:#080;'>Сохранено!</span>"); setTimeout(function() { autosave=30; autosaveon=0; }, 3000); }}, true); }}}