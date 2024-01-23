import { GithubCircle, Linkedin, Mail } from "iconoir-react";
import Link from "next/link";

const SocialNetworks = () => (
  <ul className="flex flex-row items-center justify-center flex-wrap gap-10">
    <li className="bg-black bg-opacity-20 rounded-full p-2 hover:shadow-2xl">
      <Link href="https://www.linkedin.com/in/willymateo/" target="_blank">
        <Linkedin />
      </Link>
    </li>

    <li className="bg-black bg-opacity-20 rounded-full p-2 hover:shadow-2xl">
      <Link href="https://github.com/willymateo" target="_blank">
        <GithubCircle />
      </Link>
    </li>

    <li className="bg-black bg-opacity-20 rounded-full p-2 hover:shadow-2xl">
      <Link href="mailto:matheoowilly@gmail.com" target="_blank">
        <Mail />
      </Link>
    </li>
  </ul>
);

export { SocialNetworks };
