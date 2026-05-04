"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Box,
  Heart,
  Music,
  Shield,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from "lucide-react";

import { hoverLift } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const atsukoLogoImage = "/assets/atsuko-logo.webp";
const atsukoInviteUrl =
  "https://discord.com/oauth2/authorize?client_id=1130772002580475954&permissions=8&integration_type=0&scope=bot";
const tunxUrl = "https://discord.com/users/677792501410693120";

const benefits = [
  {
    title: "Bright & Fast",
    description: "Instant responses that keep up.",
    icon: Zap,
    color: "text-amber-300",
  },
  {
    title: "Safe & Trusted",
    description: "Powerful tools with smart safeguards.",
    icon: Shield,
    color: "text-blue-400",
  },
  {
    title: "Fun for Everyone",
    description: "Anime, games, music, and more.",
    icon: Heart,
    color: "text-atsuko-pink",
  },
  {
    title: "Built for Communities",
    description: "Everything you need. All in one bot.",
    icon: Box,
    color: "text-lime-400",
  },
];

const cubeRows = [
  { label: "Music", icon: Music },
  { label: "Moderation", icon: Shield },
  { label: "Utilities", icon: Wrench },
  { label: "Anime", icon: Star },
  { label: "Minecraft", icon: Box },
  { label: "AI Chat", icon: Bot },
];



