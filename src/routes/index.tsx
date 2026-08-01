import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/anydown/Navbar";
import Hero from "@/components/anydown/Hero";
import PixelDivider from "@/components/anydown/PixelDivider";
import Features from "@/components/anydown/Features";
import HowItWorks from "@/components/anydown/HowItWorks";
import Bento from "@/components/anydown/Bento";
import Comparison from "@/components/anydown/Comparison";
import FAQ from "@/components/anydown/FAQ";
import Footer from "@/components/anydown/Footer";

const title = "anydown — Download Videos Without Limits";
const description =
  "Ad-free Android downloader for YouTube videos, Shorts and Instagram Reels. Native on-device yt-dlp + FFmpeg. No ads, no tracking, no limits.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex flex-col w-full bg-[#0A0A0A] pt-[60px] overflow-x-hidden">
      <Navbar />
      <Hero />
      <PixelDivider />
      <Features />
      <HowItWorks />
      <Bento />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  );
}
