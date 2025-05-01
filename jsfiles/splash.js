splashScreen

const splash = document.getElementById('splashScreen');


setTimeout(() => {
    splash.style.opacity = 0.85;
}, 50);

// Fade out after 2 seconds
setTimeout(() => {
    splash.style.opacity = 0;
}, 3000);

// Remove from DOM after fade out
setTimeout(() => {
    splash.remove();
}, 4000);