import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainCompany from "../components/company/MainCompany";
import { useAuth } from "../hooks/AuthProvider";
import { useEffect } from "react";

export default function CompanyHome() {
  const { loading, user, company } = useAuth();
  useEffect(() => {
    console.log(user);
    console.log(company);
  }, [user, company]);
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
