import AboutHome from "../components/homepage/AboutHome";
import CallToActionHome from "../components/homepage/CallToActionHome";
import Herohome from "../components/homepage/Herohome";
import SuggestWorkHome from "../components/homepage/SuggestWorkHome";
import Testimonial from "../components/homepage/Testimonial";
import TopServicesHome from "../components/homepage/TopServicesHome";
import ValueHome from "../components/homepage/ValueHome";
import Footer from "../components/main/Footer";
import Navbar from "../components/main/Navbar";

export default function Home() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />

      <Herohome />

      <SuggestWorkHome />

      <TopServicesHome />

      <AboutHome />

      <ValueHome />

      <Testimonial />

      <CallToActionHome />

      <Footer />
    </div>
  );
}
