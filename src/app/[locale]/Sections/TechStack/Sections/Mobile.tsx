import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Technologies } from "@/app/[locale]/shared/Technologies";

const Mobile = () => {
  const technologies = [
    {
      name: "React Native",
      Icon: ReactIcon,
    },
  ];

  return <Technologies title="Mobile" technologies={technologies} />;
};

export { Mobile };
