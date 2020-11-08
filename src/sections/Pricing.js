import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Badge } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "@components/SectionTitle";

const planFeatures = [{
  id: 1,
  title: "Community Teachables",
  features: [
    { title: "Unlimited Public APIs" },
    { title: "Unlimited Colaborators" },
    { title: "Unlimited Inferences/Month" },
    { title: "10 Inferences/Sec" },
    { title: "CPU Runtime" },
    { title: "SSL Protection" },
    { title: "Custom Domains" },
    { title: "Community Support" },
  ]
},
{
  id: 2,
  title: "Business Teachables",
  features: [
    { title: "Unlimited Private APIs" },
    { title: "Unlimited Colaborators" },
    { title: "Unlimited Inferences/Sec" },
    { title: "GPU Runtime" },
    { title: "Multiple Environments" },
    { title: "360° Monitoring" },
    { title: "24/7 Support" },
    { title: "and more out of the box" },
  ]
}];

const Pricing = () => {
  return (
    <Container>
      <SectionTitle
        title="What does it cost?"
        desc="Deploy &amp; share models freely as public APIs, infra costs are on us!" />

      <Row className="align-items-center justify-content-center">
        {
          planFeatures.map((pricing, key) =>
            <Col md={4} xs={12} key={key} className="mt-4 pt-2">
              <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                <CardBody className="pt-4 pb-5">
                  <h2 className="title text-uppercase mb-4 text-left">{pricing.title}</h2>
                  {/* <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">0</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                      </div> */}

                  <ul className="feature list-unstyled pl-4 text-left">
                    {
                      pricing.features.map((feature, key) =>
                        <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                      )
                    }
                  </ul>
                  {
                    pricing.id === 1 && (
                      <a href="#get-early-access" className="btn btn-primary mt-4">
                        Free
                      </a>
                    )
                  }
                  {
                    pricing.id === 2 && (
                      // <Link href="#">
                      <a href="#chat-with-us" className="btn btn-primary mt-4">
                        Contact Us
                      </a>
                      // </Link>
                    )
                  }
                </CardBody>
              </Card>
            </Col>
          )
        }
      </Row>
    </Container>
  );
}

export default Pricing;
