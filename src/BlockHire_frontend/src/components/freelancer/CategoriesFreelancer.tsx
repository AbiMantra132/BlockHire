import Container from "../ui/Container";
import Title from "../ui/Title";
import P from "../ui/P";
import CardService from "../ui/CardService";

export default function CategoriesFreelancer() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <Title>Popular Categories</Title>
        <P>Take a look with most popular job categories</P>
        <div className="flex flex-row justify-start items-start gap-3 mt-4 overflow-x-scroll w-full">
          <CardService />
          <CardService />
          <CardService />
          <CardService />
          <CardService />
          <CardService />
          <CardService />
          <CardService />
        </div>
      </div>
    </Container>
  );
}
