import type { BreakId, EarlierId, JobId, ProjectId } from '../data/cv';

// `{software}` and `{total}` are replaced with the years of experience.
export interface Content {
  meta: { title: string; description: string };
  a11y: { skip: string; openMenu: string; closeMenu: string; language: string; mainNav: string; newTab: string };
  nav: {
    tagline: string;
    about: string;
    experience: string;
    work: string;
    roots: string;
    education: string;
    beyond: string;
    contact: string;
  };
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
    jobs: Record<JobId, { role: string; intro: string; bullets: string[]; tags?: string[]; extraTags?: string[]; aiNote?: { text: string; link: string } }>;
  };
  ai: {
    eyebrow: string;
    heading: string;
    text: string;
    steps: { title: string; text: string }[];
    problem: { label: string; text: string };
    solution: { label: string; text: string };
    result: { label: string; text: string };
    stackLabel: string;
    stack: string[];
  };
  work: { meta: { title: string; description: string }; eyebrow: string; heading: string; seeAll: string; patentText: string; caseStudy: string; backHome: string };
  projects: {
    eyebrow: string;
    heading: string;
    text: string;
    backendLabel: string;
    items: Record<ProjectId, { client: string; summary: string; text: string; backend: string; imageAlt: string }>;
  };
  video: { eyebrow: string; heading: string; text: string; play: string; watchOn: string };
  roots: {
    eyebrow: string;
    heading: string;
    text: string;
    items: Record<EarlierId, { role: string; text: string }>;
    patent: { label: string; title: string; url: string };
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
    projectsTitle: string;
    projects: Record<ProjectId, string>;
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
    work: 'Work',
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
      "I've been an engineer for more than {total} years, and a software engineer for more than {software}. I started in industry — wind turbines, bike-sharing systems, IoT, and a patent along the way — and moved into software in 2015. Since then I've built full-stack applications and taken part in every phase of development, as Full Stack Engineer, Backend Engineer and Tech Lead.",
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
    heading: 'Building products since 2015',
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
        aiNote: {
          text: 'Built an async agent loop that removes the manual relay between my coding sessions and my partner.',
          link: 'Async Partner Loop ↓',
        },
      },
      hiboo: {
        role: 'Senior Full Stack Engineer',
        extraTags: ['Hexagonal architecture'],
        intro: 'I joined an experienced team with a flat hierarchy, where everyone had a lot of autonomy and responsibility.',
        bullets: [
          'Backend migrated to a ports and adapters (hexagonal) architecture.',
          "Custom agile methodology inspired by Shape Up, Scrum and Marty Cagan's ideas.",
          'The Tech Lead role in the product trio rotated between us.',
        ],
      },
      greenly: {
        role: 'Tech Lead · Full Stack Engineer',
        extraTags: ['Architecture'],
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
        extraTags: ['Architecture'],
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
  ai: {
    eyebrow: 'AI & Automation',
    heading: 'Async Partner Loop',
    text: 'A question-and-answer loop between my coding sessions and my business partner, with no manual relay.',
    steps: [
      { title: 'Ask', text: 'Each coding session adds questions to a shared page.' },
      { title: 'Answer', text: 'My partner replies when she can, from her phone or by voice.' },
      { title: 'Notify', text: 'One tap on "notify" and I get the answers.' },
      { title: 'Act', text: 'An hourly agent reads them and continues the work.' },
    ],
    problem: {
      label: 'Problem',
      text: 'I was the human relay: collecting questions from each coding session, sending them to my partner, gathering her answers and pasting them back to the AI.',
    },
    solution: {
      label: 'Solution',
      text: 'A shared web page on a real-time database. Questions arrive grouped by project and batch. Answers autosave as drafts and sync live. An hourly agent sends new questions, reads the answers and acts on them without my intervention.',
    },
    result: {
      label: 'Result',
      text: "My partner answers whenever she can, on her own schedule, and I'm notified with one tap, so I can stay in deep focus instead of context-switching. No manual relay, no chasing answers: the question, answer and action loop runs on its own. I automated it from day one, because relaying information by hand is a design smell, and an engineer should treat it like one.",
    },
    stackLabel: 'Stack',
    stack: ['Claude', 'Real-time database', 'Scheduled agent runs', 'Voice dictation'],
  },
  work: {
    meta: { title: 'Work · Violeta Calvo', description: 'Case studies and websites by Violeta Calvo: AI automation and sites made with Sustrai Studio.' },
    eyebrow: 'Work',
    heading: 'Some things I’ve built',
    seeAll: 'See all work',
    patentText: 'A granted patent, filed in 2012, from my time as Design and Development Engineer at Bonopark.',
    caseStudy: 'Case study',
    backHome: 'Back to home',
  },
  projects: {
    eyebrow: 'Projects',
    heading: 'Websites made with Sustrai Studio',
    text: 'Sustrai Studio is my own brand for websites for people and groups close to me, from the first idea to going live.',
    backendLabel: 'Backend',
    items: {
      zirkoloretsua: {
        client: 'Circus company',
        summary: 'A website with their shows and an agenda the company updates on its own.',
        text: 'A website in Spanish and Basque with their shows and an agenda of performances, which the company updates on its own from an admin area with sign-in by email code. Design by Jabugrafik.',
        backend: 'A small Cloudflare Worker with a D1 database for the agenda, and an admin area behind email-code sign-in (Cloudflare Access) where the company adds its own events.',
        imageAlt: 'Home page of the Zirkoloretsua website',
      },
      laluciernaga: {
        client: 'Mountain group',
        summary: 'The group’s hikes, photos and poems, moved from WordPress, with member sign-in.',
        text: 'The group’s website with its hikes, photos and poems, moved over from WordPress. Members sign in to see the details, and an administrator approves each new access.',
        backend: 'Cloudflare Workers with a D1 database and R2 file storage, sign-in with Better Auth, and an admin area to add hike entries. Photos are resized in the browser and capped at 1 MB on the server.',
        imageAlt: 'Home page of the La Luciérnaga website',
      },
    },
  },
  video: {
    eyebrow: 'Animation',
    heading: '3D marketing animation',
    text: 'Made during my internship at HOFF, in 2014.',
    play: 'Play the video',
    watchOn: 'Watch on YouTube',
  },
  roots: {
    eyebrow: 'Roots · 2004 — 2014',
    heading: 'Ten years of industrial engineering came first',
    text: 'From wind turbines to bike-sharing locks and IoT: the engineering years before software, including a granted patent.',
    items: {
      ulma: {
        role: 'IoT Embedded Systems Engineer (intern)',
        text: 'IoT application to control and monitor industrial washing machines remotely, device and desktop side, for my MSc final project.',
      },
      hoff: {
        role: '3D Engineer (intern)',
        text: 'Designed 3D molds for wooden skateboards and made a 3D marketing animation, working in French.',
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
    patent: { label: 'Co-inventor · Patent EP2955092', title: 'System for anchoring and recharging electric rental bicycles', url: 'https://patents.google.com/patent/EP2955092B1/en' },
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
    projectsTitle: 'Projects · Sustrai Studio',
    projects: {
      zirkoloretsua: 'Circus company website (ES/EU) with a self-managed agenda. Next.js, Cloudflare Workers, D1.',
      laluciernaga: 'Mountain group website moved from WordPress, with member sign-in. Astro, Cloudflare, Better Auth.',
    },
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
