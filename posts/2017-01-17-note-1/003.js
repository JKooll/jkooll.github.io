$(function() {
    var $items = $("[name=items]:checkbox");
    $("#CheckedAll").click(function() {

        $items.attr("checked", true);
    });

    $("#CheckedNo").click(function() {
        $items.attr("checked", false);
    });

    $("#CheckedRev").click(function() {
        $("[name=items]:checkbox").each(function() {
            this.checked = !this.checked;
        });
    });

    $("#send").click(function() {
        let str = "选中的是： \r\n";

        $("[name=items]:checkbox:checked").each(function() {
            str += $(this).val()+"\r\n";
        });

        alert(str);
    });
});
