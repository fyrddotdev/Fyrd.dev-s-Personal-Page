import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const discordUsername = "fyrd.dev_";

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-zinc-900 border-t-2 border-b-2 text-zinc-100"
    >
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="space-y-2 mb-10">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Get In Touch
          </h2>
          <h1 className="text-3xl font-bold text-zinc-100">
            Let's Collaborate
          </h1>
        </div>

        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
          Want to discuss game development, collaborate on video editing, or
          just say hello? Reach out to me via the platforms below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://instagram.com/its.justfarid"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="border border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300 h-full flex items-center justify-center">
              <CardContent className="p-6 text-center">
                <span className="text-xs text-zinc-500 block mb-1">
                  [Social]
                </span>
                <span className="text-base font-bold text-zinc-200 group-hover:text-primary transition-colors">
                  Instagram
                </span>
                <span className="text-[10px] text-zinc-500 block mt-2 group-hover:text-zinc-400">
                  → Open Profile
                </span>
              </CardContent>
            </Card>
          </a>

          <button
            onClick={handleCopyDiscord}
            className="group text-left w-full"
          >
            <Card
              className={`border bg-zinc-950/50 transition-all duration-300 h-full flex items-center justify-center
              ${copied ? "border-emerald-900/50 bg-emerald-950/5" : "border-zinc-900 hover:border-zinc-800"}`}
            >
              <CardContent className="p-6 text-center w-full">
                <span className="text-xs text-zinc-500 block mb-1">
                  [Community]
                </span>
                <span
                  className={`text-base font-bold transition-colors ${copied ? "text-emerald-400" : "text-zinc-200 group-hover:text-primary"}`}
                >
                  Discord
                </span>
                <span
                  className={`text-[10px] block mt-2 font-mono transition-colors ${copied ? "text-emerald-500" : "text-zinc-500 group-hover:text-zinc-400"}`}
                >
                  {copied ? "[Copied!]" : "→ Copy Username"}
                </span>
              </CardContent>
            </Card>
          </button>
        </div>
      </div>
    </section>
  );
}
