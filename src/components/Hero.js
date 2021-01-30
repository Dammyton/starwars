import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import gsap from "gsap"


function Hero() {
  useEffect(() => {      
    gsap.from('.bgimage', {duration:300, rotation:360})
}, []);

    return (
<Container>
  <Row>
    <Col lg="5" className="d-flex align-items-center text-white" >
       <div>
       <h3>DISCOVER STARSHIPS</h3>
      <p className="my-5">  We're excited about the first new Star Wars Platform in 5 years, so excited we have created this incredible collection of STARSHIPS models fully authorised by CBS Studios.The collection includes all the most significant ships.</p>
        <a name="" id="" className="btn btn-primary" href="#starships" role="button">Explore</a>

       </div>
    </Col>
    <Col lg="7" className="bgimage"></Col>
  </Row>
</Container>
    )
}
export default Hero;
