import Layout from "@/ui/components/layout/Layout";
import Seo from "@/ui/components/seo/Seo";
import LandingPageContainer from "@/ui/modules/landing-page/LandingPageContainer";

export default function Home() {
  return (
    <>
      <Seo
        title="Coders Monkeys"
        description="Mon super projet pour apprendre Next.js"
      />
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
