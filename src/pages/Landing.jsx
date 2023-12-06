import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from './Img';
import Text from './Text';
function Landing() {
  return (
    <>
       <Container>
      <Row>
        <Col> <Img/> </Col>
        <Col> <Text/> </Col>
      </Row>
    </Container>
    </>
  )
}

export default Landing
