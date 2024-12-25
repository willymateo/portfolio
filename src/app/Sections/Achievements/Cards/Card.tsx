import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { intlFormat, isValid } from "date-fns";
import Image from "next/image";
import Link from "next/link";

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
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap">
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

      <Link
        className={href ? "" : "pointer-events-none"}
        rel="noreferrer"
        target="_blank"
        href={href}
      >
        <h4 className="text-2xl">{title}</h4>
      </Link>
    </div>

    <div className="flex flex-row flex-wrap justify-center gap-5">
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

      <div className="flex-1 flex flex-col gap-5">
        <p className="flex flex-col gap-1 list-disc">{description}</p>

        <div className="flex flex-row justify-start items-center">{children}</div>
      </div>
    </div>
  </div>
);

export { Card };
