import { Technologies } from "@/app/shared/Technologies";
import { Firebase } from "@/app/shared/Icons/Firebase";
import { Railway } from "@/app/shared/Icons/Railway";
import { Netlify } from "@/app/shared/Icons/Netlify";
import { Vercel } from "@/app/shared/Icons/Vercel";
import { AWS } from "@/app/shared/Icons/AWS";
import { Tag } from "@/app/shared/Tag";

const Cloud = () => (
  <Technologies title="Cloud">
    <Tag>
      <AWS />

      <p className="text-center">AWS</p>
    </Tag>

    <Tag>
      <Firebase />

      <p className="text-center">Firebase</p>
    </Tag>

    <Tag>
      <Vercel />

      <p className="text-center">Vercel</p>
    </Tag>

    <Tag>
      <Railway />

      <p className="text-center">Railway</p>
    </Tag>

    <Tag>
      <Netlify />

      <p className="text-center">Netlify</p>
    </Tag>
  </Technologies>
);

export { Cloud };
