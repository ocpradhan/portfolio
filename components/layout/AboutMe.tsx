import Container from "@/components/common/Container";
import { Badge } from "@/components/ui/badge";

const skillList: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Python",
  "Redux",
  "TanStack Query",
  "Context API",
  "Tailwind CSS",
  "JavaScript",
  "HTML5/CSS3",
  "Git/GitHub",
  "Vite",
  "REST APIs",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "Jest",
  "CI/CD",
  "Docker",
];

export default function AboutMe() {
  return (
    <Container id="about">
      <div className="flex flex-col gap-3 lg:flex-row justify-center lg:justify-between">
        <p className="font-lora font-extralight text-foreground/80 tracking-normal flex-2">
          01 - About me
        </p>
        <div className="flex flex-col justify-between tracking-normal gap-10 flex-3">
          <h1 className="font-medium text-2xl md:text-5xl lg:text-6xl">
            I&apos;m Onesimus — a frontend developer who cares about the details
            users feel and the systems that make them possible.
          </h1>
          <p className="font-dm-sans font-medium text-lg text-foreground/60">
            I work across the stack: shaping the frontend experience, designing
            APIs, modeling data, and making the infrastructure behind a product
            boring in the best possible way. I care about maintainable systems,
            fast feedback loops, and shipping work people can rely on.
          </p>
          <div className="space-x-2 space-y-2 text-center lg:text-start">
            {skillList.map((skill: string, id) => (
              <Badge
                className="border px-5 py-2 border-border rounded-full font-lora"
                variant="outline"
                key={id}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
