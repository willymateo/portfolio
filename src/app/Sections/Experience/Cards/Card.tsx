import { intlFormat, isValid } from "date-fns";
import Image from "next/image";

import { Technologies } from "@/app/shared/Technologies";

interface Props {
  children?: React.ReactNode;
  enterpriseImgUrl?: string;
  enterpriseImgAlt?: string;
  enterpriseName?: string;
  activities?: string[];
  jobTitle?: string;
  startDate: Date;
  endDate?: Date;
}

const Card = ({
  enterpriseImgUrl = "",
  enterpriseImgAlt = "",
  enterpriseName = "",
  activities = [],
  jobTitle = "",
  startDate,
  children,
  endDate,
}: Props) => (
  <div className="flex flex-row justify-start align-center flex-wrap gap-x-16 gap-y-3">
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl">{enterpriseName}</h3>

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
        <Image
          className="object-contain"
          src={enterpriseImgUrl}
          alt={enterpriseImgAlt}
          height={200}
          width={150}
        />
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-3">
      <ul className="flex flex-col gap-1 list-disc ps-5">
        {activities?.map((activity = "", index) => <li key={index}>{activity}</li>)}
      </ul>

      <Technologies>{children}</Technologies>
    </div>
  </div>
);

export { Card };
