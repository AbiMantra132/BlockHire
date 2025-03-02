import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import Container from "../components/ui/Container";

export default function Loading() {
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />
      <Container>
        <div className=" h-screen w-screen flex justify-center items-center">
          Loading
        </div>
      </Container>
      <Footer />
    </div>
  );
}
