import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { MycrosoftSQLServer } from "@/app/[locale]/shared/Icons/MicrosoftSQLServer";
import { PostgreSQL } from "@/app/[locale]/shared/Icons/PostgreSQL";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Firebase } from "@/app/[locale]/shared/Icons/Firebase";
import { MongoDB } from "@/app/[locale]/shared/Icons/MongoDB";
import { SQLite } from "@/app/[locale]/shared/Icons/SQLite";
import { MySQL } from "@/app/[locale]/shared/Icons/MySQL";

const Databases = () => {
  const t = useTranslations("home.techStack");

  const technologies = [
    { name: "MySQL", Icon: MySQL },
    { name: "PostgreSQL", Icon: PostgreSQL },
    { name: "MongoDB", Icon: MongoDB },
    { name: "Firestore", Icon: Firebase },
    { name: "SQLite", Icon: SQLite },
    { name: "Mycrosoft SQL Server", Icon: MycrosoftSQLServer },
    {
      name: "Oracle",
      Icon: () => <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />,
    },
  ];

  return <Technologies title={t("Databases")} technologies={technologies} />;
};

export { Databases };
