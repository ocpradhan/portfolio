import Container from "@/components/common/Container";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type CertificateType = {
  name: string;
  certificateSource: string;
  dateCompleted: string;
  description: string;
  url: string;
};

const certifications: CertificateType[] = [
  {
    name: "Crash Course on Python",
    certificateSource: "Google",
    dateCompleted: "Jul 2026",
    description:
      "Learn to write short Python scripts using core data structures like strings, lists, and dictionaries to perform automated actions.",
    url: "https://coursera.org/share/44e446f70f75195c1b82bede0f157d8b",
  },
  {
    name: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    certificateSource: "Udemy",
    dateCompleted: "Apr 2026",
    description:
      "Learned to build modern, scalable web applications by mastering React component architecture, state management with Redux/Context API, and full-stack frameworks like Next.js using real-world projects",
    url: "https://www.udemy.com/certificate/UC-8b706649-47f1-461c-84d8-90791a7d83c9/",
  },
  {
    name: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    certificateSource: "Udemy",
    dateCompleted: "Oct 2024",
    description:
      "Learned how to build fast, scalable REST APIs and server-side applications by mastering backend development with Node.js, Express, and NoSQL databases using MongoDB and Mongoose.",
    url: "https://www.udemy.com/certificate/UC-2c7cce0c-5867-47f9-849f-3efd0668af22/",
  },
  {
    name: "The Complete JavaScript Course 2025: From Zero to Expert!",
    certificateSource: "Udemy",
    dateCompleted: "Mar 2024",
    description:
      "Learned modern JavaScript from scratch, covering foundational syntax, DOM manipulation, asynchronous programming, and clean code architecture to build real-world, full-stack ready applications.",
    url: "https://www.udemy.com/certificate/UC-80e10d19-15ee-4c53-b88e-e6912d9b1fe9/",
  },

  {
    name: "Build Responsive Real-World Websites with HTML and CSS",
    certificateSource: "Udemy",
    dateCompleted: "Aug 2022",
    description:
      "Learned how to build modern, mobile-friendly websites by mastering semantic HTML5, advanced CSS layout techniques (Flexbox and Grid), responsive web design principles, and professional deployment workflows",
    url: "https://www.udemy.com/certificate/UC-0d16a642-1fc0-421d-a820-da810b42a8bc/",
  },
  {
    name: "Introduction to Industry 4.0 and Industrial Internet of Things",
    certificateSource: "NPTEL",
    dateCompleted: "Jul 2021",
    description:
      "Learned about how Industry 4.0 and IIoT connect smart sensors, networks, and data analytics to transform traditional factories into automated, data-driven systems.",
    url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL21CS66S2339212903083120",
  },
  {
    name: "Successful Negotiation: Essential Strategies and Skills",
    certificateSource: "University of Michigan",
    dateCompleted: "Jun 2021",
    description:
      "Learned about the four core steps of successful negotiation—preparation, strategy, execution, and closing—along with practical skills to maximize value, build relationships, and create win-win outcomes.",
    url: "https://www.coursera.org/account/accomplishments/verify/D5HM66PS3VTC",
  },
];

export default function Certifications() {
  return (
    <Container id="certifications" bgColor="">
      <p className="font-lora font-extralight text-foreground/80 tracking-normal">
        03 - Certifications
      </p>
      <h1 className="font-extrabold text-2xl md:text-5xl lg:text-6xl mt-5">
        Proof of practice.
      </h1>
      <ScrollArea className="w-full rounded-md border-b flex-justify center">
        <div className="flex flex-col lg:flex-row gap-10 mt-5 w-full max-w-lg lg:max-w-none mx-auto px-2">
          {certifications.map((certificate) => {
            return (
              <Card
                className="py-5 shrink-0 min-w-28 flex flex-col justify-between"
                key={certificate.name}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col lg:flex-row justify-between gap-2">
                    <div className="flex flex-col">
                      <span>{certificate.name}</span>
                      <Badge variant="secondary">
                        {certificate.certificateSource}
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="self-start">
                      {certificate.dateCompleted}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="font-dm-sans">
                    {certificate.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full cursor-pointer">
                      View Certificate
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Container>
  );
}
