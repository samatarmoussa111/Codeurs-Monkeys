import Button from "@/ui/design-system/button/Button";
import clsx from "clsx";

interface Props {
  next?: () => void;
  previous?: () => void;
  isFirstStep?: () => boolean;
  isFinalStep?: () => boolean;
  isLoading?: boolean;
}

const OnboardingFooter = ({
  next,
  previous,
  isFirstStep,
  isFinalStep,
  isLoading,
}: Props) => {
  let actionButtonTitle: string;
  if (isFirstStep && isFirstStep()) {
    actionButtonTitle = "Démarrer";
  } else if (isFinalStep && isFinalStep()) {
    actionButtonTitle = "Terminer";
  } else {
    actionButtonTitle = "Continuer";
  }

  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
      <div
        className={clsx(
          previous && !next && "justify-start",
          !previous && next && "justify-end",
          previous && next && "justify-between",
          "flex items-center  gap-5"
        )}
      >
        {previous && (
          <Button
            disabled={isLoading}
            variant={!isLoading ? "outline" : "disabled"}
          >
            Retour
          </Button>
        )}
        {next && (
          // La fonction next de ce bouton permet de passer à l'étape suivante après traitement (d'un formulaire par exemple) elle est donc différente de nextStep
          <Button isLoading={isLoading} action={next}>
            {actionButtonTitle}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OnboardingFooter;
