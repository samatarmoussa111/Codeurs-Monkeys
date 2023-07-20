import { GUEST } from "@/lib/session-status";
import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";
import LoginContainer from "@/ui/modules/Auth/login/LoginContainer";

const Connexion = () => {
  return (
    <>
      <Seo
        title="Connexion sur coders monkeys"
        description="Page de connexion"
      />
      <Layout sessionStatus={GUEST}>
        <LoginContainer />
      </Layout>
    </>
  );
};

export default Connexion;
