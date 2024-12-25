import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons/faHandHoldingHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-black text-white px-10 py-5 sticky bottom-0 z-[9999]">
    <div className="text-center">
      Designed and developed with
      <FontAwesomeIcon icon={faHandHoldingHeart} className="w-[30px] h-[30px] inline-block mx-3" />
      by
      <span className="font-bold ml-2">Willy Mateo</span>
    </div>
  </footer>
);

export { Footer };
