import { GithubCircle, Linkedin, Mail } from "iconoir-react";
import Link from "next/link";

import { EMAIL } from "@/shared/constants";

interface Props {
  itemsClassName?: string;
}

const SocialNetworks = ({ itemsClassName = "" }: Props) => (
  <ul className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3">
    <li className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}>
      <Link href="https://www.linkedin.com/in/willymateo/" target="_blank" rel="noreferrer">
        <Linkedin className="text-xl" />
      </Link>
    </li>

    <li className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}>
      <Link href="https://github.com/willymateo" target="_blank" rel="noreferrer">
        <GithubCircle className="text-xl" />
      </Link>
    </li>

    <li className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}>
      <Link href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
        <Mail className="text-xl" />
      </Link>
    </li>
  </ul>
);

export { SocialNetworks };
