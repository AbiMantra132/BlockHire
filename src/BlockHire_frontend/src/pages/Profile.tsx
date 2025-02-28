import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainProfile from "../components/profile/MainProfile";

export default function Profile() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />
      <MainProfile />
      <Footer />
    </div>
  );
}
