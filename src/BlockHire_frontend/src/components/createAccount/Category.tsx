import React, { useEffect } from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import CategoryCard from "../ui/CategoryCard";
import Button from "../ui/Button";
import { useAuth } from "../../hooks/AuthProvider";
import { useNavigate } from "react-router";

interface CategoryProps {
  setStage: React.Dispatch<
    React.SetStateAction<"category" | "personal" | "extra">
  >;
  isCompany: boolean | null;
  setIsCompany: (value: boolean) => void;
}

export default function Category({
  setStage,
  isCompany,
  setIsCompany,
}: CategoryProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const nextStep = () => {
    if (isCompany !== null) {
      setStage("personal");
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role != "Guest") {
        navigate("/");
      }
    }
  }, [user]);

  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center gap-12 mt-40">
        <Title>Join as a client or freelancer</Title>
        <div className="flex flex-row justify-stretch items-stretch gap-3">
          <CategoryCard
            title="I’m client, hiring for project"
            img="company.svg"
            onclick={() => setIsCompany(true)}
            active={isCompany !== null ? isCompany : false}
          />
          <CategoryCard
            title="I’m a freelancer,looking for work"
            img="freelancer.svg"
            onclick={() => setIsCompany(false)}
            active={isCompany !== null ? !isCompany : false}
          />
        </div>
        <Button
          type={isCompany != null ? "default" : "ghost"}
          title="Next Step"
          onclick={() => nextStep()}
        />
      </div>
    </Container>
  );
}
