$(document).ready(function () {
  //banner carousel slick
  $('.carousel-banner').slick({    
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: false,
    fade: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
  //today deals slick
  $('.today-deal-slick').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //top sales slick
  $('.top-sale-slick').slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  //Sản phẩm đặc trưng
  $('.feature-slick').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  //Chính sách bán hàng
  $('.sales-policy-slick').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,      
        }
      }
    ]
  });

   //Blog
   $('.blog-slick').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  //Brands
  $('.company-slick').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });
//Instagram
$('.instagram-slick').slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  
  responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})




//Instagram image clicked
$(function() {  
  let index = 0;
  let imgArr=[];
  $('.instagram-img').each(function(i){
    imgArr.push($(this).attr('src'));
  });
  $('.instagram-img').on('click', function(e) {
    $( ".instagram-img" ).each(function( i ) {
      if(e.target.getAttribute('src')===$(this).attr('src')) {
        $('.img-first').text(i+1);   
        index=i;
      }
      $('.img-last').text(imgArr.length);     
    });
    $('.image-preview').attr('src', $(this).attr('src'));
    $('#show-instagram-image').modal('show');   
  });	
  
 
  $('.image-preview').on('click', function(e) {
  
    while (index<imgArr.length && index>=0) {
      if(index === imgArr.length - 1)
      {
        
        $( ".instagram-img" ).each(function(i) {
          if(e.target.getAttribute('src')===$(this).attr('src')){
            $('.image-preview').attr('src',imgArr[0]);
            index=0;          
            return false;
          }       
        });
         
        break;     
      }
      $(".instagram-img").each(function(i) {
        if(e.target.getAttribute('src')===$(this).attr('src')){
          $('.image-preview').attr('src',imgArr[i+1]);
          $('.img-first').text(i);
          return false;
        }      
      });
      index++;
      $('.img-first').text(index);
      break;
    }
    $('.img-first').text(index+1); 
  });	
  

  $('.prev-instagram').on('click', function (e) {  
    
    if(index - 1 < 0) {
      
      index = imgArr.length;
      
      $('.image-preview').attr('src',imgArr[index]);
      $('.img-first').text(index+1);   
    }
    index--;
    $('.image-preview').attr('src',imgArr[index]);
    $('.img-first').text(index+1);
    
  });

  $('.next-instagram').on('click', function (e) {    
    
    if(index + 1 > imgArr.length - 1) { 
      index = 0; 
      $('.image-preview').attr('src',imgArr[index]);
      $('.img-first').text(index+1);   
      
    }
   else {
    index++;
    $('.image-preview').attr('src',imgArr[index]);
    $('.img-first').text(index+1);
    
   }      
  });
 
}); 


  //custom nav slick
  $('.top-sale-nav .left').click(function () {
    $('.top-sale-slick').slick('slickPrev');
  });

  $('.top-sale-nav .right').click(function () {
    $('.top-sale-slick').slick('slickNext');
  });

  $('.today-deal-nav .left').click(function () {
    $('.today-deal-slick').slick('slickPrev');
  });

  $('.today-deal-nav .right').click(function () {
    $('.today-deal-slick').slick('slickNext');
  });

  $('.blog-nav .left').click(function () {
    $('.blog-slick').slick('slickPrev');
  });

  $('.blog-nav .right').click(function () {
    $('.blog-slick').slick('slickNext');
  });



});
//Main nav
function mainNavLinkIcon() {
  var icon = document.querySelector('.main-nav-link-icon');
  var megaDropdown = document.querySelector('.mega-dropdown-menu');

  icon.addEventListener('click', function () {
    if (megaDropdown.style.display === 'block') {
      megaDropdown.style.display = 'none';
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    }
    else {
      megaDropdown.style.display = 'block';
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    }
  });
}
function megaMenuIcon() {
  var icons = document.querySelectorAll('.mega-dropdown-menu .collapse-icon');
  icons.forEach(element => {
    element.addEventListener('click', function (e) {
      if (e.target.classList.contains('fa-angle-down')) {
        e.target.classList.remove('fa-angle-down');
        e.target.classList.add('fa-angle-up');
      } else {
        e.target.classList.remove('fa-angle-up');
        e.target.classList.add('fa-angle-down');
        
      }
    });
  });
}
mainNavLinkIcon();
megaMenuIcon();
function megaMenu(x) {
  var collapse = document.querySelectorAll('.mega-dropdown-menu .collapse');
  if (x.matches) { // If media query matches

    collapse.forEach(element => {
      element.classList.remove('show');
    });
  } else {
    collapse.forEach(element => {
      element.classList.add('show');
    });
  }
}
var x = window.matchMedia("(max-width: 767.98px)")
megaMenu(x) // Call listener function at run time
x.addListener(megaMenu) // Attach listener function on state changes 


// Scroll top button show/hide
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("croll-top").style.display = "block";
  } else {
    document.getElementById("croll-top").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document

let scrollButton = document.querySelector('#croll-top');
scrollButton.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));


// Count down Today deals
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".today-deal-countdown").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".today-deal-countdown").textContent = "EXPIRED";
  }
}, 1000);
