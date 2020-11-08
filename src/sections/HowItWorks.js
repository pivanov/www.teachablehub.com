import { useState } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from 'classnames';

import SectionTitle from "@components/SectionTitle";

import img1 from "@assets/img/banner.png";
import img2 from "@assets/img/banner.png";
import img3 from "@assets/img/banner.png";

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
      <Row className="justify-content-center">
        <Col lg="8" md="12" className="mt-4 pt-2 text-center">
          <Nav className="flex-column flex-sm-row rounded" pills justified data-aos="fade-up" data-aos-duration="1200">
            <NavItem className="ml-2 mr-2">
              <NavLink
                className={classnames({ active: state.activeTab === '1' }, "rounded")}
                onClick={() => { toggleTab('1'); }}
              >
                <div className="text-center pt-1 pb-1">
                  <h4 className="title font-weight-normal mb-0">Deploy in Minutes</h4>
                </div>
              </NavLink>
            </NavItem>

            <NavItem className="ml-2 mr-2">
              <NavLink
                className={classnames({ active: state.activeTab === '2' }, "rounded")}
                onClick={() => { toggleTab('2'); }}
              >
                <div className="text-center pt-1 pb-1">
                  <h4 className="title font-weight-normal mb-0">Monitor &amp; Manage</h4>
                </div>
              </NavLink>
            </NavItem>

            <NavItem className="ml-2 mr-2">
              <NavLink
                className={classnames({ active: state.activeTab === '3' }, "rounded")}
                onClick={() => { toggleTab('3'); }}
              >
                <div className="text-center pt-1 pb-1">
                  <h4 className="title font-weight-normal mb-0">Run Teachables at Scale</h4>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <Row>
        <Col xs="12" className="mt-4 pt-2">
          <TabContent activeTab={state.activeTab}>
            <TabPane tabId="1">
              <Row className="align-items-center">
                <Col md="6">
                  <img src={img1} data-aos="fade-up" data-aos-duration="1400" className="img-fluid mx-auto d-block rounded" alt="" />
                </Col>

                <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ml-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000">Deploy in Minutes</h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">Connect your model from anywhere, using any framework, deploy it as an API &amp; share with the world. Versioning, model validation and more available out of the box.</p>
                  </div>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row className="align-items-center">
                <Col md={{ size: 6, order: 1 }} xs={{ order: 2 }} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title mr-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000">Monitor &amp; Manage</h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">Monitor, manage and control model usage and performance in production, set ACLs & permissions - all from a centralized hub side by side with your entire ML team.</p>
                  </div>
                </Col>

                <Col md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                  <img src={img2} data-aos="fade-up" data-aos-duration="1400" className="img-fluid mx-auto d-block rounded" alt="" />
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="3">
              <Row className="align-items-center">
                <Col md="6">
                  <img src={img3} data-aos="fade-up" data-aos-duration="1400" className="img-fluid mx-auto d-block rounded" alt="" />
                </Col>

                <Col md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="section-title ml-md-4">
                    <h4 className="title mb-4" data-aos="fade-up" data-aos-duration="1000">Run Teachables at Scale</h4>
                    <p className="text-muted" data-aos="fade-up" data-aos-duration="1400">
                      Securely serve &amp; scale Teachables on our fully-managed serverless infrastructure. Forget about MLOps tasks, underutilized resources storage and inference limitations.
                    </p>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}

export default HowItWorks;
