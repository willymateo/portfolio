import Link from "next/link";

import { SECTIONS } from "../constants";
import { ESPOL } from "./Cards/ESPOL";
import { CSB } from "./Cards/CSB";

const Education = () => (
  <div id={SECTIONS.EDUCATION} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.EDUCATION}`}>Education</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <ESPOL />
      <CSB />
    </div>
  </div>
);

export { Education };
