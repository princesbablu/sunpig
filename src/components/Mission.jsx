import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import missionImg from '../assets/img/mission-img.png'
import roket from '../assets/img/roket.png'

export default function Mission() {
  return (
    <div className='mission'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="title text-center">
              <h1>our Mission</h1>
            </div>
          </Col>
          <Col xs="12">
            <div className="mission-wrap d-flex align-items-center justify-content-center">
              <div className="img d-flex justify-content-center">
                <img src={missionImg} alt="" />
              </div>
              <div className="roket">
                <div className="animation-rocket">
                  <img src={roket} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
