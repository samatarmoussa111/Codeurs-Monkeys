import { useForm, SubmitHandler } from "react-hook-form";
import RegisterView from "./RegisterView";
import { RegisterFormFieldsType } from "@/types/forms-types";
import {
  firebaseCreateUser,
  firebaseSendEmailVerification,
} from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";

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

  const handleCreateUserDocument = async (
    collectionName: string,
    documentID: string,
    data: object
  ) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      documentID,
      data
    );
    if (error) {
      toast.error(error.errorMessage);
      setisLoading(false);
      return;
    }
    toast.success("Bienvenu sur mon univers");
    setisLoading(false);
    reset();
    firebaseSendEmailVerification();
  };

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);

    if (error) {
      setisLoading(false);
      toast.error(error.errorMessage);
      return;
    }
    const userDocumentData = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      creation_date: new Date(),
    };
    handleCreateUserDocument("users", data.uid, userDocumentData);
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
