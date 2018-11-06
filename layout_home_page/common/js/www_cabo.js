$( document ).ready(function() {
    setDivSize();
    navPositionListen();
    carouselText();
    openModals();
    /*
    $('.carousel').carousel({
        //interval: 100,
        pause:true
    });*/
    //$('.carousel').carousel('cycle')
});

function setDivSize(){
    var windowSiz = $(window).height();
    
    if (windowSiz<=640){
        windowSiz=640;
        $('#top-div').css('height', windowSiz-60);
        //$('#biodiversity').css('min-height', windowSiz);
        //$('#methods').css('min-height', windowSiz);
        //$('#project').css('min-height', windowSiz);
        //$('#people').css('min-height', windowSiz);
        //$('#contact').css('min-height', windowSiz);
    } else {
        $('#top-div').css('height', windowSiz-60);
        //$('#biodiversity').css('height', windowSiz);
        //$('#methods').css('height', windowSiz);
        //$('#project').css('height', windowSiz+60);
        //$('#people').css('height', windowSiz);
        //$('#contact').css('height', windowSiz);
    }
}

function navPositionListen(){ 
    $(window).on('scroll', function() {
        if ($(this).scrollTop()==0) {
            //console.log( $(this).text() + ' was scrolled to the top' );
            $("#nav_id").addClass('fixed-bottom');
            $("#nav_id").removeClass('sticky-top');
            $("#twitterTL").addClass('dropup');
        } else {
            $("#nav_id").addClass('sticky-top');
            $("#nav_id").removeClass('fixed-bottom');
            $("#twitterTL").removeClass('dropup');
        }
    });
}

function carouselText(){
    /*
    $('.carousel').carousel({
        cycle: false
    })
    */
    
    $('#carousel-text').html($('.active > .carousel-caption').html());
    $('.carousel').on('slid.bs.carousel', function () {
        $('#carousel-text').html($('.active > .carousel-caption').html());
    });
    $('.carousel').carousel({
        interval: 500000000,
    });
}

function openModals() {
    if(window.location.href.indexOf('#documents') != -1) {
        console.log($("#project").offset().top);
        
        $('html, body').stop().animate({
            'scrollTop': $("#project").offset().top
        }, 900, 'swing', function () {
            window.location.hash = "#project";
        });
        //$(document).scrollTop(  $("#project").offset().top );
        $('#documents').modal('show');
    }
}