export function HomeHero() {
  return (
    <section id="home" className="relative isolate scroll-mt-[72px] overflow-hidden bg-hero-radial">
      <div className="star-field absolute inset-0 opacity-45" />
      <div className="absolute left-[8%] top-[18%] h-px w-[22rem] -rotate-45 bg-gradient-to-r from-transparent via-atsuko-cyan/80 to-transparent blur-[1px]" />
      <div className="absolute bottom-[26%] left-[10%] h-[18rem] w-[38rem] rounded-full border border-atsuko-pink/20 shadow-[0_0_36px_rgba(255,92,184,.15)]" />
      <div className="absolute bottom-[19%] left-[17%] h-[13rem] w-[31rem] rounded-full border border-atsuko-cyan/25 shadow-[0_0_40px_rgba(37,207,255,.2)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1450px] grid-rows-[1fr_auto] px-5 pb-10 pt-10 sm:px-8 lg:pt-14">
        <div className="grid items-center gap-10 -mt-6 lg:-mt-12 lg:grid-cols-[0.85fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[610px] lg:pl-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-atsuko-cyan/30 bg-cyan-400/8 px-3 py-1.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(37,207,255,.12)]"
            >
              <Sparkles className="size-4 text-atsuko-cyan" />
              Everything your server needs
            </motion.div>

            <h1 className="neon-text text-5xl font-black leading-[0.96] sm:text-6xl lg:text-7xl">Atsuko</h1>
            <p className="mt-7 max-w-[460px] text-lg font-medium leading-8 text-slate-100/92 sm:text-xl">
              A bright, fast Discord bot for music, moderation, utilities, anime fun, Minecraft tools, and AI chat.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.55 }}
              className="mt-8 flex flex-row flex-wrap gap-4"
            >
              <motion.div {...hoverLift}>
                <Button asChild size="lg">
                  <a href={atsukoInviteUrl} target="_blank" rel="noreferrer">
                    Invite Atsuko <ArrowRight className="size-4" />
                  </a>
                </Button>
              </motion.div>
              <motion.div {...hoverLift}>
                <Button asChild size="lg" variant="outline">
                  <a href="#commands">
                    View Commands <ArrowRight className="size-4 text-atsuko-pink" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <p className="mt-7 hidden text-base text-slate-300 sm:block">
              Created by{" "}
              <a href={tunxUrl} target="_blank" rel="noreferrer" className="font-bold text-atsuko-pink hover:text-pink-300">
                Tunx
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[380px] w-full max-w-[480px] sm:h-[420px] sm:max-w-[520px] lg:h-[610px] lg:max-w-none"
          >
            <div className="absolute inset-x-0 bottom-[9%] z-0 h-[18rem] rounded-full border border-atsuko-cyan/25 shadow-[0_0_44px_rgba(37,207,255,.2)]" />
            <div className="absolute bottom-[13%] left-[9%] z-0 h-[12rem] w-[82%] rounded-full border border-atsuko-pink/25 shadow-[0_0_32px_rgba(255,92,184,.18)]" />
            <div className="pointer-events-none absolute bottom-[-5%] left-[-8%] right-[20%] top-[5%] z-[1] sm:bottom-[-10%] sm:left-[-10%] sm:right-[26%] sm:top-[2%] lg:left-[-15%] lg:right-[31%]">
              <Image
                src={atsukoLogoImage}
                alt=""
                width={800}
                height={800}
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-full w-full object-contain object-center drop-shadow-[0_0_52px_rgba(37,207,255,.5)]"
              />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[37%] top-[38%] z-[2] w-[min(60vw,280px)] -translate-x-1/2 -translate-y-1/2 will-change-transform sm:left-[48%] sm:top-[31%] sm:w-[min(76vw,400px)] lg:left-[40%] lg:w-[min(28vw,420px)]"
            >
              <div className="relative aspect-[1.02]">
                <div className="absolute inset-[12%] rotate-[-10deg] rounded-[32px] border border-atsuko-cyan/50 bg-[#071526]/92 shadow-[0_0_32px_rgba(37,207,255,.28)]" />
                <div className="absolute inset-x-[18%] top-[4%] h-[23%] skew-x-[-24deg] rounded-2xl border border-atsuko-cyan/60 bg-[#0b1d33] shadow-neon">
                  <div className="absolute inset-[22%] rounded-lg border border-atsuko-cyan/35 bg-[#061224]">
                    <div className="flex h-full items-center justify-center gap-3 text-4xl font-black text-white">
                      <span className="text-atsuko-cyan">I</span>
                      <span className="text-atsuko-pink">&gt;</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-[16%] bottom-[8%] rounded-2xl border border-white/15 bg-slate-950/35 p-4 shadow-panel backdrop-blur sm:inset-x-[24%]">
                  <div className="space-y-2">
                    {cubeRows.map((row, index) => {
                      const Icon = row.icon;
                      return (
                        <motion.div
                          key={row.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.38 + index * 0.07, duration: 0.42 }}
                          className="flex items-center gap-3 whitespace-nowrap rounded-md border border-white/8 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100"
                        >
                          <Icon className="size-4 shrink-0 text-atsuko-cyan" />
                          {row.label}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[3%] top-[37%] hidden rounded-2xl border border-atsuko-pink/45 bg-atsuko-pink/8 p-4 shadow-[0_0_22px_rgba(255,92,184,.24)] lg:block"
                >
                  <Bot className="size-9 text-atsuko-pink" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-[12%] top-[24%] hidden rounded-2xl border border-atsuko-cyan/40 bg-cyan-400/8 p-3 shadow-[0_0_20px_rgba(37,207,255,.2)] backdrop-blur lg:block"
                >
                  <Sparkles className="size-7 text-atsuko-cyan" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0], opacity: [0.6, 0.92, 0.6], rotate: [0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[20%] right-[8%] hidden rounded-2xl border border-lime-300/35 bg-lime-300/8 p-3 shadow-[0_0_18px_rgba(132,204,22,.18)] backdrop-blur lg:block"
                >
                  <Box className="size-7 text-lime-300" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel mt-8 grid gap-0 overflow-hidden rounded-2xl px-6 py-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                whileHover={{ y: -3 }}
                className={cn(
                  "flex items-center gap-4 px-3 py-4",
                  index > 0 && "lg:border-l lg:border-white/10",
                  index === 2 && "sm:border-l sm:border-white/10 lg:border-l",
                )}
              >
                <Icon className={cn("size-10 shrink-0", benefit.color)} />
                <div>
                  <h2 className="text-sm font-bold text-white">{benefit.title}</h2>
                  <p className="mt-1 max-w-[13rem] text-xs leading-5 text-slate-400">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}
