"use client";

import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
  useContext,
} from "react";

type NavPanelContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type NavPanelContextProviderProps = {
  children: ReactNode;
};

const NavPanelContext = createContext<NavPanelContextType | null>(null);

export function NavPanelContextProvider({
  children,
}: NavPanelContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavPanelContext value={{ isOpen, setIsOpen }}>{children}</NavPanelContext>
  );
}

export function useNavPanel() {
  const context = useContext(NavPanelContext);

  if (context === null) {
    throw new Error("useNavPanel must be within a NavPanelContextProvider");
  }

  return context;
}
