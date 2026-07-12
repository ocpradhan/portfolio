import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { FileUser, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/lucide-linkedin";

type ContactProps = {
  className?: string;
};

const resumeURL: string =
  "https://drive.google.com/file/d/1L1rHnlJ2E6YzGLiN2sYTj7nFIKF-qMuh/view?usp=sharing";
const linkedInUrl: string = "https://www.linkedin.com/in/onesimus-chandra/";
const mail: string = "ocpradhan@gmail.com";
const phone: string = "+919871896227";

export default function Contact({ className }: ContactProps) {
  return (
    <ButtonGroup orientation="horizontal" className={className}>
      <Button variant="outline" size="lg" className="cursor-pointer" asChild>
        <a href={resumeURL} target="_blank">
          <FileUser />
        </a>
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer" asChild>
        <a href={linkedInUrl} target="_blank">
          <LinkedinIcon />
        </a>
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer" asChild>
        <a href={`mailto:${mail}`} target="_blank">
          <Mail />
        </a>
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer" asChild>
        <a href={`tel:${phone}`} target="_blank">
          <Phone />
        </a>
      </Button>
    </ButtonGroup>
  );
}
