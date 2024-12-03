import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { PrimaryButton } from "@/app/shared/Buttons/Primary";
import { Card } from "./Card";

const GithubFoundationsCertification = () => (
  <Card
    description="This certification validates expertise in essential GitHub skills, including repositories, commits, branching, markdowns, and project management. It's designed to showcase entry-level DevOps skills and modern development practices with GitHub tools like Actions, Codespaces, GitFlow and Projects. Key Skills Validated: Git & GitHub Basics, Collaboration & Modern Development Features, Continuous Integration (CI), Continuous Delivery (CD), Secure Repository Management, GitHub Administration."
    href="https://resources.github.com/learn/certifications/"
    imgAlt="Github Foundations Certification credential"
    imgUrl="/images/github-foundations-credential.png"
    title="Github Foundations Certification"
    startDate={new Date(2024, 11, 1)}
    endDate={new Date(2027, 11, 1)}
    subTitle="Certification"
    imgHeight={200}
    imgWidth={200}>
    <Link
      href="https://www.credly.com/badges/90bdfedb-5212-4a93-ae60-1c5ebedfdcd3/linked_in_profile"
      rel="noreferrer"
      target="_blank">
      <PrimaryButton>
        <FontAwesomeIcon icon={faNewspaper} className="w-[24px] h-[24px]" />
        <p className="text-center">View credential</p>
      </PrimaryButton>
    </Link>
  </Card>
);

export { GithubFoundationsCertification };
