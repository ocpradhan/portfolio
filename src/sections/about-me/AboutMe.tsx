import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import type { Section } from "@/types/shared.types";

const aboutMeList: Section[] = [
  {
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
  },
];

export default function AboutMe() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(
    function () {
      if (!api) {
        return;
      }

      const handleSelect = () => setCurrentSlide(api.selectedScrollSnap());

      api.on("select", handleSelect);

      return () => {
        api.off("select", handleSelect);
      };
    },
    [api],
  );

  return (
    <>
      {aboutMeList.map((item, i) => {
        return (
          <div className="flex gap-5 ps-60 p-6 pe-12 justify-center" key={i}>
            <div className="flex flex-col gap-2 justify-baseline items-end md:grow">
              <h3 className="text-xl text-nowrap">{item.sectionName}</h3>
              <p className="text-sm/6 text-nowrap">
                {item.sectionInfo[currentSlide]?.name}
              </p>
            </div>

            <div className="grow border-s ps-15">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {item.sectionInfo.map((item, i) => (
                    <CarouselItem key={i}>
                      <Card className="bg-transparent">
                        <CardContent>{item.desc}</CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        );
      })}
    </>
  );
}
