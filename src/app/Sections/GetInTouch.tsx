import { Copy, Developer, SendMail } from "iconoir-react";
import Link from "next/link";

import { SocialNetworks } from "@/app/shared/SocialNetworks";
import { EMAIL } from "@/shared/constants";
import { SECTIONS } from "./constants";

const GetInTouch = () => (
  <div id={SECTIONS.GET_IN_TOUCH} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.GET_IN_TOUCH}`}>GetInTouch</Link>
    </h2>

    <div className="flex flex-col gap-5">
      <h3 className="flex flex-row gap-2 items-center text-2xl">
        <span>Let's build something together</span>
        <Developer />
        <span>!</span>
      </h3>

      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-row gap-10 rounded-xl bg-black bg-opacity-20 p-5">
          <span>{EMAIL}</span>

          <div className="flex flex-row flex-wrap gap-5">
            <SendMail />
            <Copy />
          </div>
        </div>

        <SocialNetworks itemsClassName="p-3" />
      </div>
    </div>
  </div>
);

export { GetInTouch };
