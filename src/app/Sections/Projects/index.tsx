import { MIProjectManager } from "./Cards/MIProjectManager";
import { NightlyTunes } from "./Cards/NightlyTunes";
import { NameGenius } from "./Cards/NameGenius";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const Projects = () => (
  <Container id={SECTIONS.PROJECTS} title="Projects">
    <div className="flex flex-col gap-16">
      <NameGenius />
      <NightlyTunes />
      <MIProjectManager />
    </div>
  </Container>
);

export { Projects };
