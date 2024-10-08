import { intlFormat, isValid } from "date-fns";
import { City } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

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
}: Props) => (
  <div className="flex flex-col lg:flex-row gap-x-16 gap-y-3 flex-wrap">
    <div className="flex flex-col gap-3">
      <Link
        className={enterpriseWebUrl ? "" : "pointer-events-none"}
        href={enterpriseWebUrl}
        rel="noreferrer"
        target="_blank">
        <h3 className="text-2xl">{enterpriseName}</h3>
      </Link>

      <div className="flex flex-col">
        <h4 className="text-xl">{jobTitle}</h4>
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

      <div className="flex flex-col items-center">
        {enterpriseImgUrl ? (
          <Link
            className={`py-10 ${enterpriseWebUrl ? "" : "pointer-events-none"}`}
            href={enterpriseWebUrl}
            rel="noreferrer"
            target="_blank">
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
            target="_blank">
            <City className="text-5xl" />
          </Link>
        )}
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-5">{children}</div>
  </div>
);

export { Card };
