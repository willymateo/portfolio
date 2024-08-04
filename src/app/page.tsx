import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Hobbies } from "./Sections/Hobbies";
import { Footer } from "./shared/Footer";
import { Hero } from "./Sections/Hero";

const Home = () => (
  <main className="min-h-screen flex flex-col gap-20">
    <div className="flex flex-col items-strech justify-center gap-20 px-10">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Experience />
      <Hobbies />
      <GetInTouch />
    </div>

    <Footer />
  </main>
);

export default Home;
