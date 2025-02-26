import Container from "../ui/Container";
import P from "../ui/P";

export default function Herohome() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center mt-32 relative">
        <div className="w-1/2 min-w-96 flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold text-5xl text-[#202020] text-center leading-snug">
            Discover Top Talent & Future Opportunities
          </h1>
          <P align="center">
            Find top freelancers and exciting projects in a secure,
            decentralized ecosystem. Work with transparency, trust, and seamless
            collaboration.
          </P>
          <div className="w-full bg-white flex flex-row justify-between items-center p-2 rounded-full mt-4 shadow-lg">
            <input
              type="text"
              placeholder="Web3 developer project..."
              className="w-full bg-white px-3 py-2 outline-none text-base"
            />
            <button className="h-full aspect-square bg-transparent">
              <img src="images/home/search.svg" alt="search" className="w-12" />
            </button>
          </div>
        </div>
        {/* ORNAMENT */}
        <div className="absolute top-0 left-0 w-52">
          <img
            src="images/home/ornament.svg"
            alt="ornament"
            className="w-full"
          />
        </div>
        {/* ORNAMENT */}
        <div className="absolute bottom-0 right-0 w-40">
          <img
            src="images/home/ornament.svg"
            alt="ornament"
            className="w-full"
          />
        </div>
      </div>
    </Container>
  );
}
