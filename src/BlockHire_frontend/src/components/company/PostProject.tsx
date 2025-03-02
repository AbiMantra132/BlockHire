import React, { useEffect, useState } from "react";
import P from "../ui/P";
import SkillOpt from "../ui/SkillOpt";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";
interface Data {
  name: string;
  deadline: string;
  scope: string;
  freelancer_amount: number | undefined;
  skills: string[];
  level: string;
  description: string;
  budget: number | undefined;
}

export default function PostProject() {
  const { callFunction, principal } = useAuth();
  const [data, setData] = useState<Data>({
    name: "",
    deadline: "",
    scope: "",
    freelancer_amount: undefined,
    skills: [],
    level: "Entry",
    description: "",
    budget: undefined,
  });
  const [skills, setSkills] = useState<string[]>([]);
  const [complate, setComplate] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handlerSkill = (value: string, type: boolean) => {
    if (type) {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill != value));
    } else {
      if (skills.length <= 9) {
        setSkills([...skills, value]);
      }
    }
  };

  useEffect(() => {
    setData((prev) => (prev ? { ...prev, skills: skills } : prev));
  }, [skills]);

  useEffect(() => {
    if (
      data.name != "" &&
      data.deadline != "" &&
      data.scope != "" &&
      data.freelancer_amount &&
      data.freelancer_amount > 0 &&
      data.skills.length != 0 &&
      data.level != "" &&
      data.description != "" &&
      data.budget &&
      data.budget > 0
    ) {
      setComplate(true);
    } else {
      setComplate(false);
    }
  }, [data]);

  const handlerCreate = async () => {
    if (complate) {
      const date = new Date().toISOString();
      const res = await callFunction.createProject(
        data.name,
        data.description,
        data.skills,
        data.budget?.toString(),
        data.deadline,
        data.scope,
        data.freelancer_amount?.toString(),
        data.level,
        principal,
        date
      );
      if (res.ok) {
        setData({
          name: "",
          deadline: "",
          scope: "",
          freelancer_amount: undefined,
          skills: [],
          level: "Entry",
          description: "",
          budget: undefined,
        });
        setSuccess(true);
      }
    }
  };
  return (
    <div className="w-full bg-white rounded-b-xl px-5 py-8 flex flex-col justify-start items-start gap-4">
      <h3 className="font-semibold text-lg text-black">Post Project</h3>
      {success && (
        <p className="font-medium text-sm text-[#07C600]">
          Seccess Creating Project!
        </p>
      )}
      {/* NAME */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Name</P>
        <input
          type="text"
          className="w-full px-4 py-4 rounded-md bg-slate-50 outline-none"
          placeholder="Project Name"
          value={data.name}
          onChange={(e) =>
            setData((prev) => (prev ? { ...prev, name: e.target.value } : prev))
          }
          autoFocus
        />
      </div>
      {/* DEADLINE */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Deadline</P>
        <input
          type="date"
          className="w-full px-4 py-4 rounded-md bg-slate-50 outline-none"
          placeholder="Project Name"
          value={data.deadline}
          onChange={(e) =>
            setData((prev) =>
              prev ? { ...prev, deadline: e.target.value } : prev
            )
          }
        />
      </div>
      {/* BUDGET */}
      <div className="flex flex-col justify-start items-start gap-2 w-full relative">
        <P type="strong">Project's Budget</P>

        <div className="w-full flex flex-row justify-start items-center gap-2 bg-slate-50 rounded-md pe-4">
          <input
            type="number"
            className="w-full px-4 py-4 outline-none"
            placeholder="Number of budget in ICP Token"
            value={data.budget}
            onChange={(e) =>
              setData((prev) =>
                prev ? { ...prev, budget: Number(e.target.value) } : prev
              )
            }
          />
          <img src="/images/company/icp.png" alt="img" className="w-6" />
        </div>
      </div>
      {/* SCOPE */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Project's Scope</P>
        <input
          type="text"
          className="w-full px-4 py-4 rounded-md bg-slate-50 outline-none"
          placeholder="Worldwide"
          value={data.scope}
          onChange={(e) =>
            setData((prev) =>
              prev ? { ...prev, scope: e.target.value } : prev
            )
          }
        />
      </div>
      {/* FREELANCER_AMOUNT */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Freelancer Amount</P>
        <input
          type="number"
          className="w-full px-4 py-4 rounded-md bg-slate-50 outline-none"
          placeholder="Amount of freelancer"
          value={data.freelancer_amount}
          onChange={(e) =>
            setData((prev) =>
              prev
                ? { ...prev, freelancer_amount: Number(e.target.value) }
                : prev
            )
          }
        />
      </div>
      {/* SKILLS */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Skills Required</P>
        <div className="w-full flex flex-row flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillOpt
              key={index}
              skill={skill}
              isActive={true}
              onclick={() => handlerSkill(skill, true)}
            />
          ))}
          {skills.length <= 9 && (
            <SkillOpt isEmpty={true} isActive={false} setSkills={setSkills} />
          )}
        </div>
      </div>
      {/* LEVEL */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Minimum Experience</P>
        <select
          className="w-full bg-slate-50 px-4 py-4 rounded-md outline-none"
          value={data.level}
          onChange={(e) =>
            setData((prev) =>
              prev ? { ...prev, level: e.target.value } : prev
            )
          }
        >
          <option value="Entry" className="w-full bg-slate-50">
            Entry
          </option>
          <option value="Intermidiate" className="w-full bg-slate-50">
            Intermidiate
          </option>
          <option value="Expert" className="w-full bg-slate-50">
            Expert
          </option>
        </select>
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <P type="strong">Description</P>
        <textarea
          className="w-full px-4 py-4 rounded-md bg-slate-50 outline-none"
          rows={5}
          placeholder="Simple brief for your project"
          value={data.description}
          onChange={(e) =>
            setData((prev) =>
              prev ? { ...prev, description: e.target.value } : prev
            )
          }
        />
      </div>
      <Button
        title="Create Project"
        type={complate ? "default" : "ghost"}
        onclick={handlerCreate}
      />
    </div>
  );
}
