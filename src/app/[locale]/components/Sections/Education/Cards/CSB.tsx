import { faSchool } from "@fortawesome/free-solid-svg-icons/faSchool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import csbLogo from "@/../public/images/education/csb-logo.png";
import { Link } from "@/i18n/routing";
import { Card } from "./Card";

const CSB = () => {
  const t = useTranslations("home.education.uecsb");

  return (
    <Card
      description={`${t(
        "During my studies at Carrera Sánchez Bruno high school, where I specialized in computer systems, I gained essential foundational knowledge in various areas of software development I learned the principles of Object-Oriented Programming, which helped me understand how to structure and organize code effectively I also delved into Algorithms Analysis, which taught me how to optimize and improve the efficiency of solutions Additionally, I acquired a solid grasp of the basics of Web Development, enabling me to build functional and responsive websites",
      )}.`}
      subTitle="Unidad Educativa Carrera Sánchez Bruno - CSB"
      imgAlt="Unidad Educativa Carrera Sánchez Bruno logo"
      title={t("High School degree in Computer Systems")}
      href="https://carrerasanchezbruno.edu.ec"
      startDate={new Date(2015, 4, 1)}
      endDate={new Date(2018, 1, 1)}
      type={t("High School degree")}
      imgUrl={csbLogo.src}
      imgHeight={200}
      imgWidth={200}
    >
      <Link href="https://carrerasanchezbruno.edu.ec" rel="noreferrer" target="_blank">
        <PrimaryButton>
          <FontAwesomeIcon icon={faSchool} className="w-[24px] h-[24px]" />

          <p className="text-center">{t("Go to website")}</p>
        </PrimaryButton>
      </Link>
    </Card>
  );
};

export { CSB };
