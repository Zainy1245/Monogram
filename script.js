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