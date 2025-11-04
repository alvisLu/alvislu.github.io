interface Employment {
  company: string
  companyZh: string
  link: string
  position: string
  date: string
  tasks: {
    title: string
    descriptions: string[]
  }[]
}
interface Education {
  school: string
  link: string
  degree: string
  date: string
  details: {
    content: string
    link: string
  }[]
}

interface Skill {
  type: string
  items: string[]
}

interface Resume {
  employment: { label: string; datas: Employment[] }
  education: { label: string; datas: Education }
  skills: { label: string; datas: Skill[] }
  pdfLink: string
}

export const resume: Resume = {
  employment: {
    label: 'EMPLOYMENT',
    datas: [
      {
        company: 'Simpos',
        companyZh: '簡結科技',
        link: 'https://www.simpos.com.tw',
        position: 'Sr. Software Engineer',
        date: 'Oct 2021 - May 2025',
        tasks: [
          {
            title: 'Web-based POS system',
            descriptions: [
              'Served as the primary developer responsible for designing and implementing the POS system (Web/Mobile).',
              'Designed and implemented remote control functionality for POS peripheral devices.',
              'Designed and implemented third-party system integrations.',
              'System Under Test: Analyze and implement the POS System test and improve test coverage.',
              'Researched and implemented an AI assistant using RAG.',
            ],
          },
          {
            title: 'Shopee Smart Pickup Station',
            descriptions: [
              'Designed and implemented the backend for the Smart Pickup Station system.',
              'Optimized a database with tens of millions of records, improving query efficiency by 70%+.',
            ],
          },
        ],
      },
      {
        company: 'Shopline Limited.',
        companyZh: '商線科技',
        link: 'https://shopline.tw',
        position: 'Sr. Software Engineer',
        date: 'May 2021 - Sep 2021',
        tasks: [
          {
            title: 'Middleware service between E-Commerce server and client',
            descriptions: [
              'Designed and implemented middleware services using Node.js, Express, and MongoDB.',
              'Build microservices with AWS (Lambda, SES, SQS, S3, API Gateway, etc.).',
              'Design RESTful API and build a document of the implementation plan.',
            ],
          },
        ],
      },
      {
        company: 'Outo ',
        companyZh: '探玩科技',
        link: 'https://www.outo.co/',
        position: 'Software Engineer',
        date: 'Jan 2021 - Mar 2021',
        tasks: [
          {
            title: 'Outo outdoor activity platform',
            descriptions: [
              'Designed and implemented the back-end server using TypeScript, Express, MySQL.',
              'Build servers with AWS (EC2 , VPC, RDS).',
            ],
          },
        ],
      },
      {
        company: 'PlayNitride Inc.',
        companyZh: '錼創顯示科技',
        link: 'https://www.playnitride.com/',
        position: 'Software Engineer',
        date: 'Feb 2020 - Nov 2020',
        tasks: [
          {
            title: 'Internal production line management system',
            descriptions: [
              'Designed and implemented the front-end production line management system using Vue.js.',
              'Responsible for timeline analysis, technical evaluations, introducing new technologies, and mentoring junior engineers.',
            ],
          },
        ],
      },
      {
        company: 'Mapacode Inc.',
        companyZh: '動程科技',
        link: 'https://www.facebook.com/mapacode/?locale=zh_TW',
        position: 'Software Engineer',
        date: 'Dec 2015 - Jan 2020',
        tasks: [
          {
            title: 'Jukebox Administration Website',
            descriptions: ['Designed and implemented back-end website using React.js, GraphQL.'],
          },
          {
            title: 'CNC(Computer Numerical Control):',
            descriptions: [
              'Designed and implemented a web HMI using React.js.',
              'Maintained and implemented motion controller and algorithm (Rust language).',
              'Integration of web HMI and motion controller.',
              'Maintained the web HMI (Yahoo Mojito framework) and motion controller of a CNC system over 5 years old.',
            ],
          },
          {
            title: 'IoT system integration',
            descriptions: [
              'Designed and implemented data collection of peripheral sensors using Node.js.',
              'Designed and implemented CNC monitoring with MTConnect protocol.',
              'Using Modbus protocol to fetch data from sensors on ARM-based.',
            ],
          },
        ],
      },
    ],
  },

  education: {
    label: 'EDUCATION',
    datas: {
      school: 'National Yunlin University of Sci. & Tech.',
      link: 'https://www.yuntech.edu.tw/',
      degree: 'Graduate Student',
      date: 'Jul 2013 - Aug 2015',
      details: [
        {
          content: 'Thesis: Intelligent Autonomous Vehicle with LiDAR Guidance',
          link: 'https://reurl.cc/j77NxD',
        },
        {
          content: 'Refine the experimenting UGV platform with Linux-based (Raspberry Pi).',
          link: 'https://reurl.cc/72V8x9',
        },
      ],
    },
  },

  skills: {
    label: 'SKILLS',
    datas: [
      {
        type: 'Programming Languages',
        items: ['TypeScript/JavaScript', 'Flutter', 'Rust'],
      },
      {
        type: 'Technologies',

        items: ['Node.js/Nest.js', 'React.js/Vue.js', 'MongoDB/SQL/Redis', 'RESTful API/WebSocket'],
      },
      {
        type: 'Dev.Tools',
        items: ['Git', 'Docker', 'GCP/AWS', 'Vim/tmux'],
      },
    ],
  },
  pdfLink: 'https://drive.google.com/file/d/19CRW9iyKGltRNMslHVY-AXcARbuhFoLI/view?usp=sharing',
}
