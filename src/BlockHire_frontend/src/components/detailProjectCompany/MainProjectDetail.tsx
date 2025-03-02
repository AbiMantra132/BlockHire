import { Link, useParams } from "react-router";
import Container from "../ui/Container";
import WorkerProfile from "./WorkerProfile";
import WorkerDetail from "./WorkerDetail";
import CardProject from "./CardProject";
import { useState } from "react";
import P from "../ui/P";

export default function MainProjectDetail() {
  const { idProject } = useParams();
  const [status, setStatus] = useState<"ongoing" | "pending" | "passed">(
    "pending"
  );

  return (
    <Container>
      <div className="w-full flex flex-col gap-8 justify-between items-start mt-24">
        <div className="w-full justify-start items-start">
          <Link
            to={"/"}
            className="w-fit hover:bg-slate-50 bg-white px-6 py-3 rounded-md flex justify-center items-center gap-2"
          >
            <img
              src="/images/detailProject/back.svg"
              alt="img"
              className="w-5"
            />
            <P type="strong">Back</P>
          </Link>
        </div>
        <div className="flex flex-row justify-start items-start gap-8 w-full">
          <WorkerProfile />
          <WorkerDetail />
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <h3 className="font-semibold text-lg text-black">
          {status == "ongoing" && "Worked on"}
          {status == "pending" && "Request to work on"}
          {status == "passed" && "Finished work on"}
        </h3>
        <CardProject status={status} />
      </div>
    </Container>
  );
}
