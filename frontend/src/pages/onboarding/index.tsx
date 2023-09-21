import { REGISTERED } from "@/lib/session-status";
import Seo from "@/ui/components/seo/Seo";
import Session from "@/ui/components/session/Session";
import OnboardingContainer from "@/ui/modules/onboarding/OnboardingContainer";

const Onboarding = () => {
  return (
    <>
      <Seo
        title="Onboarding sur coders monkeys"
        description="Page de Onboarding"
      />
      <Session sessionStatus={REGISTERED}>
        <OnboardingContainer />
      </Session>
    </>
  );
};

export default Onboarding;
