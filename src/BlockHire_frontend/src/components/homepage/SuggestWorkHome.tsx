import Container from "../ui/Container";
import CardJob from "../ui/CardJob";

export default function SuggestWorkHome() {
  return (
    <Container>
      <div className="w-full flex bg-white shadow-lg rounded-xl px-6 py-4 gap-3 overflow-x-scroll">
        <CardJob />
        <CardJob />
        <CardJob />
        <CardJob />
        <CardJob />
        <CardJob />
      </div>
    </Container>
  );
}
