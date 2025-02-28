export default function Transaction() {
  return (
    <div className="w-full flex flex-row cursor-pointer hover:bg-[#f9f9f9] justify-between items-center gap-3 px-4 py-2 rounded-md border border-[#20202015]">
      <div className="flex flex-row justify-start items-center gap-3">
        <div className="w-12 aspect-square border rounded-full border-[#20202015] flex justify-center items-center">
          <img
            src="/images/freelancer/sampleProfile.png"
            alt="img"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-[2px]">
          <span className="text-sm text-[#202020] font-medium opacity-80">
            Company Name
          </span>
          <span className="text-xs text-[#20202061] font-medium">
            Date complate
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        <p className="font-semibold text-xl text-[#202020]">+1</p>
        <img src="/images/profile/icp.png" alt="img" className="w-8" />
      </div>
    </div>
  );
}
