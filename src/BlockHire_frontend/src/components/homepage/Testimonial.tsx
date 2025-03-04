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
            testimonial="BlockHire has streamlined our hiring process, connecting us with top blockchain talent faster than ever!"
            rating={5}
            img="testimonial-1.svg"
          />
          <TestimonialCard
            title="SwaraLoka.tech"
            category="Technology Company"
            testimonial="Thanks to BlockHire, we found highly skilled candidates who perfectly fit our company's needs."
            rating={5}
            img="testimonial-1.svg"
          />
          <TestimonialCard
            title="SwaraLoka.tech"
            category="Technology Company"
            testimonial="BlockHire simplifies recruitment with its efficient platform, saving us time and effort in finding the right professionals."
            rating={5}
            img="testimonial-1.svg"
          />
        </div>
      </div>
    </Container>
  );
}
