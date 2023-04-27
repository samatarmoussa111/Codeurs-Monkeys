import Seo from "@/ui/components/Seo";
import Button from "@/ui/design-system/button/Button";
import Spinner from "@/ui/design-system/spinner/Spinner";
import Typography from "@/ui/design-system/typography/Typography";
import { RiHome2Line } from "react-icons/ri";

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
        <Typography variant="h3" component="h3" theme="black">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography variant="body-lg" component="p" theme="gray">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <Typography variant="caption1" component="span" theme="primary">
          Facilitez vous la vie grâce à l'automatistion
        </Typography>
        <div className="flex items-center gap-4">
          <Button
            size="large"
            variant="secondary"
            isLoading
            icon={{ icon: RiHome2Line }}
          >
            S'abonner
          </Button>
          <Button
            size="large"
            variant="primary"
            isLoading
            icon={{ icon: RiHome2Line }}
          >
            S'abonner
          </Button>
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
          <Button size="medium" variant="primary" icon={{ icon: RiHome2Line }}>
            S'abonner
          </Button>
          <Button size="small" variant="primary" icon={{ icon: RiHome2Line }}>
            S'abonner
          </Button>
          <Button size="large" variant="secondary">
            S'abonner
          </Button>
          <Button size="large" variant="outline">
            S'abonner
          </Button>
          <Button size="large" variant="disabled" disabled>
            S'abonner
          </Button>
          <Button
            size="large"
            variant="icon"
            icon={{ icon: RiHome2Line }}
            isLoading
          />
        </div>
        <div className="flex items-center gap-4">
          <Button size="medium" variant="primary">
            S'abonner
          </Button>
          <Button size="medium" variant="secondary">
            S'abonner
          </Button>
          <Button size="medium" variant="outline">
            S'abonner
          </Button>
          <Button size="medium" variant="disabled" disabled>
            S'abonner
          </Button>
          <Button
            size="medium"
            iconTheme="gray"
            variant="icon"
            icon={{ icon: RiHome2Line }}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button size="small" variant="primary">
            S'abonner
          </Button>
          <Button size="small" variant="secondary">
            S'abonner
          </Button>
          <Button size="small" variant="outline">
            S'abonner
          </Button>
          <Button size="small" variant="disabled" disabled>
            S'abonner
          </Button>
          <Button
            size="small"
            iconTheme="secondary"
            variant="icon"
            icon={{ icon: RiHome2Line }}
          />
        </div>
        <div className="flex items-center gap-4">
          <Button size="small" variant="primary">
            S'abonner
          </Button>
          <Button size="small" variant="secondary">
            S'abonner
          </Button>
          <Button size="small" variant="outline">
            S'abonner
          </Button>
          <Button size="small" variant="disabled" disabled>
            S'abonner
          </Button>
          <Button
            size="small"
            iconTheme="secondary"
            variant="icon"
            icon={{ icon: RiHome2Line }}
          />
        </div>
      </div>
    </>
  );
}
