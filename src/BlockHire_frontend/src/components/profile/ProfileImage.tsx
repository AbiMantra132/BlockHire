import P from "../ui/P";
import { useAuth } from "../../hooks/AuthProvider";

export default function ProfileImage() {
  const { user } = useAuth();
  return (
    <div className="flex flex-row w-full gap-3 justify-start items-center pb-4 border-b border-[#2020201e]">
      <div className="relative flex justify-center items-center w-16 aspect-square border border-[#2020201e] rounded-full">
        <div className="w-full aspect-square overflow-hidden flex justify-center items-center rounded-full">
          <img
            src={`${
              user && user.profile ? user.profile : "/images/profile/user.svg"
            }`}
            alt="img"
            className="w-full"
          />
        </div>
        <img
          src="/images/profile/image.svg"
          alt="img"
          className="w-8 absolute -bottom-1 -right-1"
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="font-semibold text-lg text-black">{user.username}</h3>
        <P>Freelancer</P>
      </div>
    </div>
  );
}
