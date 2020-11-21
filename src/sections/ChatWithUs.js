import Link from "next/link";
import { Row, Col, Container } from "reactstrap";
import SectionTitle from "@components/SectionTitle";

const ChatWithUs = () => {
  return (
    <Container id="questions">
      <Row className="pt-5 justify-content-center">
        <Col xs="12">
          <div className="text-center">
            <SectionTitle
              title="Couldn't find answers to any of your questions?"
              desc="There is a way to find an answer to all of your questions. Our team is here to help!"
            />
            <div className="">
              <Link href="/#questions">
                <a className="btn btn-primary">Chat With Us</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatWithUs;
