import { CommunityMomentsSelector } from "./CommunityMomentsSelector";
import { CommunityMomentsSlider } from "./CommunityMomentsSlider";

import "./index.css";

const TechCommunity = () => (
  <section className="tech-community-container">
    <CommunityMomentsSlider className="flex xl:hidden" />

    <CommunityMomentsSelector className="hidden xl:flex" />
  </section>
);

export { TechCommunity };
