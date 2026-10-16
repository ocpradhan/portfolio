export default function Hero() {
  return (
    <>
      <section className="pb-15">
        <div className="font-lora font-extralight text-foreground/80 flex flex-col lg:flex-row items-center lg:justify-between mt-30 mb-15 tracking-normal">
          <p className="wrap-break-word w-50 text-center lg:text-start">
            Frontend developer crafting sharp interfaces with full-stack range
          </p>

          <div>
            <p>Available for select projects</p>
            <p>
              <span className="text-primary">●</span> 2026 — open to collaborate
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-start">
          <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl">
            Interfaces
          </h1>
          <h1 className="text-primary font-extrabold text-5xl md:text-8xl lg:text-9xl lg:ml-30">
            With
          </h1>
          <h1 className="font-extrabold text-5xl md:text-8xl lg:text-9xl">
            Intent<span className="text-yellow-500">.</span>
          </h1>
        </div>
      </section>

      <hr className="border-foreground/50" />

      <p className="py-10 font-dm-sans font-medium text-lg text-foreground/60 text-center lg:text-start">
        I turn product ideas into clear, responsive interfaces — with the
        full-stack understanding to make every interaction work beautifully
        behind the scenes.
      </p>
    </>
  );
}
