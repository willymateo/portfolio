import Link from "next/link";

import { PhotoCarrousel } from "@/app/shared/PhotoCarrousel";
import { ShippifyInc } from "./Cards/ShippifyInc";
import { JamaSana } from "./Cards/JamaSana";
import { JOB_IMAGES } from "./constants";
import { SECTIONS } from "../constants";
import { SASF } from "./Cards/SASF";

const Experience = () => (
  <div id={SECTIONS.EXPERIENCE} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.EXPERIENCE}`}>Experience</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-16">
        <ShippifyInc />
        <SASF />
        <JamaSana />
      </div>

      <div className="flex flex-col gap-8 items-center">
        <h3 className="text-2xl">Colleagues</h3>

        <div className="w-full">
          <PhotoCarrousel images={JOB_IMAGES} />
        </div>
      </div>
    </div>
  </div>
);

export { Experience };
