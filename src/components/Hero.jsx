const Hero = () => {
  return (
    <section className="h-screen min-h-[700px] xs:min-h-[800px] bg-mobile-hero bg-no-repeat bg-cover bg-[40%_50%] container-px pt-36 text-center text-white sm:pt-44 md:bg-tablet-hero md:pt-56 xl:bg-desktop-hero">
      <h1 className="text-4xl sm:text-[40px] md:text-5xl md:leading-[56px] lg:text-6xl lg:leading-[68px] xl:text-7xl xl:leading-[78px]">
        Engage, Connect, Empower: Transform Your Classroom Experience
      </h1>
      <h2 className="mt-16 italic md:mt-20 lg:mt-12">
        “Streamline workflows, boost engagement, and foster deeper learning with
        Scholx.”
      </h2>
      <div className="mt-14 flex flex-col items-center gap-7 md:gap-10 md:mt-20 lg:flex-row lg:justify-center lg:mt-12">
        <button type="button" className="btn bg-french_blue">
          Get Started
        </button>
        <button type="button" className="btn border-2">
          Learn More
        </button>
      </div>
    </section>
  );
};
export default Hero;