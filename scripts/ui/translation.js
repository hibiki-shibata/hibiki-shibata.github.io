// const toggleButtons = document.getElementById("darkModeIcon");

let currentLang = 'fr';

const toggleButtons = document.getElementById("control-bar-card__site-settings__language-svg");
const mobileToggleButtons = document.getElementById("mobile-only-control-bar-card__site-settings__language-svg");

const translations = {
  en: {
    // currentPositionName: "Tech Support Engineer",
    currentPositionName: "Software Desiging Enthusiast",
    changeLanguageTitle: "Fr",
    techExpertiseTitle: "TECH EXPERTISE",

    menuBarHome: "HOME",
    menuBarTechExpat: "Tech Expert",
    menuBarExperience: "Experiences",
    menuBarEducation: "Educations",
    menuBarLang: "Languages",
    menuBarHobby: "Hobbies",

    techExpertiseSkilled: "Skilled",
    techExpertiseExperienced: "Experienced",
    experiencesTitle: "EXPERIENCES",
    woltTechJobTitle: "- Technical Support Engineer",
    // woltTechJobTitle: "- Technical support Engineer I3",
    woltTechYears: "March 2022 - Present ( 3 years )",
    woltTechExperienceSoftwareDev: "Internal Tool Development: ",
    woltTechExperienceSoftwareDevDescr: `
    Designed and implemented internal microservices using TypeScript, Python, and Docker to automate routine tasks and improve operational efficiency.
    `,
    woltTechExperienceDebug: "System Debugging & Incident Analysis: ",
    woltTechExperienceDebugDescr: `
    Investigated software issues by analyzing system logs using Datadog and other monitoring tools. Clearly documented findings to assist engineering teams in resolving bugs effectively.
    `,
    woltTechExperienceAnalytics: "Data Analytics & Reporting: ",
    woltTechExperienceAnalyticsDescr: `
    Responded to business team requests by extracting and analyzing data using SQL queries to support strategic decision-making.
    `,
    woltTechExperienceTechSupport: "Technical Support:",
    woltTechExperienceTechSupportDescr: `
   Managed and resolved hundreds of technical inquiries and requests from both internal stakeholders and external partners, including bug reports, POS integrations, feature requests, and system behavior clarifications.
    `,
    woltTechExperienceAccessManage: "Access & Device Management: ",
    woltTechExperienceAccessManageDesc: `
    Acted as an administrator for internal tools and systems (e.g., Google Workspace), assessing access requests against compliance and security policies and making access control decisions accordingly.
    `,
    woltTechExperiencePoliceReq: "Legal & Compliance Support: ",
    woltTechExperiencePoliceReqDesc: `
    Collaborated with law enforcement by securely retrieving and delivering relevant data from internal systems and databases in response to official police inquiries.
    `,
    woltTechExperienceDescriptionContent: `
    In this role, I led the transition of the division from a Japan-local operation to integration with the Global team, taking ownership of internal technical support across a wide range of systems and tools. While fulfilling the responsibilities of technical support, I went beyond typical Help Desk duties by actively developing internal tools and microservices (using TypeScript, Python, Docker, and more) to automate tasks and improve operational efficiency. I collaborated closely with global product teams, including software engineers and product leads, handling a broad spectrum of issues from technical troubleshooting to supporting compliance and legal data requests. My daily work required strong technical analysis skills, direct system investigations, and SQL-based data operations. Operating mainly in English, I developed a natural fluency in communicating across multicultural teams. In short, my role served as a technical bridge between business operations and the product engineering teams, enabling smoother collaboration and more efficient workflows through both support and self-driven software development initiatives.
    `,
    woltSAJobTitle: "- Support Associate",
    woltSAYears: "September 2021 - March 2022 ( 8 months )",
    woltSAExperienceUserSupport: "User support:",
    woltSAExperienceDescr: "(Online chat support, Phone support, Japanese/English)",
    woltSAExperienceCourierSupport: "Courier partner support: ",
    woltSAExperienceRestaurantSupport: "Restaurant partner support:",
    woltSAExperienceDescriptionContent: `
    I joined Wolt as a Support Associate immediately after graduating, initially with the goal of saving for future university studies. In this full-time role, I was responsible for supporting both customers and company partners, managing a wide range of inquiries, resolving issues, and facilitating effective communication between all parties. Over time, through exposure to Wolt’s culture and talent—particularly within the Product+ organization—I developed a strong interest in the technology and product development space. Motivated and inspired by the work of the Product+ team, I decided to pursue a more technical career path within the company, ultimately applying for and transitioning into a role where I could contribute using my technical skills.
    `,
    educationTitle: "EDUCATIONS",
    educationGenDiploma: "- General Diploma",
    educationYears: "April 2018 - April 2021",
    educationDesc: `
    I pursued a general curriculum with a strong focus on the sciences, including Mathematics, Physics, Chemistry, Biology, Computer Science, and English. Throughout my studies, I consistently achieved top academic performance, ranking within the top 10 out of approximately 400 students, with an average placement of 5th overall. I demonstrated particular strength in Geography, Physics, and Japanese, often achieving the highest scores in the entire student body. Through consistent hard work and academic excellence across all subjects, I graduated with honors.
    `,
    languageTitle: "LANGUAGES",
    languageEn: "English ( Business Proficieny )",
    languageJp: "Japanese ( Native )",
    languageFr: "French ( Entry level )",
    hobbiesTitle: "HOBBIES",
    hobbiesFoodTitle: "Food Exploration: ",
    hobbiesFood: "Passionate about discovering and enjoying a wide variety of international cuisines.",
    hobbiesWalkTitle: "Walking and Fitness: ",
    hobbiesWalk: "Regular walking and workouts are essential to maintaining my confidence, focus, and relaxation outside of work.",
    hobbiesStudyTitle: "Linguistic: ",
    hobbiesStudy: "Committed to continuous learning, and looking to expand my perspectives through communication with diverse people.",
    contactAddress: "Address:",
    contactPhonenumber: "Tel:",

    formName: "*Name",
    formEmail: "*Your Email Address",
    formTextArea: "Write your inquiry here. You'll a response via email in 2~3 days.",
    formSend: "Send",

  },



  fr: {
    currentPositionName: "Développeur De Logiciels",
    changeLanguageTitle: "En",
    techExpertiseTitle: "EXPERTISE TECHNIQUE",

    menuBarHome: "HAUT",
    menuBarTechExpat: "Expertise Tech",
    menuBarExperience: "Eexpériences",
    menuBarEducation: "Formations",
    menuBarLang: "Langues",
    menuBarHobby: "Loisirs",

    techExpertiseSkilled: "Compétent",
    techExpertiseExperienced: "Expérimenté",
    experiencesTitle: "EXPÉRIENCES",
    woltTechJobTitle: "- Ingénieur de support technique",
    woltTechYears: "Mars 2022 - Aujourd'hui ( 3 ans )",
    woltTechExperienceSoftwareDev: "Développement d'outils internes :",
    woltTechExperienceSoftwareDevDescr: `
    Conception et mise en œuvre de microservices internes en TypeScript, Python et Docker pour automatiser les tâches répétitives et améliorer l'efficacité opérationnelle.
    `,
    woltTechExperienceDebug: "Débogage système et analyse d'incidents :",
    woltTechExperienceDebugDescr: `
    Investigation des problèmes logiciels en analysant les journaux système via Datadog et d'autres outils de surveillance, avec une documentation claire pour faciliter la résolution des bugs par les équipes d'ingénierie.
    `,
    woltTechExperienceAnalytics: "Analyse de données et rapports :",
    woltTechExperienceAnalyticsDescr: `
    Réponse aux demandes de l'équipe commerciale en extrayant et analysant des données à l'aide de requêtes SQL pour soutenir la prise de décisions stratégiques.
    `,
    woltTechExperienceTechSupport: "Support technique :",
    woltTechExperienceTechSupportDescr: `
    Gestion et résolution de centaines de demandes techniques provenant de parties internes et externes, incluant des rapports de bugs, des intégrations POS, des demandes de fonctionnalités et des clarifications sur le comportement des systèmes.
    `,
    woltTechExperienceAccessManage: "Gestion des accès et des appareils :",
    woltTechExperienceAccessManageDesc: `
    Administrateur des outils internes (ex. Google Workspace), évaluant les demandes d'accès selon les politiques de conformité et de sécurité, et prenant les décisions d'accès en conséquence.
    `,
    woltTechExperiencePoliceReq: "Support légal et conformité :",
    woltTechExperiencePoliceReqDesc: `
    Collaboration avec les forces de l'ordre pour extraire et transmettre de manière sécurisée les données pertinentes issues des systèmes internes, en réponse aux demandes officielles.
    `,
    woltTechExperienceDescriptionContent: `
    Dans ce rôle, j'ai dirigé la transition de la division d'une opération locale au Japon vers une intégration complète avec l'équipe mondiale, prenant en charge le support technique interne sur une grande variété de systèmes et d'outils. 
    En plus du support technique traditionnel, j'ai activement développé des outils internes et des microservices (TypeScript, Python, Docker, etc.) pour automatiser les processus et améliorer l'efficacité. 
    J'ai collaboré étroitement avec les équipes produit mondiales, comprenant ingénieurs logiciels et chefs de produit, en traitant un large éventail de problèmes, du dépannage technique aux demandes de conformité légale. 
    Mon quotidien nécessitait de solides compétences d'analyse technique, d'enquêtes système directes et d'opérations sur données SQL, le tout principalement en anglais dans un environnement multiculturel. 
    En résumé, mon rôle servait de passerelle technique entre les opérations commerciales et les équipes d'ingénierie produit, facilitant la collaboration et optimisant les flux de travail par le support et l'initiative en développement logiciel interne.
    `,
    woltSAJobTitle: "- Associé Support",
    woltSAYears: "Septembre 2021 - Mars 2022 ( 8 mois )",
    woltSAExperienceUserSupport: "Support utilisateur :",
    woltSAExperienceDescr: "(Assistance par chat en ligne, assistance téléphonique, en japonais et en anglais)",
    woltSAExperienceCourierSupport: "Support aux partenaires de livraison :",
    woltSAExperienceRestaurantSupport: "Support aux partenaires restaurants :",
    woltSAExperienceDescriptionContent: `
    J'ai rejoint Wolt en tant qu'Associé Support juste après l'obtention de mon diplôme, dans le but initial d'économiser pour mes futures études universitaires. 
    En poste à temps plein, je soutenais les clients ainsi que les partenaires de l'entreprise, en gérant une large gamme de demandes, en résolvant les problèmes et en facilitant la communication entre toutes les parties. 
    Progressivement, en découvrant la culture et les talents de Wolt ( notamment au sein de l'équipe Produit+ ), j'ai développé un vif intérêt pour le domaine de la technologie et du développement de produits. 
    Inspiré par le travail de l'équipe Produit+, j'ai décidé de m'orienter vers une carrière plus technique au sein de l'entreprise, postulant et réussissant la transition vers un poste utilisant mes compétences techniques.
    `,
    educationTitle: "FORMATIONS",
    educationGenDiploma: "- Diplôme Général",
    educationYears: "Avril 2018 - Avril 2021",
    educationDesc: `
    J'ai suivi un cursus général axé sur les sciences, comprenant les mathématiques, la physique, la chimie, la biologie, l'informatique et l'anglais. 
    Tout au long de mes études, j'ai maintenu des performances académiques d'excellence, me classant régulièrement parmi les 10 premiers sur environ 400 élèves, avec une moyenne de 5ᵉ place générale. 
    Je me suis particulièrement distingué en géographie, physique et japonais, obtenant souvent les meilleurs résultats de l'établissement. 
    Grâce à une assiduité constante et à un excellent niveau scolaire dans toutes les matières, j'ai obtenu mon diplôme avec mention.
    `,
    languageTitle: "LANGUES",
    languageEn: "Anglais (compétence professionnelle)",
    languageJp: "Japonais (langue maternelle)",
    languageFr: "Français (niveau débutant)",
    hobbiesTitle: "LOISIRS",
    hobbiesFoodTitle: "Exploration culinaire: ",
    hobbiesFood: "Passionné par la découverte et la dégustation de cuisines internationales variées.",
    hobbiesWalkTitle: "Marche et remise en forme: ",
    hobbiesWalk: "La marche régulière et les entraînements sont essentiels pour maintenir ma confiance, ma concentration et ma détente en dehors du travail.",
    hobbiesStudyTitle: "Apprentissage des langues: ",
    hobbiesStudy: "Engagé dans l'apprentissage continu, notamment du français, pour améliorer la communication avec les partenaires internationaux.",
    contactAddress: "Adresse :",
    contactPhonenumber: "Téléphone :",

    formName: "*Nom",
    formEmail: "*Votre Email",
    formTextArea: "Écrire votre demande. Vous recevrez une réponse par e-mail dans les 2 à 3 jours.",
    formSend: "Envoyer",
  }
};



function setLanguage(lang) {

  const elements = document.querySelectorAll('[data-i18n]')

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n')

    if (translations[lang][key]) {
      if (el.placeholder !== undefined) {
        el.placeholder = translations[lang][key]
      } else {
        el.textContent = translations[lang][key]
      }
    }
  }
  )
}

function toggleLanguage() {
  try {
    setLanguage(currentLang)
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    console.log(currentLang)
  } catch (e) {
    console.log(e)
  }
}

toggleButtons.addEventListener("click", () => {
  toggleLanguage();
}
)

mobileToggleButtons.addEventListener("click", () => {
+  toggleLanguage();
}
)