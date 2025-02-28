import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Step from "../ui/Step";
import Title from "../ui/Title";
import Button from "../ui/Button";
import CreateCompanyMain from "../ui/CreateCompanyMain";
import CreateCompanySec from "../ui/CreateCompanySec";
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

interface CreateCompanyProps {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export default function CreateCompany({ data, setData }: CreateCompanyProps) {
  const { callFunction, user, principal, updateUser, getCompany } = useAuth();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const handlerNext = () => {
    if (data) {
      if (data.name != "" && data.email != "" && data.field != "") {
        setIsNext(true);
      }
    }
  };

  const handlerCreate = async () => {
    if (data) {
      const date = new Date().toISOString();
      const res = await callFunction.createCompany(
        principal,
        data.profile,
        data.name,
        user.walletAddress,
        data.email,
        data.field,
        data.location,
        data.webUrl,
        data.bio,
        date,
        date
      );
      if ("ok" in res) {
        getCompany();
        updateUser({
          id: user.id,
          username: res.ok.name,
          walletAddress: user.walletAddress,
          profile: res.ok.profile,
          role: "Company",
        });
      }
    }
  };

  useEffect(() => {
    if (data) {
      if (data.name != "" && data.email != "" && data.field != "") {
        setIsValid(true);
      }
      if (data.location != "" && data.webUrl != "" && data.bio != "") {
        setIsDone(true);
      }
    }
  }, [data]);
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center gap-8 mt-28">
        <Step isNext={isNext} />
        <Title>Company Information</Title>
        {!isNext ? (
          <CreateCompanyMain data={data} setData={setData} />
        ) : (
          <CreateCompanySec data={data} setData={setData} />
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
