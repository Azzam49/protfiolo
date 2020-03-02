
$(document).ready(function(){

    // old gallery

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        // remove active class from other buttons 
        $('.project-area .button-group button').removeClass('active');

        // for current clicked button 
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    // for better pictures layout
    $('.project-area .button-group #btn1').trigger('click');

    // for fixing gallery bug
    $('.project-area .button-group #btn1').click();

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
      });

    


      //Owl-carousel - for old gallery
      
      $('.site-main .about-area .owl-carousel').owlCarousel({
          loop: true,
          autoplay: true,
          dots: true,

          // viewport from 0 to 544 have 1 item,
          //viewport from 544 and ++ have 2 items 
          responsive:{
              0: {
                  items: 1
              },
              544: {
                  items: 2
              }
          }

      });







      //sticky navigation menu
/*
      let nav_offset_top = $('.header_area').height() + 50;

      function navbarFixed(){
          if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
          }
      }

      navbarFixed();


*/
      //active navbar element 

      $(".navbar-nav .nav-item").on("click", function(){
        
        //$(".navbar-nav").find(".active").find("a span").remove();
        $(".navbar-nav").find(".active").removeClass("active");

        
        $(this).addClass("active");
        //$(".navbar-nav").find(".active").find("a").append('<span class="sr-only">(current)</span>');


     });


     //animate scrolling by navigation bar
        $("ul.navbar-nav li a[href^='#']").click(function(){
            $("html, body").stop().animate({
                scrollTop: $($(this).attr("href")).offset().top - 70
            }, 700);
        });


        //highlight navigation menu while scrolling //1st try
        /*  
        $("section").mouseenter(function(){
            var id = $(this).attr('id');
           
            //console.log(id);
            //$('a').removeClass('active');
            $(".navbar-nav").find(".active").removeClass("active");

            $("[href='#"+id+"']").addClass('active');
           // $(".nav-item").addClass("active");
       });
       */



       //highlight navigation menu while scrolling //2nd try
       // Cache selectors
       /*
        var lastId,
        topMenu = $("#mainNav"),
        topMenuHeight = topMenu.outerHeight()+1,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
        });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 850);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function(){
            // Get container scroll position
            var fromTop = $(this).scrollTop()+topMenuHeight;
            
            // Get id of current scroll item
            var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
            });
            // Get the id of the current element
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
            
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
            }                   
        });
        */

        

        //4th try
        //$(document).on("scroll", onScroll);
    
        //smoothscroll
        /*
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
        
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#mainNav li').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#mainNav li').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });}*/
    
       

    
});
