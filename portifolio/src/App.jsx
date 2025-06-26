import Navbar from "./component/navbar/Navbar";
import HeroSection from "./component/heroSection/HeroSection";
import About from "./component/about/About";
import Skill from "./component/skillsetSection/skill";
import Project from "./component/project/Project";
import Experiance from "./component/Experiance/Experiance";
import Contact from "./component/contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skill />
      <Project />
      <Experiance />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
