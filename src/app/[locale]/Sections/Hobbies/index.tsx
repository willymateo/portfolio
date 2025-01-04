import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons/faPersonSwimming";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons/faPersonRunning";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons/faDumbbell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { MotionDiv } from "@/app/[locale]/shared/Motion/Div";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const Hobbies = () => {
  const t = useTranslations("home.hobbies");

  return (
    <Container id={SECTIONS.HOBBIES} title={t("Hobbies")}>
      <div className="flex flex-col justify-center items-center flex-wrap gap-x-8 gap-y-5 lg:flex-row">
        <ul className="flex-1 flex flex-col gap-5">
          <li className="flex flex-row items-center justify-center flex-wrap gap-5">
            <div>
              <FontAwesomeIcon icon={faPersonSwimming} className="w-[24px] h-[24px]" />
            </div>

            <p className="flex-1">{`${t("Ecuador is a country that has beautiful beaches, so I enjoy going surfing with my friends on weekends and holidays")}.`}</p>
          </li>

          <li className="flex flex-row items-center justify-center flex-wrap gap-5">
            <div>
              <FontAwesomeIcon icon={faPersonRunning} className="w-[24px] h-[24px]" />
            </div>

            <p className="flex-1">{`${t("I am lucky enough to live in a village close to the mountains, in the afternoons it makes me happy to go for a run in natural spaces")}.`}</p>
          </li>

          <li className="flex flex-row items-center justify-center gap-5">
            <div>
              <FontAwesomeIcon icon={faDumbbell} className="w-[24px] h-[24px]" />
            </div>

            <p className="flex-1">{`${t("Another activity I do to keep my body and mind healthy is going to the gym with my friends")}.`}</p>
          </li>
        </ul>

        <MotionDiv
          className="flex flex-col items-center"
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.8,
            delay: 0.1,
          }}
        >
          <Image
            className="object-contain rounded-xl"
            alt="hobbies of Willy Mateo"
            src="/images/surf.jpg"
            height={300}
            width={500}
          />
        </MotionDiv>
      </div>
    </Container>
  );
};

export { Hobbies };
