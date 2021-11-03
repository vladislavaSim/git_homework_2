$(document).ready(function() {
    $('.menu-burger-btn').click(function() {
        $('.menu-burger-btn').toggleClass('open-menu');
        $('.nav-list').toggleClass('open-menu');
        $('#shadow').toggleClass('active');
        $('body').toggleClass('modal-active');
    });
});

$(document).ready(function() {
    $('#account-burger-btn').click(function() {
        $('#account-burger-btn').toggleClass('open-menu');
        $('.account').toggleClass('open-menu');
    });
});
