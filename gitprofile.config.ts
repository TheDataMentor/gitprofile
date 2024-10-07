// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TheDataMentor', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['TheDataMentor/1','TheDataMentor/DataCurriculum','TheDataMentor/codesnippets','TheDataMentor/RegressionAssumptions','TheDataMentor/TheDataMentor','TheDataMentor/testing_ethan', 'TheDataMentor/TheDataMentor_old.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['TheDataMentor/gitprofile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Sweat Equity Homes',
          description:
            'This is a passion project that shifts the focus of home buying focus more on sweat equity than move in ready homes. Sweat Equity Homes is a real estate web application designed to help users discover the potential value in upgrading properties. By utilizing machine learning predictions, the platform estimates the possible increase in property value through renovations and improvements.
            
            Features
            Display detailed property information, including price, square footage, and location.
            Predict potential sweat equity based on property details using machine learning models.
            Suggest renovation projects with estimated costs and returns on investment (ROI).
            Visualize property location and surrounding amenities with interactive maps.
            View historical and future predictions of property values.
            Technologies Used
            Flask: As a web framework for the backend.
            Flask-SQLAlchemy: To handle database operations.
            scikit-learn, numpy, pandas: For machine learning model implementation and data manipulation.
            APScheduler: For scheduling tasks like updating property data.
            Leaflet.js: For map rendering and geographic visualization.
            HTML/CSS: For frontend design and layout.
        ',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Brandon T. Jackson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'datajackson',
    twitter: 'datajackson',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.datajackson.com',
    phone: '',
    email: 'brandon@datajackson.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1Gd9HSt4_nlKmXPhb9_rcNwEZq63PhZxBb3dmg9tyYWs/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Python',
    'R',
    'Tableau',
    'Snowflake',
  ],
  experiences: [
    {
      company: 'JP Morgan Chase',
      position: 'VP, Data Products & Delivery',
      from: 'March 2023',
      to: 'Present',
      //companyLink: 'https://chase.com',
    },
    {
      company: 'Streamlytics',
      position: 'Director, Strategy',
      from: 'April 2021',
      to: 'March 2023',
      //companyLink: 'lin',
    },
     {
      company: 'Revionics',
      position: 'Manager, Data Science',
      from: 'March 2015',
      to: 'Dec 2022',
      //companyLink: 'https://chase.com',
    },
      {
      company: 'Coyote Logistics',
      position: 'Data Science',
      from: 'March 2013',
      to: 'Dec 2015',
      //companyLink: 'https://chase.com',
    },
      {
      company: 'FedEx Ground',
      position: 'Operations Manager',
      from: 'Jan 2010',
      to: 'Dec 2013',
      //companyLink: 'https://chase.com',
    },
  ],
  certifications: [
    {
      name: 'Data Strategy: Leveraging Data as a Competitive Advantage',
      instituation: 'UC Berkely Executive Education',
      year: 'April 2022',
      link: 'https://certificates.emeritus.org/35ee6921-f491-4e05-bcbc-49e6c54af8bf#gs.gd2bk2',
    },
  ],
  educations: [
    {
      institution: 'The University of Texas at Austin',
      school: 'McCombs School of Business', 
      degree: 'BA, Supply Chain Management',
      from: '2006',
      to: '2010',
    },
    {
      institution: 'Northwestern University',
      degree: 'MS, Predictive Analytics',
      from: '2013',
      to: '2015',
    },
  ],
 /*
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  */
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  enablePWA: true,
};

export default CONFIG;
