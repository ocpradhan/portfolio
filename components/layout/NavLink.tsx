"use client";

import { useNavPanel } from "@/context/NavPanelContext";
import { useLenis } from "lenis/react";
import { ReactNode } from "react";

type NavigationLinkProps = {
  id: string;
  children: ReactNode;
};

export default function NavLink({ id, children }: NavigationLinkProps) {
  const lenis = useLenis();
  const { setIsOpen } = useNavPanel();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    lenis?.scrollTo(id, {
      lerp: 0.05,
      offset: -80,
    });
    setIsOpen(false);
  };

  return (
    <li
      className="cursor-pointer text-foreground/60 hover:text-foreground transition-all duration-300"
      key={id}
      onClick={handleClick}
    >
      {children}
    </li>
  );
}
