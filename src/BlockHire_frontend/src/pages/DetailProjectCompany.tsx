import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainProjectDetail from "../components/detailProjectCompany/MainProjectDetail";

export default function DetailProjectCompany() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />
      <MainProjectDetail />
      <Footer />
    </div>
  );
}
