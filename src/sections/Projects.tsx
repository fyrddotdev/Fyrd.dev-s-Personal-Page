import ProjectCard from "@/components/projectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
  isSolo: boolean;
}

const projectList: ProjectCardProps[] = [
  {
    title: "Catty Cardy",
    year: 2026,
    description:
      "Yo! Are you ready to collect as many adorable, absurd, and completely unhinged cat cards as you humanely can? Feed your inner collector right now!",
    techStack: ["Godot", "GDScript"],
    imageUrl:
      "https://img.itch.zone/aW1nLzI4MjcxMjA0LnBuZw==/original/lEdJ%2BY.png",
    projectUrl: "https://oyen-gameworks.itch.io/catty-cardy",
    isSolo: false,
  },
  {
    title: "Random Cat Facts",
    year: 2024,
    description: "Get random facts about cats 🐈",
    techStack: ["HTML", "CSS", "Javascript"],
    imageUrl: "https://i.imgur.com/incrGaC.png",
    projectUrl: "https://fyrddotdev.github.io/Random-Cat-Facts/",
    githubUrl: "https://github.com/fyrddotdev/Random-Cat-Facts",
    isSolo: true,
  },
  {
    title: "Eat!",
    year: 2023,
    description: "It's all about Eating!",
    techStack: ["Construct 2"],
    imageUrl:
      "https://img.itch.zone/aW1nLzI2NjI3NjU0LnBuZw==/315x250%23c/1mLOXe.png",
    projectUrl: "https://fyrddev.itch.io/eat",
    isSolo: true,
  },
  {
    title: "An Incoming Shape",
    year: 2023,
    description:
      "Red Shapes Have attacked the frontier! Help us survive and defeat them!",
    techStack: ["Construct 2"],
    imageUrl:
      "https://img.itch.zone/aW1nLzEyMzI1NTA4LnBuZw==/315x250%23c/miO5F2.png",
    projectUrl: "https://fyrddev.itch.io/an-incoming-shape",
    isSolo: true,
  },
  {
    title: "METEID!",
    year: 2022,
    description: "no one can destroy Cubid :)",
    techStack: ["Construct 2", "Firebase"],
    imageUrl:
      "https://img.itch.zone/aW1nLzEwMjQ2OTgyLnBuZw==/315x250%23c/dr%2BZlx.png",
    projectUrl: "https://fyrddev.itch.io/meteid",
    isSolo: true,
  },
  {
    title: "Sky Defenders!",
    year: 2022,
    description: "You are the defender!",
    techStack: ["Construct 2"],
    imageUrl:
      "https://img.itch.zone/aW1nLzEwMDAxOTg4LnBuZw==/315x250%23c/xwj3Ch.png",
    projectUrl: "https://fyrddev.itch.io/sky-defenders",
    isSolo: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="relative pt-12 pb-12 pr-24 pl-24 j md:flex-row w-full">
          <div className="container flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-extrabold text-center">Projects</h2>

            <Tabs defaultValue="solo" className="w-full">
              <TabsList className="flex w-full mt-8 mb-3 h-auto! items-stretch border border-zinc-900 bg-zinc-950">
                <TabsTrigger
                  value="solo"
                  className="h-full! flex-1 text-md font-medium transition-all"
                >
                  Solo Projects
                </TabsTrigger>
                <TabsTrigger
                  value="team"
                  className="h-full! flex-1 text-md font-medium transition-all"
                >
                  Team Projects
                </TabsTrigger>
              </TabsList>

              <TabsContent value="solo" className="focus-visible:outline-none">
                <motion.div
                  key="solo-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {projectList.map(
                    (value, index) =>
                      value.isSolo && (
                        <ProjectCard
                          key={`solo-${index}`}
                          title={value.title}
                          description={value.description}
                          year={value.year}
                          techStack={value.techStack}
                          imageUrl={value.imageUrl}
                          projectUrl={value.projectUrl}
                          githubUrl={value.githubUrl}
                        />
                      ),
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="team" className="focus-visible:outline-none">
                <motion.div
                  key="team-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {projectList.map(
                    (value, index) =>
                      !value.isSolo && (
                        <ProjectCard
                          key={`team-${index}`}
                          title={value.title}
                          description={value.description}
                          year={value.year}
                          techStack={value.techStack}
                          imageUrl={value.imageUrl}
                          projectUrl={value.projectUrl}
                          githubUrl={value.githubUrl}
                        />
                      ),
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
