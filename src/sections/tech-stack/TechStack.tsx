import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Box from "@/components/ui/box";
import type { Section } from "@/types/shared.types";
import { HTMLIcon } from "@/components/icons/html-icon";
import { CSSIcon } from "@/components/icons/css-icon";
import { JSIcon } from "@/components/icons/js-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { NextJSIcon } from "@/components/icons/nextjs-icon";
import { AngularIcon } from "@/components/icons/angular-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { BootstrapIcon } from "@/components/icons/bootstrap";
import { MaterialUIIcon } from "@/components/icons/material-ui-icon";
import { ReduxIcon } from "@/components/icons/redux-icon";
import { TanstackIcon } from "@/components/icons/tanstack-icon";
import { NodejsIcon } from "@/components/icons/nodejs-icon";
import { ExpressIcon } from "@/components/icons/express-icon";
import { MongoDBIcon } from "@/components/icons/mongodb-icon";
import { SupabaseIcon } from "@/components/icons/supabase-icon";
import { GitIcon } from "@/components/icons/git-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { AzureDevOpsIcon } from "@/components/icons/azuredevops-icon";
import { VSCodeIcon } from "@/components/icons/vs-code";
import { NPMIcon } from "@/components/icons/npm-icon";
import { PostmanIcon } from "@/components/icons/postman";
import { ESLintIcon } from "@/components/icons/eslint-icon";
import { PrettierIcon } from "@/components/icons/prettier-icon";
import { ViteIcon } from "@/components/icons/vite-icon";

const techStackList: Section = {
  sectionName: "Tech Stack",
  sectionInfo: [
    {
      name: "Languages",
      icons: [<HTMLIcon />, <CSSIcon />, <JSIcon />, <TypescriptIcon />],
    },
    {
      name: "Frontend",
      icons: [<ReactIcon />, <NextJSIcon />, <AngularIcon />],
    },
    {
      name: "Styling",
      icons: [<TailwindIcon />, <BootstrapIcon />, <MaterialUIIcon />],
    },
    {
      name: "State Management",
      icons: [<ReduxIcon />, <TanstackIcon />],
    },
    {
      name: "Backend",
      icons: [<NodejsIcon />, <ExpressIcon />],
    },
    {
      name: "Database",
      icons: [<MongoDBIcon />, <SupabaseIcon />],
    },
    {
      name: "Tools",
      icons: [
        <GitIcon />,
        <GithubIcon />,
        <AzureDevOpsIcon />,
        <VSCodeIcon />,
        <NPMIcon />,
        <PostmanIcon />,
        <ESLintIcon />,
        <PrettierIcon />,
        <ViteIcon />,
      ],
    },
  ],
};

export default function TechStack() {
  return (
    <Box
      detailsList={techStackList}
      render={(teckStack, index) => (
        <CarouselItem key={index} className="px-5 py-2">
          <Card className="border border-border bg-inherit">
            <CardContent className="pt-2 px-5 flex gap-4 items-center justify-center flex-wrap">
              {teckStack?.icons?.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </CardContent>
          </Card>
        </CarouselItem>
      )}
    />
  );
}
