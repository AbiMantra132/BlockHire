import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import CardJob from "../ui/CardJob";

export default function RelatedProject() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h3 className="font-bold text-3xl text-black">Similar Projects</h3>
        <div className="flex flex-row gap-3 justify-start items-stretch overflow-x-scroll w-full">
          <CardJob />
          <CardJob />
          <CardJob />
          <CardJob />
          <CardJob />
        </div>
      </div>
    </Container>
  );
}
