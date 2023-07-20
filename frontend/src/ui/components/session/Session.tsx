import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { sessionStatusTypes } from "@/types/session-status-types";
import ScreenSpiner from "@/ui/design-system/spinner/ScreenSpiner";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  children: React.ReactNode;
  sessionStatus?: sessionStatusTypes;
}

const Session = ({ children, sessionStatus }: Props) => {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

  //Onboarding
  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;
  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    );
  };
  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath === "/onboarding"
    );
  };

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpiner />;
  }
  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpiner />;
  }

  //Temporiser l'application avec le chargement
  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>;
    } else {
      router.push("/mon-espace");
    }
  }
  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpiner />;
};

export default Session;
