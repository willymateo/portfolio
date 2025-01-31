import { TechCommunity } from "./Sections/TechCommunity";
import { BackgroundSVG } from "./shared/BackgroundSVG";
import { Achievements } from "./Sections/Achievements";
import { GetInTouch } from "./Sections/GetInTouch";
import { Experience } from "./Sections/Experience";
import { Education } from "./Sections/Education";
import { TechStack } from "./Sections/TechStack";
import { Projects } from "./Sections/Projects";
import { AboutMe } from "./Sections/AboutMe";
import { Hobbies } from "./Sections/Hobbies";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Hero } from "./Sections/Hero";

const Home = () => (
  <main className="min-h-screen flex flex-col gap-20 bg-darkosPortfolio-gray dark:bg-darkosPortfolio-black">
    <div className="opacity-30 fixed top-[47px] lg:top-[63px] bottom-[76px] left-0 right-0 z-[0]">
      <div className="w-full h-full">
        <BackgroundSVG />
      </div>
    </div>

    <Header />

    <div className="flex flex-col items-strech justify-center gap-96 px-10 lg:px-24 2xl:px-40 z-[1]">
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <TechCommunity />
      <Hobbies />
      <GetInTouch />
    </div>

    <Footer />
  </main>
);

export default Home;
