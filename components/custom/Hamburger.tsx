"use client";

import { ReactNode } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useNavPanel } from "@/context/NavPanelContext";
import { ThemeToggle } from "./ThemeToggle";

type HamburgerProps = {
  children: ReactNode;
};

export default function Hamburger({ children }: HamburgerProps) {
  const { isOpen, setIsOpen } = useNavPanel();

  return (
    <>
      <div className="flex gap-2">
        <ThemeToggle />
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden cursor-pointer rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        className={`fixed top-18 left-0 h-[calc(100vh-72px)] w-full bg-background/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 lg:hidden transition-transform duration-300 ease-in-out border-t border-border ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8 text-lg font-medium">
            {children}
          </ul>
        </nav>
      </div>
    </>
  );
}
