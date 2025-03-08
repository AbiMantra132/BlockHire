import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainProject from "../components/project/MainProject";
import RelatedProject from "../components/project/RelatedProject";
import { useAuth } from "../hooks/AuthProvider";
import ListFreelancer from "../components/company/ListFreelancer";

export default function DetailProject() {
  const { user, loading } = useAuth();
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />

      <MainProject />

      {loading ? (
        <div className=""></div>
      ) : user.role == "Freelancer" ? (
        <RelatedProject />
      ) : (
        <ListFreelancer freelancers={[]} />
      )}

      <Footer />
    </div>
  );
}
