import Link from "next/link";

import { ContabillySA } from "./Cards/ContabillySA";
import { ShippifyInc } from "./Cards/ShippifyInc";
import { SECTIONS } from "../constants";
import { SASF } from "./Cards/SASF";

const Experience = () => (
  <div id={SECTIONS.EXPERIENCE} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.EXPERIENCE}`}>Experience</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <ShippifyInc />
      <SASF />
      <ContabillySA />
    </div>
  </div>
);

export { Experience };
