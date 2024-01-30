
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
  const parallaxBg = document.querySelector('.parallax-bg');
  const topnavImage = document.querySelector('.fb-container');

  // Function to handle the intersection observer callback
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply a zoom effect to the parallax background
        // parallaxBg.style.transform = `scale(${1 + entry.intersectionRatio * 0.5})`;

        // Apply an upward movement to the hero image
        topnavImage.style.transform = `translateY(-${entry.intersectionRatio * 20}px)`;
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Observe the target elements
  observer.observe(parallaxBg);
  observer.observe(topnavImage);
});

