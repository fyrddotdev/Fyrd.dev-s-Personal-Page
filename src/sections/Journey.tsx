import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ImageOnlyModal } from "@/components/ImageOnlyModal";

import fls3nCertificate from "@/assets/certificates/fls3n_certificate.jpg";
import limitCertificate from "@/assets/certificates/limit_certificate.jpg";

interface JourneyItem {
  year: string;
  title: string;
  subtitle?: string; // Untuk nama sekolah, divisi OSIS, atau penyelenggara lomba
  description: string;
  badgeText?: string; // Misal: "1st Winner", "OSIS Dev 9", "Deprecated"
  isHighlight?: boolean;
  externalLink?: string;
  imageUrl?: string;
}

export default function Journey() {
  // Data 1: Fokus pada pertumbuhan teknis & game dev
  const devJourney: JourneyItem[] = [
    {
      year: "2026 - Present",
      title: "Lead Programmer, 2D Pixel Artist",
      subtitle: "Oyen Gameworks",
      description:
        "Co-founded an independent game studio with three teammates met at the Gameseed 2026 event, organized by the Indonesian Game Association (AGI) and the Ministry/Agency of Creative Economy of the Republic of Indonesia ( EKRAF ). Held full responsibility as Lead Programmer for designing the core code architecture, managing the Git repository, and integrating game mechanics for the game 'Catty Cardy,' while also serving as a 2D pixel artist.",
      badgeText: "Indie Studio",
      isHighlight: true,
      externalLink: "https://www.instagram.com/oyengameworks.id/",
    },
    {
      year: "2024",
      title: "Migrating and Mastering Godot Engine",
      subtitle: "Engine Pivot",
      description:
        "Focuses on an in-depth study of 2D game architecture, AI state machines, performance, complex data structures, and movement mechanics using GDScript.",
    },
    {
      year: "2022",
      title: "METEID! - 2nd Place (Community Choice)",
      subtitle: "Devindo Gamejam 2",
      description:
        "I won second place in the community choice category at Devindo Gamejam 2, organized by NicDev. This was my first competition and first top-three finish in my game development career.",
      badgeText: "#2 Community choice 🏆",
      isHighlight: true,
      externalLink: "https://itch.io/jam/devindo2/rate/1722181",
    },
    {
      year: "2020",
      title: "Early Experiments Game dev and software engineer",
      subtitle: "Legacy Engines",
      description:
        "First introduced to the basic concepts of visual programming logic and game flow through Construct 2 and Sketchware.",
      badgeText: "",
    },
  ];

  const schoolJourney: JourneyItem[] = [
    {
      year: "2025-Present",
      title: "OSIS Division 9 - Teknologi, Informasi, Dan Komunikasi",
      subtitle: "Member, Chair of Division 9",
      description:
        "Fully responsible for the concepts, workflows, portrait editing (Instagram/Reels), after-movies, feed content, pamphlets, posters, and video asset management for the publications of the OSIS & MPK SMA Negeri 1 Kabila.",
      badgeText: "Active",
    },
    {
      year: "2026",
      title:
        "Qualified and selected as a representative for the OSN-P Informatics competition.",
      subtitle: "Puspresnas",
      description:
        "The National Science Olympiad (OSN) is a science-based competition and talent showcase officially organized by the National Achievement Center (Puspresnas). Qualified for the Informatics category of the OSN-K, becoming the school's representative to compete at the provincial level.",
      badgeText: "#4 OSN-P Certificate 🏆",
      isHighlight: true,
    },

    {
      year: "2026",
      title: "Representatives of LIMIT'26 – Gorontalo Mathematics Competition",
      subtitle: "Gorontalo State University",
      description:
        "Participated in a mathematics league organized by Universitas Muhammadiyah Gorontalo and reached the semifinals.",
      badgeText: "Competitor Certificate 📜",
      isHighlight: false,
      imageUrl: limitCertificate,
    },
    {
      year: "2025",
      title: "Representatives of GMC 2025 – Gorontalo Mathematics League",
      subtitle: "Muhammadiyah University of Gorontalo",
      description:
        "Participated in a mathematics league organized by Gorontalo State University and ranked among the top 12 teams.",
      badgeText: "",
      isHighlight: false,
    },
    {
      year: "2025",
      title: "#2 FLS3N Photography Category – Regency Level",
      subtitle: "Pusat Prestasi Nasional ( Puspresnas )",
      description:
        "Won second place in the regency-level FLS3N photography competition organized by the National Achievement Center (Puspresnas) and advanced to represent the region at the provincial level.",
      badgeText: "#2 FLS3N Certificate (Regency Level) 🏆",
      isHighlight: true,
      imageUrl: fls3nCertificate,
    },
  ];

  const renderTimeline = (items: JourneyItem[]) => (
    <div className="relative border-l border-zinc-900 ml-4 mt-6 space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 group">
          <div
            className={`absolute -left-2.25 top-1.5 h-4 w-4 rounded-full border-4 transition-colors duration-300
            ${
              item.isHighlight
                ? "bg-amber-400 border-zinc-950 group-hover:bg-amber-300"
                : "bg-zinc-800 border-zinc-950 group-hover:bg-primary"
            }`}
          />

          <Card
            className={`border bg-zinc-950/50 transition-all duration-300
            ${
              item.isHighlight
                ? "border-amber-900/40 bg-amber-950/5 hover:border-amber-800/60"
                : "border-zinc-900 hover:border-zinc-800"
            }`}
          >
            <CardContent className="p-5 font-mono">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span
                  className={`text-sm font-bold ${item.isHighlight ? "text-amber-400" : "text-zinc-500"}`}
                >
                  {item.year}
                </span>
                {item.badgeText && (
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border 
                    ${
                      item.isHighlight
                        ? "bg-amber-900/30 text-amber-300 border-amber-800/50"
                        : "bg-zinc-900 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    {item.badgeText}
                  </span>
                )}
              </div>

              <h3
                className={`text-lg font-bold ${item.isHighlight ? "text-amber-100" : "text-zinc-200"}`}
              >
                {item.title}
              </h3>

              {item.subtitle && (
                <p className="text-xs text-zinc-500 mt-0.5">{item.subtitle}</p>
              )}

              <p className="text-xs text-zinc-405 mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex mt-4 justify-end">
                {item.imageUrl && (
                  <ImageOnlyModal
                    imageUrl={item.imageUrl}
                    altText={item.description}
                    isAchievement={item.isHighlight}
                  ></ImageOnlyModal>
                )}
                {item.externalLink && (
                  <a
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className={`mt-3 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors w-fit 
                    ${
                      item.isHighlight
                        ? "text-amber-400 border-amber-900/30 bg-amber-950/20 hover:bg-amber-950/50 hover:border-amber-800"
                        : ""
                    }`}
                    >
                      View More
                    </button>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="journey"
      className="py-20 bg-zinc-950 text-zinc-100 border-b border-zinc-900"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="space-y-2 mb-10">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
            Timeline & History
          </h2>
          <h1 className="text-3xl font-bold text-zinc-100">My Journey</h1>
        </div>

        <Tabs defaultValue="dev" className="w-full">
          <TabsList className="grid w-full grid-cols-2 border border-zinc-900 bg-zinc-950 p-1 rounded-xl">
            <TabsTrigger
              value="dev"
              className="font-mono text-xs rounded-lg transition-all"
            >
              Dev Milestones
            </TabsTrigger>
            <TabsTrigger
              value="school"
              className="font-mono text-xs rounded-lg transition-all"
            >
              School & Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dev" className="focus-visible:outline-none">
            {renderTimeline(devJourney)}
          </TabsContent>

          <TabsContent value="school" className="focus-visible:outline-none">
            {renderTimeline(schoolJourney)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
