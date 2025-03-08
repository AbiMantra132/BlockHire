import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Title from "../ui/Title";
import CardJob from "../ui/CardJob";
import { useAuth } from "../../hooks/AuthProvider";
import P from "../ui/P";

export default function ProjectsFreelancer() {
  const { callFunction } = useAuth();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (callFunction) {
        const res = await callFunction.getAllProject();
        setDatas(res);
      }
    };
    fetchData();
  }, [callFunction]);
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <Title children={"Projects"} />
        {datas.length == 0 ? (
          <P>No job posted yet</P>
        ) : (
          <div className="flex flex-row w-full flex-wrap gap-2">
            {datas.map((data: any, index) => (
              <CardJob
                isFlex={true}
                id={data.projectId}
                key={index}
                title={data.title}
                level={data.level}
                deadline={data.deadline}
                budget={Number(data.budget)}
                scope={data.scope}
              />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
