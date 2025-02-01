import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import scientificMeritBadge from "@/../public/images/achievements/scientific-merit-badge.webp";
import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import { Link } from "@/i18n/routing";
import { Card } from "./Card";

const ScientificMerit = () => {
  const t = useTranslations("home.achievements.scientificMerit");

  return (
    <Card
      description={`${t("The award is granted to graduates of degree programs who have focused their studies on scientific research, working for one year on the same research project or in collaboration with the same professor-researcher During this time, they address a pressing issue, successfully generating a positive impact on society and highlighting the esteemed reputation of ESPOL")}.`}
      href="https://www.acreditta.com/credential/0554e0fc-9550-4f54-8288-c08d80fccc36"
      imgAlt={t("Research Merit - Scientific Research Orientation")}
      title={t("Research Merit - Scientific Research Orientation")}
      imgUrl={scientificMeritBadge.src}
      startDate={new Date(2024, 10, 5)}
      subTitle={t("Badge")}
      imgHeight={200}
      imgWidth={200}
    >
      <Link
        href="https://www.credly.com/badges/90bdfedb-5212-4a93-ae60-1c5ebedfdcd3/linked_in_profile"
        rel="noreferrer"
        target="_blank"
      >
        <PrimaryButton>
          <FontAwesomeIcon icon={faAward} className="w-[24px] h-[24px]" />
          <p className="text-center">{t("View badge")}</p>
        </PrimaryButton>
      </Link>
    </Card>
  );
};

export { ScientificMerit };
