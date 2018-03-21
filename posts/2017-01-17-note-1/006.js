$(function() {

    //隔行变色
    $("#gehang").click(function() {
        $("tr:odd").addClass("odd");

        $("tr:even").addClass("even");
    });

    //含有特定内容的行变色
    $("#zhiding").click(function() {
        $("tr:contains('王五')").addClass("selected");
    });

    //点击变色--单选
    $("#dianji").click(function() {
        $('tbody>tr').click(function() {
            $(this)
                    .addClass('selected')
                    .siblings().removeClass('selected')
                    .end();
        });
    });

    //点击行变色--多选
    $("#duoxuan").click(function() {
        $('tbody>tr').unbind('click');

        $('tbody>tr').click(function() {
            // if($(this).hasClass('selected')) {
            //     $(this)
            //             .removeClass('selected');
            // } else {
            //     $(this)
            //             .addClass('selected');
            // }

            var hasSelected = $(this).hasClass('selected');

            $(this)[hasSelected?"removeClass":"addClass"]('selected');
        });
    });

});
