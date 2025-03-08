import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import CardJob from "../ui/CardJob";

export default function RelatedProject() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h3 className="font-bold text-3xl text-black">Similar Projects</h3>
        <div className="flex flex-row gap-3 justify-start items-stretch no-scrollbar overflow-x-scroll w-full">
          <CardJob
            isFlex={true}
            title="Frontend Development"
            level="Entry"
            deadline="20 Maret 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
          <CardJob
            isFlex={true}
            title="DAPPs Development"
            level="Expert"
            deadline="20 Mei 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
          <CardJob
            isFlex={true}
            title="Java Editor"
            level="Intermidiate"
            deadline="3 April 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
          <CardJob
            isFlex={true}
            title="Frontend Development"
            level="Entry"
            deadline="20 Maret 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
          <CardJob
            isFlex={true}
            title="Frontend Development"
            level="Entry"
            deadline="20 Maret 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
          <CardJob
            isFlex={true}
            title="Frontend Development"
            level="Entry"
            deadline="20 Maret 2025"
            budget={2}
            scope="Worldwide"
            id={1}
          />
        </div>
      </div>
    </Container>
  );
}
