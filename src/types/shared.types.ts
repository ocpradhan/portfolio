import type { ReactNode } from "react";

export type Icon = {
  icon: ReactNode;
};

export type SectionInfo = {
  name?: string;
  role?: string;
  company?: string;
  duration?: string;
  desc?: string;
  icons?: ReactNode[];
};

export type Section = {
  sectionName: string;
  sectionInfo: SectionInfo[];
};
