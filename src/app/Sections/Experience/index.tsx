import { PhotoCarrousel } from "@/app/shared/PhotoCarrousel";
import { ShippifyInc } from "./Cards/ShippifyInc";
import { JamaSana } from "./Cards/JamaSana";
import { JOB_IMAGES } from "./constants";
import { Container } from "../Container";
import { SECTIONS } from "../constants";
import { SASF } from "./Cards/SASF";

const Experience = () => (
  <Container id={SECTIONS.EXPERIENCE} title="Experience">
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-20">
        <ShippifyInc />
        <SASF />
        <JamaSana />
      </div>

      <div className="flex flex-col gap-20 items-center">
        <h3 className="text-2xl">Colleagues</h3>

        <div className="w-full">
          <PhotoCarrousel images={JOB_IMAGES} />
        </div>
      </div>
    </div>
  </Container>
);

export { Experience };
