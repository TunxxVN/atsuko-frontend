import { Navbar } from "@/components/site/navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CommandsSection } from "@/sections/commands-section";
import { Footer } from "@/sections/footer";
import { HomeHero } from "@/sections/home-hero";
import { InviteSection } from "@/sections/invite-section";
import { StatsBar } from "@/sections/stats-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <StatsBar />
        <CommandsSection />
        <InviteSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
