"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Box,
  ChevronDown,
  Gamepad2,
  Info,
  ListFilter,
  Music,
  Search,
  Shield,
  Sparkles,
  Star,
  Terminal,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { botCommands, categoryLabels, categoryOrder, type BotCommand, type CommandCategory } from "@/lib/commands";
import { cn } from "@/lib/utils";

const atsukoInviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1130772002580475954&permissions=8&integration_type=0&scope=bot";

const categoryIcons: Record<CommandCategory, typeof Music> = {
  admin: Shield,
  ai: Bot,
  fun: Gamepad2,
  image: Star,
  info: Info,
  minecraft: Box,
  moderation: Shield,
  music: Music,
  utility: Wrench,
};

const categoryColors: Record<CommandCategory, string> = {
  admin: "text-amber-400",
  ai: "text-violet-400",
  fun: "text-pink-400",
  image: "text-rose-400",
  info: "text-sky-400",
  minecraft: "text-emerald-400",
  moderation: "text-blue-400",
  music: "text-cyan-400",
  utility: "text-orange-400",
};

function matchesCommand(command: BotCommand, query: string) {
  if (!query) return true;
  const target = [
    command.name,
    command.description,
    categoryLabels[command.category],
    ...(command.subcommands ?? []).flatMap((subcommand) => [subcommand.name, subcommand.description]),
  ]
    .join(" ")
    .toLowerCase();

  return target.includes(query);
}

