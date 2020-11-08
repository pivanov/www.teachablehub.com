import { Container, Row, Col } from 'reactstrap';

import SectionTitle from "@components/SectionTitle";

const Teachable = () => {
  return (
    <Container>
      <SectionTitle
        title="What is Teachable?"
        desc="Created to make a difference, inspired by the open community spirit." />
      <Row className="justify-content-center">
        <Col sm="8">
          <p className="text-muted p-3 bg-light rounded text-center">
            <strong>Teachable</strong> - [/ˈtiːtʃəb(ə)l/] - noun - A powerful machine learning model deployed as an REST API, entirely documented, available to be consumed by your applications and to be fed with your data. It can be published privately or shared in public for the community's benefit.
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Teachable;
