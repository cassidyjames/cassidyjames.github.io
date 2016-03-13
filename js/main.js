$(function () {
    $('#year').text((new Date).getFullYear ());

    // Open external links in a new tab
    $('a').not('[href*="mailto:"]').each(function () {
        var href = this.href;
        if ( href.indexOf(window.location.host) == -1 ) {
            $(this).attr('target', '_blank');
        }
    });

    // How old am I?
    $('#age').text (yearsSince ("1989/7/30"));

    // How many years playing guitar?
    $('#guitar-age').text (yearsSince ("2003/7/30"));
});

function yearsSince (epoch) {
    var diff = new Date () - new Date (epoch);
    var age = Math.floor (diff/31536000000);
    return age;
}
