import { Row } from 'reactstrap';

const Joke = () => {
  return (
    <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
      <div xs="12" className="text-center">
        <div className="section-title">
          <h4 className="title mb-4">A Data Scientist, a Machine Learning Engineer and a DevOps</h4>
          <p className="text-muted para-desc mx-auto">
            walk into a <span style={{ textDecoration: "line-through" }}>bar</span> platform and say
          </p>
          <div className="mt-4 pt-2">
            "Yes, TeachbleHub supports it all and more!"
          </div>
        </div>
      </div>
    </Row>
  )
}



export default Joke;
