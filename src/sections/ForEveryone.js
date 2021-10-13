import Image from "next/image";
import { Container, Row, Col } from "reactstrap";

const ForEveryone = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="10" sm="12" className="text-center">
          <div className="section-title mt-5 mb-4 pb-2">
            <h3 className="title mb-4">TeachаbleHub brings teams together!</h3>
            <p className="text-muted para-desc mx-auto mb-0">
              Deploy &amp; Share models freely as public APIs, infra costs are on us!<br />Our solution is available as a Managed Cloud Service or an On-Premise version<br />suitable for any infrastructure supporting Kubernetes.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col sm="10">
          <Row className="align-items-center justify-content-center">
            <Image
              src="/assets/images/for-everyone.png"
              alt="TeachаbleHub brings teams together!"
              className="img-fluid rounded"
              width={800}
              height={450}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ForEveryone;
