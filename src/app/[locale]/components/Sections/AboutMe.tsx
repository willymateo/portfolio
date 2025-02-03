import { faNewspaper } from "@fortawesome/free-regular-svg-icons/faNewspaper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { PrimaryButton } from "../../shared/Buttons/Primary";
import { DinamicQuote } from "../../shared/DinamicQuote";
import { SECTIONS } from "../../constants";
import { Container } from "./Container";
import { Link } from "@/i18n/routing";

const AboutMe = () => {
  const t = useTranslations("home.aboutMe");

  return (
    <Container id={SECTIONS.ABOUT_ME} title={t("About me")}>
      <div className="flex flex-col items-start gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl">{t("Hello there! My name is Willy Mateo")}</h3>
          <DinamicQuote />
        </div>

        <p>
          {t("I’m Willy Mateo, a passionate Computer Science Engineer from")}
          <strong>{` ${t("ESPOL, Ecuador’s top university")}`}</strong>
          {`, ${t(
            "with a strong focus on full-stack development My career so far has centered on creating efficient, high-performing applications I thrive on solving complex challenges and am committed to building scalable solutions I identify myself with excellence, and this drives me to deliver top-quality code and always look for ways to optimize processes, ensuring both user satisfaction and performance",
          )}.`}
        </p>

        <p>
          {` ${t("Technically, I bring extensive experience in")} `}
          <strong>{t("TypeScript, JavaScript, React, Nextjs, Redux and testing libraries")}</strong>
          {`; ${t("combined with a deep understanding of backend technologies like")} `}
          <strong>
            {t("Nodejs, Expressjs, Nestjs, Python, Django, MySQL, PostgreSQL and MongoDB")}
          </strong>
          {`; ${t("My experience with cloud services is based on")} `}
          <strong>{t("AWS, Firebase, Vercel, ElasticSearch, Terraform and Docker")}</strong>
          {`. ${t("Beyond technical expertise, I possess strong communication skills and a collaborative mindset My leadership qualities enable me to work effectively across teams, mentor peers, and ensure that every project I touch meets high standards")}.`}
        </p>

        <p>
          {`${t("Looking ahead, I am determined to continuously grow my skills")}, `}
          <strong>{t("with the ultimate goal of becoming a software architect")}</strong>
          {`. ${t("I am driven by the idea of designing systems that are both efficient and scalable, ensuring that technology not only meets today’s demands but is also prepared for tomorrow’s challenges I am constantly improving, learning, and innovating, and I look forward to opportunities that push me to develop my expertise and leadership further")}.`}
        </p>

        <Link href="/docs/CV.pdf" rel="noreferrer" target="_blank">
          <PrimaryButton>
            <FontAwesomeIcon icon={faNewspaper} className="w-[24px] h-[24px]" />

            <span className="text-center">{t("Download resume")}</span>
          </PrimaryButton>
        </Link>
      </div>
    </Container>
  );
};

export { AboutMe };
