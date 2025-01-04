import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { PrimaryButton } from "@/app/[locale]/shared/Buttons/Primary";
import { MotionDiv } from "@/app/[locale]/shared/Motion/Div";
import { SubTitle } from "@/app/[locale]/shared/SubTitle";
import { Link } from "@/i18n/routing";

interface Props {
  children?: React.ReactNode;
  description?: string;
  websiteUrl?: string;
  imgUrl?: string;
  imgAlt?: string;
  title?: string;
}

const Card = ({
  description = "",
  websiteUrl = "",
  imgUrl = "",
  imgAlt = "",
  title = "",
  children,
}: Props) => {
  const t = useTranslations("home.projects");

  return (
    <div className="grid auto-rows-min grid-cols-1 justify-items-center gap-x-16 gap-y-10 xl:grid-rows-1 xl:grid-cols-5">
      <MotionDiv
        className="row-span-1 col-span-1 xl:col-span-2 flex flex-col items-center"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
          delay: 0.1,
        }}
      >
        <Link
          className={`${websiteUrl ? "" : "pointer-events-none"}`}
          href={websiteUrl}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            className="object-contain rounded-xl"
            src={imgUrl}
            alt={imgAlt}
            height={300}
            width={500}
          />
        </Link>
      </MotionDiv>

      <div className="row-span-1 col-span-1 lg:col-span-3 flex flex-col justify-between gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <SubTitle>
              <Link
                className={websiteUrl ? "" : "pointer-events-none"}
                href={websiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                {title}
              </Link>
            </SubTitle>

            <p>{description}</p>
          </div>

          {children}
        </div>

        {websiteUrl && (
          <div className="flex flex-row justify-end gap-3">
            <Link href={websiteUrl} rel="noreferrer" target="_blank">
              <PrimaryButton>
                <FontAwesomeIcon icon={faLink} className="w-[24px] h-[24px]" />

                <span className="text-center">{t("Go to website")}</span>
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export { Card };
