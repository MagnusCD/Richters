
/*Kilde: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topnavResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Kilde: https://alvarotrigo.com/blog/css-animations-scroll/*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}











document.addEventListener('DOMContentLoaded', function () {
  const otherElement = document.querySelector('om-richters-container');
  const topnavImage = document.querySelector('.topnav-image');

  function handleScroll() {
    let scrollPosition = window.scrollY;

    // Apply an downward movement to the other element. Put a minus before the dollar sign to reverse
    otherElement.style.transform = `translateY(${scrollPosition * 0}px)`;

    // Apply a downward movement to the hero image
    topnavImage.style.transform = `translateY(${scrollPosition * 0.17}px)`;
    
    // Add your custom function here (e.g., myFunction())
    myFunction();
  }

  // Add a scroll event listener to trigger the handleScroll function
  window.addEventListener('scroll', handleScroll);

  // Reset scroll position on page load or reload
  window.addEventListener('load', function () {
    // Set the scroll position to zero
    window.scrollTo(0, 0);
    // Call the handleScroll function to apply transformations at the top of the page
    handleScroll();
  });
});










/*
document.addEventListener('DOMContentLoaded', function () {
  const otherElement = document.querySelector('.om-richters-container');
  const topnavImage = document.querySelector('.topnav-image');
  const parallaxBg = document.querySelector('.richters-bg');

  function handleScroll() {
    let scrollPosition = window.scrollY;
    
    // Apply a parallax effect to the background (scrolls in the opposite direction)
    otherElement.style.transform = `translateY(-${scrollPosition * 0.15}px)`;

    // Apply an upward movement to the hero image (scrolls in the opposite direction)
    topnavImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;

    // Apply a scaling effect to the other element
    parallaxBg.style.transform = `scale(${1 + scrollPosition * 0.0015})`;
  }

  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Add a beforeunload event listener to reset transformations when leaving the page
  window.addEventListener('beforeunload', function () {
    otherElement.style.transform = 'translateY(0)';
    topnavImage.style.transform = 'translateY(0)';
    parallaxBg.style.transform = 'scale(1)';
  });

  // Reset scroll position on page load or reload
  window.addEventListener('load', function () {
    // Set the scroll position to zero
    window.scrollTo(0, 0);
    // Call the handleScroll function to apply transformations at the top of the page
    handleScroll();
  });
});
*/




