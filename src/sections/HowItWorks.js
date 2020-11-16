import { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

import SectionTitle from "@components/SectionTitle";

import img1 from "@assets/img/how-it-works-1.png";
import img2 from "@assets/img/how-it-works-2.png";
import img3 from "@assets/img/how-it-works-3.png";
import img4 from "@assets/img/how-it-works-4.png";

const HowItWorks = () => {
  const [state, setState] = useState({
    activeTab: '1',
  });

  const toggleTab = (tab) => {
    if (state.activeTab !== tab) {
      setState({
        activeTab: tab
      });
    }
  }

  return (
    <Container className="mt-100 mt-60">
      <Row className="justify-content-center">
        <Col xs="12" className="text-center">
          <SectionTitle
            title="How it works?"
            desc="You create meaningful models, we give you powerful tools and infra to deploy and host them. Together we change the future!" />
        </Col>
      </Row>
      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <img src={img1} className="img-fluid rounded" alt="" />
          </Col>

          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-lg-5">
              <h4 className="title mb-4">Deploy in Seconds</h4>
              <p className="text-muted">Connect your model from anywhere, using any framework, deploy it as an API &amp; share it with the world. Versioning, model validation, and more available out of the box.</p>
              <ul className="list-unstyled feature-list text-muted" name="featurelines">
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Zero Docker knowledge required</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Ready to use API with no coding</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>From POC to production in no time</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title mr-lg-5">
              <h4 className="title mb-4">Serve at Scale</h4>
              <p className="text-muted">Securely serve & instantly scale Teachables on our fully-managed serverless infrastructure. Forget about MLOps tasks, underutilized resources, and infra costs. </p>
              <ul className="list-unstyled feature-list text-muted" name="featurelines">
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Infinite scalability &amp; storage</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Fast performance and high availability</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Pay as you go according to your needs</li>
              </ul>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <img src={img2} className="img-fluid rounded" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={6} md={6}>
            <img src={img3} className="img-fluid rounded" alt="" />
          </Col>

          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title ml-lg-5">
              <h4 className="title mb-4">Manage &amp; Collaborate</h4>
              <p className="text-muted"> Monitor, manage, and control model usage and performance in production, set ACLs &amp; permissions - all from a centralized hub side by side with your entire ML team.</p>
              <ul className="list-unstyled feature-list text-muted" name="featurelines">
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Intuitive, yet powerful UI/UX</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>360° view of your model's performance></li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Effortless collaboration with custom workflows</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-100 mt-60">
        <Row className="align-items-center">
          <Col lg={6} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title mr-lg-5">
              <h4 className="title mb-4">Use on Any Platform</h4>
              <p className="text-muted">For each model, you get a fully documented &amp; ready to use API you can easily connect with any web, mobile, commerce, or backend platform via our modern SDKs.</p>
              <ul className="list-unstyled feature-list text-muted" name="featurelines">
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Your models available as a microservice</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Omnichannel delivery of your predictions</li>
                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>Effortless and simple integration</li>
              </ul>
            </div>
          </Col>

          <Col lg={6} md={6}>
            <img src={img4} className="img-fluid rounded" alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HowItWorks;
