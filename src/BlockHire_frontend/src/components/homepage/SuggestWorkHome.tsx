import Container from "../ui/Container";
import CardJob from "../ui/CardJob";

export default function SuggestWorkHome() {
  return (
    <Container>
      <div className="w-full flex bg-white shadow-lg rounded-xl px-6 py-4 gap-3 overflow-x-scroll no-scrollbar">
        <CardJob
          isFlex={true}
          title="Frontend Development"
          level="Entry"
          deadline="20 Maret 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
        <CardJob
          isFlex={true}
          title="DAPPs Development"
          level="Expert"
          deadline="20 Mei 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
        <CardJob
          isFlex={true}
          title="Java Editor"
          level="Intermidiate"
          deadline="3 April 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
        <CardJob
          isFlex={true}
          title="Frontend Development"
          level="Entry"
          deadline="20 Maret 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
        <CardJob
          isFlex={true}
          title="Frontend Development"
          level="Entry"
          deadline="20 Maret 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
        <CardJob
          isFlex={true}
          title="Frontend Development"
          level="Entry"
          deadline="20 Maret 2025"
          budget={2}
          scope="Worldwide"
          id={1}
        />
      </div>
    </Container>
  );
}
