import { Container, Row, Col, Button } from "reactstrap";
import bg from "@assets/img/bg.png";
import banner from "@assets/img/homeImage.png";

const css = {
  // background: `url(${bg}) top center repeat-x`,
  backgroundImage: `url(${bg}), linear-gradient(to bottom, #fff 0%, #f8f9fc 100%) `,
  backgroundSize: "auto",
  backgroundPosition: "center top",
  backgroundRepeat: "repeat-x",
};

const Section = () => {
  return (
    <>
      <section id="home" className="bg-home d-flex align-items-center" style={css}>
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center mt-0 mt-md-5 pt-0 pt-md-5 pb-5 mb-5">
              <div className="title-heading margin-top-100 pt-5">
                <h1 className="heading mb-3">The best place to run Machine Learning in production.</h1>
                <p className="para-desc mx-auto text-muted">
                  <strong>TeachableHub</strong> is a fully-managed platform brining ML teams together to deploy, serve, and share impactful models as public or private APIs(a.k.a. Teachables) with ZERO MLOps, seamless scalability, and no costly infrastructure.
                </p>
              </div>

              <div className="home-dashboard onepage-hero mx-auto col-md-12 pt-5 pb-0 mb-0 margin-top-100">
                <img src={banner} alt="" className="img-fluid" />
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
