import Box from "@/components/ui/box";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

import type { Section } from "@/types/shared.types";

const certificationsList: Section = {
  sectionName: "Certifications",
  sectionInfo: [
    {
      name: "",
      desc: "Coming Soon...",
    },
  ],
};

export default function Certifications() {
  return (
    <Box
      detailsList={certificationsList}
      render={(certificate, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit text-justify sm:text-left">
            <CardContent className="pt-2 px-5">{certificate.desc}</CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
