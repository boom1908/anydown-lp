import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  Star,
  Share2,
  MessageSquare,
  ExternalLink,
  Check,
  Copy,
  Github,
} from "lucide-react";

interface SupportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SupportModal({ open, onOpenChange }: SupportModalProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://anydown.vercel.app/";
  const shareTitle = "Anydown — Download Any Video or Music. 100% Free.";
  const shareText =
    "Check out Anydown: the fast, ad-free Android downloader for YouTube, Instagram, Spotify, and 1,000+ sites!";

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Thanks for spreading the word!");
        return;
      } catch {
        // User cancelled or share failed, fallback to copy
      }
    }

    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success("Link copied to clipboard! Share it with friends.");
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToFeedback = () => {
    onOpenChange(false);
    const el = document.getElementById("feedback");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[540px] bg-[#0A0A0A] border-2 border-[#2D2D2D] p-6 text-[#F5F5F0] rounded-none sm:rounded-none shadow-2xl">
        <DialogHeader className="space-y-2 border-b border-[#222222] pb-4 text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#FFD600] animate-pulse" />
            <span className="font-ibm-mono text-[11px] text-[#FFD600] tracking-[2px] font-bold">
              SYS_SUPPORT // COMMUNITY DRIVEN
            </span>
          </div>
          <DialogTitle className="font-grotesk text-[20px] font-bold text-[#FFFFFF] tracking-[1px]">
            SUPPORT ANYDOWN
          </DialogTitle>
          <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[0.5px]">
            Anydown is 100% free, open-source, and on-device. Here are the most impactful ways you can support the project:
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-3">
          {/* 1. Star on GitHub (Free Support) */}
          <a
            href="https://github.com/boom1908/anydown-native"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#FFD600] hover:bg-[#161616] transition-all"
          >
            <div className="p-2.5 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#FFD600] text-[#FFD600] shrink-0">
              <Star className="w-4 h-4 fill-[#FFD600]/20 group-hover:fill-[#FFD600]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#FFD600] transition-colors">
                  STAR ON GITHUB
                </span>
                <span className="text-[10px] font-ibm-mono text-[#FFD600] border border-[#FFD600]/40 px-1 py-0.2">
                  FREE
                </span>
                <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100" />
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-1 leading-[1.4]">
                Costs nothing, but helps immensely. Starring <span className="text-[#AAAAAA]">boom1908/anydown-native</span> raises search visibility on GitHub.
              </p>
            </div>
          </a>

          {/* 3. Share with Friends */}
          <button
            type="button"
            onClick={handleShare}
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#60A5FA] hover:bg-[#161616] text-left transition-all cursor-pointer"
          >
            <div className="p-2.5 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#60A5FA] text-[#60A5FA] shrink-0">
              {copied ? <Check className="w-4 h-4 text-[#00FF66]" /> : <Share2 className="w-4 h-4" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#60A5FA] transition-colors">
                  SHARE WITH FRIENDS
                </span>
                <span className="text-[10px] font-ibm-mono text-[#60A5FA] border border-[#60A5FA]/40 px-1 py-0.2">
                  {copied ? "COPIED!" : "SPREAD THE WORD"}
                </span>
                <Copy className="w-3.5 h-3.5 ml-auto opacity-60 group-hover:opacity-100" />
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-1 leading-[1.4]">
                Share the Anydown link on WhatsApp, Telegram, Reddit, or Twitter/X with friends looking for an ad-free downloader.
              </p>
            </div>
          </button>

          {/* 4. Feedback / Suggestions */}
          <button
            type="button"
            onClick={handleScrollToFeedback}
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#00FF66] hover:bg-[#161616] text-left transition-all cursor-pointer"
          >
            <div className="p-2.5 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#00FF66] text-[#00FF66] shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#00FF66] transition-colors">
                  LEAVE FEEDBACK OR REPORT BUGS
                </span>
                <span className="text-[10px] font-ibm-mono text-[#00FF66] border border-[#00FF66]/40 px-1 py-0.2">
                  INSTANT
                </span>
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-1 leading-[1.4]">
                Found a broken link or want to suggest a new feature? Tell us on the community board below.
              </p>
            </div>
          </button>
        </div>

        {/* Footer info */}
        <div className="border-t border-[#222222] pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-[#888888]" />
            <span className="font-ibm-mono text-[11px] text-[#888888]">
              PROJECT: <span className="text-[#F5F5F0]">boom1908/anydown-native</span>
            </span>
          </div>
          <a
            href="https://github.com/boom1908/anydown-native"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ibm-mono text-[11px] text-[#FFD600] hover:underline flex items-center gap-1"
          >
            VIEW REPO &gt;
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
