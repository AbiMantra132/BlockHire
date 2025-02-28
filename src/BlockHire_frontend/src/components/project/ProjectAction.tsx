import P from "../ui/P";
export default function ProjectAction() {
  return (
    <div className="flex flex-col justify-start items-start min-w-96 bg-white rounded-xl  py-6 gap-4">
      <div className="flex flex-row justify-start items-center gap-3 px-4">
        <h3 className="text-black text-2xl font-semibold">$200</h3>
        <P>- Project Fee</P>
      </div>
      <div className="flex flex-col justify-start items-start gap-2 px-4">
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/time.svg" alt="time" className="w-4" />
          <P type="strong">3 Monts</P>
        </div>
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/user.svg" alt="time" className="w-4" />
          <P type="strong">1/2 slots filled</P>
        </div>
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/level.svg" alt="time" className="w-4" />
          <P type="strong">Entry Level</P>
        </div>
      </div>
      <div className="w-full px-4">
        <button className="bg-[#2F89FC] hover:bg-[#3284f0] w-full py-2 rounded-xl cursor-pointer text-white">
          Apply Now
        </button>
      </div>
      <div className="flex justify-start items-center gap-3 px-4 border-t pt-4 border-[#2020201b] w-full">
        <div className="relative flex justify-center items-center w-12 aspect-square">
          <img
            src="/images/freelancer/sampleProfile.png"
            alt="img"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-medium text-base text-black">Company Name</h3>
          <span className="font-normal text-sm text-black opacity-60">
            Active 2h ago
          </span>
        </div>
      </div>
    </div>
  );
}
