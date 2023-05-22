import { useForm, SubmitHandler } from "react-hook-form";
import RegisterView from "./RegisterView";
import { RegisterFormFieldsType } from "@/types/forms-types";
import { useState } from "react";

const RegisterContainer = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setisLoading(true);
    console.log(formData);
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
