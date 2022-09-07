import "./assets/scss/Footer.scss";
import {Container} from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container className="text-center">
            <h4>
              {props.name} &nbsp; &#8226; &nbsp; {props.expertise.join("/")}
            </h4>
            <p className="lead">
              <span>{props.location}</span>&nbsp; &#8226; &nbsp;
              <span>
                <em className="icon-telephone"></em>
                {props.telephone}
              </span>
              &nbsp; &#8226; &nbsp;
              <a href={props.email}>
                <em className="icon-email"></em>
                {props.email.replace("mailto:", "")}
              </a>
            </p>
            <p><em>This page was built using React</em></p>
      </Container>
    </footer>
  );
}
export default Footer;
