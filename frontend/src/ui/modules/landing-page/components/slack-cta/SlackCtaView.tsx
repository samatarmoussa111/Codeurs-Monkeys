import { LinkTypes } from "@/lib/link-type";
import Container from "@/ui/components/container/Container";
import Button from "@/ui/design-system/button/Button";
import Logo from "@/ui/design-system/logo/Logo";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";

const SlackCtaView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5 ">
        <div className="flex items-center gap-2 ">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Coders Monkeys
          </Typography>
        </div>
        <Typography variant="h2" component="h2" className="max-w-[600px]">
          Rejoins-nous sur le slack des singes codeurs
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-[450px] "
        >
          Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des
          nouveaux potes !
        </Typography>
        <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
          Rejoindre le groupe d’aide
        </Button>
      </div>
      <div className="relative w-[600px] h-[600px] ">
        <Image
          fill
          src="/assets/svg/slack.svg"
          alt="Groupe slack coders monkeys"
        />
      </div>
    </Container>
  );
};

export default SlackCtaView;
