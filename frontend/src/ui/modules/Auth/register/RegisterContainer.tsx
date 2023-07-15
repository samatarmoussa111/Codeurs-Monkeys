import { useForm, SubmitHandler } from "react-hook-form";
import RegisterView from "./RegisterView";
import { RegisterFormFieldsType } from "@/types/forms-types";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

const RegisterContainer = () => {
  const { value: isLoading, setValue: setisLoading } = useToggle();
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);

    if (error) {
      setisLoading(false);
      toast.error(error.errorMessage);
      return;
    }
    setisLoading(false);
    toast.success("Bienvenu sur mon univers");
    // TODO: enregister notre utilisateur qui est data à une bdd
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
    handleCreateUserAuthentication(formData);
  };

  return (
    <>
      <RegisterView
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

export default RegisterContainer;
