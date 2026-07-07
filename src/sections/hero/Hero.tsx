import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section>
      <Avatar className="w-52 h-52">
        <AvatarImage src="/user-img.png" />
      </Avatar>

      <div className="">
        <p>Onesimus Chandra Pradhan</p>
        <p>Frontend Developer | Aspiring Full Stack Developer</p>

        <p>
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
