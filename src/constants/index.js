import {
    mobile,
    backend,
    creator,
    web,
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
    azure,
    dotnet,
    sql,
    jquery,
    xamarin,
    meta,
    starbucks,
    tesla,
    shopify,
    Algoworks,
    Teleone,
    carrent,
    jobit,
    tripguide,
    threejs,
    warehouse,
    eventmanagement,
    Jobportal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Dot Net Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
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
    {
      name: "DotNet",
      icon: dotnet,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Xamarin",
      icon: xamarin,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer/Full Stack",
      company_name: "Algoworks Technology",
      icon: Algoworks,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Present",
      points: [
        "Algoworks is a Top Digital Transformation company offering services in the field of Salesforce (Consulting, Customisation, Integration etc), Web/Mobile app Development and Devops",
        "Worked closely in dot net core MVC applications , web API’s , backend services Integration and UI development using frontend technologies like React,css,javascript,jquery and html",
        "Collaborated with the team in developing Job search and Event Management applications and added third party services like Docusign and module like job search and event module in the application",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer/React.js",
      company_name: "Algoworks Technology",
      icon: Algoworks,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer/Backend",
      company_name: "Algoworks Technology",
      icon: Algoworks,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Present",
      points: [
        "Designing and developing scalable, high-performance backend systems using .NET Core, ASP.NET Web API, and/or ASP.NET Core Web API.",
        "Developing and optimizing database schema and queries using Microsoft SQL Server or other relational databases, and utilizing ORM frameworks such as Entity Framework or Dapper.",
        "Created different environments for clients like QA,Stage and Production using Azure,Aws and contributed in Managing Azure UI with tech like Azure ADB2C and ADB2C2 with backend web API’s.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Teleone",
      icon: Teleone,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Nov 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies like jquery,javascript.",
        "Contributed in bug fixes, did improvement in some modules for the organisational application.",
        "Got hand on experience on the production applications.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Job Portal",
      description:
        "Web-based platform that  help job seekers find employment opportunities and assisting employers with their hiring needs.",
      tags: [
        {
          name: "Dot Net MVC",
          color: "blue-text-gradient",
        },
        {
          name: "Sql",
          color: "green-text-gradient",
        },
        {
          name: "Javascript/Jquery",
          color: "pink-text-gradient",
        },
        {
          name: "Css",
          color: "blue-text-gradient",
        },
      ],
      image: Jobportal,
      source_code_link: "https://github.com/",
    },
    {
      name: "Event Management",
      description:
        "Allows event planners to create, manage and organize events, including defining event details, dates, times, locations, speakers, sponsors and vendors.",
      tags: [
        {
          name: "React Js",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: eventmanagement,
      source_code_link: "https://github.com/",
    },
    {
      name: "Warehouse Management",
      description:
        "Allows warehouse managers to track the movement of inventory within the warehouse, monitor stock levels, and manage replenishment and restocking and many more features",
      tags: [
        {
          name: "Dotnet Core web API",
          color: "blue-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "pink-text-gradient",
        },
      ],
      image: warehouse,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };