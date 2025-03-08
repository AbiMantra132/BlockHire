import { useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router";
import P from "../ui/P";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";
import { useParams } from "react-router";

interface Data {
  image?: string;
  link?: string;
}

export default function MainSubmitProject() {
  const { id } = useParams();
  const { callFunction } = useAuth();
  const [data, setData] = useState<Data>({ image: "", link: "" });
  const [alert, setAlert] = useState<boolean>(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) =>
          prev ? { ...prev, image: reader.result as string } : prev
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handlerSubmit = async () => {
    const res = await callFunction.submitProject(id, data.link, data.image);
    setData({
      image: "",
      link: "",
    });
    setAlert(true);
  };

  return (
    <Container>
      {/* BACK */}
      <div className="w-full flex justify-start items-start mt-24">
        <Link
          to={"/"}
          className="w-fit hover:bg-slate-50 bg-white px-6 ps-4 py-2 rounded-md flex justify-center items-center gap-2"
        >
          <img src="/images/detailProject/back.svg" alt="img" className="w-5" />
          <P type="strong">Back</P>
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-12 ">
        {/* CONTENT */}
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[800px]">
          <h3 className="font-bold text-3xl text-[#202020]">Submit Project</h3>
          {/* UPLOAD */}
          <div className="flex flex-col justify-start items-start gap-2 w-full cursor-pointer">
            <P>Preview Image</P>
            <div className="w-full hover:bg-slate-50 bg-white overflow-hidden flex justify-center items-center rounded-xl aspect-video relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full z-20 h-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
              {data.image != "" ? (
                <img
                  src={data.image}
                  alt="img"
                  className="w-full object-contain"
                />
              ) : (
                <img src="images/home/upload.svg" alt="img" className="h-6" />
              )}
            </div>
          </div>
          {/* LINK */}
          <div className="flex flex-col justify-start items-start gap-2 w-full cursor-pointer">
            <P>Preview Links</P>
            <input
              type="text"
              className="w-full bg-white rounded-xl px-4 py-3 outline-none"
              value={data.link ? data.link : ""}
              onChange={(e) =>
                setData((prev) =>
                  prev ? { ...prev, link: e.target.value } : prev
                )
              }
              placeholder="Optional Link"
            />
          </div>
          {/* ACTION */}
          {alert && (
            <div className="w-full flex justify-start items-start">
              <p className="text-base font-semibold text-[#07C600] text-left">
                Succes submit project
              </p>
            </div>
          )}

          <div className="w-full flex flex-row justify-start items-start gap-2">
            <Button type="default" title="Submit" onclick={handlerSubmit} />
          </div>
        </div>
      </div>
    </Container>
  );
}
