import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/anydown/Navbar";
import Hero from "@/components/anydown/Hero";
import PixelDivider from "@/components/anydown/PixelDivider";
import Features from "@/components/anydown/Features";
import HowItWorks from "@/components/anydown/HowItWorks";
import Bento from "@/components/anydown/Bento";
import Comparison from "@/components/anydown/Comparison";
import Updates from "@/components/anydown/Updates";
import Credits from "@/components/anydown/Credits";
import Feedback from "@/components/anydown/Feedback";
import FAQ from "@/components/anydown/FAQ";
import Footer from "@/components/anydown/Footer";

const title = "Anydown — Download Any Video or Music. 100% Free.";
const description =
  "The fast, ad-free Android downloader for YouTube, Instagram Reels, Spotify, TikTok, and 1,000+ sites. On-device 4K FFmpeg extraction with zero tracking.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://anydown.vercel.app/logo.png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://anydown.vercel.app/logo.png" },
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
      <Updates />
      <Credits />
      <Feedback />
      <FAQ />
      <Footer />
    </main>
  );
}
