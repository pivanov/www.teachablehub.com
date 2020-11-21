import Link from 'next/link';
import axios from "axios";
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';

const navItems = [
  { id: 2, idnm: "product", navheading: "Product" },
  { id: 3, idnm: "pricing", navheading: "Pricing" },
];

const Footer = () => {

  const subscribeHandler = async () => {
    try {
      const r = await axios.post("https://app.teachablehub.com/api/auth/register", {
        email,
        meta: {
          newsletter: true
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
              <Link href="/">
                <a className="logo-footer">teachable<span>hub</span></a>
              </Link>
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
                  <li>
                    <a href="mailto:jobs@teachablehub.com" target="_blank" rel="noreferrer" className="text-muted">We're hiring</a>
                  </li>
                </ul>
              </>
            </Col>

            <Col lg="4" md="6" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
              <h4 className="text-light footer-head">Newsletter</h4>
              <p className="mt-4">The latest TeachableHub news and resources sent straight into your inbox.</p>
              <Form>
                <Row>
                  <Col lg="12">
                    <div className="foot-subscribe form-group position-relative">
                      <Label>Write your email <span className="text-danger">*</span></Label>
                      <Input type="email" name="email" id="emailsubscribe" className="form-control rounded" placeholder="Your email ... " required />
                      <p className="th-text-small text-muted pt-1" style={{ color: "#fff", opacity: .6 }}>We respect your privacy and we’ll never share your details.</p>
                    </div>
                  </Col>
                  <Col lg="12">
                    <Input type="submit" name="send" className="btn btn-primary btn-block shadow-none" value="Subscribe" />
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
