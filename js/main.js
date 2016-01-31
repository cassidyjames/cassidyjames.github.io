$(function () {
    $('#year').text((new Date).getFullYear ());

    // Open external ;inks in a new tab
    $('a').not('[href*="mailto:"]').each(function () {
        var href = this.href;
        if ( href.indexOf(window.location.host) == -1 ) {
            $(this).attr('target', '_blank');
        }
    });

    // How old am I?
    var diff = new Date () - new Date ("1989/7/30");
    var age = Math.floor (diff/31536000000);
    $('#age').text (age);

    // How many years playing guitar?
    var diff = new Date () - new Date ("2003/7/30");
    var age = Math.floor (diff/31536000000);
    $('#guitar-age').text (age);
});

