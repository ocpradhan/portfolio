import Box from "@/components/ui/box";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

import type { Section } from "@/types/shared.types";

const educationList: Section = {
  sectionName: "Education",
  sectionInfo: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      company: "Sharda University",
      duration: "2019 – 2023",
      desc: "Completed a Bachelor's degree in Computer Science, building a strong foundation in software development, data structures, algorithms, object-oriented programming, databases, operating systems, and computer networks. The program provided both theoretical knowledge and practical experience, preparing me for a career in modern web development.",
    },
  ],
};

export default function Education() {
  return (
    <Box
      detailsList={educationList}
      render={(education, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit text-justify sm:text-left">
            <CardContent className="pt-2 px-5">
              <span className="block mb-5 italic text-xs">
                <p>{education.degree}</p>
                <p>
                  ({education.company} {education.duration})
                </p>
              </span>
              {education.desc}
            </CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
