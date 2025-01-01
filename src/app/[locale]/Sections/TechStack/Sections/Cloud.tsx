import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Firebase } from "@/app/[locale]/shared/Icons/Firebase";
import { Railway } from "@/app/[locale]/shared/Icons/Railway";
import { Netlify } from "@/app/[locale]/shared/Icons/Netlify";
import { Vercel } from "@/app/[locale]/shared/Icons/Vercel";
import { AWS } from "@/app/[locale]/shared/Icons/AWS";

const Cloud = () => {
  const technologies = [
    {
      name: "AWS",
      Icon: AWS,
    },
    {
      name: "Firebase",
      Icon: Firebase,
    },
    {
      name: "Vercel",
      Icon: Vercel,
    },
    {
      name: "Railway",
      Icon: Railway,
    },
    {
      name: "Netlify",
      Icon: Netlify,
    },
  ];

  return <Technologies title="Cloud" technologies={technologies} />;
};

export { Cloud };
