import { useTranslations } from "next-intl";

import { TechnologiesProps } from "./types";
import { SubTitle } from "../SubTitle";
import { Tag } from "../Motion/Tag";

const Technologies = ({ title, technologies }: TechnologiesProps) => {
  const t = useTranslations("home.techStack");

  return (
    <div className="flex flex-col gap-10">
      <SubTitle>{title || t("Technologies")}</SubTitle>

      <div className="flex flex-row flex-wrap items-center gap-x-5 gap-y-3">
        {technologies.map(({ name, Icon }, index) => (
          <Tag
            key={name}
            transition={{
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              delay: index * 0.1,
              duration: 0.1,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
          >
            <Icon />

            <p className="text-center">{name}</p>
          </Tag>
        ))}
      </div>
    </div>
  );
};

export { Technologies };
