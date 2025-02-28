import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import CardJob from "../ui/CardJob";

export default function ProjectsFreelancer() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <Title children={"Projects"} />
        <div className="flex flex-row w-full flex-wrap gap-2">
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
          <CardJob isFlex={true} />
        </div>
      </div>
    </Container>
  );
}
