import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

function ProjectCard({
  title,
  year,
  description,
  techStack,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
        className="h-full w-full group"
      >
        <Card className="bg-zinc-900 items-center py-0 border gap-0 hover:border-zinc-600 h-full flex flex-col justify-between">
          <div className="w-full flex-1 flex flex-col h-full">
            <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
              <img
                src={imageUrl}
                alt={`${title} screenshot`}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Mengubah CardHeader menjadi flex-col & flex-1 agar porsi teks dan konten membagi ruang secara adil */}
            <CardHeader className="w-full p-4 border-t flex-1 flex flex-col justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="font-extrabold lg:text-2xl">
                  {title}
                </CardTitle>
                <h2 className="font-extralight text-xs text-zinc-300 mb-4">
                  {year}
                </h2>
                <CardDescription>{description}</CardDescription>
              </div>

              {/* CardContent akan selalu terdorong ke batas bawah yang sama sebelum tombol */}
              <CardContent className="p-0 flex flex-wrap gap-1 mt-auto">
                {techStack.map((text, index) => (
                  <span
                    key={index}
                    className="text-xs bg-accent px-3 py-1 rounded-full border"
                  >
                    {text}
                  </span>
                ))}
              </CardContent>
            </CardHeader>
          </div>

          <div className="w-full p-4 pt-0">
            <CardFooter className="flex justify-end p-0 bg-zinc 900 border-0 gap-2 w-full">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-6 py-5">
                    Github
                  </Button>
                </a>
              )}
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <Button className="px-6 py-5">Open</Button>
              </a>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    </>
  );
}

export default ProjectCard;
