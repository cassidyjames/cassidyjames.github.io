$(function () {
    $('#year').text((new Date).getFullYear ());

    $('a').each(function () {
        var href = this.href;
        if ( href.indexOf(window.location.host) == -1 ) {
            $(this).attr('target', '_blank');
        }
    });
});

