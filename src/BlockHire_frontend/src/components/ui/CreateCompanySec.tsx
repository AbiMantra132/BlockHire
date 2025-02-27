import React from "react";
import InputText from "./InputText";
import P from "./P";

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

interface CreateCompanySecProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateCompanySec({
  data,
  setData,
}: CreateCompanySecProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-lg gap-8 w-full">
        {/* INPUT */}
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <InputText
            title="Location"
            placeholder="Your company's location"
            value={data ? data.location : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, location: e.target.value } : prev
              )
            }
          />
          <InputText
            title="Web Url"
            placeholder="Your website url"
            value={data ? data.webUrl : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, webUrl: e.target.value } : prev
              )
            }
          />
          <div className="flex flex-col justify-start items-start gap-2 w-full">
            <P>Description</P>
            <textarea
              className="w-full bg-white rounded-md px-4 py-2 h-48 outline-none"
              value={data ? data.bio : ""}
              onChange={(e) =>
                setData((prev) =>
                  prev ? { ...prev, bio: e.target.value } : prev
                )
              }
              placeholder="Company's description"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
