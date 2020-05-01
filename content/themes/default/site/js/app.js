$(function ($) {

    var url = '../../content/themes/default/site/images';


    $.supersized({

      // Functionality
      slide_interval: 5000,		// Length between transitions
      transition: 1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
      transition_speed: 700,		// Speed of transition

      // Components							
      slide_links: 'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
      slides: [			// Slideshow Images
        { image: url + '/slide2.jpg', title: 'take the first step <span>to knowledge with us</span>' },
        { image: url + '/slide22.jpg', title: 'Explore the world <span>to knowledge with us</span>' }
      ]

    });
  });


  //animation

  new WOW().init();


//carousel
  $(document).ready(function(){

    $('#popularcourse, #masterprogram').owlCarousel({
        items:4,
        loop:false,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            560:{
                items:2
            },
            991:{
                items:3
            }
        }
    })
});