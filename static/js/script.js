
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
  const topnavImage = document.querySelector('.topnav-image');

  function handleScroll() {
    let scrollPosition = window.scrollY;

    // Apply a downward movement to the hero image
    topnavImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  }

  // Add a scroll event listener to trigger the handleScroll function
  window.addEventListener('scroll', handleScroll);

  // Reset scroll position on page load or reload
  window.addEventListener('load', function () {
    window.scrollTo(0, 0); // Set the scroll position to zero
    handleScroll(); // Call the handleScroll function to apply transformations at the top of the page
  });
});













// --- Config --- //
var purecookieTitle = "Cookies."; // Title
var purecookieDesc = "Ved at bruge denne hjemmeside, accepterer du samtidigt, at vi gør brug af cookies."; // Description
var purecookieLink = '<a href="https://www.cssscript.com/privacy-policy/" target="_blank"><!--What for?--></a>'; // Cookiepolicy link
var purecookieButton = "Forstået"; // Button text
// ---        --- //

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    // Create the container div
    var consentContainer = document.createElement('div');
    consentContainer.className = 'cookieConsentContainer';
    consentContainer.id = 'cookieConsentContainer';

    // Create the title
    var title = document.createElement('div');
    title.className = 'cookieTitle';
    title.innerHTML = '<a>' + purecookieTitle + '</a>';

    // Create the description
    var desc = document.createElement('div');
    desc.className = 'cookieDesc';
    desc.innerHTML = '<p>' + purecookieDesc + ' ' + purecookieLink + '</p>';

    // Create the button
    var button = document.createElement('div');
    button.className = 'cookieButton';
    var buttonLink = document.createElement('a');
    buttonLink.textContent = purecookieButton;
    button.appendChild(buttonLink);

    // Append all parts to the container
    consentContainer.appendChild(title);
    consentContainer.appendChild(desc);
    consentContainer.appendChild(button);

    // Append the container to the body
    document.body.appendChild(consentContainer);

    // Attach event listener to the button instead of using onClick
    buttonLink.addEventListener('click', function() {
      purecookieDismiss();
    });
  }
}

// Make sure pureFadeIn, purecookieDismiss, getCookie, purecookieTitle, purecookieDesc, purecookieLink, and purecookieButton are defined somewhere in your scripts.


function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
}

window.onload = function() { cookieConsent(); };

























