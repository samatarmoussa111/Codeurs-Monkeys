import {
  LoginFormFieldsType,
  RegisterFormFieldsType,
} from "@/types/forms-types";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginView from "./LoginView";

const LoginContainer = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setisLoading(true);
    console.log(formData);
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
