"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

import { AnimatePresence } from "motion/react";
import { useActive } from "@/hooks/useActive";
import { Menu } from "./Menu";
import "./types";

const LanguageSwitcher = () => {
  const { disable: closeMenu, toggle: toggleMenu, isActive: menuIsOpen } = useActive();
  const locale = useLocale();
  const headerRef = useRef<HTMLButtonElement>(null);

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
    <button className="flex flex-col font-bold relative" onClick={toggleMenu} ref={headerRef}>
      {locale.toUpperCase()}

      <AnimatePresence>
        {menuIsOpen && (
          <Menu className="absolute top-7 font-normal cursor-text right-0" onClose={closeMenu} />
        )}
      </AnimatePresence>
    </button>
  );
};

export { LanguageSwitcher };
