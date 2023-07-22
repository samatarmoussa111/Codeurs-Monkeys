import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/OnboardingFooter";

const WelcomStep = ({ nextStep, isFirstStep }: BaseComponentProps) => {
  return (
    <div className="relative h-screen ">
      WelcomStep WelcomStep
      <OnboardingFooter next={nextStep} isFirstStep={isFirstStep} />
    </div>
  );
};

export default WelcomStep;
