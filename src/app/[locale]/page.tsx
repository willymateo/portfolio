import { Achievements } from "./Sections/Achievements";
import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { Education } from "./Sections/Education";
import { TechStack } from "./Sections/TechStack";
import { AboutMe } from "./Sections/AboutMe";
import { Hobbies } from "./Sections/Hobbies";
import { Hero } from "./Sections/Hero";

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
