import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, InputGroup, Alert, InputGroupAddon, Button } from 'reactstrap';

import SectionTitle from "@components/SectionTitle";

const GetEarlyAccess = () => {
  const [state, setState] = useState({
    successMsg: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ successMsg: true });
  }

  return (
    <Container className="mt-100 mt-60 pb-5">
      <SectionTitle title="Sign up for early access now"
        desc="and get a FREE consultation from our ML deployment experts!" />

      <Row className="justify-content-center mt-4 pt-2 pb-5">
        <Col lg="7" md="10" >
          <Alert color="primary" isOpen={state.successMsg} toggle={() => {
            setState({ successMsg: !state.successMsg })
          }}
          >
            Data sended successfully.
          </Alert>
          <div className="input-group input-group-lg">
            <input type="text" className="form-control" aria-label="Large" placeholder="Your email ..." required="" />
            <div className="input-group-append">
              <Button color="primary" className="submitBnt" onClick={handleSubmit} type="button" id="newssubscribebtn">Sign Up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default GetEarlyAccess;
