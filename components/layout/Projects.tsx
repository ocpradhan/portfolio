import Image, { StaticImageData } from "next/image";
import { ArrowUpIcon } from "lucide-react";
import Container from "../common/Container";
import { GitHubLogo } from "../logo/GithubLogo";
import supplyChainImg from "@/public/images/supply-chain-resilience-tracker-light-mode.png";
import inProgressLightMode from "@/public/images/in-progress-light-mode.png";
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type ProjectType = {
  projectName: string;
  image: StaticImageData;
  technologies: string;
  url: string;
  githubLink: string;
};

const projectList: ProjectType[] = [
  {
    projectName: "Supply Chain Resilience Tracker",
    image: supplyChainImg,
    technologies:
      "Next.js, TypeScript, Tailwind CSS, CognoDB, Cypher Query, Neo4j drivers, Zod, Sonner, React Flow",
    url: "https://supply-chain-resilience-tracker.vercel.app/",
    githubLink: "https://github.com/ocpradhan/graph-database-application",
  },
  {
    projectName: "HRIS Management System",
    image: inProgressLightMode,
    technologies:
      "Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma ORM, Docker, GitHub Actions, Jest",
    url: "Not yet deployed",
    githubLink: "https://github.com/ocpradhan/HRIS-Management-System",
  },
];

export default function Projects() {
  return (
    <Container id="projects" bgColor="">
      <p className="font-lora font-extralight text-foreground/80 tracking-normal">
        02 - Projects
      </p>
      <div className="flex justify-between">
        <h1 className="font-extrabold text-2xl md:text-5xl lg:text-6xl mt-5">
          Made to matter.
        </h1>
        <p className="self-end font-lora text-sm">
          {projectList?.length} project(s)
        </p>
      </div>

      <ScrollArea className="w-full rounded-md border-b flex-justify center">
        <div className="w-full max-w-lg lg:max-w-none mx-auto flex flex-col lg:flex-row gap-10 py-5">
          {projectList.map(
            (
              {
                image,
                projectName,
                technologies,
                url,
                githubLink,
              }: ProjectType,
              index,
            ) => {
              return (
                <div
                  key={projectName}
                  className="relative overflow-hidden bg-cover bg-no-repeat group flex flex-col gap-5 shrink-0 lg:w-lg pb-5"
                >
                  <Badge className="absolute font-dm-sans text-sm z-10 bg-secondary rounded-full w-8 h-8 flex items-center justify-center top-4 left-4">
                    {index + 1}
                  </Badge>

                  <Image
                    src={image}
                    className="transition duration-300 ease-in-out w-lg group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 rounded-lg aspect-video"
                    alt={`${projectName} Image`}
                    quality={100}
                    width={512}
                    height={512}
                  />

                  <div className="tracking-normal flex justify-between items-center gap-5">
                    <div>
                      <p className="font-viga text-xl">{projectName}</p>
                      <p className="font-dm-sans text-foreground/80">
                        {technologies.replaceAll(",", " ·")}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 ">
                      {url !== "Not yet deployed" ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live project"
                          className="bg-inherit text-foreground/80 hover:bg-inherit hover:text-foreground/80 hover:translate-x-1 hover:-translate-y-1 cursor-pointer transition-all duration-300"
                        >
                          <ArrowUpIcon className="rotate-45 w-8 h-8" />
                        </a>
                      ) : null}
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source code on GitHub"
                        className="bg-inherit text-foreground/80 hover:bg-inherit hover:text-foreground/80 hover:translate-x-1 hover:-translate-y-1 cursor-pointer transition-all duration-300"
                      >
                        <GitHubLogo className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Container>
  );
}
