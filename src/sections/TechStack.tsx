import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "advanced":
      return "text-emerald-400 bg-emerald-950/40 border-emerald-900/50";
    case "intermediate":
      return "text-amber-400 bg-amber-950/40 border-amber-900/50";
    case "familiar":
    case "beginner":
      return "text-zinc-400 bg-zinc-900 text-zinc-500 border-zinc-800";
    default:
      return "text-zinc-500 bg-zinc-900 border-zinc-800";
  }
};

function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "GDScript", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "HTML / CSS", level: "Intermediate" },
        { name: "C++", level: "Beginner" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [{ name: "React", level: "Intermediate" }],
    },
    {
      title: "Game Dev & Engines",
      skills: [
        { name: "Godot Engine", level: "Advanced" },
        { name: "Raylib", level: "Beginner" },
      ],
    },
    {
      title: "Tools & Ecosystem",
      skills: [
        { name: "VSCodium", level: "Advanced" },
        { name: "Git / GitHub", level: "Intermediate" },
        { name: "Vite", level: "Familiar" },
        { name: "CMake", level: "Beginner" },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Canva", level: "Advanced" },
        { name: "Davinci Resolve", level: "Intermediate" },
      ],
    },
  ];

  return (
    <>
      {" "}
      <section id="techstack">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col justify-between w-full gap-8 bg-zinc-900 border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start tracking-wide">
            <h2 className="text-1xl font-extralight text-primary-foreground">
              Technical Expertise
            </h2>
            <h1 className="text-4xl font-extrabold">Tech Stack</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="border-zinc-900 bg-zinc-950/50 hover:border-zinc-800 transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-mono font-bold text-zinc-200 uppercase tracking-wider">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between font-mono bg-zinc-900/40 border border-zinc-900 px-3 py-2 rounded-md hover:border-zinc-800 transition-colors"
                    >
                      <span className="text-sm font-medium text-zinc-300">
                        {skill.name}
                      </span>

                      <span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
