
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

});