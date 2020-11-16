import { Container, Row, Col } from "reactstrap";
import bg from "@assets/img/home-bg.png";
import test from "@assets/img/test.png";

const Section = () => {
  return (
    <>
      <section className="bg-half-260 d-table w-100" style={{ background: `url(${bg}) center center` }} id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <div className="title-heading mt-4">
                <h1 className="heading mb-3">The best place to run Machine Learning in production.</h1>
                <p className="para-desc text-muted">
                  <strong>TeachableHub</strong> is a fully-managed platform brining ML teams together to deploy, serve, and share impactful models as public or private APIs(a.k.a. Teachables) with ZERO MLOps, seamless scalability, and no costly infrastructure.
                </p>
                <div className="watch-video mt-4 pt-2">
                  {/* <Link to="#" className="btn btn-pills btn-primary mb-2 mr-1">Get Started</Link> */}
                </div>
              </div>
            </Col>

            <Col lg={6} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src={test} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section;
