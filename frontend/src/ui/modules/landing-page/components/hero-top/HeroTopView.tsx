import Container from "@/ui/components/container/Container";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";

const HeroTopView = () => {
  return (
    <div>
      <Container className="relative pt-40 pb-52 overflow-hidden">
        <div className="w-full max-w-2xl space-y-5">
          <Typography variant="h1" component="h1" className="max-w-lg">
            Rejoins les singes codeurs !
          </Typography>
          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="max-w-xl"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            quo ipsam, possimus eveniet quas eos excepturi quia placeat vel
            autem voluptatum itaque dolores libero, quasi illo inventore omnis,
            ipsum harum?
          </Typography>
          <div className="space-x-5 p-2.5">
            <Button baseUrl="">Commencer</Button>
            <Button baseUrl="" variant="secondary">
              En savoir plus
            </Button>
          </div>
        </div>
        <div className="w-full max-w-2xl space-y-5 ">
          <Image
            src="/assets/svg/rocket.svg"
            alt="Illsitration d'une image de l'education"
            width={811}
            height={596}
            className="absolute top-0 right-0 z-0"
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroTopView;
