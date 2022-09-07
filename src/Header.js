import "./assets/scss/Header.scss";
import { ListGroup, Container, Row, Col, Figure } from "react-bootstrap";

function Header(props) {


  /*Convert Social media platform to 
    its classname ie. lowercase with no spaces
    */
  const classNameMake = function (text) {
    return "icon-" + text.toLowerCase().replace(" ", "");
  };

  /*
      Convert social media list  to pretty HTML,
      each container must have a key to be valid
  */
  const linkList = props.social.map((item, idx) => (
    <ListGroup.Item as="li" key={"social-" + idx}>
      <a
        className={classNameMake(item.type)}
        data-toggle="tooltip"
        title={item.type}
        href={item.link}
      >
        {item.type}
      </a>
    </ListGroup.Item>
  ));

  return (
    <header>
      <div className="background"></div>
      <Container className="g-0">
        <Row>
          <Col>
            <h1>{props.name}</h1>
            <h3>{props.expertise.join(" / ").toUpperCase()}</h3>
           
            <ListGroup
              as="ul"
              horizontal='md'
              className="align-items-center justify-content-center"
            >
              {linkList}
            </ListGroup>
            <Figure>
              <Figure.Image rounded={true} alt={props.name} src={props.photo} />
            </Figure>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
