import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

const RegisterView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/svg/register2.svg"
            alt="Description de l'illustration de l'inscription"
            fill
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu as déjà un compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion"> Connexion</Link>
              </Typography>
            </div>
          </div>
          <RegisterForm />
        </Box>
      </div>
    </Container>
  );
};

export default RegisterView;
