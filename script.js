window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero-section');
    const content = document.querySelector('.content');

    // Define the scroll range over which the effects will occur
    const maxScroll = 300; // Adjust this value as needed

    // Calculate brightness and clamp it to a maximum value
    const brightnessValue = 1 + (scrollPosition / maxScroll);
    heroSection.style.filter = `brightness(${Math.min(brightnessValue, 2)})`;

    // Calculate opacity and scale for the text content
    const contentOpacity = 1 - (scrollPosition / maxScroll);
    const contentScale = 1 - (scrollPosition / (2 * maxScroll)); // Shrinks the text slightly

    // Apply the calculated opacity and scale, clamping them to prevent negative values
    content.style.opacity = Math.max(contentOpacity, 0);
    content.style.transform = `translate(-50%, -50%) scale(${Math.max(contentScale, 0.5)})`; // Minimum scale of 0.5
});

