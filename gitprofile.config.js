// gitprofile.config.js

const config = {
  github: {
    username: 'AndrePhilot', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['Fruit_Search', 'Memory_Game'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'andre-philot',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'andre.philot',
    telegram: '',
    website: '',
    phone: '',
    email: 'andrephilot@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1l-7lxKKdGVd8efLl-pldsWLRY_0zrwUX/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Python',
    'React.js',
    'Flask',
    'MySQL',
    'Git',
    'HTML5',
    'CSS',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Springboard',
      position: 'Trainee',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.springboard.com',
    },
    {
      company: 'International Schools in Brazil, Egypt, Italy, Myanmar and Guatemala',
      position: 'High School Teacher',
      from: '2010',
      to: 'Present',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Springboard',
      degree: 'Software Engineering Certification',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Metropolitan University',
      degree: 'Graduate in Economics',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Rio State University',
      degree: 'MA in Modern and Contemporary Philosophy',
      from: '2013',
      to: '2015',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Hack or Snooze',
      description:
        'In this project, users have the ability to create a personalized account by setting up a username and can log in or log out as needed. They can add or remove stories from the forum feed, giving them control over the content they see. Additionally, users can manage their favorite stories by adding or deleting them. There`s also a dedicated section where users can easily view all the stories they have created. The project is built with JavaScript ES6, incorporating AJAX requests to the Hacker News API via axios. It features responsive design and follows a separation of concerns architecture.',
      imageUrl: 'https://i.ytimg.com/vi/S-ulm49hvmk/maxresdefault.jpg',
      link: 'https://andrephilot.github.io/Hacker_Or_Snooze/',
    },
    {
      title: 'GIF Searcher',
      description:
        'The goal was to communicate with an API using AJAX and display random GIFs based on any keyword searched by a user.',
      imageUrl: 'https://cdn.vox-cdn.com/thumbor/0mqD9EvEmDetvwWyxp18WLvIk7o=/0x0:420x314/1400x788/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif',
      link: 'https://andrephilot.github.io/GIF_Searcher/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-GREBQHGJZF', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
