import type { Content } from './en';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const fr: Content = {
  meta: {
    title: 'Violeta Calvo · Ingénieure Full Stack & Technology Partner',
    description:
      'Violeta Calvo conçoit et développe des applications web de bout en bout, avec plus de {software} ans dans le logiciel et plus de {total} ans comme ingénieure.',
  },
  a11y: {
    skip: 'Aller au contenu',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    mainNav: 'Principale',
    newTab: 's’ouvre dans un nouvel onglet',
  },
  nav: {
    tagline: 'Ingénieure Full Stack',
    about: 'À propos',
    experience: 'Expérience',
    roots: 'Racines',
    education: 'Formation',
    beyond: 'En dehors du travail',
    contact: 'Me contacter',
  },
  hero: {
    role: 'Ingénieure Full Stack & Technology Partner',
    lead: 'Je conçois et développe des applications web de bout en bout : de l’idée produit à l’architecture, au développement et au déploiement. Plus de {software} ans dans le logiciel, plus de {total} ans comme ingénieure.',
    getInTouch: 'Me contacter',
    viewExperience: 'Voir l’expérience',
    downloadCv: 'Télécharger le CV',
    currently: 'Actuellement',
    currentRole: 'Technology Partner · SustraiLab',
    photoAlt: 'Portrait de Violeta Calvo',
  },
  quote: {
    text: 'Je fais toujours ce que je ne sais pas faire, pour apprendre à le faire.',
    author: 'Pablo Picasso',
  },
  about: {
    eyebrow: 'À propos',
    heading: 'Ce que je peux apprendre compte plus que ce que je sais déjà.',
    paragraphs: [
      'Je suis ingénieure depuis plus de {total} ans, et ingénieure logiciel depuis plus de {software} ans. J’ai commencé dans l’industrie — éoliennes, vélos en libre-service, IoT — avant de passer au logiciel en 2015. Depuis, je crée des applications full stack et je participe à toutes les phases du développement, comme Full Stack Engineer, Backend Engineer et Tech Lead.',
      'Aujourd’hui, je suis Technology Partner chez SustraiLab, où je transforme des idées en produits de bout en bout. Je donne le meilleur de moi-même en télétravail, dans de petites équipes autonomes où je vois l’impact de ce que je construis, où j’échange des idées avec mes collègues et où nous grandissons ensemble.',
      'J’apprécie la flexibilité et la communication asynchrone : elles me permettent d’adapter mon travail à ma vie tout en protégeant le temps de concentration dont j’ai besoin pour bien travailler. Et je crois qu’avec une vraie culture de l’écrit, une équipe à distance peut rester asynchrone tout en restant assez proche pour s’aider à grandir.',
    ],
    values: [
      { title: 'À distance et en asynchrone', text: 'Des horaires flexibles adaptés à ma vie, avec du temps de concentration protégé.' },
      { title: 'Petites équipes autonomes', text: 'Des startups où je vois l’impact de mon travail.' },
      { title: 'Culture de l’écrit', text: 'La clé pour rester asynchrone tout en échangeant suffisamment.' },
      { title: 'Grandir ensemble', text: 'Partager idées et feedback pour s’aider à progresser.' },
    ],
  },
  experience: {
    eyebrow: 'Expérience',
    heading: 'Je crée des logiciels depuis 2015',
    present: 'aujourd’hui',
    current: 'Actuel',
    careerBreak: 'Pause professionnelle',
    breaks: { health: 'Santé et bien-être', family: 'Temps en famille' },
    duration: (m) => {
      const y = Math.floor(m / 12);
      const r = m % 12;
      if (y === 0) return `${r} mois`;
      const years = plural(y, 'an', 'ans');
      return r ? `${years} ${r} mois` : years;
    },
    jobs: {
      sustrailab: {
        role: 'Technology Partner',
        intro:
          'Je transforme des idées produit en produits numériques qui fonctionnent, de la stratégie produit à l’architecture, au développement et au déploiement. Je crée des applications web modernes et des produits SaaS en misant sur la simplicité, l’automatisation et les workflows assistés par l’IA.',
        bullets: [],
        tags: ['Stratégie produit', 'Architecture', 'SaaS', 'Automatisation', 'Workflows assistés par l’IA'],
      },
      hiboo: {
        role: 'Senior Full Stack Engineer',
        intro: 'J’ai rejoint une équipe expérimentée à la hiérarchie horizontale, où chacun avait beaucoup d’autonomie et de responsabilités.',
        bullets: [
          'Migration du backend vers une architecture hexagonale (ports et adaptateurs).',
          'Méthodologie agile maison, inspirée de Shape Up, de Scrum et des idées de Marty Cagan.',
          'Le rôle de Tech Lead dans le trio produit tournait entre nous.',
        ],
      },
      greenly: {
        role: 'Tech Lead · Full Stack Engineer',
        intro:
          'Tech Lead à partir d’août 2022. J’ai eu le plaisir d’accompagner la progression de l’équipe et d’aider à trouver des solutions à un niveau plus élevé qu’auparavant.',
        bullets: [
          'Accompagnement de l’équipe par des 1:1, du feedback technique en revue de PR et la conception des solutions techniques.',
          'Développement et amélioration de fonctionnalités, correction de bugs avec de bonnes pratiques et du code propre.',
          'Création de notre propre méthodologie de travail, inspirée de Scrum et de Shape Up.',
        ],
      },
      flitdesk: {
        role: 'Backend Engineer',
        intro:
          'J’ai beaucoup appris de mes collègues en échangeant, en donnant et en recevant du feedback, et en décidant ensemble de migrer vers une stack plus moderne et un code plus propre.',
        bullets: [
          'Migration du code legacy vers un framework plus moderne et une architecture distribuée adaptée à nos clients.',
          'Développement de nouvelles fonctionnalités et de nouveaux services, et correction de bugs au sein de l’équipe backend.',
          'Passage de Scrum à un Shape Up adapté début 2021.',
        ],
      },
      brozerly: {
        role: 'R&D Full Stack Engineer → Lead Full Stack Engineer',
        intro:
          'Seule développeuse à temps plein pendant les 10 premiers mois, puis seule développeuse et ingénieure web de l’entreprise, en travaillant main dans la main avec le CEO.',
        bullets: [
          'Passage du prototype du CTO à une PWA en production avec Meteor, puis création et publication des apps Android et iOS avec Cordova.',
          'Conception et développement du back-office, avec paiements avancés et remboursements via Stripe.',
          'Également en charge du design graphique, des traductions (FR/EN/ES), d’animations vidéo et du marketing sur les réseaux sociaux.',
        ],
      },
    },
  },
  roots: {
    eyebrow: 'Racines · 2004 — 2014',
    heading: 'D’abord, dix ans d’ingénierie industrielle',
    text: 'Des éoliennes aux ancrages de vélos et à l’IoT : mes années d’ingénierie avant le logiciel, dont un brevet délivré.',
    items: {
      ulma: {
        role: 'Ingénieure systèmes embarqués IoT (stage)',
        text: 'Application IoT pour piloter et surveiller à distance des machines à laver industrielles, côté appareil et côté poste de travail, pour mon projet de master.',
      },
      hoff: {
        role: 'Ingénieure 3D (stage)',
        text: 'Une animation 3D marketing et des moules 3D pour skateboards en bois, en travaillant en français.',
      },
      bonopark: {
        role: 'Ingénieure conception et développement',
        text: 'Conception de l’ancrage entre le vélo et la borne du système de vélos en libre-service de Saint-Sébastien. Mes outils VBA pour SolidWorks ont réduit la production de plans 2D d’une journée à environ une heure.',
      },
      gamesa: {
        role: 'Ingénieure support logiciel de contrôle',
        text: 'Co-conception du premier algorithme d’autodiagnostic pour éoliennes et analyse des erreurs du logiciel de contrôle.',
      },
      schneider: {
        role: 'Ingénieure amélioration continue des processus',
        text: 'Pilotage de projets 5S, Lean Manufacturing et 6 Sigma. Mes outils VBA faisaient gagner 2 heures par semaine à chaque manager.',
      },
    },
    patent: { label: 'Co-inventrice · Brevet EP2955092', title: 'Système d’ancrage et de recharge pour vélos électriques de location', url: 'https://patents.google.com/patent/EP2955092B1/fr' },
  },
  education: {
    eyebrow: 'Formation',
    heading: 'Quatre diplômes d’ingénierie',
    items: [
      { years: '2013 — 2014', title: 'Master en ingénierie des systèmes embarqués', school: 'Euskal Herriko Unibertsitatea', award: 'Prix de la meilleure étudiante' },
      { years: '2009 — 2016', title: 'Ingénierie technique des télécommunications — son et image', school: 'Universidad Pública de Navarra' },
      { years: '1999 — 2003', title: 'Ingénierie technique industrielle — électricité', school: 'Universidad Pública de Navarra', award: 'Projet de fin d’études avec mention' },
      { years: '2014 — 2015', title: 'Diplôme en génie électrique (Bac+4)', school: 'Universidad de León', note: 'Nouveau diplôme universitaire après un changement de loi.' },
    ],
  },
  beyond: {
    eyebrow: 'Un peu plus sur moi',
    languagesTitle: 'Langues',
    languages: [
      { name: 'Espagnol', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'B2 · TOEIC 900' },
      { name: 'Français', level: 'B2 · Professionnel' },
      { name: 'Basque', level: 'B1' },
    ],
    activeTitle: 'Rester active',
    activeText:
      'Quand je ne crée pas de logiciels, rester active est une priorité. Cela me garde en forme, concentrée et pleine d’énergie pour mon fils et pour mon travail.',
    active: ['Pole dance et acrobaties', 'Plongée sous-marine'],
    communityTitle: 'Éducation et communauté',
    communityText:
      'L’éducation et la communauté comptent beaucoup pour moi. J’ai fait l’instruction en famille, et mon fils va maintenant dans une école alternative d’inspiration Montessori. Ce que je valorise le plus, c’est une éducation qui respecte le rythme de chaque enfant et l’aide à s’écouter, à résoudre les conflits et à collaborer. Je participe aussi à des projets avec d’autres familles.',
    enjoyTitle: 'J’aime aussi',
    enjoy: [
      'Jouer avec mon fils',
      'Apprendre quelque chose de nouveau',
      'Profiter de la nature',
      'Aquarelle et lettering',
      'Chanter et jouer de la guitare',
      'Coudre et tricoter, de temps en temps',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Parlons-en.',
    text: 'Une idée de produit, un projet, ou simplement envie d’échanger ? J’aurai plaisir à vous lire.',
  },
  cv: {
    title: 'Violeta Calvo — CV',
    role: 'Ingénieure Full Stack & Technology Partner',
    profile:
      'Ingénieure avec plus de {total} ans d’expérience, dont plus de {software} dans le logiciel. Je conçois et développe des applications web de bout en bout : de l’idée produit à l’architecture, au développement et au déploiement. Ancienne Tech Lead, je donne le meilleur de moi-même dans de petites équipes autonomes, en télétravail.',
    contact: 'Contact',
    skills: 'Compétences',
    skillList: [
      'TypeScript · JavaScript',
      'Node.js · NestJS · Express',
      'React · Next.js',
      'PostgreSQL · MongoDB',
      'GraphQL · REST',
      'AWS · GCP · Heroku',
      'Architecture hexagonale',
      'Shape Up · Agile',
      'Leadership technique et coaching',
    ],
    languages: 'Langues',
    education: 'Formation',
    educationItems: [
      { title: 'Master en ingénierie des systèmes embarqués', meta: 'UPV/EHU · 2014', award: 'Prix de la meilleure étudiante' },
      { title: 'Diplôme en génie électrique (Bac+4)', meta: 'Universidad de León · 2015' },
      { title: 'Ingénierie technique des télécommunications, son et image', meta: 'UPNA · 2016' },
      { title: 'Ingénierie technique industrielle, électricité', meta: 'UPNA · 2003', award: 'Projet de fin d’études avec mention' },
    ],
    experience: 'Expérience',
    jobs: {
      sustrailab:
        'Je transforme des idées produit en applications web et SaaS de bout en bout, en misant sur la simplicité, l’automatisation et les workflows assistés par l’IA.',
      hiboo:
        'Migration du backend vers une architecture hexagonale ; rôle tournant de Tech Lead dans le trio produit. TypeScript, Node.js, React, PostgreSQL, GraphQL.',
      greenly: 'Tech Lead à partir d’août 2022 : 1:1, revues de PR et conception technique. Node.js, React, PostgreSQL, AWS.',
      flitdesk:
        'Migration du code legacy vers une architecture distribuée moderne et passage de l’équipe à Shape Up. NestJS, GraphQL, MongoDB, GCP.',
      brozerly: 'Seule développeuse : PWA et apps iOS/Android avec Meteor, et back-office avec paiements Stripe.',
    },
    earlierTitle: 'Ingénierie avant le logiciel · 2004 – 2014',
    earlier: [
      { company: 'Bonopark', role: 'Ingénieure conception et développement', years: '2011 – 2013' },
      { company: 'Matis Hispania pour Gamesa', role: 'Ingénieure support logiciel de contrôle', years: '2007 – 2009' },
      { company: 'Schneider Electric', role: 'Ingénieure amélioration continue', years: '2004 – 2007' },
      { company: 'Stages', role: 'ULMA Embedded Solutions · HOFF distribution', years: '2014' },
    ],
    beyondTitle: 'En dehors du travail',
    beyond:
      'Pole dance et acrobaties, plongée, aquarelle et guitare. Engagée dans des projets d’éducation et de communauté avec d’autres familles.',
  },
  notFound: {
    title: 'Page introuvable · Violeta Calvo',
    heading: 'Cette page n’existe pas',
    text: 'Le lien est peut-être ancien ou mal saisi.',
    toHome: 'Je vous ramène à l’accueil dans {n} secondes.',
    toBack: 'Je vous ramène à la page précédente dans {n} secondes.',
    goHome: 'Aller à l’accueil',
    goBack: 'Revenir en arrière',
  },
};
