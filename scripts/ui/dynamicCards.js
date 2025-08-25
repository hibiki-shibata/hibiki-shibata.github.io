const sections = document.querySelectorAll('.tech-expertise-card, .education-card, .job-experience-card, .language-skills-card, .hobbies-card, .contact-card');

const observer = new IntersectionObserver((targetDivs) => {
  targetDivs.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.09
});

sections.forEach(section => {
  observer.observe(section);
});
