$('.tabbar li a').on('click', function(e) {

    e.preventDefault();

    let that = $(this),
        li = that.parent(),
        ul = li.parent();

    if (!ul.hasClass('move') && !li.hasClass('active')) {
        ul.children('li').removeClass('active');

        ul.css('--x-n', li.position().left + li.outerWidth() / 2 + 'px');
        li.addClass('move');
        ul.addClass('move');

        setTimeout(() => {
            ul.removeClass('move');
            li.removeClass('move').addClass('active');
            ul.css('--x', li.position().left + li.outerWidth() / 2 + 'px');
        }, 1200);
    }

});