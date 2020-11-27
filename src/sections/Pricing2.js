import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import SectionTitle from "@components/SectionTitle";
import Questions from "@components/Questions";

const planFeatures = [{
  id: 1,
  title: "Community",
  desc: "Ideal for innovators, freelancers, university practitioners, students, and visionaries building open projects.",
  features: [
    { title: "Unlimited Public Teachables" },
    { title: "Unlimited Collaborators" },
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
    { title: "Roles and Permissions" },
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
              <Col xl={5} lg={6} md={7} xs={12} key={key} className="mt-4 pt-2">
                <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                  <CardBody className="pt-4 rounded">
                    <div className="badge badge-success mb-2">{pricing.id === 1 ? "Free" : "Coming soon"}</div>
                    <h3 className="title text-uppercase mb-2">{pricing.title}</h3>
                    <p className="text-small text-left text-muted pl-2 mb-4">{pricing.desc}</p>

                    <ul className="feature list-unstyled pl-2 text-left">
                      {
                        pricing.features.map((feature, key) =>
                          <li key={key} className="feature-list text-muted">
                            <i><FeatherIcon icon="check" size={20} className="fea text-success mr-2" /></i>
                            {feature.title}
                          </li>
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
      <Container id="early-access" className="pt-5">
        <Row className="justify-content-center">
          <Col lg={8} md={10} xs={12} className="mt-4 pt-2">
            <div className="text-center">
              <SectionTitle
                title="Sign up for early access now"
                desc="and get a FREE consultation from our ML deployment experts!"
              />
              <Row className="justify-content-center">
                <Col lg={10} xs={12} className="mt-4 pt-2">
                  <Questions />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pricing;
