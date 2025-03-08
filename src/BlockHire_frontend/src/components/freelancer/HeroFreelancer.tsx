import Container from "../ui/Container";
import Title from "../ui/Title";
import P from "../ui/P";

export default function HeroFreelancer() {
  return (
    <Container>
      <div className="w-full bg-[#2F89FC] rounded-2xl relative py-20 px-24 flex flex-col justify-center items-center mt-24 overflow-hidden">
        <Title align="center" alpha={true} children={"Find Projects"} />
        <P align="center" alpha={true}>
          Explore and apply to open projects from companies looking for skilled
          freelancers. Browse job postings, submit proposals, and start working
          on exciting projects today!
        </P>
        <img
          src="/images/freelancer/ornament.svg"
          alt="ornament"
          className="absolute -top-8 left-8 w-48 opacity-10"
        />
        <img
          src="/images/freelancer/ornament.svg"
          alt="ornament"
          className="absolute -bottom-8 right-8 w-48 opacity-10"
        />
      </div>
    </Container>
  );
}
