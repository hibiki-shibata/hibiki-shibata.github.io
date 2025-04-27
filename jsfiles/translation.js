// const toggleButtons = document.getElementById("darkModeIcon");

let currentLang = 'fr';

const toggleButtons = document.getElementById("changeLanguageIcon");

const translations = {
  en: {
    // currentPositionName: "Tech Support Engineer",
    currentPositionName: "Princess",
    changeLanguageTitle: "Fr",
    techExpertiseTitle: "TECH EXPERTISE",

    techExpertiseSkilled: "Skilled",
    techExpertiseExperienced: "Experienced",
    experiencesTitle: "EXPERIENCES",
    woltTechJobTitle: "- Princess",
    // woltTechJobTitle: "- Technical support Engineer I3",
    woltTechYears: "March 2022 - Present ( 3 years )",
    woltTechExperienceSoftwareDev: "Software development:",
    woltTechExperienceSoftwareDevDescr: `
    Micro services for internal use, with Typescript, Python, Docker and so on. For automating daily tasks for employees.
    `,
    woltTechExperienceDebug: "Debugging support:",
    woltTechExperienceDebugDescr: `
    Analyze the system logs through Datadog or similar data logging tools and elaborate the
    issues so to make it engineers can easily fix the software bugs.
    `,
    woltTechExperienceAnalytics: "Analytics:",
    woltTechExperienceAnalyticsDescr: `
    Based on requests from the business team, export desired data from Database with SQL
    queries.
    `,
    woltTechExperienceTechSupport: "Technical Support:",
    woltTechExperienceTechSupportDescr: `
    I handled hundreds of technical question / request from both internal and external
    people(Bug reports / POS integrations / new feature requests / system logic questions).
    `,
    woltTechExperienceAccessManage: "Access/Device management:",
    woltTechExperienceAccessManageDesc: `
    As an Admin of internal tools, I judged business justification for each person and decide to
    grant access or not based on Compliance, Security policy and so on. (Internal operation tool, Google accounts etc..).
    `,
    woltTechExperiencePoliceReq: "Police requests:",
    woltTechExperiencePoliceReqDesc: `
    Extract data from DB and provide it to Police.
    `,
    woltTechExperienceDescriptionContent: `
    In this role, I moved the division from Japan local to Global team and was responsible for the
    company's internal technical/IT support on internal technical matters while performing as a HelpDesk at the same time.
    I've been collaborating with the global product team(e.g. software engineers, product leads) and hundled variety of things from technical matters to legal matters. And I played the role mainly in English.
    so I got used to naturally using English there. These above are what I do in this role.
    To sum up with the role in short, the role is to facilitate shorthanded tasks and communications between business team and Product team, by using my technical knowledge/skills.
    `,
    woltSAJobTitle: "- Support Associate",
    woltSAYears: "September 2021 - March 2022 ( 8 months )",
    woltSAExperienceUserSupport: "User support:",
    woltSAExperienceDescr: "(Online chat support, Phone support, Japanese/English)",
    woltSAExperienceCourierSupport: "Courier partner support: ",
    woltSAExperienceRestaurantSupport: "Restaurant partner support:",
    woltSAExperienceDescriptionContent: `
      I joined this role right after graduating school. At first, it was mainly to save tuition of
      Universities to go later. In this role, I was working in Full-time and I was responsible for supporting customers and all the company's partners. I was handling a variety of requests and facilitated communications to/between
      them. As the time went by while I was working in the company, I was getting into the cultures and
      talents(especially Product+team) that exist in the company and started thinking I’d like to keep working in this
      organization while being inspired by Product+ team for tech world. So, I decided to apply for a position in which I was
      also qualified at that point to join the Product+ organization.
    `,
    educationTitle: "EDUCATIONS",
    educationGenDiploma: "- General Diploma",
    educationYears: "April 2018 - April 2021",
    educationDesc: `
    I studied general subject, focusing on the Science field. (Math, Physics, Chemistry, Biology,
    Computer science, English). I graduated with honors and on most of the examinations when I was in
    school, the Total scores in all subjects was in the top ten out of 400 of students - it was 5th/400 on
    average. I had been getting high scores all years of school in every single subject by studying so hard.
    `,
    languageTitle: "LANGUAGES",
    languageEn: "English (Bilingual proficiency)",
    languageJp: "Japanese (Native)",
    languageFr: "French (Ently level)",
    hobbiesTitle: "HOBBIES",
    hobbiesFoodTitle: "Foods : ",
    hobbiesFood: "I love exploring new foods, in particular international foods.",
    hobbiesWalkTitle: "Walking/WorkOut : ",
    hobbiesWalk: "Walking/WorkOut : It's my key to be confident and be relaxed in my free time.",
    hobbiesStudyTitle: "Languages : ",
    hobbiesStudy: "Languages : I keep learning French for years for better communication with my partners.",
    contactAddress: "Address:",
    contactPhonenumber: "Phone number:",

  },


  fr: {
    currentPositionName: "Ingénieur de support technique",
    changeLanguageTitle: "En",
    techExpertiseTitle: "EXPERTISE TECHNIQUE",

    techExpertiseSkilled: "Qualifié",
    techExpertiseExperienced: "Expérimenté",
    experiencesTitle: "EXPÉRIENCES",
    woltTechJobTitle: "- Ingénieur support technique I3",
    woltTechYears: "Mars 2022 - Présent ( 3 ans )",
    woltTechExperienceSoftwareDev: "Développement de logiciels:",
    woltTechExperienceSoftwareDevDescr: `Microservices à usage interne, avec TypeScript, Python, Docker, etc. Pour automatiser les tâches quotidiennes des employés.`,
    woltTechExperienceDebug: "Support de débogage:",
    woltTechExperienceDebugDescr: `
    Analysez les journaux système via Datadog ou des outils d'enregistrement de données similaires et détaillez les problèmes afin que les ingénieurs puissent facilement corriger les bugs logiciels
    `,
    woltTechExperienceAnalytics: "Analytiques:",
    woltTechExperienceAnalyticsDescr: `
    En fonction des demandes de l'équipe commerciale, exportez les données souhaitées depuis la base de données avec des requêtes SQL.
    `,
    woltTechExperienceTechSupport: "Support Technique:",
    woltTechExperienceTechSupportDescr: `
    J'ai traité des centaines de questions et demandes techniques provenant de personnes internes et externes (rapports de bugs, intégrations de PDV, demandes de nouvelles fonctionnalités, questions sur la logique système).
    `,
    woltTechExperienceAccessManage: "Gestion des accès/appareils:",
    woltTechExperienceAccessManageDesc: `
    En tant qu'administrateur d'outils internes, j'évalue la justification commerciale de chaque personne et décide d'accorder ou non l'accès en fonction de la conformité, de la politique de sécurité, etc. (Outil d'exploitation interne, comptes Google, etc.).
    `,
    woltTechExperiencePoliceReq: "Demandes de la police :",
    woltTechExperiencePoliceReqDesc: `
    Extraire les données de la base de données et les fournir à la police.
    `,
    woltTechExperienceDescriptionContent: `
    À ce poste, j'ai transféré la division du Japon vers l'équipe mondiale et j'étais responsable du support technique et informatique interne de l'entreprise sur les questions techniques internes, tout en assurant le service d'assistance.
    J'ai collaboré avec l'équipe produit mondiale (ingénieurs logiciels, chefs de produit, etc.) et géré diverses tâches, des questions techniques aux aspects juridiques. J'ai principalement travaillé en anglais, ce qui m'a permis de m'habituer naturellement à l'anglais. Voici ce que je fais à ce poste.
    En résumé, mon rôle consiste à faciliter les tâches complexes et la communication entre l'équipe commerciale et l'équipe produit, en utilisant mes connaissances et compétences techniques.    
    `,
    woltSAJobTitle: "- Assistant Support",
    woltSAYears: "Septembre 2021 - Mars 2022 (8 mois)",
    woltSAExperienceUserSupport: "Support utilisateur:",
    woltSAExperienceDescr: "(Assistance par chat en ligne, assistance téléphonique, japonais/anglais)",
    woltSAExperienceCourierSupport: "Assistance aux partenaires de messagerie :",
    woltSAExperienceRestaurantSupport: "Assistance aux partenaires du restaurant :",
    woltSAExperienceDescriptionContent: `
    J'ai rejoint ce poste juste après avoir obtenu mon diplôme. Au départ, c'était principalement pour économiser les frais de scolarité universitaires. À ce poste, je travaillais à temps plein et j'étais responsable du support des clients et de tous les partenaires de l'entreprise. Je traitais diverses demandes et facilitais la communication entre eux. Au fil du temps, je me suis familiarisée avec la culture et les talents de l'entreprise (notamment l'équipe Produit) et j'ai commencé à penser que je souhaitais continuer à travailler dans cette organisation, inspirée par l'équipe Produit+ pour le monde de la technologie. J'ai donc décidé de postuler à un poste pour lequel j'étais également qualifiée à ce moment-là pour rejoindre l'équipe Produit+.
    `,
    educationTitle: "ÉDUCATIONS",
    educationGenDiploma: "- Diplôme général",
    educationYears: "Avril 2018 - Avril 2021",
    educationDesc: `
    J'ai étudié des matières générales, en me concentrant sur les sciences (mathématiques, physique, chimie, biologie, informatique, anglais). J'ai obtenu mon diplôme avec mention et, à la plupart des examens, j'ai obtenu une moyenne de 5e/400 élèves, toutes matières confondues. J'ai obtenu d'excellents résultats tout au long de ma scolarité, et ce, grâce à mes efforts.
    `,
    languageTitle: "LANGAGES",
    languageEn: "Anglais (maîtrise bilingue)",
    languageJp: "Japonais (langue maternelle)",
    languageFr: "Français (niveau Ently)",
    hobbiesTitle: "LOISIRS",
    hobbiesFoodTitle: "Nourriture : ",
    hobbiesFood: "J'aime explorer de nouveaux aliments, en particulier les aliments internationaux.",
    hobbiesWalkTitle: "Marche/Entraînement : ",
    hobbiesWalk: "C'est ma clé pour avoir confiance en moi et être détendu pendant mon temps libre.",
    hobbiesStudyTitle: "Langues : ",
    hobbiesStudy: "J'apprends le français depuis des années pour une meilleure communication avec mes partenaires.",
    contactAddress: "Adresse:",
    contactPhonenumber: "Numéro de téléphone:",
  }
};






function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  console.log(elements)

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }

  }

  );
}



toggleButtons.addEventListener("click", () => {
  try {
    setLanguage(currentLang)

    currentLang = currentLang === 'en' ? 'fr' : 'en';


    console.log(currentLang)

  } catch (e) {
    console.log(e)
  }
}
);

