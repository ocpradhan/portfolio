import Hamburger from "../custom/Hamburger";
import NavLink from "./NavLink";

type NavigationType = {
  section: string;
  id: string;
};

const navigationLinks: NavigationType[] = [
  { section: "About Me", id: "#about" },
  { section: "Projects", id: "#projects" },
  { section: "Experience", id: "#experience" },
  { section: "Certifications", id: "#certifications" },
  { section: "Contact Me", id: "#contactMe" },
];

export default function Header() {
  return (
    <header className="flex justify-between fixed top-0 z-50 w-full bg-background/80 shadow-sm backdrop-blur-lg py-5 px-10 lg:px-40 items-center">
      <p className="font-lora font-bold text-xl cursor-pointer">
        Onesimus Chandra Pradhan
      </p>

      <nav className="hidden lg:block mr-5">
        <ul className="flex gap-10">
          {navigationLinks.map(({ section, id }: NavigationType) => (
            <NavLink key={id} id={id}>
              {section}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Hamburger>
        {navigationLinks.map(({ section, id }: NavigationType) => (
          <NavLink key={id} id={id}>
            {section}
          </NavLink>
        ))}
      </Hamburger>
    </header>
  );
}
