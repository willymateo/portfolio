import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { intlFormat, isValid } from "date-fns";
import { useLocale } from "next-intl";
import Image from "next/image";

import { MotionDiv } from "@/app/[locale]/shared/Motion/Div";
import { SubTitle } from "@/app/[locale]/shared/SubTitle";
import { Link } from "@/i18n/routing";

interface Props {
  children?: React.ReactNode;
  enterpriseImgUrl?: string;
  enterpriseImgAlt?: string;
  enterpriseWebUrl?: string;
  enterpriseName?: string;
  jobTitle?: string;
  startDate: Date;
  endDate?: Date;
}

const Card = ({
  enterpriseWebUrl = "",
  enterpriseImgUrl = "",
  enterpriseImgAlt = "",
  enterpriseName = "",
  jobTitle = "",
  startDate,
  children,
  endDate,
}: Props) => {
  const locale = useLocale();

  return (
    <div className="grid grid-flow-row auto-rows-min grid-cols-1 gap-x-16 gap-y-3 xl:grid-rows-1 xl:grid-cols-4">
      <div className="col-span-1 row-span-1 flex flex-col gap-5">
        <SubTitle>
          <Link
            className={enterpriseWebUrl ? "" : "pointer-events-none"}
            href={enterpriseWebUrl}
            rel="noreferrer"
            target="_blank"
          >
            {enterpriseName}
          </Link>
        </SubTitle>

        <div className="flex flex-col">
          <h4 className="text-xl">{jobTitle}</h4>
          <p>
            {`${
              (intlFormat(startDate, {
                month: "long",
                year: "numeric",
              }),
              { locale })
            } - ${
              isValid(endDate)
                ? intlFormat(
                    endDate as Date,
                    {
                      month: "long",
                      year: "numeric",
                    },
                    { locale },
                  )
                : "Present"
            }`}
          </p>
        </div>

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
          {enterpriseImgUrl ? (
            <Link
              className={`py-10 ${enterpriseWebUrl ? "" : "pointer-events-none"}`}
              href={enterpriseWebUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                className="object-contain"
                src={enterpriseImgUrl}
                alt={enterpriseImgAlt}
                height={200}
                width={150}
              />
            </Link>
          ) : (
            <Link
              className={`py-10 ${enterpriseWebUrl ? "" : "pointer-events-none"}`}
              href={enterpriseWebUrl}
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />
            </Link>
          )}
        </MotionDiv>
      </div>

      <div className="col-span-1 row-span-1 lg:col-span-3 flex flex-col gap-10">{children}</div>
    </div>
  );
};

export { Card };
