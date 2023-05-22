import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./LoginForm";
import { FormType } from "@/types/forms-types";

interface Props {
  form: FormType;
}

const LoginView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            src="/assets/svg/login3.svg"
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
              Connexion
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu n'as pas de compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription"> S'inscrire</Link>
              </Typography>
            </div>
          </div>
          <LoginForm form={form} />
        </Box>
      </div>
    </Container>
  );
};

export default LoginView;
