import { Container, Row, Col, Figure } from "react-bootstrap";

function Jobs(props) {
  return (
    <Container as="section" id="Jobs" className="text-center">
      <h2 className="text-center">Jobs</h2>

      {/*
      Convert list of jobs to pretty HTML,
      each container must have a key to be valid.
      Year may contain special characters, thus the use of dangerouslySetInnerHTML
      */}
      <Row lg={3} className="justify-content-center">
        {props.jobs.map((job, idx) => (
          <Col key={"job-" + idx}>
            <Figure>
              <Figure.Image src={job.icon} alt={job.name} />
              <Figure.Caption dangerouslySetInnerHTML={{ __html: job.year }} />
            </Figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Jobs;
