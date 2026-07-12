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
      <div className="w-full min-[1228px]:w-3/4  min-[1228px]:ps-15 min-w-0 relative min-[1228px]:border-s ">
        <div className="min-[1228px]:flex flex-col gap-2 px-5 py-1 min-[1228px]:absolute min-[1228px]:-left-45 min-[1228px]:w-50 min-[1228px]:justify-end">
          <div className="text-xl text-nowrap hidden min-[1228px]:block">
            {detailsList?.sectionName}
          </div>
          <div className="text-sm/6 hidden min-[1228px]:block">
            {detailsList.sectionInfo[currentSlide]?.name ||
              detailsList.sectionInfo[currentSlide]?.role}
            <p className="italic text-xs">
              {detailsList.sectionInfo[currentSlide]?.company}
            </p>
            <p className="italic text-xs">
              {detailsList.sectionInfo[currentSlide]?.duration}
            </p>
          </div>

          <Badge className="min-[1228px]:hidden flex items-center justify-center gap-2 h-10 absolute -top-1 left-3 z-50 bg-gray-800/95 shadow-lg">
            <span className="text-sm">{detailsList?.sectionName}</span>-
            <span>
              {detailsList.sectionInfo[currentSlide]?.name ||
                detailsList.sectionInfo[currentSlide]?.role}{" "}
            </span>
          </Badge>
        </div>

        <Carousel setApi={setApi} className=" relative">
          <CarouselContent>
            {detailsList.sectionInfo.map(render)}
          </CarouselContent>
          <div className="flex gap-2 justify-center mt-4 min-[1228px]:mt-0">
            <CarouselPrevious className="static  min-[1228px]:absolute top-55 left-50 min-[1228px]:top-6 min-[1228px]:-translate-y-1/2 min-[1228px]:-left-12" />
            <CarouselNext className=" static min-[1228px]:absolute top-55 right-50 min-[1228px]:top-6 min-[1228px]:-translate-y-1/2 min-[1228px]:-right-12" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
