import { GUEST } from "@/lib/session-status";
import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";
import ForgetPasswordContainer from "@/ui/modules/Auth/forget-password/ForgetPasswordContainer";

const ForgetPassWord = () => {
  return (
    <>
      <Seo
        title="Coders Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <Layout sessionStatus={GUEST}>
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
};

export default ForgetPassWord;
