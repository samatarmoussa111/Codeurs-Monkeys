import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";
import RegisterContainer from "@/ui/modules/Auth/register/RegisterContainer";

const Register = () => {
  return (
    <>
      <Seo
        title="Coders Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
};

export default Register;
