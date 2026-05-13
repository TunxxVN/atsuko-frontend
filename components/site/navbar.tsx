"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AtsukoLogo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { tunxUrl } from "@/lib/links";
import { cn } from "@/lib/utils";

const navItems = ["Home", "Commands", "Invite"];
const mobileMenuId = "mobile-navigation-menu";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "commands", "invite"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -69% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#020916]/72 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-[72px] max-w-[1450px] items-center justify-between px-5 sm:px-8">
        <AtsukoLogo />
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={item}
                className={cn(
                  "relative text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white",
                  isActive && "text-atsuko-cyan",
                )}
                href={`#${id}`}
              >
                {item}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-[25px] left-0 h-0.5 w-full bg-atsuko-cyan"
                  />
                ) : null}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={tunxUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-slate-400 transition hover:text-white sm:block"
          >
            Owner: <span className="font-bold text-atsuko-pink">Tunx</span>
          </a>
          <Button
            className="relative md:hidden"
            size="icon"
            variant="ghost"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-controls={mobileMenuId}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="absolute h-0.5 w-5 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute h-0.5 w-5 bg-current"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute h-0.5 w-5 bg-current"
            />
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id={mobileMenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.08] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-atsuko-cyan/10 text-atsuko-cyan"
                        : "text-slate-300 hover:bg-white/5 hover:text-white",
                    )}
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
              <a
                href={tunxUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white sm:hidden"
              >
                Created by <span className="font-bold text-atsuko-pink">Tunx</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
