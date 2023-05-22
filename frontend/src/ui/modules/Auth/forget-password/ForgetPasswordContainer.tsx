import {
  ForgetFormFieldsType,
  LoginFormFieldsType,
  RegisterFormFieldsType,
} from "@/types/forms-types";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ForgetPasswordView from "./ForgetPasswordView";

const ForgetPasswordContainer = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setisLoading(true);
    console.log(formData);
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
