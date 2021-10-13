import { Container, Row, Col } from "reactstrap";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Reviews = () => {
  return (
    <div className="reviews-carousel">
      <Container>
        <Row className="justify-content-center">
          <Col md="10" sm="12" className="text-center">
            <div className="section-title mt-5">
              <h3 className="title">Reviews from Machine Learning Experts!</h3>
              <p className="text-muted para-desc mx-auto mb-0">
                Here&apos;s what Machine Learning practitioners have to say about our product.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="10" sm="12" className="text-center">
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              // interval={5000}
              // infiniteLoop={true}
              // autoPlay={true}
              // stopOnHover={true}
              // transitionTime={600}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      className="selected"
                    // aria-label={`Selected: ${label} ${index + 1}`}
                    // title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                  // title={`${label} ${index + 1}`}
                  // aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/georgi_kostadinov.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Georgi Kostadinov</h2>
                    <p>Co-founder &amp; CTO @ Kelvin Health | Head of AI @ Imagga</p>
                  </div>
                </div>
                <p className="desc">
                  "This demo forever changed my views regarding the model deployment process. TeachableHub is making the deployment of complex ML models a simple task involving a few lines of code. No need to be a DevOps or MLOps expert anymore.<br />It focuses entirely on teamwork &amp; collaboration, giving the ability to easily involve different stakeholders in the process."
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6847105476782514176/" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/ricardo_di_pasquale.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Ricardo Di Pasquale</h2>
                    <p>Machine Learning Engineering Senior Manager @ Accenture</p>
                  </div>
                </div>
                <p className="desc">
                  "A great point on UX simplicity, ML Engineers tend to over-engineer front-end.<br />It&apos;s really difficult to bring simplicity to a complex solution without loosing perspective, so, congrats!<br />Rolling update release workflow was really easy to set, it works seamlessly.<br />The modular architecture designed for the ML lifecycle is another point for the team."
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6842988550703616000/?actorCompanyId=69548374" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/ale_solano.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Ale Solano</h2>
                    <p>Data Science, Computer Vision, MLOps @ NTT Disruption</p>
                  </div>
                </div>
                <p className="desc">
                  {/* "Getting ML models into production is far from being easy. Data scientists are not DevOps and ML models can't be treated like software...But after demoing their product I have the feeling that TeachableHub is close to solving this! They have built a platform that tracks every version of your model, cleverly organized in environments and easy to visualize and manage.<br />
                  Every version comes with automatic documentation and metadata so you can check where the model came from." */}

                  "TeachableHub is a platform that tracks every version of your model, cleverly organized in environments.
                  Every version comes with automatic documentation and metadata so you can check where the model came from.
                  With a few lines of code you can upload your models from wherever you are. And with every upload, a new API endpoint is created that you can beautifully test from an integrated Postman. Once you're comfortable with the model, you can easily promote it."
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6838881079026298880/" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/alexander_sokolov.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Alexander Sokolov</h2>
                    <p>Co-founder &amp; Chief Technology Officer @ WeOne</p>
                  </div>
                </div>
                <p className="desc">
                  "TeachableHub is early stage but have a mature feature set: multi-environment,<br />blue/green deploys, model versioning, automatic model documentation generation, seamless autoscaling, etc.<br />
                  If you look for a solution to free your Data Science team from writing Dockerfiles and Ops you might check it."
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6845706089514754048/" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/sho_virtucio.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Sho Virtucio</h2>
                    <p>Machine Learning Operations Engineer @ Retail AI, Inc</p>
                  </div>
                </div>
                <p className="desc">
                  "I&apos;m currently using Kubeflow pipelines integrated on GCP for most of my MLOps endeavours,<br />but after looking at the deployment platform from the TeachableHub team, it really streamlines the MLE process <br />and serving the models, especially for Data Scientists."
                </p>
                <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6840965437799444480/?actorCompanyId=69548374" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/artem_yushkovsky.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Artem Yushkovsky</h2>
                    <p>MLOps Engineer @ Neu.ro Inc</p>
                  </div>
                </div>
                <p className="desc">
                  "Very clear scope: deploying ML models. Let&apos;s all focus on one thing!<br />
                  Neat UX: the team seems to have found the balance between flexibility (hackability) and strict declarative configuration.<br />Let&apos;s all think of our users! Modular architecture: not just the APIs of the platform are designed with easy integrations in mind,<br />the team always try to utilise third-party tools firs. Let&apos;s all stop reinventing the wheel!"
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6834496615219298304/" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/madhusudhan_vasavakkala.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Madhusudhan Vasavakkala</h2>
                    <p>Product Management &amp; Business Growth @ Neurocat.ai</p>
                  </div>
                </div>
                <p className="desc">
                  "Recently I had a chance to view a product presentation of TeachableHub!<br />
                  I was impressed by the product vision and storytelling behind the product.<br />
                  If you are in the MLOps space, this is worth a checkout!"
                </p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:6849265353885827072/" target="_blank">Read full review</a>
              </div>

              <div className="item">
                <div className="top">
                  <div className="avatar">
                    <img src="/assets/images/reviews/kamen_pavlov.jpeg" />
                  </div>
                  <div className="info">
                    <h2>Kamen Pavlov</h2>
                    <p>Machine Learning Engineer @ MLmargin | Co-founder @ KG Intelligence</p>
                  </div>
                </div>
                <p className="desc">
                  "It was eye opening to see how TeachableHub approaches MLOps...They are focusing on providing state of the art, easy to use Machine Learning Models deployment experience, which unties the hands of the software developers<br />to focus their energy on other challenges. Looking forward to work with TeachableHub!"
                </p>
                <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6848135807979548672/?actorCompanyId=69548374" target="_blank">Read full review</a>
              </div>

            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
