const sections = document.querySelectorAll('.techExpertiseDivs, .educationsDivs, .experiencesDivs, .languagesDivs, .hobbiesDivs');

const observer = new IntersectionObserver((entries) => {
  console.log("ENTRIES = " + entries)
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("ENTRYY.TARGET = "+ entry.target)
      console.log("ENTRYY.TARGET.CLASSLIST =  "+ entry.target.classList)
      entry.target.classList.add('visible');
      console.log("ENTRYY.TARGET.CLASSLIST after add =  "+ entry.target.classList)
      observer.unobserve(entry.target); // Slide only once per section
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});
