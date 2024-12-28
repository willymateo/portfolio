import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/shared/Icons/Express";
import { ElasticSearch } from "@/app/shared/Icons/ElasticSearch";
import { NodeJs as NodeJsIcon } from "@/app/shared/Icons/NodeJs";
import { Technologies } from "@/app/shared/Technologies";
import { NestJs } from "@/app/shared/Icons/NestJs";
import { Django } from "@/app/shared/Icons/Django";
import { Tag } from "@/app/shared/Tag";

const BackEnd = () => (
  <Technologies title="Back-end">
    <Tag>
      <NodeJsIcon />

      <p className="text-center">Node Js</p>
    </Tag>

    <Tag>
      <ExpressIcon />

      <p className="text-center">Express</p>
    </Tag>

    <Tag>
      <NestJs />

      <p className="text-center">NestJs</p>
    </Tag>

    <Tag>
      <Django />

      <p className="text-center">Django</p>
    </Tag>

    <Tag>
      <ElasticSearch />

      <p className="text-center">Elasticsearch</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />

      <p className="text-center">REST APIs</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />

      <p className="text-center">Supertest</p>
    </Tag>
  </Technologies>
);

export { BackEnd };
