import { onboardingStepsListInterface } from "@/types/onboarding-steps-list";
import Typography from "@/ui/design-system/typography/Typography";
import clsx from "clsx";

interface Props {
  stepsList: onboardingStepsListInterface[];
  getCurrentStep: () => onboardingStepsListInterface | undefined;
}

const OnboardingTabs = ({ stepsList, getCurrentStep }: Props) => {
  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-6">
        {stepsList &&
          stepsList.map((item) => (
            <div
              key={item.id}
              className={clsx(
                getCurrentStep && getCurrentStep()?.id === item.id
                  ? "border-primary"
                  : "border-gray-400",
                "relative z-10 py-2.5 border-b-[2px]"
              )}
            >
              <Typography
                variant="caption3"
                weight="medium"
                theme={
                  getCurrentStep && getCurrentStep()?.id === item.id
                    ? "primary"
                    : "gray-600"
                }
              >
                {item.label}
              </Typography>
            </div>
          ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-400"></div>
    </div>
  );
};

export default OnboardingTabs;
