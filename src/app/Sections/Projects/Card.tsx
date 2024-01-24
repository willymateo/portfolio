import { Www } from "iconoir-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  websiteUrl?: string;
  imgUrl?: string;
  imgAlt?: string;
  title?: string;
}

const Card = ({ title = "", imgUrl = "", imgAlt = "", websiteUrl = "", children }: Props) => (
  <div className="flex flex-row justify-center flex-wrap gap-8">
    <img src={imgUrl} alt={imgAlt} className="object-contain rounded-xl" />

    <div className="flex-1 flex flex-col justify-between gap-5">
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl">{title}</h3>
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
