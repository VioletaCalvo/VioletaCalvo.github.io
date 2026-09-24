import type { Content } from './en';

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

export const es: Content = {
  meta: {
    title: 'Violeta Calvo · Ingeniera Full Stack y Technology Partner',
    description:
      'Violeta Calvo diseña y desarrolla aplicaciones web de principio a fin, con más de {software} años en software y más de {total} como ingeniera.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    mainNav: 'Principal',
    newTab: 'se abre en una pestaña nueva',
  },
  nav: {
    tagline: 'Ingeniera Full Stack',
    about: 'Sobre mí',
    experience: 'Experiencia',
    roots: 'Raíces',
    education: 'Formación',
    beyond: 'Más allá del trabajo',
    contact: 'Contacto',
  },
  hero: {
    role: 'Ingeniera Full Stack y Technology Partner',
    lead: 'Diseño y desarrollo aplicaciones web de principio a fin: de la idea de producto a la arquitectura, el desarrollo y el despliegue. Más de {software} años en software y más de {total} como ingeniera.',
    getInTouch: 'Escríbeme',
    viewExperience: 'Ver experiencia',
    downloadCv: 'Descargar CV',
    currently: 'Actualmente',
    currentRole: 'Technology Partner · SustraiLab',
    photoAlt: 'Retrato de Violeta Calvo',
  },
  quote: {
    text: 'Siempre estoy haciendo lo que no sé hacer, para aprender a hacerlo.',
    author: 'Pablo Picasso',
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'Lo que puedo aprender importa más que lo que ya sé.',
    paragraphs: [
      'Llevo más de {total} años como ingeniera y más de {software} como ingeniera de software. Empecé en la industria —aerogeneradores, bicicleta pública, IoT— y en 2015 me pasé al software. Desde entonces he creado aplicaciones full stack y he participado en todas las fases del desarrollo, como Full Stack Engineer, Backend Engineer y Tech Lead.',
      'Hoy soy Technology Partner en SustraiLab, donde convierto ideas en productos de principio a fin. Trabajo mejor en remoto, en equipos pequeños y con autonomía, donde puedo ver el impacto de lo que construyo, intercambiar ideas con mis compañeros y crecer juntos.',
      'Valoro la flexibilidad y la comunicación asíncrona: me permiten adaptar el trabajo a mi vida y proteger el tiempo de concentración que necesito para dar lo mejor de mí. Y creo que, con una buena cultura escrita, un equipo en remoto puede ser asíncrono y a la vez estar lo bastante cerca como para ayudarse a crecer.',
    ],
    values: [
      { title: 'Remoto y asíncrono', text: 'Horarios flexibles que encajan con mi vida, con tiempo de concentración protegido.' },
      { title: 'Equipos pequeños y con autonomía', text: 'Startups donde puedo ver el impacto de mi trabajo.' },
      { title: 'Cultura escrita', text: 'Clave para trabajar en asíncrono sin dejar de intercambiar.' },
      { title: 'Crecer juntos', text: 'Compartir ideas y feedback para ayudarnos a crecer.' },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    heading: 'Creando software desde 2015',
    present: 'Actualidad',
    current: 'Actual',
    careerBreak: 'Pausa profesional',
    breaks: { health: 'Salud y bienestar', family: 'Tiempo en familia' },
    duration: (m) => {
      const y = Math.floor(m / 12);
      const r = m % 12;
      if (y === 0) return plural(r, 'mes', 'meses');
      const years = plural(y, 'año', 'años');
      return r ? `${years} ${plural(r, 'mes', 'meses')}` : years;
    },
    jobs: {
      sustrailab: {
        role: 'Technology Partner',
        intro:
          'Convierto ideas de producto en productos digitales que funcionan, cubriendo estrategia de producto, arquitectura, desarrollo y despliegue. Creo aplicaciones web modernas y productos SaaS con un fuerte foco en la simplicidad, la automatización y los flujos de trabajo con IA.',
        bullets: [],
        tags: ['Estrategia de producto', 'Arquitectura', 'SaaS', 'Automatización', 'Flujos de trabajo con IA'],
      },
      hiboo: {
        role: 'Senior Full Stack Engineer',
        intro: 'Me uní a un equipo con experiencia y una jerarquía horizontal, donde todos teníamos mucha autonomía y responsabilidad.',
        bullets: [
          'Migramos el backend a una arquitectura hexagonal (puertos y adaptadores).',
          'Metodología ágil propia, inspirada en Shape Up, Scrum y las ideas de Marty Cagan.',
          'El rol de Tech Lead en el trío de producto era rotativo entre nosotros.',
        ],
      },
      greenly: {
        role: 'Tech Lead · Full Stack Engineer',
        intro:
          'Tech Lead desde agosto de 2022. Me alegró acompañar al equipo en su crecimiento y ayudar a encontrar soluciones a un nivel más alto que antes.',
        bullets: [
          'Acompañé al equipo con 1:1, feedback técnico en las revisiones de PR y el diseño de las soluciones técnicas.',
          'Desarrollé y mejoré funcionalidades y corregí errores con buenas prácticas y código limpio.',
          'Creamos nuestra propia metodología de trabajo, inspirada en Scrum y Shape Up.',
        ],
      },
      flitdesk: {
        role: 'Backend Engineer',
        intro:
          'Aprendí mucho de mis compañeros intercambiando, dando y recibiendo feedback, y decidiendo juntos migrar a un stack más moderno y a un código más limpio.',
        bullets: [
          'Migramos código legacy a un framework más moderno y a una arquitectura distribuida adaptada a nuestros clientes.',
          'Desarrollé nuevas funcionalidades y servicios y corregí errores como parte del equipo de backend.',
          'A principios de 2021 pasamos de Scrum a un Shape Up adaptado.',
        ],
      },
      brozerly: {
        role: 'R&D Full Stack Engineer → Lead Full Stack Engineer',
        intro:
          'Fui la única desarrolladora a tiempo completo durante los primeros 10 meses, y después la única desarrolladora e ingeniera web de la empresa, trabajando mano a mano con el CEO.',
        bullets: [
          'Llevé el prototipo del CTO a una PWA en producción con Meteor, y creé y publiqué las apps de Android e iOS con Cordova.',
          'Diseñé y desarrollé el back office, con pagos avanzados y reembolsos en Stripe.',
          'También me encargué del diseño gráfico, las traducciones (FR/EN/ES), animaciones de vídeo y marketing en redes sociales.',
        ],
      },
    },
  },
  roots: {
    eyebrow: 'Raíces · 2004 — 2014',
    heading: 'Antes, diez años de ingeniería industrial',
    text: 'De los aerogeneradores a los anclajes de bicicletas y el IoT: los años de ingeniería antes del software.',
    items: {
      ulma: {
        role: 'Ingeniera de sistemas embebidos IoT (prácticas)',
        text: 'Aplicación IoT para controlar y monitorizar lavadoras industriales en remoto, en el dispositivo y en escritorio, para mi proyecto de máster.',
      },
      hoff: {
        role: 'Ingeniera 3D (prácticas)',
        text: 'Una animación 3D de marketing y moldes 3D para skateboards de madera, trabajando en francés.',
      },
      bonopark: {
        role: 'Ingeniera de diseño y desarrollo',
        text: 'Diseñé el anclaje entre la bicicleta y la base del sistema de bicicleta pública de San Sebastián. Mis herramientas VBA para SolidWorks redujeron la creación de planos 2D de un día a una hora.',
      },
      gamesa: {
        role: 'Ingeniera de soporte de software de control',
        text: 'Codiseñé el primer algoritmo de autodiagnóstico para aerogeneradores y analicé errores del software de control.',
      },
      schneider: {
        role: 'Ingeniera de procesos de mejora continua',
        text: 'Lideré proyectos de 5S, Lean Manufacturing y 6 Sigma. Mis herramientas VBA ahorraban 2 horas a la semana a cada responsable.',
      },
    },
  },
  education: {
    eyebrow: 'Formación',
    heading: 'Cuatro titulaciones de ingeniería',
    items: [
      { years: '2013 — 2014', title: 'Máster en Ingeniería de Sistemas Embebidos', school: 'Euskal Herriko Unibertsitatea', award: 'Premio a la mejor estudiante' },
      { years: '2009 — 2016', title: 'Ingeniería Técnica de Telecomunicación — Sonido e Imagen', school: 'Universidad Pública de Navarra' },
      { years: '1999 — 2003', title: 'Ingeniería Técnica Industrial — Electricidad', school: 'Universidad Pública de Navarra', award: 'Proyecto fin de carrera con matrícula de honor' },
      { years: '2014 — 2015', title: 'Grado en Ingeniería Eléctrica', school: 'Universidad de León', note: 'Nuevo grado universitario tras un cambio en la ley.' },
    ],
  },
  beyond: {
    eyebrow: 'Un poco más sobre mí',
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Castellano', level: 'Nativo' },
      { name: 'Inglés', level: 'B2 · TOEIC 900' },
      { name: 'Francés', level: 'B2 · Profesional' },
      { name: 'Euskera', level: 'B1' },
    ],
    activeTitle: 'Mantenerme activa',
    activeText:
      'Cuando no estoy creando software, mantenerme activa es una prioridad. Me mantiene sana, centrada y con energía para mi hijo y para mi trabajo.',
    active: ['Pole dance y acrobacias', 'Buceo'],
    communityTitle: 'Educación y comunidad',
    communityText:
      'La educación y la comunidad me importan mucho. He sido madre homeschooler y ahora mi hijo va a una escuela alternativa con enfoque Montessori. Lo que más valoro es una educación que respete los ritmos de cada niño y le ayude a escucharse, resolver conflictos y colaborar. También participo en proyectos con otras familias.',
    enjoyTitle: 'También disfruto',
    enjoy: [
      'Jugar con mi hijo',
      'Aprender algo nuevo',
      'Disfrutar de la naturaleza',
      'Acuarela y lettering',
      'Cantar y tocar la guitarra',
      'Coser y tejer, de vez en cuando',
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    heading: 'Hablemos.',
    text: '¿Tienes una idea de producto, un proyecto o simplemente quieres intercambiar ideas? Me encantará saber de ti.',
  },
  cv: {
    title: 'Violeta Calvo — CV',
    role: 'Ingeniera Full Stack y Technology Partner',
    profile:
      'Ingeniera con más de {total} años de experiencia, más de {software} en software. Diseño y desarrollo aplicaciones web de principio a fin: de la idea de producto a la arquitectura, el desarrollo y el despliegue. He sido Tech Lead y trabajo mejor en equipos remotos pequeños y con autonomía.',
    contact: 'Contacto',
    skills: 'Competencias',
    skillList: [
      'TypeScript · JavaScript',
      'Node.js · NestJS · Express',
      'React · Next.js',
      'PostgreSQL · MongoDB',
      'GraphQL · REST',
      'AWS · GCP · Heroku',
      'Arquitectura hexagonal',
      'Shape Up · Agile',
      'Liderazgo técnico y mentoría',
    ],
    languages: 'Idiomas',
    education: 'Formación',
    educationItems: [
      { title: 'Máster en Ingeniería de Sistemas Embebidos', meta: 'UPV/EHU · 2014', award: 'Premio a la mejor estudiante' },
      { title: 'Grado en Ingeniería Eléctrica', meta: 'Universidad de León · 2015' },
      { title: 'Ingeniería Técnica de Telecomunicación, Sonido e Imagen', meta: 'UPNA · 2016' },
      { title: 'Ingeniería Técnica Industrial, Electricidad', meta: 'UPNA · 2003', award: 'Proyecto fin de carrera con matrícula de honor' },
    ],
    experience: 'Experiencia',
    jobs: {
      sustrailab:
        'Convierto ideas de producto en aplicaciones web y SaaS de principio a fin, con foco en la simplicidad, la automatización y los flujos de trabajo con IA.',
      hiboo:
        'Migración del backend a arquitectura hexagonal; rol rotativo de Tech Lead en el trío de producto. TypeScript, Node.js, React, PostgreSQL, GraphQL.',
      greenly: 'Tech Lead desde agosto de 2022: 1:1, revisión de PRs y diseño técnico. Node.js, React, PostgreSQL, AWS.',
      flitdesk:
        'Migración de código legacy a una arquitectura distribuida moderna y paso del equipo a Shape Up. NestJS, GraphQL, MongoDB, GCP.',
      brozerly: 'Única desarrolladora: PWA y apps iOS/Android con Meteor, y back office con pagos en Stripe.',
    },
    earlierTitle: 'Ingeniería antes del software · 2004 – 2014',
    earlier: [
      { company: 'Bonopark', role: 'Ingeniera de diseño y desarrollo', years: '2011 – 2013' },
      { company: 'Matis Hispania para Gamesa', role: 'Ingeniera de soporte de software de control', years: '2007 – 2009' },
      { company: 'Schneider Electric', role: 'Ingeniera de mejora continua', years: '2004 – 2007' },
      { company: 'Prácticas', role: 'ULMA Embedded Solutions · HOFF distribution', years: '2014' },
    ],
    beyondTitle: 'Fuera del trabajo',
    beyond:
      'Pole dance y acrobacias, buceo, acuarela y guitarra. Participo en proyectos de educación y comunidad con otras familias.',
  },
  notFound: {
    title: 'Página no encontrada · Violeta Calvo',
    heading: 'Esta página no existe',
    text: 'Puede que el enlace sea antiguo o esté mal escrito.',
    toHome: 'Te llevo a la página de inicio en {n} segundos.',
    toBack: 'Te llevo de vuelta a la página anterior en {n} segundos.',
    goHome: 'Ir al inicio',
    goBack: 'Volver',
  },
};
