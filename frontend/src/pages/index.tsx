import Container from "@/ui/components/container/Container";
import Footer from "@/ui/components/navigation/Footer";
import Navigation from "@/ui/components/navigation/Navigation";
import Seo from "@/ui/components/seo/Seo";
import Typography from "@/ui/design-system/typography/Typography";

export default function Home() {
  return (
    <>
      <Seo
        title="Coders Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <Navigation />
      <Container>
        <Typography>Hello world</Typography>
      </Container>
      <Footer />
    </>
  );
}
