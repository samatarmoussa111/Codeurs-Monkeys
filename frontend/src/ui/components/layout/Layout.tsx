import React from "react";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import Footer from "../navigation/Footer";
import Navigation from "../navigation/Navigation";
import Container from "../container/Container";
import UserAccountNavigation from "../navigation/UserAccountNavigation";
import Session from "../session/Session";
import { sessionStatusTypes } from "@/types/session-status-types";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  sessionStatus?: sessionStatusTypes;
}

const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
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
    <Session sessionStatus={sessionStatus}>
      <Navigation />
      {isDisplayBreadcrumbs && <BreadCrumbs />}
      {view}
      <Footer />
    </Session>
  );
};

export default Layout;
