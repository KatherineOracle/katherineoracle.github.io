import "./assets/scss/Portfolio.scss";
import {Container, Row, Col, Figure, Badge} from 'react-bootstrap';


function Portfolio(props){

    console.log(props);
    return(
      <Container as="section" id="portfolio">  
        <h2 className="text-center mb-2">Portfolio</h2>
          <h4 className="mb-4">As a student at HyperionDev</h4>

        {/*
        Convert list of portfolio items to pretty HTML,
        each container must have a key to be valid
        */}
            {
              props.portfolio.student.map((project, idx) => 
              <Row  className="d-flex  align-items-start" key={'project-'+idx}>
              <Col lg={4} md={3} >
                <Figure>
                  <Figure.Image 
                    src={project.thumbnail}
                    alt={project.name}
                  />
              </Figure>   
            </Col>  
            <Col md="auto" ><h5>{project.name}</h5>
            <p>
            {project.languages.map((lang, idy) => <Badge pill key={'lang-'+idy}>{lang}</Badge>
            )}
            </p>
            <p>{project.description}</p>
            <ul className="list-unstyled">
            {(project.github_url) && <li className="icon-github">Github Repo: <a href={project.github_url}>{project.github_url}</a></li> 
            } 
            {(project.heroku_url) && <li className="icon-heroku">Heroku Demo: <a href={project.heroku_url}>{project.heroku_url}</a></li>
            }  
            </ul>  
            </Col>
            </Row>   
              )
            }

<h4 className="text-left mb-3">Recently, as a web designer at R&amp;A </h4>
          

          {/*
          Convert list of portfolio items to pretty HTML,
          each container must have a key to be valid
          */}
              {
                props.portfolio.professional.map((project, idx) => 
                <Row  className="d-flex  align-items-start" key={'project-'+idx}>
                <Col lg={3} md={3} >
                  <Figure>
                    <Figure.Image 
                      src={project.thumbnail}
                      alt={project.name}
                    />
                </Figure>  </Col>  
            <Col md="auto" > 
              <h5>{project.name}</h5>
              <p>
              {project.languages.map((lang, idy) => <Badge pill key={'lang-'+idy}>{lang}</Badge>
              )}
              </p>
              <p>{project.description}</p>
              <ul className="list-unstyled">
              {(project.live_url) && <li className="icon-www">Live URL: <a href={project.live_url}>{project.live_url}</a></li> 
              } 
              </ul>  
              </Col>
              </Row>  
                )
              }            
             
    </Container>
    );
}
export default Portfolio;    