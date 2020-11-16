import { Container, Row, Col } from 'reactstrap';

const Joke = () => {
  return (
    <Container className="mt-100 mt-60">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div className="section-title mb-4 pb-2">
            <h4 className="title mb-4"><span className="text-primary">TeachbleHub</span> is for everyone!</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              <strong>TeachableHub</strong> has zero learning curve &amp; securely ties all loose ends together into a smooth production operation - data science, machine learning, app dev, and DevOps. If you make Machine Learning models that matter, TeachableHub is for YOU!
          </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}



export default Joke;
