import { JournalPage } from "iconoir-react";

const AboutMe = () => (
  <div className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">About me</h2>

    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <h3 className="text-2xl">Hello there! My name is Willy Mateo</h3>
        <p className="italic text-slate-700">
          “If you are not going to tell the world who you are, the world is not going to tell you,
          how good you are.”
        </p>
      </div>

      <p>
        Since I was a child, computers caught my attention. So, my life as a programmer started in
        2015 in school, currently, I am studying Engineering in Computer Science at ESPOL and I'm
        sure that this is what I would love to dedicate my whole life. One of my biggest motivations
        is to learn for myself how the Internet works. So, I spend my free time improving my coding
        skills.
      </p>

      <button className="flex flex-row gap-3 rounded-xl bg-red">
        <JournalPage />

        <span>Download Resume</span>
      </button>
    </div>
  </div>
);

export { AboutMe };
