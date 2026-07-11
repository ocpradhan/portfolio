import Box from "@/components/ui/box";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import type { Section } from "@/types/shared.types";

const workExperienceList: Section = {
  sectionName: "Experience",
  sectionInfo: [
    {
      role: "Frontend Developer",
      company: "Cosmotech AI",
      duration: "Dec 2023 – Present",
      desc: "As a Frontend Developer at Cosmotech AI, I've contributed to the development of enterprise web applications that streamline business operations and enhance user experiences. My work focuses on building responsive, scalable, and maintainable interfaces using modern frontend technologies while collaborating closely with backend developers, designers, and cross-functional teams in an Agile environment.",
    },
    {
      role: "Frontend Developer Intern / Trainee",
      company: "Cosmotech AI",
      duration: "Jan 2023 – Nov 2023",
      desc: "Joined as a Frontend Developer Intern for the first 6 months. Due to strong project performance, the role was extended into a 5-month probationary phase with increased project ownership prior to full-time absorption. Key Responsibilities & Projects: Developed and delivered responsive web pages and components using modern frontend tech stacks. Collaborated with the core engineering team to integrate APIs and improve website user experience. Participated in code reviews and fixed UI bugs to ensure seamless cross-browser compatibility.",
    },
  ],
};

export default function WorkExperience() {
  return (
    <Box
      detailsList={workExperienceList}
      render={(workExperience, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit text-justify sm:text-left">
            <CardContent className="pt-2 px-5">
              {workExperience.desc}
            </CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
