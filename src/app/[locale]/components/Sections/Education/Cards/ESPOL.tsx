import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import espolLogo from "@/../public/images/education/espol-logo.png";
import { Link } from "@/i18n/routing";
import { Card } from "./Card";

const ESPOL = () => {
  const t = useTranslations("home.education.espol");

  return (
    <Card
      description={`${t(
        "In my journey as a Computer Science Engineer from ESPOL, I gained a comprehensive foundation in various areas of software development and technology My education provided me with a deep understanding of Object-Oriented Programming and Data Structures, essential for building scalable and maintainable software solutions I developed a strong grasp of Software Design principles and Database Systems, which are critical for designing efficient, robust applications Courses in Systems Programming, Operating Systems, and Algorithms Analysis enhanced my ability to create optimized and high-performance systems I also explored Web and Mobile Software Development, learning how to build responsive, user-friendly applications My studies included Information Security, ensuring I understand how to protect systems and data, and Programming Languages, allowing me to work across different development environments Additionally, I studied Software Engineering, Artificial Intelligence, and Distributed Systems and Cloud Computing, which provided insights into creating intelligent and distributed applications My education also covered the Management of IT Projects and Information Systems, equipping me with the skills to lead technology projects and manage information effectively in a business context",
      )}.`}
      href="https://www.fiec.espol.edu.ec/en/undergraduate-programs/computer-science"
      subTitle="Escuela Superior Politécnica del Litoral - ESPOL"
      title={t("Engineering in Computer Science")}
      startDate={new Date(2018, 2, 1)}
      endDate={new Date(2024, 1, 9)}
      type={t("Bachelor's degree")}
      imgUrl={espolLogo.src}
      imgAlt="ESPOL logo"
      imgHeight={200}
      imgWidth={200}
    >
      <Link
        href="https://www.fiec.espol.edu.ec/en/undergraduate-programs/computer-science"
        rel="noreferrer"
        target="_blank"
      >
        <PrimaryButton>
          <FontAwesomeIcon icon={faBuildingColumns} className="w-[24px] h-[24px]" />

          <p className="text-center">{t("Go to website")}</p>
        </PrimaryButton>
      </Link>
    </Card>
  );
};

export { ESPOL };
