import Box from "@/components/ui/box";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import type { Section } from "@/types/shared.types";

const featuredProjectsList: Section = {
  sectionName: "Projects",
  sectionInfo: [
    {
      name: "",
      desc: "Coming Soon...",
    },
  ],
};

export default function FeaturedProjects() {
  return (
    <Box
      detailsList={featuredProjectsList}
      render={(project, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit text-justify sm:text-left">
            <CardContent className="pt-2 px-5">{project.desc}</CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
