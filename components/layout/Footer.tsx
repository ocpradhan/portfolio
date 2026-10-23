import { Copyright, Download } from "lucide-react";
import { GitHubLogo } from "../logo/GithubLogo";
import { LinkedInLogo } from "../logo/LinkedInLogo";
import CopyButton from "./CopyButton";

export default function Footer() {
  return (
    <footer className="bg-primary p-10 lg:p-30" id="contactMe">
      <p className="font-lora font-extralight tracking-normal text-primary-foreground">
        04 - Contact me
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-10 mb-20">
        <h1 className="text-3xl md:text-7xl lg:text-8xl -tracking-widest flex-2 text-primary-foreground">
          Have a hard problem?
        </h1>

        <div className="flex-3 text-end">
          <p className="font-dm-sans font-light text-lg tracking-wide text-primary-foreground mb-5">
            Just say hello.
          </p>
          <CopyButton />
        </div>
      </div>
      <hr />

      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between mt-5">
        <div className="flex gap-2 ">
          <a
            href="https://github.com/ocpradhan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github Profile"
            className="cursor-pointer"
          >
            <GitHubLogo className="w-5 h-5 text-primary-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/onesimus-chandra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="cursor-pointer"
          >
            <LinkedInLogo className="w-5 h-5 text-primary-foreground" />
          </a>
        </div>

        <a
          className="text-primary-foreground flex gap-2 cursor-pointer"
          href="/files/Onesimus_Resume.pdf"
          download="Onesimus_Resume.pdf"
        >
          <Download className="w-5 h-5" />
          <p className="text-sm">Download Resume</p>
        </a>

        <span className="text-primary-foreground flex gap-2">
          <Copyright className="w-5 h-5" />
          <p className="text-sm">2026 Onesimus Chandra Pradhan</p>
        </span>
      </div>
    </footer>
  );
}
