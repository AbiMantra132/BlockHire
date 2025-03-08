import Title from "../ui/Title";
import P from "../ui/P";
import SkillOpt from "../ui/SkillOpt";
import { useAuth } from "../../hooks/AuthProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Data {
  title: string;
  createdAt: string;
  deadline: string;
  description: string;
  scope: string;
  freelancer_amount: number;
  requiredSkills: string[];
}

export default function ProjectDetail() {
  const { callFunction } = useAuth();
  const { idProject } = useParams();
  const [data, setData] = useState<Data>({
    title: "",
    createdAt: "",
    deadline: "",
    description: "",
    scope: "",
    freelancer_amount: 0,
    requiredSkills: [],
  });
  useEffect(() => {
    const fetch = async () => {
      if (callFunction) {
        const res = await callFunction.getProject(idProject);
        setData(res.ok);
      }
    };
    fetch();
  }, [callFunction]);
  return (
    <div className="flex flex-col justify-start items-start gap-10 w-full">
      {/* HEAD */}
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <Title children={data.title} />
        <div className="flex flex-row justify-start items-center gap-5">
          <P>Posted {data.deadline}</P>
          <div className="flex flex-roow justify-start items-center gap-2">
            <img src="/images/freelancer/location.svg" alt="location" />
            <P>{data.scope}</P>
          </div>
          <div className="flex flex-roow justify-start items-center gap-2">
            <img src="/images/freelancer/person.svg" alt="person" />
            <P>{Number(data.freelancer_amount)} Freelancer</P>
          </div>
        </div>
      </div>
      {/* BODY */}
      <div className="flex w-full justify-start items-start">
        <P>{data.description}</P>
      </div>
      {/* FOOT */}
      <div className="flex w-full flex-col gap-4 justify-start items-start">
        <h3 className="text-black text-2xl font-bold">Skills</h3>
        {data.requiredSkills.map((skill, index) => (
          <SkillOpt skill={skill} key={index} isActive={true} notClick={true} />
        ))}
      </div>
    </div>
  );
}
