import { Gym, Running } from "iconoir-react";
import Link from "next/link";

import { SECTIONS } from "./constants";

const Hobbies = () => (
  <div id={SECTIONS.HOBBIES} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.HOBBIES}`}>Hobbies</Link>
    </h2>

    <ul className="flex flex-col gap-5">
      <li className="flex flex-row items-center justify-center flex-wrap gap-5">
        <div>
          <Running />
        </div>

        <p className="flex-1">
          I am lucky enough to live in a village close to the mountains and the beach, in the
          afternoons it makes me happy to go for a run in natural spaces.
        </p>
      </li>

      <li className="flex flex-row items-center justify-center gap-5">
        <div>
          <Gym />
        </div>

        <p className="flex-1">
          Another activity I do to keep my body and mind healthy is going to the gym with my
          friends.
        </p>
      </li>
    </ul>
  </div>
);

export { Hobbies };
