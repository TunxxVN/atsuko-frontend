import Image from "next/image";

import { cn } from "@/lib/utils";

export function AtsukoLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative block size-9 overflow-hidden rounded-full border border-atsuko-cyan/45 bg-slate-950/60 shadow-[0_0_20px_rgba(37,207,255,.28)]">
        <Image
          src="/assets/atsuko-logo.webp"
          alt=""
          fill
          sizes="36px"
          className="object-cover object-top drop-shadow-[0_0_10px_rgba(37,207,255,.45)]"
        />
      </span>
      <span className="text-xl font-extrabold text-white">Atsuko</span>
    </div>
  );
}
