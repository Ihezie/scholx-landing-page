import { fadeUp, viewPortOptions } from "../framer-variants";
import { motion } from "framer-motion";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const validateEmail = () => {
    const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
    const result = regexPattern.test(email);
    if (result) {
      alert("Form Submitted 🎉");
    } else {
      setError(true);
    }
  };
  return (
    <motion.section
      id="sign up"
      className="container-px text-center section-mt bg-black text-white py-8 md:py-16 xl:mx-[18%] xl:rounded-[45px] xl:px-16"
    >
      <h2>Be part of the future of African education</h2>
      <section className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-[15%] md:mt-14">
        <div>
          <h3 className="mb-4 italic">Are you a lecturer?</h3>
          <button
            type="button"
            className="btn bg-rojo text-white w-[250px] sm:w-[270px] lg:w-72 xl:w-[310px]"
          >
            Sign Up for Early Access
          </button>
        </div>
        <div>
          <h3 className="mb-4 italic">Are you a student?</h3>
          <button
            type="button"
            className="btn text-white bg-french_blue w-[250px] sm:w-[270px] lg:w-72 xl:w-[310px]"
          >
            Join the Waitlist
          </button>
        </div>
      </section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validateEmail();
        }}
        className="mt-8 max-w-[610px] mx-auto flex flex-col sm:flex-row sm:items-center relative sm:justify-between md:mt-20"
      >
        <label className="font-belanosima w-max mb-3 sm:mb-0" htmlFor="email">
          Email:
        </label>
        <input
          className="border w-full py-3 px-5 rounded-full text-black sm:pr-40 sm:w-[87%]"
          placeholder="e.g. name@example.com"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          className="btn bg-rojo mt-8 sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:h-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
};
export default CallToAction;