export function CommandsSection() {
  const [activeCategory, setActiveCategory] = useState<CommandCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCommand, setExpandedCommand] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const categoryCounts = useMemo(
    () =>
      categoryOrder.map((category) => ({
        category,
        count: botCommands.filter((command) => command.category === category).length,
      })),
    [],
  );

  const query = searchQuery.trim().toLowerCase();
  const visibleCommands = useMemo(
    () =>
      botCommands.filter((command) => {
        const categoryMatches = activeCategory === "all" || command.category === activeCategory;
        return categoryMatches && matchesCommand(command, query);
      }),
    [activeCategory, query],
  );

  return (
    <section id="commands" className="relative isolate scroll-mt-[72px] overflow-hidden bg-[#020815] py-20 sm:py-28">
      <div className="star-field absolute inset-0 opacity-25" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-atsuko-cyan/40 to-transparent" />
      <div className="absolute left-1/2 top-10 h-56 w-[40rem] -translate-x-1/2 rounded-full bg-atsuko-cyan/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-atsuko-cyan/30 bg-cyan-400/8 px-3 py-1.5 text-sm font-medium text-cyan-100">
              <Terminal className="size-4 text-atsuko-cyan" />
              {botCommands.length} bot commands
            </div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Commands</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Dense slash-command reference with search, categories, and expandable subcommands.
            </p>
          </div>

          <label className="glass-panel flex h-12 w-full max-w-lg items-center gap-3 rounded-xl px-4 text-slate-400 transition focus-within:border-atsuko-cyan/50 focus-within:shadow-[0_0_16px_rgba(37,207,255,.12)]">
            <Search className="size-4" />
            <input
              ref={searchRef}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="h-full min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              placeholder="Search commands or descriptions..."
              aria-label="Search commands"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="rounded p-0.5 text-slate-400 transition hover:text-white"
                aria-label="Clear search"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            ) : (
              <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-slate-400 sm:block">
                Ctrl K
              </kbd>
            )}
          </label>
        </motion.div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[240px_1fr]">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.06, duration: 0.5 }}
            className="glass-panel h-max rounded-2xl p-3 lg:sticky lg:top-24"
          >
            <Button
              type="button"
              variant={activeCategory === "all" ? "primary" : "ghost"}
              className="mb-2 h-10 w-full justify-between px-3"
              onClick={() => setActiveCategory("all")}
            >
              <span className="inline-flex items-center gap-2">
                <ListFilter className="size-4" />
                All
              </span>
              <span className="text-xs opacity-75">{botCommands.length}</span>
            </Button>

            <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {categoryCounts.map(({ category, count }) => {
                const Icon = categoryIcons[category];
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "flex h-10 items-center justify-between rounded-md px-3 text-left text-sm font-semibold transition",
                      active
                        ? "bg-atsuko-cyan text-slate-950 shadow-neon"
                        : "text-slate-300 hover:bg-white/7 hover:text-white",
                    )}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className={cn("size-4", active ? "text-slate-950" : categoryColors[category])} />
                      {categoryLabels[category]}
                    </span>
                    <span className="text-xs opacity-75">{count}</span>
                  </button>
                );
              })}
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-panel overflow-hidden rounded-2xl"
          >
            <div className="grid grid-cols-[minmax(145px,0.5fr)_1fr_120px] border-b border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400 max-md:hidden">
              <span>Command</span>
              <span>Description</span>
              <span>Category</span>
            </div>

            <motion.div layout className="divide-y divide-white/8">
              {visibleCommands.map((command, index) => {
                const Icon = categoryIcons[command.category];
                const hasSubcommands = Boolean(command.subcommands?.length);
                const isExpanded = expandedCommand === command.name;

                return (
                  <motion.article
                    key={command.name}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.22 }}
                    className={cn("group", index % 2 === 1 && "bg-white/[0.02]")}
                  >
                    <motion.button
                      type="button"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.035)" }}
                      transition={{ duration: 0.18 }}
                      onClick={() => setExpandedCommand(isExpanded ? null : command.name)}
                      disabled={!hasSubcommands}
                      className={cn(
                        "grid w-full grid-cols-1 gap-3 px-5 py-3.5 text-left transition md:grid-cols-[minmax(145px,0.5fr)_1fr_120px] md:items-center",
                        hasSubcommands ? "cursor-pointer" : "cursor-default",
                      )}
                      aria-expanded={hasSubcommands ? isExpanded : undefined}
                    >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/6">
                            <Icon className="size-4 text-atsuko-cyan" />
                          </span>
                          <span className="truncate font-mono text-[13px] font-semibold text-white">/{command.name}</span>
                        </span>
                        <span className="text-sm leading-6 text-slate-400">{command.description}</span>
                        <span className="flex items-center justify-between gap-3 text-xs font-semibold text-pink-300">
                          {categoryLabels[command.category]}
                          {hasSubcommands ? (
                            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="size-4 text-slate-500" />
                            </motion.span>
                          ) : null}
                        </span>
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {hasSubcommands && isExpanded ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden border-t border-white/8 bg-slate-950/30"
                        >
                          <motion.div
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { transition: { staggerChildren: 0.035, delayChildren: 0.03 } },
                              collapsed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                            }}
                            className="grid gap-2 px-4 py-3 md:grid-cols-2"
                          >
                            {command.subcommands?.map((subcommand) => (
                              <motion.div
                                key={subcommand.name}
                                variants={{
                                  open: { opacity: 1, y: 0 },
                                  collapsed: { opacity: 0, y: -6 },
                                }}
                                transition={{ duration: 0.2 }}
                                className="rounded-md border border-white/8 bg-white/[0.03] px-3 py-2"
                              >
                                <p className="font-mono text-xs font-semibold text-cyan-300">
                                  /{command.name} {subcommand.name}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-400">{subcommand.description}</p>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.article>
                );
              })}
            </motion.div>

            {visibleCommands.length === 0 ? (
              <div className="flex flex-col items-center gap-3 px-4 py-16 text-center">
                <Search className="size-8 text-slate-500" />
                <p className="text-sm font-medium text-slate-300">No commands match that search.</p>
                <p className="text-xs text-slate-500">Try a different keyword or clear your filters.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-1 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  Clear all filters
                </button>
              </div>
            ) : null}
          </motion.div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 lg:ml-[260px]">
          <span>
            Showing <span className="font-bold text-white">{visibleCommands.length}</span> of{" "}
            <span className="font-bold text-white">{botCommands.length}</span>.
          </span>
          <a
            href={atsukoInviteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-atsuko-cyan hover:text-cyan-200"
          >
            Invite Atsuko <Sparkles className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
