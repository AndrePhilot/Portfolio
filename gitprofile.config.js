// gitprofile.config.js

const config = {
  github: {
    username: 'AndrePhilot', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['Redux_Mood', 'js-quirks', 'Frequency_Counters_and_Multiple_Pointers', 'Sorting_Exercise', 'Graph_Exercises', 'BST_Exercises', 'Ant-frontend', 'Ant-backend', 'lab-javascript-koans', 'CheeZJokes', 'dogfinder', 'color-factory', 'VendingMachine', 'Custom_Hooks', 'Trees_Exercise', 'React_Effects', 'Forms_Exercise', 'Lights_Out', 'React_Testing_Exercise', 'EightBall', 'react-jsx-intro', 'Jobly', 'Twitter-Clone', 'Connect-Four-Refactoring', 'Car-OO-Project', 'Memory-Game', 'Predictive-Text-Project', 'TODO-App', 'Fruit_Search', 'Memory_Game', 'GIF_Searcher', 'Jeopardy', 'AP_Macro_Graphing_Tool', 'Hacker_Or_Snooze', 'AP_Macro_Graphing_Tool', 'MacroeconMastery'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      'https://docs.google.com/document/d/1xgYHjdsN7lK9d4RyZkpEJl8srNlpYFPwWxu8dz2g9Cw/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Python',
    'TypeScript',
    'AWS',
    'SQL',
    'Postgres',
    'OOP',
    'React',
    'Redux',
    'Node.js',
    'Express',
    'Flask',
    'BigQuery',
    'Git',
    'Jest',
    'Jasmine',
    'unittest',
    'HTML',
    'CSS',
    'REST',
    'Gunicorn',
    'Spline',
    'Bootstrap'
  ],
  experiences: [
    {
      company: 'MacroeconMastery',
      position: 'Software Engineer',
      from: 'May 2024',
      to: 'Present',
      companyLink: 'https://www.macroeconmastery.com/',
    },
    {
      company: 'Springboard Bootcamp',
      position: 'Software Engineer',
      from: 'August 2023',
      to: 'July 2024',
      companyLink: 'https://www.springboard.com/courses/software-engineering-career-track/',
    },
    {
      company: 'International Schools in Brazil, Egypt, Italy, Myanmar and Guatemala',
      position: 'High School Humanities Teacher',
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
      institution: 'Springboard Bootcamp',
      degree: 'Software Engineering Certification',
      from: '2023',
      to: '2024',
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
      title: 'MacroeconMastery',
      description:
      "Technologies: BigQuery, Node.js, Python, Flask, AWS, JavaScript, HTML and CSS. MacroeconMastery redefines AP Macroeconomics preparation with a cutting-edge full-stack application that stands out as the sole provider of immersive free-response practice. Our platform utilizes advanced natural language understanding powered by Dialogflow API, enabling seamless interaction through our intuitive chatbot interface. Our database is powered by BigQuery, a Google Cloud Service. We also sell products for students and teachers by linking our page to the Stripe API. The application is hosted at a AWS Elastic Beanstalk server and a CI/CD AWS CodePipeline connected with GitHub.",
      imageUrl: 'https://i.ibb.co/SvbbF6d/Screenshot-2024-02-22-at-10-43-11-AM.png',
      link: 'https://macroeconmastery.com/',
    },
    {
      title: 'Nutjobs',
      description:
      "Technologies: React, Node.js, Express, PostgreSQL, JavaScript, JWT, JSON Schemas, OOP, Google Cloud Service, RESTful API, Bootstrap, Spline and Jest. Nutjobs is a full-stack job search platform offering intuitive filtering by title and salary. Secured with JSON Web Tokens (JWT) and JSON schemas for data integrity, Nutjobs ensures user privacy. Built with OOP principles for seamless CRUD operations, it's rigorously tested with Jest. The backend, a RESTful API on Express.js, connects to PostgreSQL on an Google Cloud Enterprise database for scalability. Frontend, powered by React. Nutjobs makes fun of the job hunting process, delivering a streamlined experience with advanced technology.",
      imageUrl: 'https://www.stockvault.net/data/2018/07/15/253106/preview16.jpg',
      link: 'https://nutjobs.onrender.com/',
    },
    {
      title: 'Hack or Snooze',
      description:
        'Technologies: JavaScript ES6, AJAX (axios), HTML5, CSS3. In this forum-like application inspired by the HackerNews website, users are encouraged to share technology articles that they find interesting. Users have the ability to create a personalized account by setting up a username and can log in or log out as needed. They can also add or remove stories from the forum feed, giving them control over the content they see. Additionally, users can manage their favorite stories by adding or deleting them. There`s also a dedicated section where users can easily view all the stories they have created. The project is built with JavaScript ES6 and incorporates AJAX requests to the Hacker News API via axios. It features responsive design and follows a separation of concerns architecture.',
      imageUrl: 'https://i.ytimg.com/vi/S-ulm49hvmk/maxresdefault.jpg',
      link: 'https://andrephilot.github.io/Hacker_Or_Snooze/',
    },
    {
      title: 'Jeopardy! Game',
      description:
        'Technologies: JavaScript, jQuery, AJAX, CSS and HTML to create a dynamic Jeopardy game. Implemented a 6x5 game board with randomly selected categories and questions from the jService API. Enabled users to reveal questions and answers with click interactions, replicating the Jeopardy TV show format and design. Integrated a ”Restart” button to fetch new categories and questions, enhancing replayability. Dynamically updated the game board with question texts, providing an interactive and engaging user experience. Demonstrated proficiency in handling asynchronous requests with AJAX for seamless data retrieval from the jService API.',
      imageUrl: 'https://media0.giphy.com/media/1vZaAcldbX8Xh6lMlV/giphy.gif',
      link: 'https://andrephilot.github.io/Jeopardy/',
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
    defaultTheme: 'procyon',

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
      primary: '#df3225',
      secondary: '#df3225',
      accent: '#fff200',
      neutral: '#d4c4a4',
      'base-100': '#1b2b3b',
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
