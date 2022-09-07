import {Container, Row, Col} from 'react-bootstrap';


function Tools(props){

  /*
  Convert list of tools to pretty HTML,
  each container must have a key to be valid
  */
  const usingConverter = function(item, idx){
    return Object.entries(item).map(([key,value])=>{
    return (
      <Col key={'using-'+key+idx}>
        <h4>{key}</h4>
        <ul>{value.map((listitem, idx) => 
        <li key={key+'-'+idx}>{listitem}</li>
        )}</ul>
      </Col>  
    );
  })
}
  
    return(
    <Container as="section">
    <h2 className="text-center">Frequently used tools</h2>
          <Row md={3}>
            {props.using.map((item, idx) => (usingConverter(item, idx))) }
          </Row>
    </Container>
    );
}    

export default Tools;