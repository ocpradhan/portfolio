import Box from "../../../ui/Box";
import ContactInfo from "./ContactInfo";

function Header() {
  return (
    <div className="flex flex-col items-start gap-5 pt-13 tracking-widest">
      <h3 className="text-5xl font-extrabold">Onesimus Chandra Pradhan</h3>
      <h3 className="self-start text-2xl font-medium">
        Frontend Developer | Aspiring Full Stack Developer
      </h3>

      <Box fontSize="md">
        I'm a Frontend Developer with 3 years of experience building responsive,
        scalable web applications using React, TypeScript, and modern
        JavaScript. I enjoy creating intuitive user interfaces, developing
        reusable components, and translating complex business requirements into
        clean, maintainable solutions. I'm currently expanding my expertise into
        backend development with Node.js, Express.js, and MongoDB to build
        secure, production-ready full-stack applications and grow as a
        well-rounded software developer.
      </Box>

      <ContactInfo />
    </div>
  );
}

export default Header;
