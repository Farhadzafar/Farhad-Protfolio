import Header from "./components/Header";
import Hero from "./components/sections/Hero";
// import HroGPT from "./components/sections/HroGPT";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Testimonial from "./components/sections/Testimonial";
import ContactUs from "./components/sections/ContactUs";
import Footer from "./components/sections/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Resume />
      <Projects />
      <ContactUs />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
