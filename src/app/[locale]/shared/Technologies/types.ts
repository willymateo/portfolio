import { FC } from "react";

export type TechnologiesProps = {
  technologies: Technology[];
  title?: string;
};

export type Technology = {
  name: string;
  Icon: FC;
};
