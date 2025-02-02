import { BackgroundSVG } from "../shared/BackgroundSVG";

const Background = () => (
  <div className="opacity-30 fixed top-[47px] lg:top-[63px] bottom-[76px] left-0 right-0 z-[0]">
    <div className="w-full h-full">
      <BackgroundSVG />
    </div>
  </div>
);

export { Background };
