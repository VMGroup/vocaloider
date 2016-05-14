$(document).ready(function () {
    $('.modal-button').click(function () {
        var target = $(this).data('target');
        $('html').addClass('is-clipped');
        $(target).addClass('is-active');
    });

    $('.modal-background, .modal-close').click(function() {
        $('html').removeClass('is-clipped');
        $(this).parents('.is-active').removeClass('is-active');
    });

    $('form .modal-card-head .delete, .modal-card-foot .button').click(function() {
        var modal = $(this).parents('.is-active');
        console.log(modal);
        $('html').removeClass('is-clipped');
        modal.removeClass('is-active');
    });
});