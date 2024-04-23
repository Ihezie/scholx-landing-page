import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import KeyFeatures from "./components/KeyFeatures";
import { benefitsForLecturers, benefitsForStudents } from "./data";
import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <KeyFeatures />
      <section id="benefits">
        <Benefits {...benefitsForLecturers} />
        <Benefits {...benefitsForStudents} />
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
