import { useState } from 'react';
import Link from 'next/link';
import { Container } from "reactstrap";
import ScrollspyNav from "./scrollSpy";

const navItems = [
  // { id: 1, idnm: "home", navheading: "Home" },
  // { id: 3, idnm: "service", navheading: "Feature" },
  // { id: 3, idnm: "testimonial", navheading: "Review" },
  // { id: 4, idnm: "pricing", navheading: "Price" },
  // { id: 6, idnm: "contact", navheading: "Contact" },

  { id: 1, idnm: "product", navheading: "Product" },
  { id: 2, idnm: "pricing", navheading: "Price" },
  // { id: 4, idnm: "ourmission", navheading: "Our Mission" },
  // { id: 5, idnm: "contact", navheading: "Contacts" },
];

const NavbarPage = () => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleLine = () => {
    setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
  const targetId = navItems.map((item) => {
    return (
      item.idnm
    )
  });

  const menu = navItems.map((item) => (
    <li key={item.idnm} className={item.navheading === "Product" ? "active" : ""} >
      <a href={"#" + item.idnm}>{item.navheading}</a>
    </li>
  ));

  menu.push(
    <li key="signIn">
      <a href="https://app.teachablehub.com" target="_blank">Sign In</a>
    </li>
  );

  menu.push(
    <li key="get">
      <div className="buy-button">
        <a href="#get-early-access" className="btn btn-primary">
          Get Early Access
        </a>
      </div>
    </li>
  );

  return (
    <>
      <header id="topnav" className="defaultscroll sticky">
        <Container>
          <div>
            <Link href="/">
              <a className="logo">teachable<span>hub</span></a>
            </Link>
          </div>
          <div className="menu-extras">
            <div className="menu-item">
              <a onClick={toggleLine} className={state.isOpen ? "navbar-toggle open" : "navbar-toggle"}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          <ScrollspyNav
            scrollTargetIds={targetId}
            scrollDuration="800"
            headerBackground="false"
            activeNavClass="active"
          >
            <div id="navigation" style={{ display: state.isOpen ? "block" : "none" }}>
              <ul className="navigation-menu">
                {menu}
              </ul>
            </div>
          </ScrollspyNav>
        </Container>
      </header>
    </>
  );
}

export default NavbarPage;
