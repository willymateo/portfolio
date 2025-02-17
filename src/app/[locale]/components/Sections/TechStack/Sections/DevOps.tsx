import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Docker } from "@/app/[locale]/shared/Icons/Docker";
import { Github } from "@/app/[locale]/shared/Icons/Github";

const DevOps = () => {
  const technologies = [
    { name: "Docker", Icon: Docker },
    {
      name: "Terraform",
      Icon: () => <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />,
    },
    { name: "Github Actions", Icon: Github },
  ];

  return <Technologies title="DevOps" technologies={technologies} />;
};

export { DevOps };
