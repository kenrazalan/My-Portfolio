/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Kenneth Razalan',
  title: "Hi all, I'm Kenneth",
  subTitle: emoji(
    'An aspiring Web Developer who loves to build Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1F-kkXkNhFkqe-139sE0GFYNt-p0r2y_6/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/kenrazalan',
  // linkedin: 'https://www.linkedin.com/in/saadpasta/',
  gmail: 'kennethrazalan29@gmail.com',
  // gitlab: 'https://gitlab.com/saadpasta',
  facebook: 'https://web.facebook.com/kennethalerozarazalanz/',
  // medium: 'https://medium.com/@saadpasta',
  // stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Knowledgable in MERN Stack and other cool Technologies',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for web applications'
    ),
    emoji('⚡ Convert UI prototype into Front-end code')
    ,
    emoji('⚡ Backend Development using NodeJs')
    // emoji(
    //   '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    // ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "vscode-icons:file-type-html"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "vscode-icons:file-type-css"
  },
  // {
  //   skillName: "sass",
  //   fontAwesomeClassname: "logos:sass"
  // },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "vscode-icons:file-type-reactjs"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "logos:nodejs-icon"
  },
  {
    skillName: "redux",
    fontAwesomeClassname:"logos-redux" 
  },
  {
    skillName: "git",
    fontAwesomeClassname: "vscode-icons:file-type-git"
  },
  {
    skillName: "github",
    fontAwesomeClassname: "akar-icons:github-fill"
  },
  {
    skillName: "npm",
    fontAwesomeClassname: "vscode-icons:file-type-npm"
  },
  {
    skillName: "mongo-db",
    fontAwesomeClassname: "vscode-icons:file-type-mongo"
  },
  // {
  //   skillName: "aws",
  //   fontAwesomeClassname: "fab fa-aws"
  // },
  // {
  //   skillName: "firebase",
  //   fontAwesomeClassname:"vscode-icons:file-type-firebase" 
  // },
  {
    skillName: "styled-components",
    fontAwesomeClassname:"vscode-icons:file-type-styled" 
  },
  {
    skillName: "material-ui",
    fontAwesomeClassname:"logos:material-ui" 
  },
  {
    skillName: "postman",
    fontAwesomeClassname:"logos:postman"
  },
  {
    skillName: "adobe-xd",
    fontAwesomeClassname:"cib:adobe-xd" 
  },
  // {
  //   skillName: "shopify",
  //   fontAwesomeClassname:"logos:shopify" 
  // },

  // {
  //   skillName: "python",
  //   fontAwesomeClassname: "fab fa-python"
  // },
  // {
  //   skillName: "docker",
  //   fontAwesomeClassname: "fab fa-docker"
  // }
],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "STI College Balayan",
      logo: require("./assets/images/download.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2016 - 2020",
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   ]
    // }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Cyber Security Intern',
      company: 'ePLDT',
      companylogo: require('./assets/images/epldt.png'),
      date: 'January 2020 – March 2020',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Assigned in Security Operations Center(SOC) to monitor cyberthreats',
        'Performed training in Digital Forensics',
        'Configured GAiA Checkpoint Firewall'
      ],
    },
    {
      role: 'IT Support',
      company: 'Tabaqueria de Filipinas Inc.',
      companylogo: require('./assets/images/tdfi.png'),
      date: 'December 2020 – April 2021',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      descBullets: [
        'Performed troubleshooting technical issues',
        'Developed Payslip generator using Excel',
        'Effectively resolved network issues'
      ],
    },
    
    // {
    //   role: 'Software Engineer Intern',
    //   company: 'Airbnb',
    //   companylogo: require('./assets/images/airbnbLogo.png'),
    //   date: 'Jan 2015 – Sep 2015',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'kenrazalan', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

    achievementsCards: [
      {
        title: "Javascript  Algorithms and Data Structures FreeCodeCamp Certification ",
        subtitle: "Completed Javascript Algorithms and Data Structures Course in FreeCodeCamp.",
        image: require("./assets/images/fcc.png"),
        footerLink: [
          { name: "Certification", url: "https://drive.google.com/file/d/1FLRpXsI0LcEKC9pxt2alEnLMTOnnNS9w/view?usp=sharing" },
          // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
          // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
        ]
      },
      
      {
        title: "ReactJS Udemy Certification",
        subtitle: "Completed 39 hours of The Modern React Bootcamp by Colt Steele in Udemy",
        image: require("./assets/images/udemy.jpg"),
        footerLink: [ { name: "Certification", url: "https://drive.google.com/file/d/1F9h05jdOayHfrU7V6Qxw82P8XpDsgMFn/view?usp=sharing" }]
      },
      {
        title: "Git Udemy Certification",
        subtitle: "Completed 2.5 hours of Git Basics, Commits, code merges,Github Repositories",
        image: require("./assets/images/git.jpg"),
        footerLink: [ { name: "Certification", url: "https://drive.google.com/file/d/1XHYG-EWXJ6mKRqs5EZADzHjowJSYDufv/view?usp=sharing" }]
      },
      
      {
        title: "NodeJS course with Express, SocketIo and MongoDB",
        subtitle: "Completed 4.5 hours of NodeJS course with Express, SocketIo and MongoDB by Kim Chen in Udemy",
        image: require("./assets/images/node.jpg"),
        footerLink: [ { name: "Certification", url: "https://drive.google.com/file/d/17Ijqh4tmde5AZvbIFa0-uBKgJsFb9Mx5/view?usp=sharing" }]
      },
  
      {
        title: "Cyber Security Intern",
        subtitle: "Completed 382 hours of On-The-Job Training under CyberSec Group with ePLDT Inc.",
        image: require("./assets/images/cert.PNG"),
        footerLink: [
          { name: "Certification", url: "https://drive.google.com/file/d/1F8KsRu5Bt7DMJEbRec7QwPwmHe-vLUwf/view?usp=sharing" },
          
        ]
      }
    ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '09666473909',
  emailAddress: 'kennethrazalan29@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
