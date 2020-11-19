import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Badge } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "@components/SectionTitle";

const planFeatures = [{
  id: 1,
  title: "Community",
  desc: "Ideal for innovators, freelancers, university practitioners, students, and visionaries building open projects.",
  features: [
    { title: "Unlimited Public Teachables" },
    { title: "Unlimited Public Colaborators" },
    { title: "10 Inferences/Sec" },
    { title: "CPU Runtime" },
    { title: "SSL Protection" },
    { title: "Custom Domains" },
    { title: "Community Support" },
  ]
},
{
  id: 2,
  title: "Business",
  desc: "Ideal for teams of all sizes, app agencies, enterprises organizations, and professionals working on projects at scale.",
  features: [
    { title: "All from Community" },
    { title: "Unlimited Private Teachables" },
    { title: "Unlimited Private Colaborators" },
    { title: "Unlimited Inferences/Sec" },
    { title: "GPU Runtime" },
    { title: "Model Versioning" },
    { title: "Multiple Environments" },
    { title: "360° Performance Monitoring" },
    { title: "24/7/365 Business Support" },
    { title: "and more out of the box" },
  ]
}];

const Pricing = () => {
  return (
    <>
      <Container>
        <SectionTitle
          title="What does it cost?"
          desc="Deploy &amp; share models freely as public APIs, infra costs are on us!"
        />
        <Row className="justify-content-center">
          {
            planFeatures.map((pricing, key) =>
              <Col md={5} xs={12} key={key} className="mt-4 pt-2" style={{ height: "100%" }}>
                <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                  <CardBody className="pt-4">
                    <h3 className="title text-uppercase mb-2">{pricing.title}</h3>
                    <p className="text-small text-left text-muted pl-2 mb-4">{pricing.desc}</p>
                    {/* <div className="d-flex justify-content-center mb-4">
                        <span className="h4 mb-0 mt-2">$</span>
                        <span className="price h1 mb-0">0</span>
                        <span className="h4 align-self-end mb-1">/mo</span>
                      </div> */}

                    <ul className="feature list-unstyled pl-2 text-left">
                      {
                        pricing.features.map((feature, key) =>
                          <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                        )
                      }
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
      <Container>
        <Row className="mt-100 justify-content-center">
          <div xs="12" className="text-center">
            <div className="pb-5">
              <Link href="/#chat">
                <a className="btn btn-lg btn-primary">SIGN UP FOR EARLY ACCESS</a>
              </Link>
              <p className="f-small pt-1">ALL PUBLIC TEACHABLES ARE FREE!</p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
