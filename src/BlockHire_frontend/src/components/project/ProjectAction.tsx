import { Link, useParams } from "react-router";
import { useAuth } from "../../hooks/AuthProvider";
import P from "../ui/P";
import { useEffect, useState } from "react";

export default function ProjectAction() {
  const { callFunction, user } = useAuth();
  const [data, setData] = useState<any>();
  const [dataCompany, setDataCompany] = useState<any>();
  const { idProject } = useParams();
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      if (data && data.companyId) {
        const res = await callFunction.getCompany(data.companyId);
        console.log(res);
        if ("ok" in res) {
          setDataCompany(res.ok);
        }
      }
    };
    fetch();
  }, [callFunction, data]);

  useEffect(() => {
    const fetch = async () => {
      if (callFunction) {
        const res = await callFunction.getProject(idProject);
        console.log(res);
        setData(res.ok);
      }
    };
    fetch();
  }, [callFunction]);

  const handlerClick = () => {
    if (!isClick) {
      setIsClick(true);
    }
  };

  const handlerStop = async () => {
    console.log("Stopping Project");
  };

  return (
    <div className="flex flex-col justify-start items-start min-w-96 bg-white rounded-xl  py-6 gap-4">
      <div className="flex flex-row justify-start items-center gap-3 px-4">
        <h3 className="text-black text-2xl font-semibold">
          {data ? Number(data.budget) : ""}
        </h3>
        <img src="/images/profile/icp.png" alt="img" className="w-10" />
        <P>- Project Fee</P>
      </div>
      <div className="flex flex-col justify-start items-start gap-2 px-4">
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/time.svg" alt="time" className="w-4" />
          <P type="strong">3 Months</P>
        </div>
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/user.svg" alt="time" className="w-4" />
          <P type="strong">
            {data ? Number(data.freelancer_amount) : "0"}/
            {data ? data.freelancer.length : 0} slots filled
          </P>
        </div>
        <div className="flex justify-start items-center gap-2 opacity-70">
          <img src="/images/freelancer/level.svg" alt="time" className="w-4" />
          <P type="strong">{data ? data.level : ""} Level</P>
        </div>
      </div>
      {user.role == "freelancer" ? (
        <div className="w-full px-4">
          {!isClick && (
            <button
              onClick={handlerClick}
              className="bg-[#2F89FC] hover:bg-[#3284f0] w-full py-2 rounded-xl cursor-pointer text-white"
            >
              Apply Now
            </button>
          )}
          {isClick && (
            <Link
              to={"/submit/" + idProject}
              className="border-[#2F89FC] border flex justify-center items-center hover:bg-slate-50 w-full py-2 rounded-xl cursor-pointer text-[#2F89FC]"
            >
              Submit
            </Link>
          )}
        </div>
      ) : (
        <div className="w-full px-4">
          <button
            onClick={handlerStop}
            className="bg-[#2F89FC] hover:bg-[#3284f0] w-full py-2 rounded-xl cursor-pointer text-white"
          >
            Stop Post
          </button>
        </div>
      )}
      <div className="flex justify-start items-center gap-3 px-4 border-t pt-4 border-[#2020201b] w-full">
        <div className="relative flex justify-center items-center w-12 aspect-square">
          <img
            src={
              dataCompany && dataCompany.profile
                ? dataCompany.profile
                : "/images/freelancer/sampleProfile.png"
            }
            alt="img"
            className="w-full"
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-medium text-base text-black">
            {dataCompany && dataCompany.companyName
              ? dataCompany.companyName
              : "Company Name"}
          </h3>
          <span className="font-normal text-sm text-black opacity-60">
            Active Now
          </span>
        </div>
      </div>
    </div>
  );
}
