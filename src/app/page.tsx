import { Achievements } from "./Sections/Achievements";
import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { Education } from "./Sections/Education";
import { TechStack } from "./Sections/TechStack";
import { BackgroundSVG } from "./BackgroundSVG";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Hobbies } from "./Sections/Hobbies";
import { Footer } from "./shared/Footer";
import { Hero } from "./Sections/Hero";

const Home = () => (
  <main className="min-h-screen flex flex-col gap-20 bg-[#eee]">
    <div className="opacity-30 fixed top-0 bottom-[65px] left-0 right-0 z-[0]">
      <div className="w-full h-full opacity-100">
        <BackgroundSVG />
      </div>
    </div>

    <div className="flex flex-col items-strech justify-center gap-96 px-10 lg:px-24 2xl:px-40 z-[1]">
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
