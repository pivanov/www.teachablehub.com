import { Container, Row, Col } from "reactstrap";
import SectionTitle from "@components/SectionTitle";

const Teachable = () => {
  return (
    <Container>
      <SectionTitle
        title="What is Teachable?"
        desc="Created to make a difference, inspired by the open community spirit." />
      <Row className="justify-content-center">
        <Col lg="9" md="10" sm="12">
          <blockquote className="blockquote mt-3 p-3">
            <p className="text-muted mb-0 font-italic">
              <strong>Teachable</strong> - [/ˈtiːtʃəb(ə)l/] - noun - A powerful machine learning model deployed as a REST, gRPC or GraphQL API, entirely documented, available to be consumed by any server-side or client-side applications. It can be published privately or shared in public for the community's benefit.
            </p>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
}

export default Teachable;
