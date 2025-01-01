import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Docker } from "@/app/shared/Icons/Docker";
import { Github } from "@/app/shared/Icons/Github";

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
