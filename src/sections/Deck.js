import Link from "next/link";
import { Row, Col, Container } from "reactstrap";
import SectionTitle from "@components/SectionTitle";

const Deck = () => {
  return (
    <Container>
      <Row className="pt-5 justify-content-center">
        <Col xs="12">
          <div className="text-center" style={{ minHeight: 400, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
            <SectionTitle
              title="Want to learn more about TeachableHub?"
            // desc="Talk to our experts and get them answered right away!"
            />
            <div>
              <a href="/docs/TeachbleHub-Deck.pdf" className="btn btn-primary" target="_blank">Download the report</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Deck;
