import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import WorkExperience from "./components/WorkExperience";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <ProjectsSection />
        <SkillsSection />
        <WorkExperience />
        <ContactPage />
        <Footer />
    </>
  );
}

export default App;
