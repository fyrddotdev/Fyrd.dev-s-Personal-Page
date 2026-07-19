function AboutMe() {
  return (
    <>
      <section id="aboutme">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col justify-between md:flex-row w-full gap-8 bg-zinc-900 border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2 tracking-wide">
            <h2 className="text-1xl font-extralight text-primary-foreground">
              About
            </h2>
            <h1 className="text-4xl font-extrabold">About Me</h1>
          </div>
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2">
            <p className="text-1xl text-zinc-300">
              I am a Programmer and Game Developer. Active in the programming
              world since 2020, starting my journey back in 6th grade using
              Sketchware and Construct 2. I have grown into a developer who
              focuses on building efficient software architectures and
              interactive games, utilizing Godot as my primary engine for
              development. I bridge the gap between technical logic, clean code
              design, and creative mechanics to turn ideas into functional
              digital solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
