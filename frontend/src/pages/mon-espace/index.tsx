import { REGISTERED } from "@/lib/session-status";
import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";
import MyAccountContainer from "@/ui/modules/user-profile/my-account/MyAccountContainer";

const MyAccount = () => {
  return (
    <>
      <Seo
        title="MyAccount sur coders monkeys"
        description="Page de MyAccount"
      />
      <Layout sessionStatus={REGISTERED} withSidebar>
        <MyAccountContainer />
      </Layout>
    </>
  );
};

export default MyAccount;
