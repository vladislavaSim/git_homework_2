$(document).ready(function() {
    $('.menu-burger-btn').click(function() {
        $('.menu-burger-btn').toggleClass('open-menu');
        $('.nav-list').toggleClass('open-menu');
        $('#shadow').toggleClass('active');
        $('body').toggleClass('modal-active');
    });

    $('#account-burger-btn').click(function() {
        $('#account-burger-btn').toggleClass('open-menu');
        $('.account').toggleClass('open-menu');
    });

    $('.footer-title').click(function(event) {
    $(this).next().toggleClass('active');
    });
});