"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

export default function CopyButton() {
  const email = "ocpradhan@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <Button
      size="xs"
      variant="ghost"
      className="lowercase cursor-pointer hover:bg-inherit text-primary-foreground/80 hover:text-primary-foreground/80 font-medium text-lg tracking-wide border-t-0 border-x-0 border-b-2 border-primary-foreground/80 rounded-none ring-0 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary p-0"
      onClick={handleCopy}
    >
      <span className="text-lg">{copied ? "Copied to clipboard" : email}</span>
      {copied ? null : <Copy className="w-10 h-10" />}
    </Button>
  );
}
