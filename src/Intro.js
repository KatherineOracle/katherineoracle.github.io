import "./assets/scss/Intro.scss";
import { Container } from "react-bootstrap";


/*
    The props introduction contains HTML
    dangerouslySetInnerHTML will output HTML 
    correctly (ie not encoded)     
*/
function Intro(props) {
  return (<Container as="section" id="skills" className="text-center"><div className="d-flex justify-content-center row text-center lead">
    <div className="col-9">
   {props.introduction}
   </div></div></Container>
  );
}

export default Intro;
