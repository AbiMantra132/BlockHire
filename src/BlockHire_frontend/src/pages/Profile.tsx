import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import MainProfile from "../components/profile/MainProfile";
import { useAuth } from "../hooks/AuthProvider";

export default function Profile() {
  const { loading } = useAuth();
  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      {loading ? (
        <></>
      ) : (
        <>
          <Navbar />
          <MainProfile />
          <Footer />
        </>
      )}
    </div>
  );
}
