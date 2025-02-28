import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import P from "../ui/P";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonial() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-1/2 min-w-96 flex flex-col justify-center items-center gap-2">
          <Title align="center">Trusted by Thousands</Title>
          <P align="center">
            We have helped thousands of users find the best solutions. Here’s
            what they have to say about their experience!
          </P>
        </div>
        <div className="flex flex-row justify-start items-stretch gap-3">
          <TestimonialCard
            title="SwaraLoka.tech"
            category="Technology Company"
            testimonial="Figma ipsum component variant main layer. Pen bullet figma layer team inspect. Inspect stroke plugin rotate device editor mask star undo move. Italic flatten figma font vector rotate fill scale shadow ."
            rating={0}
            img="testimonial-1.svg"
          />
          <TestimonialCard
            title="SwaraLoka.tech"
            category="Technology Company"
            testimonial="Figma ipsum component variant main layer. Pen bullet figma layer team inspect. Inspect stroke plugin rotate device editor mask star undo move. Italic flatten figma font vector rotate fill scale shadow ."
            rating={0}
            img="testimonial-1.svg"
          />
          <TestimonialCard
            title="SwaraLoka.tech"
            category="Technology Company"
            testimonial="Figma ipsum component variant main layer. Pen bullet figma layer team inspect. Inspect stroke plugin rotate device editor mask star undo move. Italic flatten figma font vector rotate fill scale shadow ."
            rating={0}
            img="testimonial-1.svg"
          />
        </div>
      </div>
    </Container>
  );
}
