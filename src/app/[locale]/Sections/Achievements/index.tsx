import { GithubFoundationsCertification } from "./Cards/GithubFoundationsCertification";
import { PaperRAP } from "./Cards/PaperRAP";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const Achievements = () => (
  <Container id={SECTIONS.ACHIEVEMENTS} title="Achievements">
    <div className="flex flex-col gap-20">
      <GithubFoundationsCertification />
      <PaperRAP />
    </div>
  </Container>
);

export { Achievements };
