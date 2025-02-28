import React from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import P from "../ui/P";
import AboutList from "../ui/AboutList";

export default function AboutHome() {
  return (
    <Container>
      <div className="w-full flex flex-row justify-between items-center gap-8">
        <div className="flex flex-1 justify-start items-center">
          <img src="images/home/about.png" alt="about" />
        </div>
        <div className="flex flex-col justify-start items-start gap-3 flex-1">
          <Title>Work Smarter with Decentralized Talent</Title>
          <P>
            Build your dream team with top freelancers worldwide. Powered by
            Web3, we ensure transparency, security, and instant payments—no
            intermediaries, just efficient collaboration.
          </P>
          <div className="flex flex-col justify-start items-start w-full gap-5 mt-5">
            <AboutList
              title="Decentralized & Secure"
              subtitle="All transactions are secured through smart contracts, ensuring trust and reliability."
              img="about-1.svg"
            />
            <AboutList
              title="Open Team Collaboration"
              subtitle="Freelancers can apply for open projects and work flexibly with companies."
              img="about-2.svg"
            />
            <AboutList
              title="Escrow System"
              subtitle="Payments are securely held and only released once the work is completed as agreed."
              img="about-3.svg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
