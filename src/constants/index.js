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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  screenMobility,
  adarsh,
} from "../assets";

import { screnEC } from "../assets";
import { screeninteria } from "../assets";
import { screenHrms } from "../assets";
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
    title: "Deployment with AWS",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "NextJs Developer",
    icon: backend,
  },
  {
    title: "Node Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next Js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior React Js Software Developer",
    company_name: "88Gravity",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2024 - March 2025 ",
    points: [
      "Developed and maintained a comprehensive HRMS platform using React and Node.js, implementing core HR functionalities such as employee tracking, attendance management, payroll processing, leave management, and document handling.",
      "Built and optimized the admin panel using React, ensuring seamless management of HR operations with an intuitive UI and efficient workflows.",
      "Designed and developed TheInteria.com using React and Sanity, crafting an engaging UI, implementing Sanity APIs, and configuring the Sanity dashboard for efficient content management.",
      "Led the front-end and back-end integration for Togopool and Mobility, utilizing React and Node.js APIs to implement critical business functionalities and enhance performance.",
      "Deployed TheInteria.com using AWS S3 and CloudFront, ensuring high availability, scalability, and optimized performance.",
    ],
  },
  {
    title: "React Js Software Developer",
    company_name: "Pwip",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - May 2024 ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Associate Frontend Developer",
    company_name: "UrbanStop",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2020 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Harshit proved me wrong.",
    name: "SK Swain",
    designation: "CFO",
    company: "UrbanStop",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Harshit does.",
    name: "Sudhanshu kumar",
    designation: "CTO",
    company: "PWIP",
    image: "https://avatars.githubusercontent.com/u/22346244?v=4",
  },
  {
    testimonial:
      "After Harshit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Adarsh Srivastva",
    designation: "CEO",
    company: "88Gravity",
    image: adarsh,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "E-commerce for Car/Bike Parts",
  //   description:
  //     "Specifically, I was responsible for designing and implementing the Login, Signup, product listing and order placement features. ",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Restful WebService",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "TailwindCss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. ",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Rest Api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Export Costing Software",
    description:
      "In the dynamic world of international trade, efficient export costing is essential for businesses to navigate the complexities of global commerce and maximize profitability .",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Mantine",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: screnEC,
    source_code_link: "https://github.com/",
  },
  {
    name: "theInteria",
    description:
      "TheInteria.com is a dynamic web platform built using React and Sanity, designed to provide an intuitive and scalable experience for managing interior design content. I played a key role in the development of the platform.",

    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: screeninteria,
    source_code_link: "https://github.com/",
  },
  {
    name: "MobilityInfotech",
    description:
      "MobilityInfotech is a feature-rich platform designed to manage and streamline various business operations efficiently. I played a key role in the development and enhancement of the platform, Admin Panel Development, Blog & Content Management, SEO Optimization .",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: screenMobility,
    source_code_link: "https://github.com/",
  },
  {
    name: "88gravity HRMS",
    description:
      "The HRMS (Human Resource Management System) is a scalable and feature-rich platform built using React and Node.js, designed to streamline HR operations and enhance workforce management. I was responsible for the end-to-end development and maintenance of the system .",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: screenHrms,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
