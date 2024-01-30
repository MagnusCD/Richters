
/*Kilde: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function One() {
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
  const parallaxBg = document.querySelector('.richters-bg');
  const topnavImage = document.querySelector('.topnav-image');

  function handleScroll() {
    let scrollPosition = window.scrollY;
    
    // Apply a zoom effect to the parallax background
    parallaxBg.style.transform = `scale(${1 + scrollPosition * 0.0001})`;

    // Apply an upward movement to the hero image
    topnavImage.style.transform = `translateY(-${scrollPosition * 0.2}px)`;
  }

  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Add a beforeunload event listener to reset transformations when leaving the page
  window.addEventListener('beforeunload', function () {
    parallaxBg.style.transform = 'scale(1)';
    topnavImage.style.transform = 'translateY(0)';
  });
});



