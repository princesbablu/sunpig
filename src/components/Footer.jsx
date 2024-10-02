import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logo-footer.png'
import { Link } from 'react-scroll'
import Social from './Social'
import footerStyle from '../assets/img/footer-style.png'

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-wrap flex-wrap flex-md-nowrap flex-column flex-md-row d-flex align-items-center justify-content-between gap-3">
              <Link className="logo" to="banner" spy={true} smooth={true} duration={600} offset={0}>
                <img src={logo} alt="site-logo" />
              </Link>
              <p>©2024 BY SUNPIG .ALL RIGHTS RESERVED!</p>
              <div className="footer-right">
                <h4 className="mb-3 text-uppercase text-center text-md-start">FOLLOW US</h4>
                <Social />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={footerStyle} alt="" className="style" />
    </div>
  )
}
