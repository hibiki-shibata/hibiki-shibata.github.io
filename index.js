const section = document.querySelector('.educationsDivs');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.classList.add('visible');
      observer.unobserve(section); // Slide only once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% visible
});

observer.observe(section);
