import Link from "next/link";

import { SECTIONS } from "../constants";
import { RAPSTT } from "./Cards/RAPSTT";

const Achievements = () => (
  <div id={SECTIONS.ACHIEVEMENTS} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.ACHIEVEMENTS}`}>Achievements</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <RAPSTT />
    </div>
  </div>
);

export { Achievements };
