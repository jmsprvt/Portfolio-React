import type { IconType } from "react-icons/lib";

import VueCinemaUrl from "assets/projects/VueCinema.png";
import ShopifyUrl from "assets/projects/shopify.png";
import ToDoListUrl from "assets/projects/To-Dolist.png";
import OldPortfolio from "assets/projects/OldPortfolio.png";
import NextjsIcon from "icons/NextjsIcon";
import ReactIcon from "icons/ReactIcon";
import ReduxIcon from "icons/ReduxIcon";
import StyledComponentsIcon from "icons/StyledComponentsIcon";
import TailwindIcon from "icons/TailwindIcon";
import TypescriptIcon from "icons/TypescriptIcon";
import ViteIcon from "icons/ViteIcon";

const techTypes = [
  "Next.js",
  "TypeScript",
  "Vite",
  "Jest + RTL",
  "React",
  "Redux",
  "Prisma",
  "Styled Components",
  "TanStack Query",
  "Storybook",
  "Airtable",
  "AWS",
  "@craftjs/core",
  "Tailwind CSS",
  "tRPC",
  "Svelte",
  "GraphQL",
  "TypeGraphQL"
] as const;

type TechTuple = typeof techTypes;

export type ProjectTech = { tech: TechTuple[number]; icon: IconType };

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  techs: ProjectTech[];
  isPinned?: boolean;
};

const nextjsTech: ProjectTech = { tech: "Next.js", icon: NextjsIcon };
const typeScriptTech: ProjectTech = { tech: "TypeScript", icon: TypescriptIcon };
const styledComponentsTech: ProjectTech = { tech: "Styled Components", icon: StyledComponentsIcon };
const reactTech: ProjectTech = { tech: "React", icon: ReactIcon };
const reduxTech: ProjectTech = { tech: "Redux", icon: ReduxIcon };
const tailwindCssTech: ProjectTech = { tech: "Tailwind CSS", icon: TailwindIcon };
const viteReactTech: ProjectTech = { tech: "Vite", icon: ViteIcon };

export const projects: Project[] = [
  {
    title: "Old Portfolio",
    description:
      "Explore a curated collection of my work, experiences, and skills presented with style and clarity. \n From design projects to writing samples, discover the essence of my professional journey and creative endeavors.",
    image: OldPortfolio,
    url: "https://portfoliojms.vercel.app/",
    githubUrl: "https://github.com/jmsprvt/React-Portfoliyo",
    techs: [
      typeScriptTech, 
      styledComponentsTech,
      reactTech,
      nextjsTech,
      tailwindCssTech
    ],
    isPinned: true
  },
  {
    title: "To-Do List",
    description:
      "Your ultimate task manager. Stay organized with ease.\n Create, prioritize, and manage tasks effortlessly.\n Set reminders, due dates, and categorize tasks. Take control of your productivity now!",
    image: ToDoListUrl,
    url: "https://izzatulloh5566.github.io/todoTsLink/",
    githubUrl: "https://github.com/Izzatulloh5566/todoTsLink",
    techs: [
      viteReactTech,
      typeScriptTech,
      reduxTech,
      styledComponentsTech,
      reactTech
    ],
    isPinned: true
  },
  {
    title: "Shopify",
    description:
      "Explore, shop, and delight in our Shopify. Secure, seamless, and swift shopping awaits. Dive in and elevate your online shopping experience today",
    image: ShopifyUrl,
    url: "https://shopifyjms.vercel.app/",
    githubUrl: "https://github.com/jmsprvt/Diplom",
    techs: [viteReactTech, typeScriptTech,  reduxTech, tailwindCssTech,reactTech],
    isPinned: true
  },
  {
    title: "Vue Cinema",
    description: "Your gateway to endless cinematic thrills. From blockbuster hits to timeless classics, indulge in movie magic anytime, anywhere.",
    image: VueCinemaUrl,
    url: "https://izzatulloh5566.github.io/VueCinema/",
    githubUrl: "https://github.com/Izzatulloh5566/VueCinema",
    techs: [reactTech, typeScriptTech, styledComponentsTech, viteReactTech]
  }
];
