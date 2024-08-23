window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero-section');
    const content = document.querySelector('.content');

    // Define the scroll range over which the effects will occur
    const maxScroll = 300; // Adjust this value as needed

    // Calculate brightness and clamp it to a maximum value
    const brightnessValue = 1 + (scrollPosition / maxScroll);
    //heroSection.style.filter = `brightness(${Math.min(brightnessValue, 2)})`;

    // Calculate opacity and scale for the text content
    const contentOpacity = 1 - (scrollPosition / maxScroll);
    const contentScale = 1 - (scrollPosition / (2 * maxScroll)); // Shrinks the text slightly

    // Apply the calculated opacity and scale, clamping them to prevent negative values
    content.style.opacity = Math.max(contentOpacity, 0);
    content.style.transform = `translate(-50%, -50%) scale(${Math.max(contentScale, 0.5)})`; // Minimum scale of 0.5
});


function splitScroll() {
   const aboutSection = document.querySelector('.about');
   const controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
       duration:'200%', // Set duration to the height of the about section
       triggerElement: '.about-title',
       triggerHook: 0
   })
   .setPin('.about-title')
   .addIndicators() // Optional: for debugging
   .addTo(controller);

new ScrollMagic.Scene({

duration:'300%',
triggerElement:'#right-3',
triggerHook :0
})
.setPin('#right-3')
.addIndicators()
.addTo(controller)
new ScrollMagic.Scene({

    duration:'300%',
    triggerElement:'#left-3',
    triggerHook :0
    })
    .setPin('#left-3')
    .addIndicators()
    .addTo(controller)

}
splitScroll();
document.addEventListener("DOMContentLoaded", function() {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: ".fourth-Section",
        triggerHook: 0.7,  // Trigger when the section is 70% in the viewport
        duration: "50%"    // How long the scene should last
    })
    .on("enter", function () {
        document.getElementById("scroll-text").textContent = "Next Level Porductivity Starts here";
    })
    .on("leave", function () {
        document.getElementById("scroll-text").textContent = "More compatibility.";
    })
    .addTo(controller);
});
$(window).scroll(function(){
    let $window = $(window),
        $body = $('body'),   
        $section = $('.section');
    let scroll = $window.scrollTop() + ($window.height() / 3);
    $section.each(function(){ 
      if($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll){
        $body.removeClass(function (index, css){
          return (css.match (/(^|\s)color-\s+/g) || [].join(' '));
        });
        $('.section').removeClass('active');
        $(this).addClass('active');
      }
    });
  }).scroll();
  const images = document.querySelectorAll('.image');
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
  images.forEach((image) => {
    const imageTop = image.offsetTop;
    const scrollPosition = container.scrollTop;
    const windowHeight = container.offsetHeight;

    if (scrollPosition + windowHeight > imageTop) {
      image.classList.add('animate');
    } else {
      image.classList.remove('animate');
    }
  });
});
//for sliding phone images 
let currentIndex = 0;
const icons = document.querySelectorAll('.icon');
const totalIcons = icons.length;

function showNextIcon() {
    icons[currentIndex].style.transform = 'translateX(-100%)';
    currentIndex = (currentIndex + 1) % totalIcons;
    icons[currentIndex].style.transform = 'translateX(0)';
}

setInterval(showNextIcon, 2500); // Change icon every 2 seconds
/*for overlay text show*/
document.addEventListener('scroll', function() {
  const overlayText = document.querySelector('.overlay-text');
  const overlayPosition = overlayText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (overlayPosition < screenPosition) {
      overlayText.classList.add('visible');
  } else {
      overlayText.classList.remove('visible');
  }
});
document.querySelector('.prev-btn').addEventListener('click', function() {
  document.querySelector('.carousel').scrollBy({
    left: -300, // Adjust this value based on the width of your cards
    behavior: 'smooth'
  });
});

document.querySelector('.next-btn').addEventListener('click', function() {
  document.querySelector('.carousel').scrollBy({
    left: 300, // Adjust this value based on the width of your cards
    behavior: 'smooth'
  });
});
document.querySelector('.testimonial-prev-btn').addEventListener('click', function() {
  document.querySelector('.testimonial-carousel').scrollBy({
    left: -1000, // Adjust this value based on the width of your cards
    behavior: 'smooth'
  });
});

document.querySelector('.testimonial-next-btn').addEventListener('click', function() {
  document.querySelector('.testimonial-carousel').scrollBy({
    left: 1000, // Adjust this value based on the width of your cards
    behavior: 'smooth'
  });
});
//for responsive nav bar 
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
//for how it works potential section
function parallax () {
  const aboutPSection = document.querySelector('.about-p');
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration:'500%', // Set duration to the height of the about section
      triggerElement: '.about-potential',
      triggerHook: 0
  })
  .setPin('.about-potential')
  .addIndicators() // Optional: for debugging
  .addTo(controller);
}
parallax();
// for dowlaod page 
// Function to show only the selected section
function showSection(sectionId) {
  // Get all content sections
  var sections = document.querySelectorAll('.content-section');
  
  // Hide all sections
  sections.forEach(function(section) {
      section.classList.remove('active');
  });

  // Show the clicked section
  document.getElementById(sectionId).classList.add('active');
}

// Set the default section to display
window.onload = function() {
  showSection('monogram-creator'); // Show the first section by default
};