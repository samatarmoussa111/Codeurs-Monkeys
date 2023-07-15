import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./RegisterForm";
import { FormType } from "@/types/forms-types";

interface Props {
  form: FormType;
}

const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/svg/register3.svg"
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
          <RegisterForm form={form} />
          <Typography
            variant="caption4"
            theme="gray"
            className="max-w-md mx-auto space-y-1 text-center"
          >
            <div>En t'inscrivant, tu acceptes les</div>
            <div>
              <Link href="/#" className="text-gray">
                conditions d'utilisation
              </Link>{" "}
              et la{" "}
              <Link href="/#" className="text-gray">
                politique de confidentialité
              </Link>
              .
            </div>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default RegisterView;
