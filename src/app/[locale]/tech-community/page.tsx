import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";

import { CommunityMomentsSelector } from "./CommunityMomentsSelector";
import { CommunityMomentsSlider } from "./CommunityMomentsSlider";
import { SECTIONS } from "../constants";

import "./index.css";

const TechCommunity = () => {
  const messages = useMessages();

  return (
    <section id={SECTIONS.TECH_COMMUNITY} className="tech-community-container">
      <CommunityMomentsSlider className="flex xl:hidden" />

      <NextIntlClientProvider messages={messages.techCommunity as AbstractIntlMessages}>
        <CommunityMomentsSelector className="hidden xl:flex" />
      </NextIntlClientProvider>
    </section>
  );
};

export default TechCommunity;
