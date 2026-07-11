import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState, type ReactNode } from "react";
import type { Section, SectionInfo } from "@/types/shared.types";

type BoxProps = {
  detailsList?: Section;
  render: (item: SectionInfo, index: number) => ReactNode;
};

export default function Box({
  detailsList = { sectionName: "", sectionInfo: [] },
  render,
}: BoxProps) {
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
    <div className="flex gap-5  justify-center w-full mx-auto mt-10 relative xl:w-7xl">
      <div className="w-full lg:w-3/4  lg:ps-15 min-w-0 relative lg:border-s ">
        <div className="lg:flex flex-col gap-2 px-5 py-1 lg:absolute lg:-left-40">
          <h3 className="text-xl text-nowrap hidden lg:block">
            {detailsList?.sectionName}
          </h3>
          <p className="text-sm/6 text-nowrap hidden lg:block">
            {detailsList.sectionInfo[currentSlide]?.name}
          </p>

          <Badge className="lg:hidden flex items-center justify-center gap-2 h-10 absolute -top-1 left-3 z-50 bg-gray-800/95 shadow-lg">
            <span className="text-sm">{detailsList?.sectionName}</span>-
            <span>{detailsList.sectionInfo[currentSlide]?.name}</span>
          </Badge>
        </div>

        <Carousel setApi={setApi} className=" relative">
          <CarouselContent>
            {detailsList.sectionInfo.map(render)}
          </CarouselContent>
          <div className="flex gap-2 justify-center mt-4 lg:mt-0">
            <CarouselPrevious className="static  lg:absolute top-55 left-50 lg:top-6 lg:-translate-y-1/2 lg:-left-12" />
            <CarouselNext className=" static lg:absolute top-55 right-50 lg:top-6 lg:-translate-y-1/2 lg:-right-12" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
