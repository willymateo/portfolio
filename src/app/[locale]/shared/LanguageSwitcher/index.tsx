"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

import { LotusFlower } from "../Loaders/LotusFlower";
import { useActive } from "@/hooks/useActive";
import { Menu } from "./Menu";
import "./types";

const LanguageSwitcher = () => {
  const { disable: closeMenu, toggle: toggleMenu, isActive: menuIsOpen } = useActive();
  const { enable: startChangingLocale, isActive: isChangingLocale } = useActive();
  const headerRef = useRef<HTMLButtonElement>(null);
  const locale = useLocale();

  useEffect(() => {
    const closeMenuWhenClickOutside = (e: MouseEvent) => {
      if (!headerRef.current) {
        return;
      }

      if (!headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("click", closeMenuWhenClickOutside);

    return () => document.removeEventListener("click", closeMenuWhenClickOutside);
  }, []);

  return (
    <div className={`flex flex-row gap-5 items-center ${isChangingLocale ? "opacity-60" : ""}`}>
      {isChangingLocale && <LotusFlower className="w-6 h-6" />}

      <button className="flex flex-col font-bold relative" onClick={toggleMenu} ref={headerRef}>
        {locale.toUpperCase()}

        <AnimatePresence>
          {menuIsOpen && (
            <Menu
              className="absolute top-7 font-normal cursor-text right-0"
              onChangeLocale={startChangingLocale}
            />
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export { LanguageSwitcher };
