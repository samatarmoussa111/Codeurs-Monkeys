import { REGISTERED } from "@/lib/session-status";
import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";

const Onboarding = () => {
  return (
    <>
      <Seo
        title="Onboarding sur coders monkeys"
        description="Page de Onboarding"
      />
      <Layout sessionStatus={REGISTERED}>
        <p>je suis la page d'accueil de l'onboarding</p>
      </Layout>
    </>
  );
};

export default Onboarding;
