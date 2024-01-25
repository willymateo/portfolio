import Link from "next/link";

import { SECTIONS } from "./constants";

const Experience = () => (
  <div id={SECTIONS.EXPERIENCE} className="flex flex-col">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.EXPERIENCE}`}>Experience</Link>
    </h2>
  </div>
);

export { Experience };
