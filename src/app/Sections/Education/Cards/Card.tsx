import { faUserGraduate } from "@fortawesome/free-solid-svg-icons/faUserGraduate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { intlFormat, isValid } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { SubTitle } from "@/app/shared/SubTitle";

interface Props {
  children?: React.ReactNode;
  description?: string;
  imgHeight?: number;
  imgWidth?: number;
  subTitle?: string;
  imgUrl?: string;
  imgAlt?: string;
  startDate: Date;
  endDate?: Date;
  title?: string;
  href?: string;
  type?: string;
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
  type = "",
  children,
  endDate,
}: Props) => (
  <div className="flex flex-col gap-5">
    <Link
      className={href ? "" : "pointer-events-none"}
      rel="noreferrer"
      target="_blank"
      href={href}
    >
      <SubTitle>{title}</SubTitle>
    </Link>

    <div className="flex flex-col">
      <h4 className="text-l">{subTitle}</h4>

      <h4 className="text-l">{type}</h4>

      <p>
        {`${intlFormat(startDate, {
          month: "long",
          year: "numeric",
        })} - ${
          isValid(endDate)
            ? intlFormat(endDate as Date, {
                month: "long",
                year: "numeric",
              })
            : "Present"
        }`}
      </p>
    </div>

    <div className="grid grid-flow-row auto-rows-min grid-cols-1 justify-items-center gap-x-16 gap-y-10 xl:grid-rows-1 xl:grid-cols-4">
      {imgUrl ? (
        <Link
          className={`col-span-1 row-span-1 ${href ? "" : "pointer-events-none"}`}
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
          className={`col-span-1 row-span-1 py-10 ${href ? "" : "pointer-events-none"}`}
          rel="noreferrer"
          target="_blank"
          href={href}
        >
          <FontAwesomeIcon icon={faUserGraduate} className="w-[24px] h-[24px]" />
        </Link>
      )}

      <div className="col-span-1 row-span-1 lg:col-span-3 flex flex-col gap-5">
        <p className="flex flex-col gap-1 list-disc">{description}</p>

        <div className="flex flex-row justify-start items-center">{children}</div>
      </div>
    </div>
  </div>
);

export { Card };
