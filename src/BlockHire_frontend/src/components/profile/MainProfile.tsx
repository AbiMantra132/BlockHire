import React from "react";
import Container from "../ui/Container";
import UserProfile from "./UserProfile";
import UserDashboard from "./UserDashboard";

export default function MainProfile() {
  return (
    <Container>
      <div className="w-full flex flex-row gap-8 justify-between items-start mt-24">
        <UserProfile />
        <UserDashboard />
      </div>
    </Container>
  );
}
