import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainCompany from "../components/company/MainCompany";
import { useAuth } from "../hooks/AuthProvider";

export default function CompanyHome() {
  const { loading } = useAuth();

  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      {loading ? (
        <></>
      ) : (
        <>
          <Navbar />
          <MainCompany />
          <Footer />
        </>
      )}
    </div>
  );
}
