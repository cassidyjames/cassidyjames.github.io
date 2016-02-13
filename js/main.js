$(function () {
    $('#year').text((new Date).getFullYear ());

    // Open external ;inks in a new tab
    $('a').not('[href*="mailto:"]').each(function () {
        var href = this.href;
        if ( href.indexOf(window.location.host) == -1 ) {
            $(this).attr('target', '_blank');
        }
    });

    // Current year
    var year = new Date ().getFullYear();
    $('#year').text (year);

    // How old am I?
    var diff = new Date () - new Date ("1992/2/01");
    var age = Math.floor (diff/31536000000);
    $('#age').text (age);
});

