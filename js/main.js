
$(document).ready(function(){


    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){

        /* remove active class from other buttons */
        $('.project-area .button-group button').removeClass('active');

        /* for current clicked button */
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    // for better pictures layout
    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {enabled:true}
      });

    
      //Owl-carousel

      $('.site-main .about-area .owl-carousel').owlCarousel({
          loop: true,
          autoplay: true,
          dots: true,

          /* viewport from 0 to 544 have 1 item,
          viewport from 544 and ++ have 2 items */
          responsive:{
              0: {
                  items: 1
              },
              544: {
                  items: 2
              }
          }

      });

});