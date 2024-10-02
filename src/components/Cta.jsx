import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ctaImg from '../assets/img/cta-img.png'
import logo from '../assets/img/cta-logo.png'
import style from '../assets/img/cta-style.png'

export default function Cta() {
  return (
    <div className='cta'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="cta-wrap d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-lg-between">
              <div className="img">
                <img src={ctaImg} alt=""/>
              </div>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="content text-center">
                <h3>LAUNCH ON SUNPUMP</h3>
                <p>$SUNPIG is powered by Justin Sun Tron!</p>
                <a href="#" className="btn">Buy Now</a>
              </div>
              <img src={style} alt="" className="style" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
