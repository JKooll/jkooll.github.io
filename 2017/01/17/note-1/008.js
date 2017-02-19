$(function() {
    $("#filterName").keyup(function(event) {
        $("table tr").hide()
                        .filter(":contains(" + $(this).val()+")")
                        .show();
    });
});
