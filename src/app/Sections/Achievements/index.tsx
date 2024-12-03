import Link from "next/link";

import { GithubFoundationsCertification } from "./Cards/GithubFoundationsCertification";
import { PaperRAP } from "./Cards/PaperRAP";
import { SECTIONS } from "../constants";

const Achievements = () => (
  <div id={SECTIONS.ACHIEVEMENTS} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.ACHIEVEMENTS}`}>Achievements</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <GithubFoundationsCertification />
      <PaperRAP />
    </div>
  </div>
);

export { Achievements };
