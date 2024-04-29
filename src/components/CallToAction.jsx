import { viewPortOptions, fadeUp } from "../framer-variants";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section
      id="sign up"
      className="container-px text-center section-top-spacing lg:rounded-[40px]"
    >
      <motion.h2
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        variants={fadeUp}
        className="text-4xl sm:text-[40px] md:text-5xl md:leading-[56px] lg:text-[55px] lg:leading-[68px] text-french_blue"
      >
        Be part of the future of African education
      </motion.h2>
      <motion.section
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        variants={fadeUp}
        className="flex flex-col gap-8 mt-14 md:flex-row md:justify-center md:gap-[15%] md:mt-14"
      >
        <div>
          <h3 className="mb-2 italic">Are you a lecturer?</h3>
          <button
            type="button"
            className="font-belanosima my-transition rounded-full  bg-rojo hover:bg-white hover:text-rojo border-2 border-current text-white w-56 sm:w-64 lg:w-[270px]"
          >
            <a
              className="w-full h-full inline-block py-3"
              href="https://forms.gle/mEdUk6gxyBSMfZFn6"
            >
              Sign Up for Early Access
            </a>
          </button>
        </div>
        <div>
          <h3 className="mb-2 italic">Are you a student?</h3>
          <button
            type="button"
            className="font-belanosima my-transition rounded-full text-white hover:bg-white hover:text-french_blue border-2 border-current bg-french_blue w-56 sm:w-64 lg:w-[270px]"
          >
            <a
              className="w-full h-full inline-block py-3"
              href="https://forms.gle/9rziB9uQJCvwE4DD7"
            >
              Join the Waitlist
            </a>
          </button>
        </div>
      </motion.section>
    </section>
  );
};
export default CallToAction;
