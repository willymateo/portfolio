import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

import rapSTTPaperPreview from "@/../public/images/achievements/rap-stt-paper-preview.jpg";
import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import { Link } from "@/i18n/routing";
import { Card } from "./Card";

const PaperRAP = () => {
  const t = useTranslations("home.achievements.paperRAP");

  return (
    <Card
      description={`${t("In the realm of verbal communication, most common non-clinical speech disfluencies are filler words and filled pauses, which pose challenges for effective oral presentations Yet their detection is no easy task This article presents the usage of OpenAI’s Whisper for filled pauses and filler words detection in Spanish oral presentations, including on-the-wild usage with undergraduate students Preliminary results indicate that Whisper demonstrates promise as a valuable tool to identify a substantial amount of filler words and filled pauses Despite areas of improvement, Whisper serves as a diagnostic tool for assessing disfluences in oral communication")}.`}
      imgAlt="Detecting Speech Disfluencies Using Open-Source Tools in Automatic Feedback Systems for Oral Presentation Training"
      title="Detecting Speech Disfluencies Using Open-Source Tools in Automatic Feedback Systems for Oral Presentation Training"
      href="https://www.scitepress.org/PublicationsDetail.aspx?ID=znVkMzb6Da0=&t=1"
      startDate={new Date(2024, 4, 1)}
      imgUrl={rapSTTPaperPreview.src}
      subTitle={t("Paper")}
      imgHeight={300}
      imgWidth={220}
    >
      <Link href="/docs/rap-stt-paper.pdf" rel="noreferrer" target="_blank">
        <PrimaryButton>
          <FontAwesomeIcon icon={faNewspaper} className="w-[24px] h-[24px]" />
          <p className="text-center">{t("Download paper")}</p>
        </PrimaryButton>
      </Link>
    </Card>
  );
};

export { PaperRAP };
