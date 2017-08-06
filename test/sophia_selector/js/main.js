/**
 * Save current page id.
 *
 * @var string
 */
var current_page;

/**
 * Whether is first time go to game.
 *
 * @var boolean
 */
var isFirstTime = true;

/**
 * Game timer instance.
 *
 * @var obj
 */
 var timer = null;

var items = [];

//items 更换的速度
var speed = 100;

$(function() {
    init();
});

function init()
{
    current_page = 'first_page';
    isFirstTime = false;
    $('#second_page').hide();
    $('[name=clear]').click(clear_game);
    if (isItemsEmpty()) {
        $('[name=clear]').hide();
    }
    $('[name=go]').click(go_game);
    $('[name=start]').click(start_game);
    $('[name=back]').click(back_game);
    $('[name=stop]').click(stop_game);
    $('[name=restart]').click(restart_game);
    $('[name=new]').click(new_game);
    $('[name=delete_item_button]').click(delete_item);
    $('#add_item_button').click(add_item);

    // Page buttons init.
    $('[name=stop]').hide();
    $('[name=restart]').hide();
    $('[name=new]').hide();

    $('[name=speeds]').change(get_speeds);
}

var clear_toggle = function() {
    if (!isItemsEmpty()) {
        $('[name=clear]').show();
    } else {
        $('[name=clear]').hide();
    }
}

var clear_game = function() {
    $('#items_list').empty();
    items = [];
    clear_toggle();
}

var go_game = function() {
    if (isItemsEmpty()) {
        alert('请添加要选择的东西!!!');
        return false;
    }
    go_to_page('second_page');
}

var back_game = function() {
    go_to_page('first_page');
}

var go_to_page = function(page = "first_page") {
    $('#' + current_page).hide();
    $('#' + page).show();
    current_page = page;
}

var start_game = function() {
    timer = setInterval(changeItem, speed);

    change_game_status('start');
}

var first_item = '';
var changeItem = function() {
    let item_content = items.shift();

    items.push(item_content);

    if (first_item == '') {
        first_item = item_content;
    }

    if (item_content == first_item) {
        random_items();
    }

    $('#item_content').text(item_content);
}

var random_items = function() {
    items.sort(function(){ return 0.5 - Math.random() });
}

var stop_game = function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    change_game_status('stop');
}

var restart_game = function() {
    change_game_status('restart');
}

var new_game = function() {
    go_to_page('first_page');

    change_game_status('new');
}

var change_game_status = function(current_game_status) {
    switch (current_game_status) {
        case 'start':
            $('[name=start]').hide();
            $('[name=back]').hide();
            $('[name=stop]').show();
            break;
        case 'back':
            $('[name=back]').hide();
        case 'stop':
            $('[name=stop]').hide();
            $('[name=restart]').show();
            $('[name=new]').show();
            break;
        case 'new':
        case 'restart':
            $('[name=new]').hide();
            $('[name=restart]').hide();
            $('[name=start]').show();
            break;
    }
}

var add_item = function() {
    let item_content = '';

    item_content = $('#add_item_input').val().trim();

    $('#add_item_input').val('');

    if (item_content == '') {
        alert('输入内容不能为空!');
        return false;
    }

    let item_str = '<li class="list-group-item row">' +
        '<div class="content col-xs-10">' +
            item_content +
        '</div>' +
        '<div class="col-xs-2">' +
            '<button class="btn btn-danger" name="delete_item_button">' +
                '<i class="glyphicon glyphicon-trash"></i>' +
            '</button>' +
        '</div>' +
    '</li>';

    $('#items_list').append(item_str);

    $('[name=delete_item_button]').click(delete_item);

    items.push(item_content);

    clear_toggle();
}

var delete_item = function() {
    let parent = $(this).parent().parent();

    let item_content = parent.find('.content').text();

    items.forEach(function(item, index) {
        if (item == item_content) {
            delete items[index];
        }
    });

    parent.remove();

    clear_toggle();
}

var isItemsEmpty = function() {
    let times = 0;
    items.forEach(function(item) {
        times++;
    });
    return !times;
}

var get_speeds = function() {
    speed = 100 / +($('select[name=speeds] option:selected').val());
}
