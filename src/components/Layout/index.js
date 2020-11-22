import { useEffect } from 'react';
// import ScrollUpButton from "react-scroll-up-button";
// import FeatherIcon from 'feather-icons-react';
import { ScrollToHash } from "@utils/helpers";

import NavbarPage from "./NavbarPage";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    ScrollToHash();
  }, [])
  return (
    <>
      <NavbarPage />

      {children}

      <Footer />

      {/* <ScrollUpButton ContainerClassName="classForContainer" style={{ height: 36, width: 36 }} TransitionClassName="classForTransition">
        <i><FeatherIcon icon="arrow-up" className="icons" /></i>
      </ScrollUpButton> */}
    </>
  );
}

export default Layout;
