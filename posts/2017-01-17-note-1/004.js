$(function() {
    $("#add").click(function() {
        var $options = $("#select1 option:selected");
        $options.appendTo("#select2");
    });

    $("#add_all").click(function() {
        var $options = $("#select1 option");
        $options.appendTo("#select2");
    });

    //双击添加
    $("#select1").dblclick(function() {
        $option = $("option:selected", this);

        $option.appendTo("#select2");
    })
});
