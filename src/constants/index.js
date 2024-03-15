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
} from "../assets";

import {screnEC} from "../assets";

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
    title: "Web Developer",
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
    title: "Content Creator",
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
    title: "React Js Software Developer",
    company_name: "Pwip",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - SEP 2023 ",
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
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
  {
    name: "E-commerce for Car/Bike Parts",
    description:
       "Specifically, I was responsible for designing and implementing the Login, Signup, product listing and order placement features. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restful WebService",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations. Main features: - Accessibility, Cross-platform Compatibility, Real-time Updates, Continuous Updates and Maintenance, interactive User Interface .",
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
      "In the dynamic world of international trade, efficient export costing is essential for businesses to navigate the complexities of global commerce and maximize profitability. Export costing tools are indispensable resources designed to streamline and optimize the process of calculating and analyzing costs associated with exporting goods.",
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
];

export { services, technologies, experiences, testimonials, projects };
