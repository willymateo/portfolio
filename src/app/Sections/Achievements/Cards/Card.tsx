import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { intlFormat, isValid } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { MotionDiv } from "@/app/shared/Motion/Div";
import { SubTitle } from "@/app/shared/SubTitle";

interface Props {
  children?: React.ReactNode;
  description?: string;
  imgHeight?: number;
  imgWidth?: number;
  subTitle?: string;
  startDate: Date;
  imgUrl?: string;
  imgAlt?: string;
  endDate?: Date;
  title?: string;
  href?: string;
}

const Card = ({
  description = "",
  imgHeight = 200,
  imgWidth = 150,
  subTitle = "",
  imgUrl = "",
  imgAlt = "",
  title = "",
  href = "",
  startDate,
  children,
  endDate,
}: Props) => (
  <div className="flex flex-col gap-5">
    <SubTitle>
      <Link
        className={href ? "" : "pointer-events-none"}
        rel="noreferrer"
        target="_blank"
        href={href}
      >
        {title}
      </Link>
    </SubTitle>

    <div className="flex flex-col">
      <h3 className="text-l">{subTitle}</h3>

      <p>
        {intlFormat(startDate, {
          month: "long",
          year: "numeric",
        })}

        {isValid(endDate)
          ? ` - ${intlFormat(endDate as Date, {
              month: "long",
              year: "numeric",
            })}`
          : ""}
      </p>
    </div>

    <div className="grid grid-flow-row auto-rows-min grid-cols-1 justify-items-center gap-x-16 gap-y-10 xl:grid-rows-1 xl:grid-cols-4">
      <MotionDiv
        className="row-span-1 col-span-1 flex flex-col items-center"
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{
          ease: [0, 0.71, 0.2, 1.01],
          duration: 0.8,
          delay: 0.1,
        }}
      >
        {imgUrl ? (
          <Link
            className={`${href ? "" : "pointer-events-none"}`}
            rel="noreferrer"
            target="_blank"
            href={href}
          >
            <Image
              className="object-contain"
              height={imgHeight}
              width={imgWidth}
              src={imgUrl}
              alt={imgAlt}
            />
          </Link>
        ) : (
          <Link
            className={`py-10 ${href ? "" : "pointer-events-none"}`}
            rel="noreferrer"
            target="_blank"
            href={href}
          >
            <FontAwesomeIcon icon={faAward} className="w-[24px] h-[24px]" />
          </Link>
        )}
      </MotionDiv>

      <div className="col-span-1 row-span-1 lg:col-span-3 flex flex-col gap-5">
        <p className="flex flex-col gap-1 list-disc">{description}</p>

        <div className="flex flex-row justify-start items-center">{children}</div>
      </div>
    </div>
  </div>
);

export { Card };
