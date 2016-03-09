$(function () {
    $.get("partials/nav.html", function(data){
        $("nav").html(data);
    });

    $.get("partials/footer.html", function(data){
        $("footer").html(data);
    });
});
