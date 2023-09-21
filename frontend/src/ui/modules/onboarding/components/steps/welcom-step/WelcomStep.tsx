import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/OnboardingFooter";
import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import OnboardingTabs from "../../tabs/OnboardingTabs";

const WelcomStep = ({
  nextStep,
  isFirstStep,
  stepsList,
  getCurrentStep,
}: BaseComponentProps) => {
  return (
    //TODO: faire une Layout des composants steps car ils partagent bcp de code

    <div className="relative h-screen pb-[91px]  ">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className=" relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs
                stepsList={stepsList}
                getCurrentStep={getCurrentStep}
              />
              <Typography variant="h1" component="h1">
                Bienvenu sur l'appli des singes codeurs !
              </Typography>
              <Typography variant="body-base" component="p" theme="gray">
                Viens taîner avec des développeurs aussi fous que toi, montre
                tes projets persos et reçois des feedbacks constructifs (ou
                fais-toi carrément descendre). Prêt à créer des trucs
                incroyables ?
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="w-full">
              <Image
                src="/assets/svg/rocket.svg"
                alt="rocket"
                width={811}
                height={596}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter next={nextStep} isFirstStep={isFirstStep} />
    </div>
  );
};

export default WelcomStep;
