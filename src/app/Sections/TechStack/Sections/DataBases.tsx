import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MycrosoftSQLServer } from "@/app/shared/Icons/MicrosoftSQLServer";
import { PostgreSQL } from "@/app/shared/Icons/PostgreSQL";
import { Technologies } from "@/app/shared/Technologies";
import { Firebase } from "@/app/shared/Icons/Firebase";
import { MongoDB } from "@/app/shared/Icons/MongoDB";
import { SQLite } from "@/app/shared/Icons/SQLite";
import { MySQL } from "@/app/shared/Icons/MySQL";
import { Tag } from "@/app/shared/Tag";

const Databases = () => (
  <Technologies title="Databases">
    <Tag>
      <MySQL />

      <p className="text-center">MySQL</p>
    </Tag>

    <Tag>
      <PostgreSQL />

      <p className="text-center">PostgreSQL</p>
    </Tag>

    <Tag>
      <MongoDB />

      <p className="text-center">Mongo DB</p>
    </Tag>

    <Tag>
      <Firebase />

      <p className="text-center">Firestore</p>
    </Tag>

    <Tag>
      <SQLite />

      <p className="text-center">SQLite</p>
    </Tag>

    <Tag>
      <MycrosoftSQLServer />

      <p className="text-center">Mycrosoft SQL Server</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />

      <p className="text-center">Oracle</p>
    </Tag>
  </Technologies>
);

export { Databases };
