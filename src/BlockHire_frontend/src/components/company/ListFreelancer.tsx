import Container from "../ui/Container";
import FreelancerCard from "../ui/FreelancerCard";
import P from "../ui/P";

interface ListFreelancerProps {
  freelancers: [];
}

export default function ListFreelancer({ freelancers }: ListFreelancerProps) {
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h3 className="font-bold text-3xl text-black">Freelancer List</h3>
        {freelancers.length == 0 ? (
          <div className="w-full flex justify-start items-start">
            <P>There is no freelancer on this project</P>
          </div>
        ) : (
          <div className="flex flex-row gap-3 justify-start items-stretch no-scrollbar overflow-x-scroll w-full">
            {freelancers.map((freelancer: any, index) => (
              <FreelancerCard
                name={freelancer.name}
                job={freelancer.job}
                status="active"
                profile={freelancer.profile}
                isWhite
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
