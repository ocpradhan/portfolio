import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { FileUser, Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/lucide-linkedin";

export default function Contact() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="lg" className="cursor-pointer">
        <FileUser />
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer">
        <LinkedinIcon />
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer">
        <Mail />
      </Button>
      <Button variant="outline" size="lg" className="cursor-pointer">
        <Phone />
      </Button>
    </ButtonGroup>
  );
}
