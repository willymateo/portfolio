import Link from "next/link";

import { SECTIONS } from "../constants";
import { Card } from "./Card";

const Projects = () => (
  <div id={SECTIONS.PROJECTS} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.PROJECTS}`}>Projects</Link>
    </h2>

    <div className="flex flex-col gap-5">
      <Card
        websiteUrl="https://www.namegenius.app"
        imgUrl="https://picsum.photos/300/200"
        imgAlt="NameGenius website"
        title="NameGenius">
        <p>
          NameGenius is a web application that allows you to generate random names for your
          projects, companies, and more. It is built with React and TailwindCSS.
        </p>
      </Card>

      <Card
        websiteUrl="https://nightlytunes.netlify.app"
        imgUrl="https://picsum.photos/300/200"
        imgAlt="Nightly tunes website"
        title="Nightly Tunes">
        <p>
          NameGenius is a web application that allows you to generate random names for your
          projects, companies, and more. It is built with React and TailwindCSS.
        </p>
      </Card>

      <Card
        imgAlt="System for managing thesis projects of ESPOL"
        title="System for managing ESPOL thesis projects"
        imgUrl="https://picsum.photos/300/200">
        <p>
          NameGenius is a web application that allows you to generate random names for your
          projects, companies, and more. It is built with React and TailwindCSS.
        </p>
      </Card>
    </div>
  </div>
);

export { Projects };
