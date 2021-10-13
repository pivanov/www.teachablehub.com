import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";

import SectionTitle from "@components/SectionTitle";

const HowItWorks = () => {
  return (
    <Container className="section-how-it-works pt-5">
      <Row className="justify-content-center">
        <Col xs="12" className="text-center">
          <SectionTitle
            title="How it works?"
            desc="You create meaningful models, we give you powerful tools and infra to deploy and host them.<br />Together we change the future!" />
        </Col>
      </Row>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <Image
              src="/assets/images/how-it-works-1.png"
              className="img-fluid rounded"
              alt="Deploy in Seconds"
              width={1110}
              height={680}
            />
          </Col>

          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-lg-5">
              <h4 className="title mb-3">Deploy in Seconds</h4>
              <p className="text-muted">Connect your model from anywhere, using any framework, deploy it as an API &amp; share it with the world. Versioning, model validation, and more available out of the box.</p>
              <ul className="list-unstyled feature-list text-muted mt-4 pt-1" name="featurelines">
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Zero Docker knowledge required</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Ready to use API with no coding</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />From POC to production in no time</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title mr-lg-5">
              <h4 className="title mb-3">Serve at Scale</h4>
              <p className="text-muted">Securely serve &amp; instantly scale Teachables on our fully-managed serverless infrastructure. Forget about MLOps tasks, underutilized resources, and infra costs.</p>
              <ul className="list-unstyled feature-list text-muted mt-4 pt-1" name="featurelines">
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Infinite scalability &amp; storage</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Fast performance and high availability</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Pay as you go according to your needs</li>
              </ul>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <Image
              src="/assets/images/how-it-works-2.png"
              className="img-fluid rounded"
              alt="Serve at Scale"
              width={1110}
              height={680}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <Image
              src="/assets/images/how-it-works-3.png"
              className="img-fluid rounded"
              alt="Manage &amp; Collaborate"
              width={1110}
              height={680}
            />
          </Col>

          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-lg-5">
              <h4 className="title mb-3">Manage &amp; Collaborate</h4>
              <p className="text-muted">Monitor, manage, and control model usage and performance in production, set ACLs &amp; permissions - all from a centralized hub side by side with your entire ML team.</p>
              <ul className="list-unstyled feature-list text-muted mt-4 pt-1" name="featurelines">
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Intuitive, yet powerful UI/UX</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />360° view of your model's performance</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Effortless collaboration with custom workflows</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title mr-lg-5">
              <h4 className="title mb-3">Use on Any Platform</h4>
              <p className="text-muted">For each model, you get a fully documented &amp; ready to use API you can easily connect with any web, mobile, commerce, or backend platform via our modern SDKs.</p>
              <ul className="list-unstyled feature-list text-muted mt-4 pt-1" name="featurelines">
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Your models available as a microservice</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Omnichannel delivery of your predictions</li>
                <li><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" size={16} />Effortless and simple integration</li>
              </ul>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <Image
              src="/assets/images/how-it-works-4.png"
              className="img-fluid rounded"
              alt="Use on Any Platform"
              width={1110}
              height={680}
            />
          </Col>
        </Row>
      </Container>

      <Row className="mt-100 justify-content-center">
        <Col lg={12} md={12}>
          <div className="pb-5 text-center">
            <Link href="/#early-access">
              <a className="btn btn-extra-lg btn-primary" style={{ width: 300 }}>REQUEST DEMO NOW</a>
            </Link>
            <p className="f-small pt-1 f-uppercase">Let&apos;s deploy models in under 10 minutes</p>
          </div>
        </Col>
      </Row >
    </Container >
  );
}

export default HowItWorks;
