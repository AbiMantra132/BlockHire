import React, { useEffect, useState } from "react";
import InputText from "./InputText";
import P from "./P";
import SkillOpt from "./SkillOpt";

interface DataType {
  name: string;
  email: string;
  displayName: string;
  profile: string;
  field: string;
  portofolioLinks: string;
  bio: string;
  skills: string[];
  location: string;
  webUrl: string;
}

interface CreateFreelancerSecProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateFreelancerSec({
  data,
  setData,
}: CreateFreelancerSecProps) {
  const [skills, setSkills] = useState<string[]>([]);
  const [suggestSkill, setSuggestSkills] = useState<string[]>([
    "Website",
    "Blockchain",
    "DAPPs",
    "Developer",
    "Security",
    "Quality Testing",
    "Data Science",
  ]);

  const handlerSkill = (value: string, type: boolean) => {
    if (type) {
      setSkills((prevSkills) => prevSkills.filter((skill) => skill != value));
    } else {
      if (skills.length <= 9) {
        setSkills([...skills, value]);
        setSuggestSkills((prevSkills) =>
          prevSkills.filter((skill) => skill !== value)
        );
      }
    }
  };
  useEffect(() => {
    console.log(skills);
    setData((prev) => (prev ? { ...prev, skills: skills } : prev));
  }, [skills]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-lg gap-8 w-full">
        {/* INPUT */}
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <InputText
            title="Portpolio Link"
            placeholder="Your portpolio link"
            value={data ? data.portofolioLinks : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, portofolioLinks: e.target.value } : prev
              )
            }
          />
          <InputText
            title="Bio"
            placeholder="Your short bio"
            value={data ? data.bio : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, bio: e.target.value } : prev
              )
            }
          />
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <P>Skills</P>
            <div className="w-full rounded-md px-4 py-6 gap-4 bg-white flex flex-col justify-start items-start">
              {/* HEAD */}
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
                  <SkillOpt
                    isEmpty={true}
                    isActive={false}
                    setSkills={setSkills}
                  />
                )}
              </div>
              <P>Suggested skills</P>
              {/* BODY */}
              <div className="w-full flex flex-row flex-wrap gap-2">
                {suggestSkill.map((suggest, index) => (
                  <SkillOpt
                    key={index}
                    skill={suggest}
                    isActive={false}
                    onclick={() => handlerSkill(suggest, false)}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end items-end w-full">
              <p className="text-sm text-black opacity-60">
                {skills.length}/10
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
