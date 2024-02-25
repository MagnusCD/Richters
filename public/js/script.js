
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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.addEventListener("scroll", reveal);

document.addEventListener('DOMContentLoaded', function() {
  function updateFacebookBoxWidth() {
      var fbBox = document.querySelector('.fb-like-box');
      if (window.innerWidth > 1300) {
          fbBox.setAttribute('data-width', '600');
      } else {
          fbBox.setAttribute('data-width', '300');
      }
  }

  // Call the function on initial load
  updateFacebookBoxWidth();

  // Add event listener for window resize
  window.addEventListener('resize', updateFacebookBoxWidth);
});


document.addEventListener('DOMContentLoaded', function() {
  function adjustIframeSize() {
      var iframe = document.querySelector('.fb-like-box iframe'); // Assuming your iframe can be selected this way

      if (!iframe) {
          return; // Exit if no iframe is found
      }

      var newWidth = window.innerWidth > 1100 ? '600px' : '300px'; // Determine new width based on viewport
      iframe.style.width = newWidth; // Set the iframe's width
  }

  // Adjust iframe size on initial load
  adjustIframeSize();

  // Adjust iframe size whenever the window is resized
  window.addEventListener('resize', adjustIframeSize);
});


document.addEventListener('DOMContentLoaded', function () {
  const otherElement = document.querySelector('.om-richters-container');
  const topnavImage = document.querySelector('.topnav-image');

  function handleScroll() {
    let scrollPosition = window.scrollY;

    // Apply an downward movement to the other element. Put a minus before the dollar sign to reverse
    otherElement.style.transform = `translateY(${scrollPosition * 0}px)`;

    // Apply a downward movement to the hero image
    topnavImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;
    
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

