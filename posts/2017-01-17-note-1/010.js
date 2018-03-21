$(function() {
    $("div.tab_menu ul li").click(function(event) {
        $(this).addClass('selected')
                .siblings().removeClass('selected');

        var index = $(this).parent().children().index($(this));

        $("div.tab_box > div")
            .eq(index).removeClass('hide')
            .siblings().addClass('hide');
    });
});
