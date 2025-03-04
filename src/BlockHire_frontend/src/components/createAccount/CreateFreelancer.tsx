import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Step from "../ui/Step";
import Title from "../ui/Title";
import Button from "../ui/Button";
import CreateFreelancerMain from "../ui/CreateFreelancerMain";
import CreateFreelancerSec from "../ui/CreateFreelancerSec";
import { useAuth } from "../../hooks/AuthProvider";

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

interface CreateFreelancerProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateFreelancer({
  data,
  setData,
}: CreateFreelancerProps) {
  const { callFunction, principal, user, updateFreelancer, updateUser } =
    useAuth();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const handlerNext = () => {
    if (data) {
      if (data.name != "" && data.email != "" && data.displayName != "") {
        setIsNext(true);
      }
    }
  };

  const handlerCreate = async () => {
    if (data) {
      const date = new Date().toISOString();
      const res = await callFunction.createFreelancer(
        principal,
        data.name,
        data.email,
        data.displayName,
        user.walletAddress,
        data.profile,
        data.bio,
        data.skills,
        data.portofolioLinks,
        "English",
        date,
        date
      );
      if ("ok" in res) {
        updateFreelancer(res.ok);
        console.log(res.ok);
        updateUser({
          id: user.id,
          username: res.ok.username,
          walletAddress: user.walletAddress,
          profile: res.ok.profile,
          role: "Freelancer",
        });
      }
    }
  };

  useEffect(() => {
    if (data) {
      if (data.name != "" && data.email != "" && data.displayName != "") {
        setIsValid(true);
      }
      if (
        data.portofolioLinks != "" &&
        data.bio != "" &&
        data.skills.length != 0
      ) {
        setIsDone(true);
      } else {
        setIsDone(false);
      }
    }
  }, [data]);
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center gap-8 mt-28">
        <Step isNext={isNext} />
        <Title>Personal Information</Title>
        {!isNext ? (
          <CreateFreelancerMain data={data} setData={setData} />
        ) : (
          <CreateFreelancerSec data={data} setData={setData} />
        )}
        <Button
          type={
            !isNext
              ? isValid
                ? "default"
                : "ghost"
              : isDone
              ? "default"
              : "ghost"
          }
          title={isNext ? "Create Account" : "Next"}
          onclick={isNext ? handlerCreate : handlerNext}
        />
      </div>
    </Container>
  );
}
