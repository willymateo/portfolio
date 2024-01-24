import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Welcome } from "./Sections/Welcome";

const Home = () => (
  <main className="min-h-screen flex flex-col items-strech justify-center px-10 gap-20 pb-20">
    <Welcome />
    <AboutMe />
    <TechStack />
    <Projects />
    <Experience />
    <GetInTouch />
  </main>
);

export default Home;
