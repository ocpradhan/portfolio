import type { Section } from "@/types/shared.types";
import Box from "@/components/ui/box";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const aboutMeList: Section = {
  sectionName: "About Me",
  sectionInfo: [
    {
      name: "My Experience",
      desc: "With over 3 years of professional experience as a Frontend Developer, I've contributed to the development of enterprise web applications using React, Next.js, Angular, and TypeScript. My work has involved building responsive user interfaces, integrating REST APIs, implementing reusable components, optimizing application performance, and collaborating within Agile teams to deliver scalable,high-quality software.",
    },
    {
      name: "Currently Learning",
      desc: "I'm currently expanding my expertise into full-stack development by learning Node.js, Express.js, MongoDB, and TypeScript on the backend. My focus is on building secure, scalable, and production-ready applications while deepening my understanding of RESTful APIs, authentication, database design, and backend architecture through hands-on projects.",
    },
    {
      name: "Career Goals",
      desc: "My goal is to become a well-rounded Full Stack Developer capable of designing and building scalable, high-performance web applications from frontend to backend. I'm committed to continuously improving my technical skills, embracing new technologies, and contributing to meaningful products that deliver real value to users.",
    },
  ],
};

export default function AboutMe() {
  return (
    <Box
      detailsList={aboutMeList}
      render={(aboutMe, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit text-justify sm:text-left">
            <CardContent className="pt-2 px-5">{aboutMe.desc}</CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
