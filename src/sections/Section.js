import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";
import bg from "@assets/img/bg.png";
import banner from "@assets/img/header.png";

const css = {
  // background: `url(${bg}) top center repeat-x`,
  backgroundImage: `url(${bg}), url(${banner}), linear-gradient(to bottom, #fff 0%, #f8f9fc 100%) `,
  backgroundSize: "auto",
  backgroundPosition: "center top, right bottom",
  backgroundRepeat: "repeat-x, no-repeat",
};

const Section = () => {
  return (
    <>
      <section className="bg-half d-table w-100 overflow-hidden" id="home" style={css}>
        <Container>
          <Row className="align-items-center pt-5">
            <Col lg="8" md="10">
              <div className="title-heading">
                <h1 className="heading mb-3">The best place to run<br /> Machine Learning in production.</h1>
                <p className="para-desc text-muted pr-5">
                  <strong>TeachableHub</strong> is a fully-managed platform bringing ML teams together to deploy, serve, and share impactful models as public or private APIs(a.k.a. Teachables) with ZERO MLOps, seamless scalability, and no costly infrastructure.
                </p>
                <div className="mt-4 pt-2">
                  <Link href="/#chat">
                    <a className="btn btn-lg btn-primary th-btn">
                      SIGN UP FOR EARLY ACCESS
                      <span className="f-small pt-1">ALL PUBLIC TEACHABLES ARE FREE!</span>
                    </a>
                  </Link>
                  <Link href="/#chat">
                    <a className="th-header-link">
                      Questions? Talk to an expert!
                    </a>
                  </Link>
                </div>
              </div>
            </Col>

            {/* <Col lg="4" md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0 pl-0">
              <div className="classic-saas-image position-relative">
                <div className="position-relative">
                  <img src={banner} className="mx-auto d-block" alt="" />
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Section;
