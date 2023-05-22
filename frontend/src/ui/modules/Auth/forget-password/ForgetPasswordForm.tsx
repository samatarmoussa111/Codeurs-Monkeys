import { FormType } from "@/types/forms-types";
import Button from "@/ui/design-system/button/Button";
import Input from "@/ui/design-system/forms/Input";

interface Props {
  form: FormType;
}

const ForgetPasswordForm = ({ form }: Props) => {
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

      <Button isLoading={isLoading} type="submit" fullWidth>
        Envoyer
      </Button>
    </form>
  );
};

export default ForgetPasswordForm;
