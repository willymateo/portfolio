import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Welcome } from "./Sections/Welcome";
import { Hobbies } from "./Sections/Hobbies";

const Home = () => (
  <main className="min-h-screen flex flex-col items-strech justify-center px-10 gap-20 pb-20">
    <Welcome />
    <AboutMe />
    <TechStack />
    <Projects />
    <Experience />
    <Hobbies />
    <GetInTouch />
  </main>
);

export default Home;
