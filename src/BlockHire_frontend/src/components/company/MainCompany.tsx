import React from "react";
import Container from "../ui/Container";
import CompanyProfile from "./CompanyProfile";
import CompanyDashborad from "./CompanyDashborad";

export default function MainCompany() {
  return (
    <Container>
      <div className="w-full flex flex-row gap-8 justify-between items-start mt-24">
        <CompanyProfile />
        <CompanyDashborad />
      </div>
    </Container>
  );
}
