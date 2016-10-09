var url = window.location.href;
var page = url.split('?')[0];
console.log(page);
if (page === 'https://news.ycombinator.com/submit') {
    $('body').addClass('access-page');
    $('form').addClass('access').attr('align', 'center');
    $('form').find('br').remove();
    $('a[href*="forgot"]').addClass('forgot');
}
if (page === 'https://news.ycombinator.com/forgot') {
    $('form').addClass('forgot').attr('align', 'center');
    $('form').find('br').remove();
    $('a[href*="forgot"]').addClass('forgot');
}
if (page === 'https://news.ycombinator.com' || page === 'https://news.ycombinator.com/' || page === 'https://news.ycombinator.com/newest' || page === 'https://news.ycombinator.com/news' || page === 'https://news.ycombinator.com/applyhn' || page === 'https://news.ycombinator.com/show' || page === 'https://news.ycombinator.com/shownew' || page === 'https://news.ycombinator.com/ask' || page === 'https://news.ycombinator.com/jobs' || page === 'https://news.ycombinator.com/submitted')
{
    $("td.title a").each(function (index)
    {

        var oldText = $(this).text();
        var newtext = oldText.replace('Show HN:', '<span class="showhn">Show HN:</span>');
        if (oldText !== newtext) {
            $(this).html(newtext);
        }

        var newtext = oldText.replace('Apply HN:', '<span class="applyhn">Apply HN:</span>');
        if (oldText !== newtext) {
            $(this).html(newtext);
        }

        var newtext = oldText.replace('Ask HN:', '<span class="askhn">Ask HN:</span>');
        if (oldText !== newtext) {
            $(this).html(newtext);
        }


    });


    $(".subtext a[href^='user?id=']").addClass('user');
    $(".subtext a[href^='item?id=']").addClass('comment');
    $(".votelinks img").addClass("upvoted");
    $('tr.spacer').remove();

    $(".itemlist span.score").each(function (index) {

        var newtext = $(this).text();
        newtext = newtext.replace('points', '');
        newtext = newtext.replace('point', '');
        newtext = newtext.replace(' ', '');
        $(this).html(newtext);

    });

    $('.itemlist tr.athing').each(function (index) {
        var _athing = $(this);
        var _substring = _athing.next('tr').find('.subtext').html();

        _athing.append('<td class="actions">' + _substring + '</td>');
        _athing.next('tr').remove();

    });

    $('.itemlist tr').each(function (index) {

        var _tr = $(this);
        var _score = $(this).find('.score');


        if (_score.length) {
            $(this).find('td:nth-child(2)').append('<span class="score">' + _score.text() + '</span>');
            _score.remove();
        }

        $(this).find('.votelinks').html('<div class="vote-count">' + $(this).find('.votelinks').html() + '</div>');

        var _sitebit = $(this).find('a[href*="from"]');
        $(this).find('.sitebit').html(_sitebit.clone().wrap('<div></div>').parent().html());


        $(this).find('span.age .comment').removeClass('comment').addClass('age');
        $(this).find('span.age').removeClass('age');
        var _comment = $(this).find('.comment');

        if (_comment.length) {

            $(this).append('<td>' + _comment.clone().wrap('<div></div>').parent().html() + '</td>');
            _comment.remove();
        } else {
            $(this).append('<td></td>');
        }

    });

    $('.votelinks center').find('font').remove();
    $('.votelinks center').find('br').remove();
    $('.sitestr').each(function (index) {

        var _str = '<img src="http://www.google.com/s2/favicons?domain=' + $(this).text() + '" width="14" height="14" /> ' + $(this).text();
        $(this).html(_str);
    });
}

if (page === 'https://news.ycombinator.com/newcomments') {

}

if (page === 'https://news.ycombinator.com/item')
{

    $('.comment-tree tr.athing').each(function (index) {
        var _athing = $(this);
        var _w = _athing.find('.ind > img').attr('width');
        _athing.find('.ind > img').remove();
        _athing.find('.ind').css('width', _w);
    });
    $('#hnmain').find('table:nth-child(1):eq(1)').addClass('thisitem');

    var thisitem = $('.thisitem tr');

    $(".thisitem .subtext a[href^='user?id=']").addClass('user');
    $(".thisitem .subtext a[href^='item?id=']").addClass('comment');
    $(".thisitem .votelinks img").addClass("upvoted");
    $('.thisitem tr.spacer').remove();
    $('.thisitem tr:eq(3)').addClass('descr');


    var newtext = $(".thisitem span.score").text();
        newtext = newtext.replace('points', '');
        newtext = newtext.replace('point', '');
        newtext = newtext.replace(' ', '');

    $(".thisitem span.score").html(newtext);
    $(".thisitem .subtext a[href^='user?id=']").addClass('user');
    $(".thisitem .subtext a[href^='item?id=']").addClass('comment');
    $(".thisitem .votelinks img").addClass("upvoted");
    $('.thisitem tr.spacer').remove();


    var _score = $('.thisitem').find('.score');


    if (_score.length)
    {
            $('.thisitem').find('td:nth-child(2):eq(0)').append('<span class="score">' + _score.text() + '</span>');
            _score.remove();
    }

    $('.thisitem tr').find('.votelinks').html('<div class="vote-count">' + $('.thisitem tr').find('.votelinks').html() + '</div>');


    var _sitebit = thisitem.find('a[href*="from"]');


    thisitem.find('span.age .comment').removeClass('comment').addClass('age');
    thisitem.find('span.age').removeClass('age');

    var _comment = thisitem.find('.comment');

    if (_comment.length)
    {
        $('.thisitem .athing').append('<td>' + _comment.clone().wrap('<div></div>').parent().html() + '</td>');
        _comment.remove();
    }

}
