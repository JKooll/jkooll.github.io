$(function() {
    $('li.parent').click(function() {
        $(this)
            .toggleClass("selected")
            .siblings('.child_1').toggle();
    });
});
