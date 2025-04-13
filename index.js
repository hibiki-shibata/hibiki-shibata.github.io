const sections = document.querySelectorAll('.techExpertiseDivs, .educationsDivs, .experiencesDivs, .languagesDivs, .hobbiesDivs');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Slide only once per section
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
