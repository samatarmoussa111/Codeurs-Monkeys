import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/OnboardingFooter";

const ProfileStep = ({ nextStep }: BaseComponentProps) => {
  return (
    <div className="relative h-screen ">
      ProfileStep ProfileStep
      <OnboardingFooter next={nextStep} />
    </div>
  );
};

export default ProfileStep;
