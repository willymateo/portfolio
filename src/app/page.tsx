import { Achievements } from "./Sections/Achievements";
import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { Education } from "./Sections/Education";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Hobbies } from "./Sections/Hobbies";
import { Footer } from "./shared/Footer";
import { Hero } from "./Sections/Hero";

const Home = () => (
  <main className="min-h-screen flex flex-col gap-20">
    <div className="flex flex-col items-strech justify-center gap-20 px-10 md:px-36">
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Hobbies />
      <GetInTouch />
    </div>

    <Footer />
  </main>
);

export default Home;
