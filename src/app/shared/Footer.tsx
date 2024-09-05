import { Heart } from "iconoir-react";

const Footer = () => (
  <footer className="flex flex-row items-center justify-center bg-black text-white px-10 py-5 sticky bottom-0">
    <div className="text-center">
      Designed and developed with <Heart className="inline-block" /> by{" "}
      <span className="font-bold">Willy Mateo</span>
    </div>
  </footer>
);

export { Footer };
