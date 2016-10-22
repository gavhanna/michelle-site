$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("smaller");
    } else {
       $(".header").removeClass("smaller");
    }
});


var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 600, function () {
        window.location.hash = href;
    });
    return false;
});
