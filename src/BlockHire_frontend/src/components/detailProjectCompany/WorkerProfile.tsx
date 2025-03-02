import { Link } from "react-router";
import P from "../ui/P";

export default function WorkerProfile() {
  return (
    <div className="w-96 bg-white rounded-xl px-4 py-6 flex flex-col justify-center items-center gap-4">
      <div className="w-32 aspect-square rounded-full flex justify-center items-center bg-slate-50">
        <img src="" alt="img" className="w-full" />
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h3 className="font-semibold text-lg text-black">Freelancer Name</h3>
        <P>Company</P>
      </div>
      <Link
        to={"/chat/idChat"}
        className="w-full px-4 py-3 rounded-md border border-[#20202021] flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-50"
      >
        <img src="images/detailProject/chat.svg" alt="chat" className="w-5" />
        <span className="font-medium text-base text-[#202020]">
          Send Message
        </span>
      </Link>
    </div>
  );
}
