import Link from "next/link";
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';
import SectionTitle from "@components/SectionTitle";
import Questions from "@components/Questions";
import Reviews from "./Reviews";

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
      <section className="section pb-5 bg-light" id="pricing">
        <Container>
          <SectionTitle
            title="What does it cost?"
            desc="Deploy &amp; share models freely as public APIs, infra costs are on us!"
          />
          <Row className="justify-content-center">
            {
              planFeatures.map((pricing, key) =>
                <Col xl={5} lg={6} md={7} xs={12} key={key} className="mt-4 pt-2 pb-5">
                  <Card className="pricing-rates business-rate shadow bg-light rounded text-center border-0">
                    <CardBody className="pt-4 rounded">
                      {
                        pricing.id === 1
                          ? (
                            <div className="badge badge-success mb-2">Free</div>
                          )
                          : (
                            <Link href="/#early-access" className="badge badge-success mb-2">
                              <span className="badge badge-success mb-2">
                                Contact Us
                              </span>
                            </Link>
                          )
                      }
                      {/* <div className="badge badge-success mb-2">{pricing.id === 1 ? "Free" : "Coming soon"}</div> */}
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
      </section>

      <section className="section pt-5 pb-6" id="reviews">
        <Reviews />
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="#f8f9fc"></path>
          </svg>
        </div>
      </div>

      <section className="section pt-5 pb-5 bg-light" id="early-access">
        <Container className="pt-3">
          <Row className="justify-content-center">
            <Col lg={8} md={10} xs={12} className="mt-0 pt-2">
              <div className="text-center">
                <SectionTitle
                  title="Book a Demo with our ML Deployment experts"
                  desc="and get exclusive early access to TeachableHub!"
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
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Pricing;
