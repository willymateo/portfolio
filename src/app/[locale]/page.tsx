import { Achievements } from "./components/Sections/Achievements";
import { GetInTouch } from "./components/Sections/GetInTouch";
import { Experience } from "./components/Sections/Experience";
import { Education } from "./components/Sections/Education";
import { TechStack } from "./components/Sections/TechStack";
import { AboutMe } from "./components/Sections/AboutMe";
import { Hobbies } from "./components/Sections/Hobbies";
import { Hero } from "./components/Sections/Hero";

const Home = () => (
  <div className="flex flex-col items-strech justify-center gap-96 z-[1]">
    <Hero />
    <AboutMe />
    <TechStack />
    <Experience />
    <Education />
    <Achievements />
    <Hobbies />
    <GetInTouch />
  </div>
);

export default Home;
