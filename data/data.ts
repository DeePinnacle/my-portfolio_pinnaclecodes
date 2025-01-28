import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiShadcnui, SiFramer, SiTypescript, SiPostman } from "react-icons/si"
import { DiMongodb } from "react-icons/di"

import User1 from "../public/user1.jpg"
import User2 from "../public/user2.jpg"
import User3 from "../public/user3.jpg"
import User4 from "../public/user4.jpg"


export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "CEO Acelux",
    image: User1
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "CEO wavebudget",
    image: User2
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "Keken couture",
    image: User3
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Odinaka-ride",
    image: User4
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Propswise Team",
    image: User2
  },
];

export const projectsdb = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio showcasing my skills and projects, built using React, Nextjs, Tailwind CSS, Shadcn-ui, aceternity-ui and Framer-motion.",
      category: "frontend",
      techStack: [
        {
            icon: FaReact,
            tech: "React"
        },
        {
            icon: FaReact,
            tech: "NextJs"
        },
        {
            icon: RiTailwindCssFill,
            tech: "TailwindCss"
        },
        {
            icon: SiShadcnui,
            tech: "Shadcn-ui",
        },
        {
            icon: SiFramer,
            tech: "Framer-motion",
        },
        {
            icon: SiTypescript,
            tech: "Typescript",
        }
      ],
      image: "code-1.png", // Replace with your image path
      demoLink: "https://myportfolio.com",
      repoLink: "https://github.com/username/portfolio",
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "A full-stack web application to manage personal finances, track expenses, and set budgets.",
      category: "webapp",
      techStack: [
        {
            icon: FaNodeJs,
            tech: "NodeJs"
        },
        {
            icon: FaNodeJs,
            tech: "ExpressJs"
        },
        {
            icon: DiMongodb,
            tech: "Mongodb"
        },
        {
            icon: FaGithub,
            tech: "Github",
        },
        {
            icon: SiPostman,
            tech: "Postman",
        }
      ],
      image: "code-3.png",
      demoLink: "https://financetracker.com",
      repoLink: "https://github.com/username/finance-tracker",
    },
    {
      id: 3,
      title: "Acelux",
      description: "A sleek and modern landing page for a SaaS product, built with responsive design principles.",
      category: "frontend",
      techStack: [
        {
            icon: FaReact,
            tech: "React"
        },
        {
            icon: FaReact,
            tech: "NextJs"
        },
        {
            icon: RiTailwindCssFill,
            tech: "TailwindCss"
        },
        {
            icon: SiShadcnui,
            tech: "Shadcn-ui",
        },
        {
            icon: SiFramer,
            tech: "Framer-motion",
        },
        {
            icon: SiTypescript,
            tech: "Typescript",
        }
      ],
      image: "code-2.png",
      demoLink: "https://landingpage.com",
      repoLink: "https://github.com/username/landing-page",
    },
    {
      id: 4,
      title: "Odinaka-ride",
      description: "A sleek and modern landing page for a SaaS product, built with responsive design principles.",
      category: "website",
      techStack: [
        {
            icon: FaReact,
            tech: "React"
        },
        {
            icon: FaReact,
            tech: "NextJs"
        },
        {
            icon: RiTailwindCssFill,
            tech: "TailwindCss"
        },
        {
            icon: SiShadcnui,
            tech: "Shadcn-ui",
        },
        {
            icon: SiFramer,
            tech: "Framer-motion",
        },
        {
            icon: SiTypescript,
            tech: "Typescript",
        }
      ],
      image: "code-2.png",
      demoLink: "https://landingpage.com",
      repoLink: "https://github.com/username/landing-page",
    },
    {
      id: 5,
      title: "Usraya-printing press",
      description: "A sleek and modern landing page for a SaaS product, built with responsive design principles.",
      category: "frontend",
      techStack: [
        {
            icon: FaReact,
            tech: "React"
        },
        {
            icon: FaReact,
            tech: "NextJs"
        },
        {
            icon: RiTailwindCssFill,
            tech: "TailwindCss"
        },
        {
            icon: SiShadcnui,
            tech: "Shadcn-ui",
        },
        {
            icon: SiFramer,
            tech: "Framer-motion",
        },
        {
            icon: SiTypescript,
            tech: "Typescript",
        }
      ],
      image: "code-2.png",
      demoLink: "https://landingpage.com",
      repoLink: "https://github.com/username/landing-page",
    },
  ];
  

  export const services = [
    {
      id: 1,
      title: "Web Design",
      content: "Crafting visually stunning, user-friendly designs that align with your brand's identity. From wireframes to prototypes, I create layouts that prioritize user experience and responsiveness across all devices."
    },
    {
      id: 2,
      title: "Frontend Development",
      content: "Transforming designs into interactive and efficient user interfaces using modern technologies like React, HTML, CSS, and JavaScript. Ensuring fast performance and compatibility across all major browsers."
    },
    {
      id: 3,
      title: "Backend Development",
      content: "Developing secure and scalable server-side systems, APIs, and database architectures to power your applications. Expertise in technologies like Node.js, Express, and MongoDB ensures seamless functionality."
    },
    {
      id: 4,
      title: "Web Apps Development",
      content: "Building dynamic and responsive web applications tailored to your needs, whether it’s task management tools, E-commerce, Ticketing webapp, personal finance trackers, or collaborative platforms. Designed for performance, scalability, and intuitive usability."
    },
    {
      id: 5,
      title: "Full-Stack Development",
      content: "Providing end-to-end development services, seamlessly integrating frontend and backend for a complete, robust web solution. From designing interfaces to deploying scalable server-side logic, I deliver all-encompassing solutions."
    },
    {
      id: 6,
      title: "Website Optimization",
      content: "Enhancing your website's performance through speed optimization, SEO strategies, and mobile responsiveness. Ensuring fast load times and improved search engine rankings for better user engagement."
    }
  ];
  

  export const items = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designer",
      image: User1
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Frontend Developer",
      image: User2
    },
    {
      id: 3,
      name: "Emily Johnson",
      designation: "Backend Developer",
      image: User3
    },
    {
      id: 4,
      name: "Michael Brown",
      designation: "Project Manager",
      image: User4
    },
    {
      id: 5,
      name: "Sophia Davis",
      designation: "UX Designer",
      image: User1
    }
  ];