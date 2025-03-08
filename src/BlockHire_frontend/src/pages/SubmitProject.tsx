import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainSubmitProject from "../components/submitProject/MainSubmitProject";

export default function SubmitProject() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />
      <MainSubmitProject />
      <Footer />
    </div>
  );
}
