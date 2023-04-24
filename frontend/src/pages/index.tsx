import Seo from "@/ui/components/Seo";
import Typography from "@/ui/design-system/typography/Typography";

export default function Home() {
  return (
    <>
      <Seo
        title="Codeurs Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <div className="space-y-5 ">
        <Typography variant="display" component="h1" theme="primary">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography variant="h1" component="h1" theme="secondary">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography variant="h5" component="h1" theme="gray">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography variant="body-base" component="h1" theme="gray">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography
          variant="caption4"
          weight="medium"
          component="h1"
          theme="secondary"
        >
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
      </div>
    </>
  );
}
