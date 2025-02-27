import React, { useEffect, useState } from "react";
import Navbar from "../components/main/Navbar";
import Category from "../components/createAccount/Category";
import CreateCompany from "../components/createAccount/CreateCompany";
import CreateFreelancer from "../components/createAccount/CreateFreelancer";

interface DataType {
  name: string;
  email: string;
  displayName: string;
  profile: string;
  field: string;
  portofolioLinks: string;
  bio: string;
  skills: string[];
  location: string;
  webUrl: string;
}

export default function CreateAccount() {
  const [stage, setStage] = useState<"category" | "personal" | "extra">(
    "category"
  );
  const [isCompany, setIsCompany] = useState<boolean | null>(null);
  const [data, setData] = useState<DataType>({
    name: "",
    email: "",
    displayName: "",
    profile: "",
    field: "",
    portofolioLinks: "",
    bio: "",
    skills: [],
    location: "",
    webUrl: "",
  });

  return (
    <div className="w-full bg-[#E5F0F9] min-h-screen">
      <Navbar />

      {stage == "category" && (
        <Category
          setStage={setStage}
          isCompany={isCompany}
          setIsCompany={setIsCompany}
        />
      )}
      {stage == "personal" && isCompany && (
        <CreateCompany data={data} setData={setData} />
      )}
      {stage == "personal" && !isCompany && (
        <CreateFreelancer data={data} setData={setData} />
      )}
    </div>
  );
}
