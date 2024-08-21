import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Suganya Maheswaran",
  initials: "SM",
  url: "https://google.ca",
  location: "Toronto, ON, CA",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    " Solving human problems thorough technology.",
  summary:
    "Junior Web Developer having 2 years of experience in developing user Interface application and professional web applications using HTML5, CSS, CSS3, JavaScript(Es5 and ES6), jQuery, and Bootstrap Designed and maintained websites using HTML5, CSS3, jQuery, Bootstrap, and JavaScript Identified and corrected problems uncovered during testing or customer feedback under guidance of senior developer.",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Typescript",
    "Power BI",
    "C++",
    "DAX",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "suganyamaheswaran@gmail.com",
    tel: "+64722895414",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Suganya1990",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Suganyaa__",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      }
    },
  },

  work: [
    {
      company: "TRAINFO",
      href: "https://trainfo.ca/",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/trainfo.png",
      start: "Sept 2021",
      end: "March 2024",
      description: "Created various Power BI dashboards for users through out the organization. One of those dashboards was the Grade Crossing scorecard, a multi-page interactive and dynamic dashboard for management, sales team, and existing and potential customers to identify priority/non-priority crossings through map visuals, charts, tables, and KPIs"
    },
    {
      company: "Facedrive",
      href: "",
      badges: [],
      location: "Toronto, ON",
      title: "Dispatcher/Adminstrator",
      logoUrl: "/facedrive.jpg",
      start: "January 2019",
      end: "April 2019",
      description:
       "Dispatched and coordinated the movements of vehicles and personnel to optimize efficiency and response times. Communicated with drivers and customers via radio, phone, or computer to provide information and updates on routes, schedules, or emergencies. Also Focused on attracting and converting new users through driver and customer promotions. Responsible for onboarding new drivers and ensuring all documents are up to date..",
    },
    {
      company: "hear.com",
      badges: [],
      href: "https://www.hear.com/",
      location: "Toronto, Canada",
      title: "Medical Sales Consultant",
      logoUrl: "/hearcom.svg",
      start: "March 2016",
      end: "April 2019",
      description:
        "Consulted customers via telephone throughout every step of the process (B 2 C process). During the consultation provided individual solutions based on their hearing reuirments. ",
    },
    {
      company: "Nurse Next Door",
      href: "https://www.nursenextdoor.com/",
      badges: [],
      location: "Toronto, CA",
      title: "Software Engineer",
      logoUrl: "/NurseNextDoorLogo",
      start: "2015",
      end: "2016",
      description:
        "Sets up all nursing work schedules and assigned staff to ensure adequate staffing and replacement at all times following the guidelines within the bargaining units contract as well as thec company's administrative policies",
    },
   
  ],
  education: [
    {
      school: "Seneca College",
      href: "https://www.senecapolytechnic.ca/",
      degree: "Computer Programming Diploma ",
      logoUrl: "/seneca-logo.svg",
      start: "2017",
      end: "2020",
    },
    {
      school: "Toronto Metropolitan University",
      href: "https://www.torontomu.ca/",
      degree: "Bachelor's Accounting (Finished 2nd Year) ",
      logoUrl: "/tmu_logo",
      start: "2010",
      end: "2012",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [   {
    title: "Portal Hackathon",
    dates: "October 29, 2016",
    location: "Kingston, Ontario",
    description:
      "Developed an internal widget for uploading assignments using Waterloo's portal app",
    image:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    links: [
      {
        title: "Source",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/UWPortalSDK/crowmark",
      },
    ],
  },],
} as const;
