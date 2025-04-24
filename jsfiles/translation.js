const translations = {
    en: {
      welcome: "Welcome",
      description: "This is a simple website.",
    },
    fr: {
      welcome: "Bienvenue",
      description: "Ceci est un site web simple.",
    }
  };
  
  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = translations[lang][key];
    });
  }
  