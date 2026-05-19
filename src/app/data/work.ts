export interface WorkEntry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  path: string;
  external?: boolean;
}

export const work: WorkEntry[] = [
  {
    slug: 'cozy-threads',
    title: 'Cozy Threads',
    tagline: 'demo e-commerce w/ Stripe checkout',
    description:
      'Full-stack e-commerce demo wired up to the Stripe API. React frontend, Node + Express backend, end-to-end checkout.',
    year: '2025',
    stack: ['React', 'Node', 'Stripe'],
    path: 'https://cozy-threads-app.onrender.com/',
    external: true,
  },
  {
    slug: 'whos-here',
    title: "Who's Here?",
    tagline: 'real-time button board over Socket.io',
    description:
      "A 900-button shared canvas updated in real time. Socket.io on Node + Express, Vite + React frontend. You're never sure who's clicking.",
    year: '2025',
    stack: ['React', 'Vite', 'Socket.io'],
    path: 'https://whos-here-app.onrender.com/',
    external: true,
  },
  {
    slug: 'athlete-charts',
    title: 'Athlete Charts',
    tagline: 'side-by-side athlete data viz w/ D3',
    description:
      'Pick two athletes from a public dataset and compare them across basic and charted views. D3 handles the rendering.',
    year: '2023',
    stack: ['React', 'D3', 'REST'],
    path: '/projects/athlete-charts',
  },
  {
    slug: 'finders-keepers',
    title: 'Finders Keepers',
    tagline: 'mouse-as-flashlight click game',
    description:
      'Your cursor lights a small area of a dark screen. Find and click the moving target as many times as you can.',
    year: '2023',
    stack: ['React', 'Canvas'],
    path: '/projects/finders-keepers',
  },
  {
    slug: 'sleeper-dynasty',
    title: 'Fantasy Football',
    tagline: 'sleeper API dashboard for my dynasty league',
    description:
      'Pulls roster and matchup data from the Sleeper API, surfacing weekly trends and league-level analytics.',
    year: '2024',
    stack: ['React', 'Redux Toolkit', 'RTK Query'],
    path: '/projects/sleeper-dynasty',
  },
  {
    slug: 'impossible-signup',
    title: 'Impossible Signup',
    tagline: 'a sign-up form that fights back',
    description:
      'Type your credentials and try to hit submit. The form has other plans.',
    year: '2024',
    stack: ['React', 'TypeScript'],
    path: '/projects/impossible-signup',
  },
  {
    slug: 'star-wars-intro',
    title: 'Star Wars Intro',
    tagline: 'write & launch your own opening crawl',
    description:
      'Enter your title and crawl text, then watch it scroll into a starfield. May the force be with you.',
    year: '2024',
    stack: ['React', 'CSS'],
    path: '/projects/star-wars-intro',
  },
  {
    slug: 'univend',
    title: 'Univend',
    tagline: 'campus vending prototype',
    description:
      'Mobile prototype for finding snack, drink, and water-fountain machines across a college campus. Filter by item, location, type.',
    year: '2020',
    stack: ['React', 'Prototype'],
    path: '/projects/univend',
  },
];

export const selectedWork: WorkEntry[] = work.slice(0, 5);
