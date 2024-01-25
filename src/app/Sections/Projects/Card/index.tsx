import { Www } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
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
}: Props) => (
  <div className="flex flex-row justify-center flex-wrap gap-x-8 gap-y-3">
    <Link
      className={websiteUrl ? "" : "pointer-events-none"}
      href={websiteUrl}
      rel="noreferrer"
      target="_blank">
      <Image
        className="object-contain rounded-xl"
        src={imgUrl}
        alt={imgAlt}
        height={300}
        width={500}
      />
    </Link>

    <div className="flex-1 flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl">{title}</h3>
          <p>{description}</p>
        </div>

        {children}
      </div>

      {websiteUrl && (
        <div className="flex flex-row justify-end gap-3">
          <Link
            className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2"
            href={websiteUrl}
            rel="noreferrer"
            target="_blank">
            <Www />

            <span className="text-center">Go to website</span>
          </Link>
        </div>
      )}
    </div>
  </div>
);

export { Card };
