import { Www } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "@/app/shared/Buttons/Primary";

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
}: Props) => (
  <div className="flex flex-col justify-center items-center flex-wrap gap-x-8 gap-y-3 lg:flex-row">
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
          <Link
            className={websiteUrl ? "" : "pointer-events-none"}
            href={websiteUrl}
            rel="noreferrer"
            target="_blank">
            <h3 className="text-2xl">{title}</h3>
          </Link>
          <p>{description}</p>
        </div>

        {children}
      </div>

      {websiteUrl && (
        <div className="flex flex-row justify-end gap-3">
          <Link href={websiteUrl} rel="noreferrer" target="_blank">
            <PrimaryButton>
              <Www />

              <span className="text-center">Go to website</span>
            </PrimaryButton>
          </Link>
        </div>
      )}
    </div>
  </div>
);

export { Card };
