$('.sl').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:1000,
    cssEase:'ease-in',
    arrows:false,
     asNavFor: '.sl2',
     fade:true
});
$('.sl2').slick({
 arrows:false,
     centerMode: true,
    centerPadding:'40px',
    slidesToShow:5,//количество слайдов 5 показывает
     asNavFor: '.sl',
     focusOnSelect: true,
    responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
    },
  ]
});

