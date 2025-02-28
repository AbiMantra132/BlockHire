import AboutList from "../ui/AboutList";
import Container from "../ui/Container";
import P from "../ui/P";
import Title from "../ui/Title";

export default function ValueHome() {
  return (
    <Container>
      <div className="w-full rounded-3xl bg-[#2F89FC] flex justify-between items-stretch overflow-hidden">
        {/* CONTENT */}
        <div className="flex flex-2 flex-col justify-start items-start gap-3 px-16 py-20">
          <Title alpha={true}>
            Where Companies and Experts Collaborate Seamlessly.
          </Title>
          <P alpha={true}>
            Join a trusted network where businesses and skilled professionals
            collaborate efficiently. Secure transactions, flexible hiring, and
            top-tier talent – all in one place
          </P>
          <div className="flex flex-col justify-start items-start gap-5 w-full mt-4">
            <AboutList
              title="Effortless Hiring"
              subtitle="Find, interview, and onboard talent in a few clicks."
              img="value-1.svg"
              alpha={true}
            />
            <AboutList
              title="Scalable Solutions"
              subtitle="Whether you're a startup or enterprise, we have the right talent for you."
              img="value-2.svg"
              alpha={true}
            />
            <AboutList
              title="Verified Professionals"
              subtitle="Work with top-tier talent who meet your project needs."
              img="value-3.svg"
              alpha={true}
            />
          </div>
        </div>
        {/* IMAGE */}
        <div
          className="flex flex-1"
          style={{
            backgroundImage: "url(images/home/value.png)",
            backgroundPosition: "center",
          }}
        >
          {/* <img src="images/home/value.png" alt="value" className="h-full" /> */}
        </div>
      </div>
    </Container>
  );
}
