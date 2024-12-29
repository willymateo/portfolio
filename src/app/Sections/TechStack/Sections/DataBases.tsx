import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MycrosoftSQLServer } from "@/app/shared/Icons/MicrosoftSQLServer";
import { PostgreSQL } from "@/app/shared/Icons/PostgreSQL";
import { Technologies } from "@/app/shared/Technologies";
import { Firebase } from "@/app/shared/Icons/Firebase";
import { MongoDB } from "@/app/shared/Icons/MongoDB";
import { SQLite } from "@/app/shared/Icons/SQLite";
import { MySQL } from "@/app/shared/Icons/MySQL";

const Databases = () => {
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

  return <Technologies title="Databases" technologies={technologies} />;
};

export { Databases };
