import { BaseComponentProps } from "@/types/onboarding-steps-list";

const OnboardingView = ({
  nextStep,
  previousStep,
  isFirstStep,
  isFinalStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  if (getCurrentStep()?.component) {
    const Component = getCurrentStep()?.component.step;
    return (
      <div>
        {Component && (
          <Component
            getCurrentStep={getCurrentStep}
            nextStep={nextStep}
            previousStep={previousStep}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
            stepsList={stepsList}
          />
        )}
      </div>
    );
  }
  return null;
};

export default OnboardingView;
