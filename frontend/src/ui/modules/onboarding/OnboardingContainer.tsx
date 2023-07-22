import { useState } from "react";
import OnboardingView from "./OnboardingView";
import WelcomStep from "./components/steps/welcom-step/WelcomStep";
import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import ProfileStep from "./components/steps/profile-step/ProfileStep";

const OnboardingContainer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stepsList: onboardingStepsListInterface[] = [
    {
      id: 1,
      label: "Bienvenue",
      component: {
        step: WelcomStep,
      },
    },
    {
      id: 2,
      label: "Profile",
      component: {
        step: ProfileStep,
      },
    },
  ];

  const getCurrentStep = () => {
    return stepsList.find((element) => element.id === currentStep);
  };

  const nextStep = () => {
    if (currentStep < stepsList.length) {
      setCurrentStep(currentStep + 1);
    }
  };
  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFirstStep = () => {
    return currentStep === 1;
  };

  const isFinalStep = () => {
    return currentStep === stepsList.length;
  };
  return (
    <>
      <OnboardingView
        getCurrentStep={getCurrentStep}
        nextStep={nextStep}
        previousStep={previousStep}
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        stepsList={stepsList}
      />
    </>
  );
};

export default OnboardingContainer;
