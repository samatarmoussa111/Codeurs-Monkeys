import {
  ForgetFormFieldsType,
  RegisterFormFieldsType,
} from "@/types/forms-types";
import { useForm, SubmitHandler } from "react-hook-form";
import ForgetPasswordView from "./ForgetPasswordView";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setisLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetFormFieldsType>();

  const handleResetPassword = async ({ email }: ForgetFormFieldsType) => {
    const { error, data } = await firebaseSendEmailToResetPassword(email);
    if (error) {
      setisLoading(false);
      toast.error(error.errorMessage);
      return;
    }
    toast.success(`Un e-mail a été envoyé à l'adresse ${email}`);
    setisLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setisLoading(true);
    handleResetPassword(formData);
  };
  return (
    <>
      <ForgetPasswordView
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </>
  );
};

export default ForgetPasswordContainer;
