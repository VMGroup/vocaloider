$(document).ready(function () {
    var addLinkHandler = function () {
        var linkNum = $('.links').children().length;
        if (linkNum >= 3) {
            return;
        }
        var linkDom = '<div class="control is-grouped link"><input type="text" name="link-name" placeholder="链接名称" class="input"><input type="text" name="link" placeholder="链接" class="input"><input type="text" name="link-description" placeholder="额外说明" class="input"><a class="button is-danger is-outlined is-delete">删除</a></div>';
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

    $('#add-link').click(addLinkHandler);
    $('.is-delete').click(deleteLinkHandler);
});