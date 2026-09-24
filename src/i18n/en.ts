import type { BreakId, EarlierId, JobId } from '../data/cv';

// `{software}` and `{total}` are replaced with the years of experience.
export interface Content {
  meta: { title: string; description: string };
  a11y: { skip: string; openMenu: string; closeMenu: string; language: string; mainNav: string; newTab: string };
  nav: { tagline: string; about: string; experience: string; roots: string; education: string; beyond: string; contact: string };
  hero: {
    role: string;
    lead: string;
    getInTouch: string;
    viewExperience: string;
    downloadCv: string;
    currently: string;
    currentRole: string;
    photoAlt: string;
  };
  quote: { text: string; author: string };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    values: { title: string; text: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    present: string;
    current: string;
    careerBreak: string;
    breaks: Record<BreakId, string>;
    duration: (months: number) => string;
    jobs: Record<JobId, { role: string; intro: string; bullets: string[]; tags?: string[] }>;
  };
  roots: {
    eyebrow: string;
    heading: string;
    text: string;
    items: Record<EarlierId, { role: string; text: string }>;
  };
  education: {
    eyebrow: string;
    heading: string;
    items: { years: string; title: string; school: string; award?: string; note?: string }[];
  };
  beyond: {
    eyebrow: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
    activeTitle: string;
    activeText: string;
    active: string[];
    communityTitle: string;
    communityText: string;
    enjoyTitle: string;
    enjoy: string[];
  };
  contact: { eyebrow: string; heading: string; text: string };
  cv: {
    title: string;
    role: string;
    profile: string;
    contact: string;
    skills: string;
    skillList: string[];
    languages: string;
    education: string;
    educationItems: { title: string; meta: string; award?: string }[];
    experience: string;
    jobs: Record<JobId, string>;
    earlierTitle: string;
    earlier: { company: string; role: string; years: string }[];
    beyondTitle: string;
    beyond: string;
  };
  notFound: {
    title: string;
    heading: string;
    text: string;
    toHome: string;
    toBack: string;
    goHome: string;
    goBack: string;
  };
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const en: Content = {
  meta: {
    title: 'Violeta Calvo · Full Stack Engineer & Technology Partner',
    description:
      'Violeta Calvo designs and builds web applications end to end, with {software}+ years in software and {total}+ years as an engineer.',
  },
  a11y: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    mainNav: 'Main',
    newTab: 'opens in a new tab',
  },
  nav: {
    tagline: 'Full Stack Engineer',
    about: 'About',
    experience: 'Experience',
    roots: 'Roots',
    education: 'Education',
    beyond: 'Beyond work',
    contact: 'Get in touch',
  },
  hero: {
    role: 'Full Stack Engineer & Technology Partner',
    lead: 'I design and build web applications end to end — from product idea to architecture, development and deployment. {software}+ years in software, {total}+ years as an engineer.',
    getInTouch: 'Get in touch',
    viewExperience: 'View experience',
    downloadCv: 'Download CV',
    currently: 'Currently',
    currentRole: 'Technology Partner · SustraiLab',
    photoAlt: 'Portrait of Violeta Calvo',
  },
  quote: {
    text: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
    author: 'Pablo Picasso',
  },
  about: {
    eyebrow: 'About me',
    heading: 'What I can learn matters more than what I already know.',
    paragraphs: [
      "I've been an engineer for more than {total} years, and a software engineer for more than {software}. I started in industry — wind turbines, bike-sharing systems, IoT — and moved into software in 2015. Since then I've built full-stack applications and taken part in every phase of development, as Full Stack Engineer, Backend Engineer and Tech Lead.",
      "Today I'm a Technology Partner at SustraiLab, where I turn ideas into products end to end. I do my best work remotely, in small, empowered teams where I can see the impact of what I build, exchange ideas with my colleagues and grow together.",
      'I value flexibility and asynchronous communication: they let me fit my work around my life while protecting the focus time I need to do my best work. And I believe that with a strong written culture, a remote team can stay async and still be close enough to help each other grow.',
    ],
    values: [
      { title: 'Remote & async', text: 'Flexible hours that fit my life, with protected focus time.' },
      { title: 'Small, empowered teams', text: 'Startups where I can see the impact of my work.' },
      { title: 'Written culture', text: 'Key to staying async while still exchanging enough.' },
      { title: 'Grow together', text: 'Exchanging ideas and feedback to help each other grow.' },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    heading: 'Building software since 2015',
    present: 'Present',
    current: 'Current',
    careerBreak: 'Career break',
    breaks: { health: 'Health & well-being', family: 'Family time' },
    duration: (m) => {
      const y = Math.floor(m / 12);
      const r = m % 12;
      if (y === 0) return plural(r, 'month', 'months');
      const years = `${y} ${y === 1 ? 'yr' : 'yrs'}`;
      return r ? `${years} ${r} ${r === 1 ? 'mo' : 'mos'}` : years;
    },
    jobs: {
      sustrailab: {
        role: 'Technology Partner',
        intro:
          'I turn product ideas into working digital products, covering product strategy, architecture, development and deployment. I build modern web applications and SaaS products with a strong focus on simplicity, automation and AI-assisted workflows.',
        bullets: [],
        tags: ['Product strategy', 'Architecture', 'SaaS', 'Automation', 'AI-assisted workflows'],
      },
      hiboo: {
        role: 'Senior Full Stack Engineer',
        intro: 'I joined an experienced team with a flat hierarchy, where everyone had a lot of autonomy and responsibility.',
        bullets: [
          'Backend migrated to a ports and adapters (hexagonal) architecture.',
          "Custom agile methodology inspired by Shape Up, Scrum and Marty Cagan's ideas.",
          'The Tech Lead role in the product trio rotated between us.',
        ],
      },
      greenly: {
        role: 'Tech Lead · Full Stack Engineer',
        intro:
          'Tech lead from August 2022. I was glad to coach the team to grow and to help find solutions at a higher level than I had before.',
        bullets: [
          'Coached the team through 1:1s, technical feedback in PR reviews and technical solution design.',
          'Developed and improved features and fixed bugs using best practices and clean code.',
          'Built our own work methodology, inspired by Scrum and Shape Up, to fit our needs.',
        ],
      },
      flitdesk: {
        role: 'Backend Engineer',
        intro:
          'I was glad to learn from my colleagues by exchanging, giving and receiving feedback, and taking decisions to migrate to a more modern stack and cleaner code.',
        bullets: [
          "Migrated legacy code to a more modern framework and a distributed architecture that fit our customers' needs.",
          'Developed new features and services and fixed bugs as part of the backend team.',
          'Switched our management from Scrum to a custom Shape Up in early 2021.',
        ],
      },
      brozerly: {
        role: 'R&D Full Stack Engineer → Lead Full Stack Engineer',
        intro:
          'The only full-time developer for the first 10 months, then the only developer and web engineer in the company, working hand in hand with the CEO.',
        bullets: [
          "Took the CTO's prototype to a production PWA with Meteor, and built and published the Android and iOS apps with Cordova.",
          'Designed and built the back office, including advanced Stripe payments and refunds.',
          'Also handled graphic design, translations (FR/EN/ES), video animations and social media marketing.',
        ],
      },
    },
  },
  roots: {
    eyebrow: 'Roots · 2004 — 2014',
    heading: 'Ten years of industrial engineering came first',
    text: 'From wind turbines to bike-sharing locks and IoT: the engineering years before software.',
    items: {
      ulma: {
        role: 'IoT Embedded Systems Engineer (intern)',
        text: 'IoT application to control and monitor industrial washing machines remotely, device and desktop side, for my MSc final project.',
      },
      hoff: {
        role: '3D Engineer (intern)',
        text: 'A 3D marketing animation and 3D molds for wooden skateboards, working in French.',
      },
      bonopark: {
        role: 'Design and Development Engineer',
        text: "Designed the bike-to-dock lock for San Sebastián's bike-sharing system. My VBA tools for SolidWorks cut 2D plan production from a day to about an hour.",
      },
      gamesa: {
        role: 'Control Software Support Engineer',
        text: 'Co-designed the first auto-diagnosis algorithm for wind turbines, and analysed control software errors.',
      },
      schneider: {
        role: 'Continuous Improvement Process Engineer',
        text: 'Led 5S, Lean Manufacturing and 6 Sigma projects. My VBA tools saved each manager 2 hours a week.',
      },
    },
  },
  education: {
    eyebrow: 'Education',
    heading: 'Four engineering degrees',
    items: [
      { years: '2013 — 2014', title: 'MSc in Engineering in Embedded Systems', school: 'Euskal Herriko Unibertsitatea', award: 'Best Student Award' },
      { years: '2009 — 2016', title: '(BSc) Telecommunications Technical Engineer — Sound & Image', school: 'Universidad Pública de Navarra' },
      { years: '1999 — 2003', title: '(BSc) Industrial Technical Engineer — Electrical', school: 'Universidad Pública de Navarra', award: 'Final Project with Honors' },
      { years: '2014 — 2015', title: '(BSc) Electrical Engineering Degree', school: 'Universidad de León', note: 'New university degree after a change in the law.' },
    ],
  },
  beyond: {
    eyebrow: 'A little more about me',
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B2 · TOEIC 900' },
      { name: 'French', level: 'B2 · Professional' },
      { name: 'Basque', level: 'B1' },
    ],
    activeTitle: 'Staying active',
    activeText:
      "When I'm not creating software, staying active is a priority. It keeps me healthy, focused and energized for my son and my work.",
    active: ['Pole dance & acrobatics', 'Scuba diving'],
    communityTitle: 'Education & community',
    communityText:
      "Education and community matter a lot to me. I've been a homeschooling mom, and my son now goes to an alternative school with a Montessori approach. What I value most is an education that respects each child's rhythms and helps them listen to themselves, resolve conflicts and collaborate. I also take part in projects with other families.",
    enjoyTitle: 'I also enjoy',
    enjoy: [
      'Playing with my son',
      'Learning something new',
      'Enjoying nature',
      'Watercolors & lettering',
      'Singing & guitar',
      'Sewing & knitting, now and then',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's talk.",
    text: "Have a product idea, a project, or just want to exchange ideas? I'd love to hear from you.",
  },
  cv: {
    title: 'Violeta Calvo — CV',
    role: 'Full Stack Engineer & Technology Partner',
    profile:
      'Engineer with {total}+ years of experience, {software}+ in software. I design and build web applications end to end, from product idea to architecture, development and deployment. Former Tech Lead; I do my best work in small, empowered remote teams.',
    contact: 'Contact',
    skills: 'Skills',
    skillList: [
      'TypeScript · JavaScript',
      'Node.js · NestJS · Express',
      'React · Next.js',
      'PostgreSQL · MongoDB',
      'GraphQL · REST',
      'AWS · GCP · Heroku',
      'Hexagonal architecture',
      'Shape Up · Agile',
      'Tech leadership & coaching',
    ],
    languages: 'Languages',
    education: 'Education',
    educationItems: [
      { title: 'MSc in Embedded Systems Engineering', meta: 'UPV/EHU · 2014', award: 'Best Student Award' },
      { title: 'BSc in Electrical Engineering', meta: 'Universidad de León · 2015' },
      { title: 'BSc in Telecommunications Engineering, Sound & Image', meta: 'UPNA · 2016' },
      { title: 'BSc in Industrial Engineering, Electrical', meta: 'UPNA · 2003', award: 'Final project with honors' },
    ],
    experience: 'Experience',
    jobs: {
      sustrailab:
        'Turning product ideas into web apps and SaaS products end to end, with a focus on simplicity, automation and AI-assisted workflows.',
      hiboo:
        'Backend migration to a hexagonal architecture; rotating Tech Lead role in the product trio. TypeScript, Node.js, React, PostgreSQL, GraphQL.',
      greenly: 'Tech Lead from August 2022: 1:1s, PR reviews and technical design. Node.js, React, PostgreSQL, AWS.',
      flitdesk:
        'Migrated legacy code to a modern distributed architecture and moved the team to Shape Up. NestJS, GraphQL, MongoDB, GCP.',
      brozerly: 'Sole developer: PWA and iOS/Android apps with Meteor, and a back office with Stripe payments.',
    },
    earlierTitle: 'Engineering before software · 2004 – 2014',
    earlier: [
      { company: 'Bonopark', role: 'Design & Development Engineer', years: '2011 – 2013' },
      { company: 'Matis Hispania for Gamesa', role: 'Control Software Support Engineer', years: '2007 – 2009' },
      { company: 'Schneider Electric', role: 'Continuous Improvement Engineer', years: '2004 – 2007' },
      { company: 'Internships', role: 'ULMA Embedded Solutions · HOFF distribution', years: '2014' },
    ],
    beyondTitle: 'Beyond work',
    beyond:
      'Pole dance & acrobatics, scuba diving, watercolors and guitar. Involved in education and community projects with other families.',
  },
  notFound: {
    title: 'Page not found · Violeta Calvo',
    heading: 'This page doesn’t exist',
    text: 'The link may be old or mistyped.',
    toHome: 'Taking you to the home page in {n} seconds.',
    toBack: 'Taking you back to the previous page in {n} seconds.',
    goHome: 'Go home',
    goBack: 'Go back',
  },
};
