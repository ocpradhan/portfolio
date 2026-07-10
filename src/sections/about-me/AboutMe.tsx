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
import { Badge } from "@/components/ui/badge";

import type { Section } from "@/types/shared.types";

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
    <div className="flex gap-5  justify-center w-full mx-auto mt-10 px-6 relative xl:w-7xl">
      <div className="w-full lg:w-3/4  lg:ps-15 min-w-0 relative lg:border-s ">
        <div className="lg:flex flex-col gap-2 px-5 py-1 lg:absolute lg:-left-40">
          <h3 className="text-xl text-nowrap hidden lg:block">
            {aboutMeList.sectionName}
          </h3>
          <p className="text-sm/6 text-nowrap hidden lg:block">
            {aboutMeList.sectionInfo[currentSlide]?.name}
          </p>

          <Badge className="lg:hidden flex items-center justify-center gap-2 h-10 absolute -top-1 left-3 z-50 bg-gray-800/95 shadow-lg">
            <span className="text-sm">{aboutMeList.sectionName} </span>-
            <span>{aboutMeList.sectionInfo[currentSlide]?.name}</span>
          </Badge>
        </div>

        <Carousel setApi={setApi} className=" relative">
          <CarouselContent>
            {aboutMeList?.sectionInfo.map((item, i) => (
              <CarouselItem key={i} className="px-5 py-2">
                <Card className="border border-border bg-inherit">
                  <CardContent className="pt-2 px-5">{item.desc}</CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 justify-center  mt-4 lg:mt-0">
            <CarouselPrevious className="static  lg:absolute top-55 left-50 lg:top-6 lg:-translate-y-1/2 lg:-left-12" />
            <CarouselNext className=" static lg:absolute top-55 right-50 lg:top-6 lg:-translate-y-1/2 lg:-right-12" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
