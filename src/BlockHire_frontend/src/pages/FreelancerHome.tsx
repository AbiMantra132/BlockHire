import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import HeroFreelancer from "../components/freelancer/HeroFreelancer";
import CategoriesFreelancer from "../components/freelancer/CategoriesFreelancer";
import ProjectsFreelancer from "../components/freelancer/ProjectsFreelancer";

export default function FreelancerHome() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />

      <HeroFreelancer />

      <CategoriesFreelancer />

      <ProjectsFreelancer />

      <Footer />
    </div>
  );
}
