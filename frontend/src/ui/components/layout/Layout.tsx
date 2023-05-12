import Footer from "../navigation/Footer";
import Navigation from "../navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
