$(function() {
    if(Cookies.get('MySkin')) {
        let skin_id = Cookies.get('MySkin')

        $('ul#skin li[id=' + skin_id +']').addClass('selected')
            .siblings().removeClass('selected');

        $('link#skin_source').attr('href', skin_id + '.css');
    }

    $("ul#skin li").click(function(event) {
        $(this).addClass('selected')
            .siblings().removeClass('selected');

        var skin_id = $(this).attr('id');

        var href = skin_id + '.css';

        $("link#skin_source").attr('href', href);

        //设置cookie
        Cookies.set('MySkin', skin_id);
    });
});
