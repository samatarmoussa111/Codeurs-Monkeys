import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import OnboardingTabs from "../../tabs/OnboardingTabs";
import ProfileStepForm from "./ProfileStepForm";
import { useForm, SubmitHandler } from "react-hook-form";
import { OnboardingProfileFormFieldsType } from "@/types/forms-types";
import { useToggle } from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateUserAuthentificationData } from "@/api/authentication";

const ProfileStep = ({
  nextStep,
  previousStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  const { value: isLoading, setValue: setIsLoading } = useToggle();
  const { authUser } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldsType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  useEffect(() => {
    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName",
      "expertise",
      "biography",
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, [setValue, authUser]);

  const handelUpdateUserDocument = async (
    formData: OnboardingProfileFormFieldsType
  ) => {
    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid,
      formData
    );

    if (error) {
      setIsLoading(false);
      toast.error(error.errorMessage);
      return;
    }

    setIsLoading(false);
    reset();
    nextStep();
  };

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);

    if (
      displayName !== formData.displayName ||
      expertise !== formData.expertise ||
      biography !== formData.expertise
    ) {
      if (
        displayName !== formData.displayName ||
        authUser.displayName !== formData.displayName
      ) {
        const data = {
          displayName: formData.displayName,
        };
        //utilisation de la fonction backend
        const { error } = await updateUserAuthentificationData(
          authUser.uid,
          data
        );

        if (error) {
          setIsLoading(false);
          toast.error(error.errorMessage);
          return;
        }
      }

      handelUpdateUserDocument(formData);
    }
    setIsLoading(false);
    nextStep();
  };

  return (
    <div className="relative h-screen pb-[91px] ">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className=" relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                stepsList={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Presente-toi !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Dis-nous tout sur toi ! Remplis notre formulaire de présentation
                pour qu'on puisse mieux te connaître. On veut savoir qui tu es,
                ce que tu fais et comment t'as atterri ici. Plus on en saura sur
                toi, mieux on pourra personnaliser ton expérience sur notre
                plateforme.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepForm
                form={{
                  errors,
                  control,
                  register,
                  handleSubmit,
                  onSubmit,
                  isLoading,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter
        previous={previousStep}
        next={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProfileStep;
