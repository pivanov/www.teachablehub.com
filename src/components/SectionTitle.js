import { Row, Col } from "reactstrap";

const SectionTitle = ({
  isLeft,
  title,
  desc
}) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" className={isLeft ? "" : "text-center"}>
          <div className="section-title mb-4 pb-2" name="maintitle">
            <h3
              className="title mb-4"
              name="sectiontitle"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className={`${isLeft ? "text-muted para-desc mb-0" : "text-muted para-desc mx-auto mb-0"}`}
              name="sectiondesc"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SectionTitle;
