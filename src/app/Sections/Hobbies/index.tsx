import { Gym, Running, Swimming } from "iconoir-react";
import Image from "next/image";
import Link from "next/link";

import { SECTIONS } from "../constants";

const Hobbies = () => (
  <div id={SECTIONS.HOBBIES} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.HOBBIES}`}>Hobbies</Link>
    </h2>

    <div className="flex flex-col justify-center items-center flex-wrap gap-x-8 gap-y-5 lg:flex-row">
      <ul className="flex-1 flex flex-col gap-5">
        <li className="flex flex-row items-center justify-center flex-wrap gap-5">
          <div>
            <Swimming />
          </div>

          <p className="flex-1">
            Ecuador is a country that has beautiful beaches, so I enjoy going surfing with my
            friends on weekends and holidays.
          </p>
        </li>

        <li className="flex flex-row items-center justify-center flex-wrap gap-5">
          <div>
            <Running />
          </div>

          <p className="flex-1">
            I am lucky enough to live in a village close to the mountains, in the afternoons it
            makes me happy to go for a run in natural spaces.
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

      <Image
        className="object-contain rounded-xl"
        alt="hobbies of Willy Mateo"
        src="/images/surf.jpg"
        height={300}
        width={500}
      />
    </div>
  </div>
);

export { Hobbies };
