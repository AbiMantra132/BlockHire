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

interface CreateCompanyMainProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateCompanyMain({
  data,
  setData,
}: CreateCompanyMainProps) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) =>
          prev ? { ...prev, profile: reader.result as string } : prev
        );
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-lg gap-8 w-full">
        {/* LOGO */}
        <div className="flex w-32 cursor-pointer aspect-square bg-white relative justify-center items-center rounded-full overflow-hidden">
          {data.profile ? (
            <img src={data.profile} alt="profile" />
          ) : (
            <div className="w-full text-center relative z-10 aspect-square rounded-full flex justify-center items-center text-[#20202067] font-semibold">
              Company <br></br>Logo
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full aspect-square absolute top-0 left-0 z-20 cursor-pointer opacity-0"
          />
        </div>
        {/* INPUT */}
        <div className="flex flex-col justify-start items-start gap-8 w-full">
          <InputText
            title="Name"
            placeholder="Your company's name"
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
            title="Field"
            placeholder="Company's field"
            value={data ? data.field : ""}
            onchange={(e) =>
              setData((prev) =>
                prev ? { ...prev, field: e.target.value } : prev
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
