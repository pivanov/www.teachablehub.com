import { Container, Row, Col } from 'reactstrap';

const ForEveryone = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="10" sm="12" className="text-center">
          <div className="section-title mt-5 mb-4 pb-2">
            <h3 className="title mb-4">TeachbleHub is for everyone!</h3>
            <p className="text-muted para-desc mx-auto mb-0">
              <strong>TeachableHub</strong> has zero learning curve &amp; securely ties all loose ends together into a smooth production operation - data science, machine learning, app dev, and DevOps. If you make Machine Learning models that matter, TeachableHub <strong>is for YOU</strong>!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col sm="10">
          <Row className="align-items-center">
            <img src="/assets/images/for-everyone.png" className="img-fluid rounded" alt="" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ForEveryone;
