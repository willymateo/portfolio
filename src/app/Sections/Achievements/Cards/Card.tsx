import { City } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  description?: string;
  imgHeight?: number;
  imgWidth?: number;
  subTitle?: string;
  imgUrl?: string;
  imgAlt?: string;
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
  children,
}: Props) => (
  <div className="flex flex-col gap-x-16 gap-y-3 sm:flex-row sm:flex-wrap">
    <div className="flex flex-col gap-3 max-w-md">
      <h3 className="text-2xl">{title}</h3>

      <div className="flex flex-col">
        <Link
          className={href ? "" : "pointer-events-none"}
          href={href}
          rel="noreferrer"
          target="_blank">
          <h4 className="text-xl">{subTitle}</h4>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        {imgUrl ? (
          <Link
            className={`${href ? "" : "pointer-events-none"}`}
            href={href}
            rel="noreferrer"
            target="_blank">
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
            href={href}
            rel="noreferrer"
            target="_blank">
            <City className="text-5xl" />
          </Link>
        )}
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-5">
      <p className="flex flex-col gap-1 list-disc">{description}</p>

      <div className="flex flex-row justify-start items-center">{children}</div>
    </div>
  </div>
);

export { Card };
