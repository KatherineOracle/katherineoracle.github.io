import "./assets/scss/Skills.scss";
import { Container, Row, Col, Figure } from "react-bootstrap";

function Skills(props) {


  /*
  Convert list of skills to pretty HTML,
  each container must have a key to be valid
  */
  const skillConverter = function (skill, group, idx) {
    return (
      <Col key={'skill-'+group+idx}>
        <Figure>
          <Figure.Image alt={skill.name + '[icon]'} src={skill.icon} />
          <Figure.Caption>{skill.name}<br/>
            <div className="rank">
            <div className="score" data-score={skill.rank}></div>
            </div>
          </Figure.Caption>
        </Figure>
      </Col>
    );
  };

  return (
    <Container as="section" id="skills" className="text-center">
      <h2>Mad skills</h2>
      <Row xs={2} sm={3} md={4} lg={6} className="d-flex justify-content-center my-4">
        {props.skills.mad.map((skill, idx) => skillConverter(skill, 'mad', idx))}
      </Row>     
      <h3 className="text-center">Skills loading...</h3>
      <Row xs={2} sm={3} md={4} lg={6} className="d-flex justify-content-center my-4">
        {props.skills.loading.map((skill, idx) => skillConverter(skill, 'loading', idx))}
      </Row>
    </Container>
  );
}

export default Skills;
