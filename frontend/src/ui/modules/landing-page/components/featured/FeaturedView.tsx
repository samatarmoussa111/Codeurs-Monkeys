import Container from "@/ui/components/container/Container";
import SocialNetworkButtons from "@/ui/components/navigation/SocialNetworkButtons";
import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { uuid } from "uuidv4";

interface featuresListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: featuresListInterface[] = [
  {
    imagePath: "/assets/svg/floppy.svg",
    imageAlt: "illustration",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs ",
  },
  {
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "illustration",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "illustration",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités ! ",
  },
  {
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "illustration",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière ! ",
  },
];

const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => {
    return (
      <div
        key={uuid()}
        className="flex flex-col items-center justify-center bg-white rounded p-7"
      >
        <div className="w-[130px] h-[130px] rounded-full mb-6 p-10  relative overflow-hidden">
          <Image
            src={feature.imagePath}
            alt={feature.imageAlt}
            fill
            className="object-scale-down blur-2xl "
          />
          <Image
            src={feature.imagePath}
            alt={feature.imageAlt}
            fill
            className="object-scale-down"
          />
        </div>
        <Typography
          variant="lead"
          component="h3"
          weight="medium"
          className="text-center mb-2.5"
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body-base"
          component="p"
          theme="gray"
          className="text-center "
        >
          {feature.description}
        </Typography>
      </div>
    );
  });
  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24 ">
        <div className=" grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="col-span-5 flex flex-col justify-between gap-10">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              L'endroit le plus cool pour devenir developpeur
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Du partage, des connexions et des formations notre app gère tout
              ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
            </Typography>
            <Button
              variant="secondary"
              baseUrl="/#"
              icon={{ icon: RiArrowRightLine }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography variant="caption3" className="mb-4">
              Nos reseaux sociaux
            </Typography>
            <SocialNetworkButtons />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedView;
