const sections = document.querySelectorAll('.techExpertiseDivs, .educationsDivs, .experiencesDivs, .languagesDivs, .hobbiesDivs, .inquiryFormDivs');

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
