import { Container } from "../Container";
import { SECTIONS } from "../constants";
import { ESPOL } from "./Cards/ESPOL";
import { CSB } from "./Cards/CSB";

const Education = () => (
  <Container id={SECTIONS.EDUCATION} title="Education">
    <div className="flex flex-col gap-16">
      <ESPOL />
      <CSB />
    </div>
  </Container>
);

export { Education };
