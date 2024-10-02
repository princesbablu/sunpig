import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../assets/img/about-img.png'
import style2 from '../assets/img/about-style-1.png'

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="about-wrap d-flex align-items-center justify-content-center">
              <div className="img">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={style2} alt="" className="style style-1" />
    </div>
  )
}
