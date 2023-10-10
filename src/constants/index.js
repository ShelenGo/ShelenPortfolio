import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    python,
    java,
    mysql,
    express,
    postman,
    selenium,
    jest,
    ResiCo,
    Sure,
    ML,
    threejs,
    root,
    orientation,
    investiture,
    designOdessey
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
      to: "/home",
    },
    {
      id: "project",
      title: "Projects",
      to: "/project",
    },
    {
      id: "contact",
      title: "Contact",
      to: "/contact",
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "Django",
    //   // icon: html,
    // },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    // {
    //   name: "Firebase",
    //   // icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Selenium",
      icon: selenium,
    },
    {
      name: "Figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const projects = [
    {
      name: "ResiCo",
      description:
        "ResiCo is an Android mobile app designed to connect communities by digitalizing residential notice boards and fostering easier communication among residents. This project was awarded 3rd place as part of the Information Systems and Design module project in collaboration with Singtel.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Android Studio",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
      ],
      image: ResiCo,
      source_code_link: "https://github.com/ShelenGo/ResiCo.git",
    },
    {
      name: "Retail Invoice Management",
      description:
        "Web application for invoices data management for ease of inventory and invoice processing. It converts physical invoices to data excel format that is searchable and can be exported into Excel/CSV as well as provides data query feature to enable retailers to track their invoice spending and purchases tracking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "OCR API",
          color: "white-text-gradient",
        },
        {
          name: "jest",
          color: "white-text-gradient",
        },
      ],
      image: Sure,
      source_code_link: "https://github.com/ShelenGo/C2I3.git",
    },
    {
      name: "Sentiment Analysis ML Project",
      description:
        "Using Hidden Markov Model (HMM) to analyze snetiment information associated with social media data and design sequence labelling model for informal texts and predict tag sequences for new sentences.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: ML,
      source_code_link: "https://github.com/ShelenGo/ML_1dProject.git",
    },
  ];

  const cca = [
    {
      name: "SUTD Student Government",
      // year: "2021 - 2023",
      image: investiture,
      description: "My active roles within the SUTD Student Government from November 2021 to February 2023 allowed me to develop strong leadership and organizational skills. As the Project Director of Events and Welfare, I successfully organized two well-attended events and received positive feedback when collaborating with school clubs for Investiture 2022. Additionally, I coordinated inter-departmental sports week events involving 15 team members and liaised with 13 sports club leaders. I also served as the Welfare Executive for Freshman Orientation 2022, overseeing a team of 16 orientation group leaders. Our efforts were recognized when we received the outstanding student organization award for our work with 500 incoming students."
    },
    {
      name: "Design Odyssey SUTD",
      // year: "2021",
      image: designOdessey,
      description: "Researched and developed a mobile app as a teaching aid for children with non-verbal autistic spectrum disorder (ASD). Presented a pitch funding with 2 members and acquired a funding of $1,540 for prototyping purposes and awarded with Most User-Centric Design during 3 days of design thinking bootcamp."
    }

  ]
  
  export { technologies, projects, cca };