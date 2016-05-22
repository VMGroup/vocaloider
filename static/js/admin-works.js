$(document).ready(function () {
    var addLinkHandler = function () {
        var linkNum = $('.links').children().length;
        if (linkNum >= 3) {
            return;
        }

        var linkDom = $('.link-template').clone().removeClass('is-hidden link-template');
        console.log(linkDom);
        $('.links').append(linkDom);
        $('.is-delete').click(deleteLinkHandler);

        if (linkNum >= 2) {
            $('#add-link').addClass('is-disabled');
        }
    };

    var deleteLinkHandler = function () {
        if ($('.links').children().length == 1) {
            return;
        }

        console.log($(this).parent());
        $(this).parent().remove();

        if ($('.links').children().length < 3) {
            $('#add-link').removeClass('is-disabled');
        }
    };

    var validateHandler = function() {
        if ($(this).val().length === 0) {
            $(this).addClass('is-danger');
            $('input[type="submit"]').addClass('is-disabled');
        } else {
            $(this).removeClass('is-danger');
            $('input[type="submit"]').removeClass('is-disabled');
        }
        console.log($(this).val().length);
    };

    $('#add-link').click(addLinkHandler);
    $('.is-delete').click(deleteLinkHandler);
    $('input[name="title"]').on('input', validateHandler);
    $('input[name="description"]').on('input', validateHandler);

    if ($('input[type="submit"]').val().length === 0) {
        $(this).addClass('is-disabled');
    }
});