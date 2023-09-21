import { FormType } from "@/types/forms-types";
import Input from "@/ui/design-system/forms/Input";
import Textarea from "@/ui/design-system/forms/Textarea";

interface Props {
  form: FormType;
}

const ProfileStepForm = ({ form }: Props) => {
  const { errors, control, handleSubmit, onSubmit, register, isLoading } = form;
  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        label="Nom d'utilisateur"
        isLoading={isLoading}
        placeholder="John Doe"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner un pseudo"
        id="displayName"
      />
      <Input
        label="Expertise"
        isLoading={isLoading}
        placeholder="Developpeur front-end React freelance"
        type="text"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ton expertise"
        id="expertise"
      />
      <Textarea
        label="Biographie"
        isLoading={isLoading}
        placeholder="Indique une courte description de toi et de ton parcours..."
        register={register}
        errors={errors}
        id="biography"
        required={false}
      />
    </form>
  );
};

export default ProfileStepForm;
