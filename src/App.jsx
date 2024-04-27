import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
// import { benefitsForLecturers, benefitsForStudents } from "./data";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { MotionConfig } from "framer-motion";
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <Hero />
      <About />
      <KeyFeatures />
      <Benefits/>
      <CallToAction />
      <Footer />
    </MotionConfig>
  );
}

export default App;
