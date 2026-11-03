import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import {
  MessageSquare,
  Bug,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Github,
} from "lucide-react";

interface DeveloperContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DeveloperContactModal({
  open,
  onOpenChange,
}: DeveloperContactModalProps) {
  const [copied, setCopied] = useState(false);
  const developerEmail = "boomgonza1908@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerEmail);
    setCopied(true);
    toast.success("Email copied to clipboard: " + developerEmail);
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
              SYS_COMM_CHANNEL // CONNECT
            </span>
          </div>
          <DialogTitle className="font-grotesk text-[20px] font-bold text-[#FFFFFF] tracking-[1px]">
            TALK TO THE DEVELOPER
          </DialogTitle>
          <p className="font-ibm-mono text-[12px] text-[#888888] tracking-[0.5px]">
            Direct channels to contact the Anydown core developer for questions, feature requests, or collaborations.
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-3 py-3">
          {/* GitHub Discussions */}
          <a
            href="https://github.com/boom1908/anydown-native/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#FFD600] hover:bg-[#161616] transition-all"
          >
            <div className="p-2 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#FFD600] text-[#FFD600] shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#FFD600] transition-colors">
                <span>GITHUB DISCUSSIONS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-0.5 leading-[1.4]">
                Ask questions, pitch architecture ideas, or chat directly in public threads.
              </p>
            </div>
          </a>

          {/* GitHub Issues */}
          <a
            href="https://github.com/boom1908/anydown-native/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#FF4444] hover:bg-[#161616] transition-all"
          >
            <div className="p-2 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#FF4444] text-[#FF4444] shrink-0">
              <Bug className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#FF4444] transition-colors">
                <span>REPORT AN ISSUE / BUG</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-0.5 leading-[1.4]">
                Found a broken download or extractor glitch? File a ticket on GitHub.
              </p>
            </div>
          </a>

          {/* Direct Email */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#3399FF] transition-all">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#1A1A1A] border border-[#333333] text-[#3399FF] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="font-grotesk text-[14px] font-bold text-[#F5F5F0]">
                  DIRECT EMAIL
                </div>
                <div className="font-ibm-mono text-[11px] text-[#AAAAAA] mt-0.5">
                  {developerEmail}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A] border border-[#333333] hover:border-[#F5F5F0] text-[11px] font-ibm-mono text-[#CCCCCC] transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#00FF66]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
              <a
                href={`mailto:${developerEmail}?subject=Anydown%20Inquiry`}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#3399FF] text-[#000000] font-grotesk text-[11px] font-bold hover:bg-[#66B2FF] transition-colors"
              >
                <span>OPEN MAIL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Live Feedback Form */}
          <button
            type="button"
            onClick={handleScrollToFeedback}
            className="group flex items-start gap-4 p-3.5 bg-[#111111] border border-[#222222] hover:border-[#00FF66] hover:bg-[#161616] text-left transition-all"
          >
            <div className="p-2 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#00FF66] text-[#00FF66] shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 font-grotesk text-[14px] font-bold text-[#F5F5F0] group-hover:text-[#00FF66] transition-colors">
                <span>ON-PAGE FEEDBACK TERMINAL</span>
                <span className="text-[10px] font-ibm-mono text-[#00FF66] border border-[#00FF66]/30 px-1 py-0.2">
                  INSTANT
                </span>
              </div>
              <p className="font-ibm-mono text-[11px] text-[#777777] mt-0.5 leading-[1.4]">
                Leave a quick thought or suggestion directly in the live Google Sheet board.
              </p>
            </div>
          </button>
        </div>

        {/* Developer GitHub Profile Link */}
        <div className="border-t border-[#222222] pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4 text-[#888888]" />
            <span className="font-ibm-mono text-[11px] text-[#888888]">
              DEVELOPER: <span className="text-[#F5F5F0]">@boom1908</span>
            </span>
          </div>
          <a
            href="https://github.com/boom1908"
            target="_blank"
            rel="noopener noreferrer"
            className="font-ibm-mono text-[11px] text-[#FFD600] hover:underline flex items-center gap-1"
          >
            VIEW PROFILE &gt;
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
