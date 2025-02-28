import React from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CallToActionHome() {
  return (
    <Container>
      <div className="w-full rounded-3xl bg-[#CDE1FB] flex flex-col gap-4 justify-center items-center px-16 py-16">
        <h1 className="font-bold text-4xl text-[#2F89FC] text-center leading-snug">
          BlockHire: Your Gateway to Top Talent
        </h1>
        <Button title="Join Now" type="default" />
      </div>
    </Container>
  );
}
