import Container from "@/components/common/Container";

type ExperienceType = {
  date: string;
  role: string;
  company: string;
  description: string;
};

const experiences: ExperienceType[] = [
  {
    date: "Jun 2023 — Oct 2026",
    role: "Frontend Developer",
    company: "Cosmotech Ai",
    description:
      "I built and optimized large-scale web apps using Next.js, React, and Angular. I spent a year deployed onsite in Manila, acting as the frontend anchor to sync with international teams and integrate high-security banking systems. Backed by TypeScript and Tailwind CSS, I turned complex administrative workflows into smooth, fast dashboards-like the Landbank Phillipines HR Portal-whiel using performance tricks like lazy loading to keep everything running incredibly fast.",
  },
  {
    date: "Jan 2023 — Jun 2023",
    role: "Frontend Developer Intern",
    company: "Cosmotech Ai",
    description:
      "I built core product modules, focusing on responsive layouts and smooth API integrations for our enterprise apps. My biggest project was co-engineering a dynamic Rate System using React.js, where I built the interactive input flows and client-side calculation checks. Working with Bootstrap and Material UI, I turned design mockups into mobile-friendly views, while using Axios and Fetch to wire up backend data and keep the app running fast.",
  },
];

export default function Experience() {
  return (
    <Container id="experience">
      <p className="font-lora font-extralight text-foreground/80 tracking-normal">
        03 - Experience
      </p>
      <h1 className="font-extrabold text-2xl md:text-5xl lg:text-6xl mt-5 mb-5">
        How I got here.
      </h1>

      <div className="w-full space-y-12 md:space-y-0">
        {experiences.map((exp) => {
          return (
            <div
              key={exp.date}
              className="grid grid-cols-1 lg:grid-cols-[15rem_15rem_1fr] gap-4 lg:gap-8 py-8 border-t"
            >
              <div className="font-lora font-extralight text-foreground/80 text-start text-sm lg:text-base lg:pt-2">
                {exp.date}
              </div>

              <div className="flex flex-col items-start">
                <p className="lg:text-xl font-semibold">{exp.role}</p>
                <p className="text-primary">{exp.company}</p>
              </div>

              <div className="font-dm-sans text-foreground/80 text-left lg:text-justify text-base lg:text-lg">
                <p>{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
