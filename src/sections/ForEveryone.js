import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

import SectionTitle from "@components/SectionTitle";

const ForEveryone = () => {
  return (
    <Container>
      <SectionTitle
        title="TeachbleHub is for everyone!"
        desc="<strong>TeachableHub</strong> has zero learning curve and it is created for all the visionaries who shape our future by building meaningful open-source or proprietary Machine Learning projects. ﻿If you make models that matter and want to get them in action, TeachableHub is for YOU!" />
      <Row className="justify-content-center">
        <Col sm="8">
          <div className="buy-button text-center">
            <Link href="#">
              <a className="btn btn-primary">
                Get Early Access
                </a>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ForEveryone;
