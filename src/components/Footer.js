import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import facebook from '../background-images/facebook.svg';
import social from '../background-images/social.svg'
import github from '../background-images/github.svg'
import linkedin from '../background-images/linkedin.svg'
import medium from '../background-images/medium.svg'
import twitter from '../background-images/twitter.svg'

function Footer() {
    return (
<Container id="contact">
  <Row>
    <Col lg="12" className="text-center text-white pb-5" >
       <div>
       <hr className="divider my-5"/>
        <img src={social} className="icon_ mb-5" alt="social" />
        <h3 className="mb-5">SOCIAL</h3>
        <a href="http://twitter.com">
          <img src={twitter} className="icons p-2 m-2" alt="twitter"/>
        </a>
        <a href="http://facebook.com">
          <img src={facebook} className="icons p-2 m-2" alt="faebook" />
        </a>
        <a href="http://github.com">
          <img src={github} className="icons p-2 m-2" alt="github" />
        </a>
        <a href="http://linkedin.com">
          <img src={linkedin} className="icons p-2 m-2" alt="linkedin" />
        </a>
        <a href="http://medium.com">
          <img src={medium} className="icons p-2 m-2" alt="github" />
        </a>
      </div>
    </Col>
  </Row>
</Container>
    )
}
export default Footer;
