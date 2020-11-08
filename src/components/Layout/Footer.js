import Link from 'next/link';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import logo from "../../assets/img/logo.svg";

const navItems = [
  { id: 2, idnm: "product", navheading: "Product" },
  { id: 3, idnm: "pricing", navheading: "Price" },
];

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
              <Link href="/">
                <a className="logo-footer">
                  <img src={logo} height="38" alt="TeachableHub.com" />teachable<span>hub</span>
                </a>
              </Link>
              <ul className="list-unstyled social-icon social mb-0 mt-4">
                <li className="list-inline-item mr-1"><Link href="/"><a className="rounded" target="_blank" rel="noreferrer"><i><FeatherIcon icon="facebook" className="fea icon-sm fea-social" /></i></a></Link></li>
                <li className="list-inline-item mr-1"><Link href="/"><a className="rounded" target="_blank" rel="noreferrer"><i><FeatherIcon icon="instagram" className="fea icon-sm fea-social" /></i></a></Link></li>
                <li className="list-inline-item mr-1"><Link href="/"><a className="rounded" target="_blank" rel="noreferrer"><i><FeatherIcon icon="twitter" className="fea icon-sm fea-social" /></i></a></Link></li>
                <li className="list-inline-item mr-1"><Link href="/"><a className="rounded" target="_blank" rel="noreferrer"><i><FeatherIcon icon="linkedin" className="fea icon-sm fea-social" /></i></a></Link></li>
              </ul>
              <div className="text-sm-left">
                <p className="mb-0">&copy; 2020-21 TeachableHub.</p>
              </div>
            </Col>


            <Col lg="4" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
              <>
                <h4 className="text-light footer-head">Company</h4>
                <ul className="list-unstyled footer-list mt-4">
                  {
                    navItems.map((item) =>
                      <li key={item.id}>
                        <Link href={"#" + item.idnm}>
                          <a className="text-muted">{item.navheading}
                          </a>
                        </Link>
                      </li>
                    )
                  }
                  <li>
                    <a href="https://app.teachablehub.com" target="_blank" rel="noreferrer" className="text-muted">Sign In</a>
                  </li>
                </ul>
              </>
            </Col>

            <Col lg="4" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
              <h4 className="text-light footer-head">Newsletter</h4>
              <p className="mt-4">Sign up and receive the latest tips via email.</p>
              <Form>
                <Row>
                  <Col lg="12">
                    <div className="foot-subscribe form-group position-relative">
                      <Label>Write your email <span className="text-danger">*</span></Label>
                      <i><FeatherIcon icon="mail" className="fea icon-sm icons" /></i>
                      <Input type="email" name="email" id="emailsubscribe" className="form-control pl-5 rounded" placeholder="Your email ... " required />
                    </div>
                  </Col>
                  <Col lg="12">
                    <Input type="submit" id="submitsubscribefooter" name="send" className="btn btn-primary btn-block shadow-none" readOnly value="Subscribe" />
                  </Col>
                </Row>
              </Form>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
