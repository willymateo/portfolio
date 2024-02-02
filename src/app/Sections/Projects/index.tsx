import Link from "next/link";

import { MIProjectManager } from "./Cards/MIProjectManager";
import { NightlyTunes } from "./Cards/NightlyTunes";
import { NameGenius } from "./Cards/NameGenius";
import { SECTIONS } from "../constants";

const Projects = () => (
  <div id={SECTIONS.PROJECTS} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.PROJECTS}`}>Projects</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <NameGenius />
      <NightlyTunes />
      <MIProjectManager />
    </div>
  </div>
);

export { Projects };
