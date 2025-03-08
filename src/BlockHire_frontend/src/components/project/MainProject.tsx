import Container from "../ui/Container";
import ProjectDetail from "./ProjectDetail";
import ProjectAction from "./ProjectAction";

export default function MainProject() {
  return (
    <Container>
      <div className="w-full flex flex-row justify-between items-start gap-12 mt-32">
        <ProjectDetail />
        <ProjectAction />
      </div>
    </Container>
  );
}
