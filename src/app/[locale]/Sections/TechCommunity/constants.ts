import awsCommunityDay20242 from "@/../public/images/tech-community/aws-community-day-2024-2.jpeg";
import awsCommunityDay20243 from "@/../public/images/tech-community/aws-community-day-2024-3.jpeg";
import awsCommunityDay20241 from "@/../public/images/tech-community/aws-community-day-2024-1.jpg";
import googleDevFest20241 from "@/../public/images/tech-community/google-devfest-2024-1.jpg";
import shippifyChristmas1 from "@/../public/images/tech-community/shippify-christmas-1.jpg";
import espolGraduation1 from "@/../public/images/tech-community/espol-graduation-1.jpeg";
import scientificMerit1 from "@/../public/images/tech-community/scientific-merit-1.png";
import scientificMerit2 from "@/../public/images/tech-community/scientific-merit-2.jpg";
import scientificMerit3 from "@/../public/images/tech-community/scientific-merit-3.jpg";
import { CommunityMoment } from "./types";

const COMMUNITY_MOMENTS: CommunityMoment[] = [
  {
    imageSrc: awsCommunityDay20241.src,
    name: "Opening of the AWS Community Day 2024",
    alt: "Opening of the AWS Community Day 2024",
    id: "awsCommunityDay20241",
    className: "object-center",
  },
  {
    imageSrc: awsCommunityDay20243.src,
    name: "First conference in the AWS Community Day 2024",
    alt: "First conference in the AWS Community Day 2024",
    id: "awsCommunityDay20243",
    className: "object-center",
  },
  {
    name: "Closing of the AWS Community Day 2024",
    alt: "Closing of the AWS Community Day 2024",
    imageSrc: awsCommunityDay20242.src,
    id: "awsCommunityDay20242",
    className: "object-center",
  },
  {
    imageSrc: googleDevFest20241.src,
    name: "Google DevFest 2024",
    alt: "Google DevFest 2024",
    id: "googleDevFest20241",
    className: "object-top",
  },
  {
    name: "Receiving the Diploma for Scientific Merit",
    alt: "Receiving the Diploma for Scientific Merit",
    imageSrc: scientificMerit2.src,
    className: "object-top",
    id: "scientificMerit2",
  },
  {
    name: "Celebrating my Scientific Diploma",
    alt: "Celebrating my Scientific Diploma",
    imageSrc: scientificMerit3.src,
    className: "object-center",
    id: "scientificMerit3",
  },
  {
    name: "Welcome to the ESPOL Scientific Community",
    alt: "Welcome to the ESPOL Scientific Community",
    imageSrc: scientificMerit1.src,
    className: "object-top",
    id: "scientificMerit1",
  },
  {
    imageSrc: espolGraduation1.src,
    name: "Engineering Graduation at ESPOL",
    alt: "Engineering Graduation at ESPOL",
    id: "espolGraduation1",
    className: "object-center object-left",
  },
  {
    imageSrc: shippifyChristmas1.src,
    name: "Christmas at Shippify Inc.",
    alt: "Christmas at Shippify Inc.",
    id: "shippifyChristmas1",
    className: "object-center",
  },
];

export { COMMUNITY_MOMENTS };
