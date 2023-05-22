import { FormType } from "@/types/forms-types";
import Button from "@/ui/design-system/button/Button";
import Input from "@/ui/design-system/forms/Input";

interface Props {
  form: FormType;
}

const LoginForm = ({ form }: Props) => {
  const { onSubmit, isLoading, register, handleSubmit, errors } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="samatar@gmail.com"
        type="email"
        register={register}
        errors={errors}
        id="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        type="password"
        register={register}
        errors={errors}
        id="password"
      />

      <Button isLoading={isLoading} type="submit" fullWidth>
        Connexion
      </Button>
    </form>
  );
};

export default LoginForm;
