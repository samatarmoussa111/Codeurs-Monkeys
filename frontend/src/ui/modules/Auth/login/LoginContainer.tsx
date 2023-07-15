import {
  LoginFormFieldsType,
  RegisterFormFieldsType,
} from "@/types/forms-types";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginView from "./LoginView";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setisLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldsType) => {
    const { error, data } = await firebaseSignInUser(email, password);

    if (error) {
      setisLoading(false);
      toast.error(error.errorMessage);
      return;
    }
    setisLoading(false);
    toast.success("Bienvenu sur codeurs monkeys ");
    //rédiriger l'utilisateur
    router.push("/mon-espace");
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setisLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères",
      });
      return;
    }
    handleSignInUser(formData);
  };
  return (
    <>
      <LoginView
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

export default LoginContainer;
