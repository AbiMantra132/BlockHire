import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainProject from "../components/project/MainProject";
import RelatedProject from "../components/project/RelatedProject";

export default function DetailProject() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />

      <MainProject />

      <RelatedProject />

      <Footer />
    </div>
  );
}
