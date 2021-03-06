import Link from 'next/link';
import { Container, Row, Col } from "reactstrap";

const Section = () => {
  return (
    <>
      <section id="home" className="section-home bg-pattern">
        <div className="bg-header" />
        <div className="bg-gradient" />
        <Container>
          <Row className="align-items-center">
            <Col xl="8" lg="9" md="12">
              <div className="title-heading">
                <h1 className="heading mb-3">The best place to run<br /> Machine Learning in production.</h1>
                <p className="para-desc text-muted">
                  <strong>TeachableHub</strong> is a fully-managed platform bringing ML teams together to deploy, serve, and share impactful models as public or private APIs(a.k.a. Teachables) with ZERO MLOps, seamless scalability, and no costly infrastructure.
                </p>
                <div className="th-header-buttons mt-5">
                  <Link href="/#early-access">
                    <a className="btn btn-lg btn-primary th-btn">
                      SIGN UP FOR EARLY ACCESS
                      <span className="f-small pt-1">ALL PUBLIC TEACHABLES ARE FREE!</span>
                    </a>
                  </Link>
                  <Link href="/#questions">
                    <a href="#chat" className="th-header-link" data-message="I need to talk with an expert about">
                      Questions? Talk to an expert!
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
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
