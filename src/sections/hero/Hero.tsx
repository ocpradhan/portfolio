import Contact from "./Contact";
import MyAvatar from "./MyAvatar";

export default function Hero() {
  return (
    <section className="flex justify-between items-center gap-10">
      <div className="flex flex-col gap-5 items-center">
        <MyAvatar />
        <Contact />
      </div>

      <div>
        <h1 className="text-lg font-bold">Onesimus Chandra Pradhan</h1>
        <h2 className="text-md font-heading">
          Frontend Developer | Aspiring Full Stack Developer
        </h2>

        <p className="text-sm/6 mt-2">
          I'm a Frontend Developer with 3 years of experience building
          responsive, scalable web applications using React, TypeScript, and
          modern JavaScript. I'm currently expanding my expertise into backend
          development with Node.js, Express, and MongoDB to build complete,
          production-ready full-stack applications.
        </p>
      </div>
    </section>
  );
}
