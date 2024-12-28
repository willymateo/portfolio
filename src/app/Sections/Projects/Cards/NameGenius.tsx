import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { Vercel } from "@/app/shared/Icons/Vercel";
import { Github } from "@/app/shared/Icons/Github";
import { NextJs } from "@/app/shared/Icons/NextJs";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Git } from "@/app/shared/Icons/Git";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const isDark = false;

const NameGenius = () => (
  <Card
    description="NameGenius is a free web application designed to solve the challenge of finding creative and unique names for businesses, projects, or teams. By leveraging artificial intelligence, it generates tailored name suggestions, streamlining a process that can be time-consuming and difficult. The application offers an intuitive user experience with features like dark and light modes, making it accessible for a wide range of users. NameGenius simplifies the naming process by utilizing cutting-edge technology to inspire creativity and save time."
    imgUrl={isDark ? "/images/namegenius-dark-banner.png" : "/images/namegenius-light-banner.png"}
    websiteUrl="https://www.namegenius.app"
    imgAlt="NameGenius website"
    title="NameGenius"
  >
    <Technologies>
      <Tag>
        <TypeScript />

        <p className="text-center">TypeScript</p>
      </Tag>

      <Tag>
        <ReactIcon />

        <p className="text-center">React</p>
      </Tag>

      <Tag>
        <NextJs />

        <p className="text-center">Next Js</p>
      </Tag>

      <Tag>
        <ReduxIcon />

        <p className="text-center">Redux</p>
      </Tag>

      <Tag>
        <ChakraUI />

        <p className="text-center">Chakra UI</p>
      </Tag>

      <Tag>
        <HTML5 />

        <p className="text-center">HTML-5</p>
      </Tag>

      <Tag>
        <CSS3 />

        <p className="text-center">CSS 3</p>
      </Tag>

      <Tag>
        <Vercel />

        <p className="text-center">Vercel</p>
      </Tag>

      <Tag>
        <Git />

        <p className="text-center">Git</p>
      </Tag>

      <Tag>
        <Github />

        <p className="text-center">Github</p>
      </Tag>
    </Technologies>
  </Card>
);

export { NameGenius };
