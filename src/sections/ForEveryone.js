import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

import img1 from "@assets/img/for-everyone.png";

const ForEveryone = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div className="section-title mt-5 mb-4 pb-2">
            <h3 className="title mb-4">TeachbleHub is for <span className="text-primary">everyone</span></h3>
            <p className="text-muted para-desc mx-auto mb-0">
              <strong>TeachableHub</strong> has zero learning curve &amp; securely ties all loose ends together into a smooth production operation - data science, machine learning, app dev, and DevOps. If you make Machine Learning models that matter, TeachableHub <strong>is for YOU</strong>!
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col sm="10">
          <Row className="align-items-center">
            <img src={img1} className="img-fluid rounded" alt="" />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ForEveryone;
