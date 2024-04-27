import { viewPortOptions, fadeUp } from "../framer-variants";
import { motion } from "framer-motion";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
    if (!email) {
      setError("Please input a valid email address");
      return;
    }
    const result = regexPattern.test(email);
    if (result) {
      console.log("form submitted");
      setError(false);
    } else {
      setError("Invalid email address");
    }
  };
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
            className="font-belanosima py-3 my-transition rounded-full  bg-rojo hover:bg-white hover:text-rojo border-2 border-current text-white px-0 w-56 sm:w-64 lg:w-[270px]"
          >
            Sign Up for Early Access
          </button>
        </div>
        <div>
          <h3 className="mb-2 italic">Are you a student?</h3>
          <button
            type="button"
            className="font-belanosima py-3 my-transition rounded-full text-white hover:bg-white hover:text-french_blue border-2 border-current bg-french_blue px-0 w-56 sm:w-64 lg:w-[270px]"
          >
            Join the Waitlist
          </button>
        </div>
      </motion.section>
      <motion.form
        initial="hide"
        whileInView="show"
        viewport={viewPortOptions}
        variants={fadeUp}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mt-14 max-w-[610px] mx-auto flex flex-col sm:flex-row sm:items-center relative sm:justify-between md:mt-20"
      >
        <label className="font-belanosima w-max mb-2 sm:mb-0" htmlFor="email">
          Email:
        </label>
        <div></div>
        <input
          className={`border-2 border-gray-300 w-full py-3 px-5 rounded-full focus:outline focus:outline-2 outline-offset-4 focus:outline-french_blue ${
            error ? "outline outline-2 !outline-rojo animate-jiggle" : ""
          } sm:pr-40 sm:w-[87%] sm:py-2`}
          placeholder="e.g. name@example.com"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!e.target.value) {
              setError(false);
            }
          }}
        />
        {error && (
          <p className="mt-3 text-left font-belanosima text-rojo sm:absolute sm:left-[13%] sm:top-14 sm:mt-0">
            {error}
          </p>
        )}
        <button
          onClick={() => {
            validateEmail();
          }}
          className="font-belanosima h-12 my-transition rounded-full bg-french_blue hover:bg-white hover:text-french_blue hover:border-2 border-current text-white mt-5 sm:w-36 sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:h-full sm:py-2"
          type="submit"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
};
export default CallToAction;
