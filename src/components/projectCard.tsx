import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  year: number;
  description: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

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
      <Card className="bg-zinc-900 items-center py-0 border gap-0 hover:border-zinc-600">
        <div className="relative h-full w-full overflow-hidden bg-zinc-900">
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader className="w-full p-4 border-t">
          <CardTitle className="font-extrabold lg:text-2xl">{title}</CardTitle>
          <h2 className="font-extralight text-xs text-zinc-300 mb-4">{year}</h2>

          <CardDescription>{description}</CardDescription>
          <CardContent className="mt-4 mb-4 p-0 flex flex-wrap gap-1">
            {techStack.map((text, index) => (
              <span
                key={index}
                className="text-xs bg-accent px-3 py-1 rounded-full border"
              >
                {text}
              </span>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end p-0 bg-zinc 900 border-0 gap-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="px-8 py-5">
                  Github
                </Button>
              </a>
            )}
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <Button className="px-8 py-5">Play</Button>
            </a>
          </CardFooter>
        </CardHeader>
      </Card>
    </>
  );
}

export default ProjectCard;
