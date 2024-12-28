import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Technologies } from "@/app/shared/Technologies";

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
