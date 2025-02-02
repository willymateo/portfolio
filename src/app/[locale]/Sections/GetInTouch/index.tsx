import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { SocialNetworks } from "@/app/[locale]/shared/SocialNetworks";
import { DinamicQuote } from "../../shared/DinamicQuote";
import { EmailToCopy } from "./EmailToCopy";
import { SECTIONS } from "../../constants";
import { Container } from "../Container";

const GetInTouch = () => {
  const t = useTranslations("home.getInTouch");

  return (
    <Container id={SECTIONS.GET_IN_TOUCH} title={t("Get in touch")}>
      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-2xl">
          {`${t("Let's build something together")} `}
          <FontAwesomeIcon icon={faLaptopCode} className="w-[35px] h-[35px] inline-block ml-2" />
        </h3>

        <div className="grid grid-flow-row auto-rows-min grid-cols-1 gap-x-16 gap-y-10 justify-items-center xl:grid-rows-1 xl:grid-cols-2">
          <DinamicQuote className="col-span-1 row-span-1" />

          <div className="col-span-1 row-span-1 flex flex-col items-center gap-5">
            <EmailToCopy />

            <p>{t("Or")}</p>

            <SocialNetworks />
          </div>
        </div>
      </div>
    </Container>
  );
};

export { GetInTouch };
