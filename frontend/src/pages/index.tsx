import Seo from "@/ui/components/Seo";
import Typography from "@/ui/design-system/typography/Typography";

export default function Home() {
  return (
    <>
      <Seo
        title="Codeurs Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <Typography variant="display" component="div">
        Hello world{" "}
      </Typography>
    </>
  );
}
