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
        <div className="flex flex-row justify-start items-stretch gap-3 mt-4 overflow-x-scroll w-full no-scrollbar">
          <CardService image="service-1.svg" title="Tech & Development" />
          <CardService image="service-2.svg" title="Design & Creative" />
          <CardService image="service-3.svg" title="Writing & Translation" />
          <CardService image="service-4.svg" title="Marketing & Social Media" />
          <CardService image="service-5.svg" title="Video & Animation" />
          <CardService image="service-6.svg" title="Business & Finance" />
          <CardService image="service-1.svg" title="Tech & Development" />
          <CardService image="service-2.svg" title="Design & Creative" />
          <CardService image="service-3.svg" title="Writing & Translation" />
          <CardService image="service-4.svg" title="Marketing & Social Media" />
          <CardService image="service-5.svg" title="Video & Animation" />
          <CardService image="service-6.svg" title="Business & Finance" />
        </div>
      </div>
    </Container>
  );
}
