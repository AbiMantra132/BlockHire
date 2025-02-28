import React from "react";
import InputText from "./InputText";

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

interface CreateFreelancerMainProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateFreelancerMain({
  data,
  setData,
}: CreateFreelancerMainProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-lg gap-8 w-full">
        {/* LOGO */}
        <div className="flex w-32 cursor-pointer aspect-square bg-white relative justify-center items-center rounded-full overflow-hidden">
          <div className="w-full relative z-10 aspect-square rounded-full">
            User Profile
          </div>
          <input
            type="file"
            className="w-full aspect-square absolute top-0 left-0 z-20 cursor-pointer opacity-0"
          />
        </div>
        {/* INPUT */}
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <InputText
            title="Full Name"
            placeholder="Your fullname"
            value={data ? data.name : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, name: e.target.value } : prev
              )
            }
          />
          <InputText
            title="Email"
            placeholder="Your email"
            value={data ? data.email : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, email: e.target.value } : prev
              )
            }
          />
          <InputText
            title="Display name"
            placeholder="Your display name"
            value={data ? data.displayName : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, displayName: e.target.value } : prev
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
