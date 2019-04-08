$(document).ready(function() {
    var link = $(".spec-article-item__link");
    link.on("click", function (event) {
        var table = $(this).data("pref");
        var id = $(this).data('id');
        var form_data = new FormData();
        form_data.append('pref', table);
        form_data.append('id', id);
        $.ajax({
            url: '../modules/specprj/seens.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data) {
            },
            error:function(data){
                alert("Ошибка");
            }
        });
    });
});