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

interface SideProject {
  name: string
  link: string
  description: string
}

interface Resume {
  employment: { label: string; datas: Employment[] }
  education: { label: string; datas: Education }
  skills: { label: string; datas: Skill[] }
  sideprojects: { label: string; datas: SideProject[] }
  pdfLink: string
}

export const resume: Resume = {
  employment: {
    label: 'EMPLOYMENT',
    datas: [
      {
        company: 'ZzzTech',
        companyZh: '力力力科技',
        link: '',
        position: 'Freelance Software Engineer',
        date: 'Jun 2025 - Present',
        tasks: [
          {
            title: '',
            descriptions: [
              'Collaborated wioth a freelance studio, delivering contract projects for clients.',
              'Architected and delivered full-lifecycle projects for clients, including a golf course operations portal, restaurant POS system, and hotel booking system.',
            ],
          },
        ],
      },
      {
        company: 'Simpos',
        companyZh: '簡結科技',
        link: 'https://www.simpos.com.tw',
        position: 'Sr. Software Engineer',
        date: 'Oct 2021 - May 2025',
        tasks: [
          {
            title: 'POS system',
            descriptions: [
              'Built a POS system with remote peripheral device management.',
              'Architected a third-party integration platform with concurrency control and retry infrastructure.',
              'Built an AI-powered customer service assistant, reducing team training time by 30%.',
              'Established a testing framework to improve development efficiency and POS system stability.',
            ],
          },
          {
            title: 'Shopee Smart Pickup Station',
            descriptions: [
              'Delivered the backend for the Smart Pickup Station system.',
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
              'Developed middleware services with Node.js, Express, and MongoDB.',
              'Deployed microservices on AWS (Lambda, SES, SQS, S3, API Gateway).',
              'Authored RESTful API specifications and implementation documentation.',
            ],
          },
        ],
      },
      {
        company: 'Outo ',
        companyZh: '探玩科技股份有限公司',
        link: 'https://www.outo.co/',
        position: 'Software Engineer',
        date: 'Jan 2021 - Mar 2021',
        tasks: [
          {
            title: 'Outo outdoor activity platform',
            descriptions: [
              'Built the Outo web backend with TypeScript, Express, and MySQL.',
              'Provisioned server infrastructure on AWS (EC2, VPC, RDS).',
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
              'Shipped the production line management system with Node.js and Vue.js.',
              'Drove timeline analysis and technical evaluations; introduced new technologies and mentored junior engineers.',
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
            title: '',
            descriptions: [
              'Jukebox Administration Website: Built the frontend with React.js and GraphQL.',
              'Developed a CNC web HMI with React.js.',
              'Maintained motion controller algorithms in Rust.',
              'Engineered an IoT data collection system for peripheral sensors with Node.js, Modbus, and ARM-based hardware.',
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
          content: 'Refine the experimental UGV platform with a Linux-based system (Raspberry Pi).',
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
        items: ['TypeScript/JavaScript', 'Go', 'Python', 'Rust'],
      },
      {
        type: 'Technologies',

        items: [
          'Nest.js/Node.js/Gin',
          'React.js/Vue.js/Electron',
          'MongoDB/PostgreSQL/Redis',
          'RESTful API/WebSocket',
        ],
      },
      {
        type: 'Dev. Tools',
        items: ['Docker/k8s', 'GCP/AWS', 'Jest', 'ELK'],
      },
    ],
  },

  sideprojects: {
    label: 'SIDE PROJECT',
    datas: [
      {
        name: 'Subtitle',
        link: 'https://github.com/alvisLu/Subtitle',
        description:
          'Real-time Voice Translation Desktop App. Built with Electron, React, and TypeScript. Captures mic and system audio, transcribes locally with Whisper, and delivers real-time translation via DeepL.',
      },
    ],
  },

  pdfLink: 'https://drive.google.com/file/d/19CRW9iyKGltRNMslHVY-AXcARbuhFoLI/view?usp=sharing',
}
