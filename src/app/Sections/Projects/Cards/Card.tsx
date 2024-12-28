import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { PrimaryButton } from "@/app/shared/Buttons/Primary";
import { SubTitle } from "@/app/shared/SubTitle";

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
  <div className="grid auto-rows-min grid-cols-1 justify-items-center gap-x-16 gap-y-10 xl:grid-rows-1 xl:grid-cols-5">
    <Link
      className={`row-span-1 col-span-1 xl:col-span-2 ${websiteUrl ? "" : "pointer-events-none"}`}
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

              <span className="text-center">Go to website</span>
            </PrimaryButton>
          </Link>
        </div>
      )}
    </div>
  </div>
);

export { Card };
