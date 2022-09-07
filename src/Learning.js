import {Container, Row, Col, Figure} from 'react-bootstrap';


function Learning(props){

    return(
      <Container as="section" id="learning" className="text-center">  
        <h2 className="text-center">Learning</h2>
          <Row xs={2} md={3} lg={5} className="justify-content-center">

        {/*
        Convert list of schools to pretty HTML,
        each container must have a key to be valid
        */}
            {
              props.learning.map((institution, idx) => 
              <Col key={'institution-'+idx}>
                <Figure>
                  <Figure.Image 
                    src={institution.icon}
                    alt={institution.name}
                  />
                <Figure.Caption dangerouslySetInnerHTML={{ __html: institution.courses+' <br/>('+institution.year+')' }} />
              </Figure>                            
            </Col>
              )
            }
          </Row>       
    </Container>
    );
}
export default Learning;    