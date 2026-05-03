"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Shield, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const atsukoInviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1130772002580475954&permissions=8&integration_type=0&scope=bot";

export function InviteSection() {
  return (
    <section id="invite" className="relative isolate scroll-mt-[72px] overflow-hidden bg-[#020611] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-atsuko-pink/40 to-transparent" />
      <div className="absolute right-[12%] top-12 h-72 w-72 rounded-full bg-atsuko-pink/12 blur-3xl" />
      <div className="absolute bottom-0 left-[8%] h-72 w-72 rounded-full bg-atsuko-cyan/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1180px] px-5 sm:px-8"
      >
        <div className="glass-panel grid gap-8 rounded-[28px] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-atsuko-pink/30 bg-pink-400/8 px-3 py-1.5 text-sm font-medium text-pink-100">
              <Sparkles className="size-4 text-atsuko-pink" />
              Ready for your server
            </div>
            <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">Bring Atsuko into your community.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Music, moderation, utility commands, AI chat, anime fun, and Minecraft tools in one polished Discord bot.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg">
              <a href={atsukoInviteUrl} target="_blank" rel="noreferrer" aria-label="Invite Atsuko">
                Invite Atsuko <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#commands">
                View Commands <Bot className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Fast setup", "Smart safeguards", "Premium command UX"].map((label) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200">
              <Shield className="mr-2 inline size-4 text-atsuko-cyan" />
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
