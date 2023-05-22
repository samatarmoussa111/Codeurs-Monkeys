import { FormType } from "@/types/forms-types";
import Button from "@/ui/design-system/button/Button";
import Input from "@/ui/design-system/forms/Input";

interface Props {
  form: FormType;
}

const RegisterForm = ({ form }: Props) => {
  const { control, onSubmit, isLoading, register, handleSubmit, errors } = form;

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
      <Input
        isLoading={isLoading}
        placeholder="Comment tu m'as connu ?"
        register={register}
        errors={errors}
        id="how_did_hear"
      />

      <Button isLoading={isLoading} type="submit" fullWidth>
        S'inscrire
      </Button>
    </form>
  );
};

export default RegisterForm;
