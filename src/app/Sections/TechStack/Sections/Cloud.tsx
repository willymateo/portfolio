import { Technologies } from "@/app/shared/Technologies";
import { Firebase } from "@/app/shared/Icons/Firebase";
import { Railway } from "@/app/shared/Icons/Railway";
import { Netlify } from "@/app/shared/Icons/Netlify";
import { Vercel } from "@/app/shared/Icons/Vercel";
import { AWS } from "@/app/shared/Icons/AWS";

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
