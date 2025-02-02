import { Route } from "./types";

enum SECTIONS {
  HERO = "hero",
  ABOUT_ME = "about-me",
  TECH_STACK = "tech-stack",
  EXPERIENCE = "experience",
  EDUCATION = "education",
  ACHIEVEMENTS = "achievements",
  HOBBIES = "hobbies",
  GET_IN_TOUCH = "get-in-touch",
  TECH_COMMUNITY = "tech-community",
}

const ROUTES: Record<string, Route> = {
  HOME: {
    name: "Home",
    id: "home",
    href: "/",
  },
  PROJECTS: {
    href: "/projects",
    name: "Projects",
    id: "projects",
  },
  TECH_COMMUNITY: {
    href: "/tech-community",
    name: "Tech Community",
    id: "tech-community",
  },
};

export { SECTIONS, ROUTES };
