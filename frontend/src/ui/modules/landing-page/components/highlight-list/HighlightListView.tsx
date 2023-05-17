import { ListPoint } from "@/ui/components/ListPoint/ListPoint";
import Container from "@/ui/components/container/Container";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

const HighlightListView = () => {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10 ">
          <Image
            src="/assets/svg/cake2.svg"
            alt="Illustration d'un gâteau"
            fill
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            De novice à développeur en un clin d'œil !
          </Typography>
          <div className="space-y-3 ">
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Progresse rapidement.
              </Typography>
            </ListPoint>
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Inspire-toi.
              </Typography>
            </ListPoint>
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Gagne de l’assurance.
              </Typography>
            </ListPoint>
          </div>
          <div className="relative inline-block">
            <Button baseUrl="/#" icon={{ icon: RiArrowRightLine }}>
              Let’s go
            </Button>
            <Image
              src="/assets/svg/Vector.svg"
              alt="cursor"
              width={25}
              height={27}
              className="absolute right-7 -bottom-5"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10 ">
          <Image
            src="/assets/svg/jula2.svg"
            alt="Illustration d'un gâteau"
            fill
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Booste ta carrière de développeur{" "}
          </Typography>
          <div className="space-y-3 ">
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Partage tes projets, obtiens des feedbacks.{" "}
              </Typography>
            </ListPoint>
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Connecte-toi, élargis ton réseau pro!{" "}
              </Typography>
            </ListPoint>
            <ListPoint
              icon={{ icon: RiCheckboxCircleLine }}
              iconSize={24}
              className="mt-1 text-secondary"
            >
              <Typography variant="body-lg" component="span">
                Reste inspiré, motivé avec notre communauté.{" "}
              </Typography>
            </ListPoint>
          </div>
          <div className="relative inline-block">
            <Button
              baseUrl="/#"
              variant="secondary"
              icon={{ icon: RiArrowRightLine }}
            >
              Démarrer{" "}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HighlightListView;
