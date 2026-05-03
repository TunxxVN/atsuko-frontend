"use client";

import { motion } from "framer-motion";
import { MessageSquare, Server, Terminal } from "lucide-react";

import { botCommands } from "@/lib/commands";

const stats = [
  { label: "Slash Commands", value: botCommands.length.toString(), icon: Terminal },
  { label: "Categories", value: "9", icon: Server },
  { label: "Active Development", value: "v2.7.0", icon: MessageSquare },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-white/8 bg-[#020815]">
      <div className="absolute inset-0 bg-gradient-to-r from-atsuko-cyan/[0.03] via-transparent to-atsuko-pink/[0.03]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-[1450px] gap-0 px-5 py-6 sm:grid-cols-3 sm:px-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex items-center justify-center text-center gap-3 px-4 py-3 ${index > 0 ? "sm:border-l sm:border-white/8" : ""}`}
            >
              <Icon className="size-5 text-atsuko-cyan" />
              <div className="flex flex-col items-center">
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs font-medium text-slate-400">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
