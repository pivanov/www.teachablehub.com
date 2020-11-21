import { useState } from 'react';
import Link from 'next/link';
import { Container } from "reactstrap";

const navItems = [
  { id: 1, idnm: "product", navheading: "Product" },
  { id: 2, idnm: "pricing", navheading: "Pricing" },
];

const NavbarPage = () => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleLine = () => {
    setState(prevState => ({ isOpen: !prevState.isOpen }));
  }
  const menu = navItems.map((item) => (
    <li key={item.idnm} className={item.navheading === "Product" ? "active" : ""} >
      <a href={"/#" + item.idnm}>{item.navheading}</a>
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
        <a href="/#early-access" className="btn btn-primary">
          GET EARLY ACCESS
        </a>
      </div>
    </li>
  );

  return (
    <header id="topnav" className="defaultscroll sticky">
      <Container>
        <div className="logo-holder">
          <Link href="/">
            <a className="logo">teachable<span>hub</span></a>
          </Link>
          <a href="https://www.sashido.io" className="text-center creators" target="_blank" rel="noreferrer">
            From the creators of <img src="/assets/images/sashido-logo.svg" height="14" />
          </a>
        </div>
        <div id="navigation" style={{ display: state.isOpen ? "block" : "none" }}>
          <ul className="navigation-menu">
            {menu}
          </ul>
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
      </Container>
    </header>
  );
}

export default NavbarPage;
