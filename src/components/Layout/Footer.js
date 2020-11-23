import { useRef } from "react";
import axios from "axios";
import { useSetState, useKeyPress } from '@utils/hooks';
import Link from "next/link";
import gsap from 'gsap';
import { validateEmailFormat } from "@utils/helpers";
import { Container, Row, Col, Input, Label } from "reactstrap";

const navItems = [
  { id: 2, idnm: "product", navheading: "Product" },
  { id: 3, idnm: "pricing", navheading: "Pricing" },
];


const runAnimation = (button, cb) => {
  const getVar = variable => getComputedStyle(button).getPropertyValue(variable);
  if (!button.classList.contains('active')) {

    button.classList.add('active');

    gsap.to(button, {
      keyframes: [{
        '--left-wing-first-x': 50,
        '--left-wing-first-y': 100,
        '--right-wing-second-x': 50,
        '--right-wing-second-y': 100,
        duration: .2,
        onComplete() {
          gsap.set(button, {
            '--left-wing-first-y': 0,
            '--left-wing-second-x': 40,
            '--left-wing-second-y': 100,
            '--left-wing-third-x': 0,
            '--left-wing-third-y': 100,
            '--left-body-third-x': 40,
            '--right-wing-first-x': 50,
            '--right-wing-first-y': 0,
            '--right-wing-second-x': 60,
            '--right-wing-second-y': 100,
            '--right-wing-third-x': 100,
            '--right-wing-third-y': 100,
            '--right-body-third-x': 60
          })
        }
      }, {
        '--left-wing-third-x': 20,
        '--left-wing-third-y': 90,
        '--left-wing-second-y': 90,
        '--left-body-third-y': 90,
        '--right-wing-third-x': 80,
        '--right-wing-third-y': 90,
        '--right-body-third-y': 90,
        '--right-wing-second-y': 90,
        duration: .2
      }, {
        '--rotate': 50,
        '--left-wing-third-y': 95,
        '--left-wing-third-x': 27,
        '--right-body-third-x': 45,
        '--right-wing-second-x': 45,
        '--right-wing-third-x': 60,
        '--right-wing-third-y': 83,
        duration: .25
      }, {
        '--rotate': 55,
        '--plane-x': -8,
        '--plane-y': 24,
        duration: .2
      }, {
        '--rotate': 60,
        '--plane-x': 45,
        '--plane-y': -380,
        '--plane-opacity': 0,
        duration: .3,
        onComplete() {
          setTimeout(() => {
            button.removeAttribute('style');
            gsap.fromTo(button, {
              opacity: 0,
              y: -8
            }, {
              opacity: 1,
              y: 0,
              clearProps: true,
              duration: .3,
              onComplete() {
                button.classList.remove('active');
                if (cb) cb();
              }
            })
          }, 3000)
        }
      }]
    })

    gsap.to(button, {
      keyframes: [{
        '--text-opacity': 0,
        '--border-radius': 0,
        '--left-wing-background': getVar('--primary-darkest'),
        '--right-wing-background': getVar('--primary-darkest'),
        duration: .1
      }, {
        '--left-wing-background': getVar('--primary'),
        '--right-wing-background': getVar('--primary'),
        duration: .1
      }, {
        '--left-body-background': getVar('--primary-dark'),
        '--right-body-background': getVar('--primary-darkest'),
        duration: .4
      }, {
        '--success-opacity': 1,
        '--success-scale': 1,
        duration: .25,
        delay: .25
      }]
    })

  }
}


const Footer = () => {
  const refButton = useRef();
  const refEmail = useRef();

  const pressEnter = useKeyPress("Enter");

  const [state, setState] = useSetState({
    btnIsDisabled: true,
  });

  const handleSubscribe = async () => {
    const { current: elEmail } = refEmail;
    const email = elEmail.value;
    elEmail.value = "";

    const { current: button } = refButton;
    runAnimation(button, () => {
      setState({
        btnIsDisabled: true,
      });
    });

    try {
      const r = await axios.post("https://api.teachablehub.com/v1/earlyaccess/", {
        email,
        only_newsletter: true
      });
    } catch (e) {
      // console.error(e);
    }
  }

  if (pressEnter && !state.btnIsDisabled) {
    handleSubscribe();
  }

  const handleClick = async (e) => {
    e.preventDefault();

    handleSubscribe();
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
                        <Link href={"/#" + item.idnm}>
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
              <Row>
                <Col lg="12">
                  <div className="foot-subscribe form-group position-relative">
                    <Label>Write your email <span className="text-danger">*</span></Label>
                    <Input
                      innerRef={refEmail}
                      type="email"
                      name="email"
                      id="emailsubscribe"
                      className="form-control rounded"
                      placeholder="Your email ... "
                      required
                      onChange={({ target }) => {
                        const email = target.value;
                        setState({
                          btnIsDisabled: (email === "" || !validateEmailFormat(email))
                        });
                      }}
                    />
                    <p className="th-text-small text-muted pt-1" style={{ color: "#fff", opacity: .6 }}>We respect your privacy and we’ll never share your details.</p>
                  </div>
                </Col>
                <Col lg="12">
                  <button ref={refButton} className="emailButton" disabled={state.btnIsDisabled} onClick={handleClick}>
                    <span className="default">Subscribe</span>
                    <span className="success text-muted">Successfully subscribed!</span>
                    <div className="left"></div>
                    <div className="right"></div>
                  </button>
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
