import Contact from "./Contact";
import MyAvatar from "./MyAvatar";
import { useMediaQueries } from "@/hooks/useMediaQueries";

export default function Hero() {
  const matches = useMediaQueries("560");

  return (
    <section className="flex flex-row justify-between items-start sm:items-center gap-10">
      <div className="sm:flex flex-col gap-5 items-center hidden px-6">
        <MyAvatar />
        {matches && <Contact />}
      </div>

      <div className="flex flex-col gap-6 text-center sm:text-left">
        <div className="">
          <h1 className="text-lg font-bold">Onesimus Chandra Pradhan</h1>
          <h2 className="text-md font-heading">
            Frontend Developer | Aspiring Full Stack Developer
          </h2>

          <p className="text-sm/6 mt-2 text-justify">
            I'm a Frontend Developer with 3 years of experience building
            responsive, scalable web applications using React, TypeScript, and
            modern JavaScript. I'm currently expanding my expertise into backend
            development with Node.js, Express, and MongoDB to build complete,
            production-ready full-stack applications.
          </p>
        </div>
        {!matches && (
          <div className="self-center">
            <Contact />
          </div>
        )}
      </div>
    </section>
  );
}
