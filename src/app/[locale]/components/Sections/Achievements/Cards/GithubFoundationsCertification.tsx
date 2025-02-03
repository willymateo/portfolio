import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import githubFoundationsCredential from "@/../public/images/achievements/github-foundations-credential.png";
import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import { Link } from "@/i18n/routing";
import { Card } from "./Card";

const GithubFoundationsCertification = () => {
  const t = useTranslations("home.achievements.githubFoundationsCertification");

  return (
    <Card
      description={`${t("This certification validates expertise in essential GitHub skills, including repositories, commits, branching, markdowns, and project management It's designed to showcase entry-level DevOps skills and modern development practices with GitHub tools like Actions, Codespaces, GitFlow and Projects Key Skills Validated: Git & GitHub Basics, Collaboration & Modern Development Features, Continuous Integration (CI), Continuous Delivery (CD), Secure Repository Management, GitHub Administration")}.`}
      href="https://www.credly.com/badges/90bdfedb-5212-4a93-ae60-1c5ebedfdcd3/linked_in_profile"
      imgAlt="Github Foundations Certification credential"
      imgUrl={githubFoundationsCredential.src}
      title="Github Foundations Certification"
      startDate={new Date(2024, 11, 1)}
      endDate={new Date(2027, 11, 1)}
      subTitle={t("Certification")}
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
          <p className="text-center">{t("View credential")}</p>
        </PrimaryButton>
      </Link>
    </Card>
  );
};

export { GithubFoundationsCertification };
