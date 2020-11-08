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
    <Container className="mt-100 mt-60">
      {/* section title */}
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
          <Form>
            <FormGroup>
              <InputGroup className="mb-3">
                <Input name="email" id="email" type="email" className="form-control" placeholder="Your email ..." required="" />
                <InputGroupAddon addonType="append">
                  <Button color="primary" className="submitBnt" onClick={handleSubmit} type="button" id="newssubscribebtn">Sign Up</Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default GetEarlyAccess;
