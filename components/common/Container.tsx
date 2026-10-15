import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  id: string;
  bgColor?: string;
};

export default function Container({
  children,
  id,
  bgColor = "bg-secondary",
}: ContainerProps) {
  return (
    <section className={`p-30 ${bgColor}`} id={id}>
      {children}
    </section>
  );
}
