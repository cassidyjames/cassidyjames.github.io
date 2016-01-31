$(function () {
    $('#year').text((new Date).getFullYear ());

    $('a').each(function () {
        var href = this.href;
        if ( href.indexOf(window.location.host) == -1 ) {
            $(this).attr('target', '_blank');
        }
    });

    var diff = new Date () - new Date ("1989/7/30");
    var age = Math.floor (diff/31536000000);
    $('#age').text (age);
});

