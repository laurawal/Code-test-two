 // $(document).ready(function(){
 //            $("#nav-mobile").html($("#nav-main").html());
 //            $("#nav-trigger span").click(function(){
 //                if ($("nav#nav-mobile ul").hasClass("expanded")) {
 //                    $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
 //                    $(this).removeClass("open");
 //                } else {
 //                    $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
 //                    $(this).addClass("open");
 //                }
 //            });


    //collapse the nav on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 20) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1100, 'easeInOutExpo');
            event.preventDefault();
        });
    });
// });