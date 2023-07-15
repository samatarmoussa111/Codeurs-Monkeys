import React from "react";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../navigation/Footer";
import Navigation from "../navigation/Navigation";
import Container from "../container/Container";
import UserAccountNavigation from "../navigation/UserAccountNavigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
}

const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
}: Props) => {
  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <>
        {
          <Container className="mb-14">
            <div className="grid grid-cols-12 gap-7">
              <div className="col-span-3 ">
                <UserAccountNavigation />
              </div>
              <div className="col-span-9 ">{children}</div>
            </div>
          </Container>
        }
      </>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <>
      <Navigation />
      {isDisplayBreadcrumbs && <BreadCrumbs />}
      {view}
      <Footer />
    </>
  );
};

export default Layout;
