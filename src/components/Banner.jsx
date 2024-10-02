import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Token from "./Token"
import Social from "./Social"
import bannerImg from "../assets/img/banner-img.png"
import VanillaTilt from 'vanilla-tilt'
import style2 from '../assets/img/about-style-2.png'
import like from '../assets/img/like.png'



export default function Banner() {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      perspective: 1400,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 1200,
      glare: true,
      "max-glare": 0.2,
      scale: 1.04
    });

    return () => tiltRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div className='banner position-relative z-1'>
      <Container>
        <Row className='justify-content-center position-relative '>
          <Col xl="8" className=''>
            <div className="banner-wrap text-center">
              <div className="banner-content">
                <h1>$Sunpig</h1>
              </div>
              <div className="img" ref={tiltRef}>
                <img src={bannerImg} alt="" />
              </div>
              <a href="#" className="btn">Buy now</a>
              <div className="token-wrap text-start">
                <Token />
              </div>
              <div className="banner-social d-flex justify-content-center d-md-block gap-3 mt-4 mt-md-0">
                <Social className="flex-md-column p-2 p-xl-3" />
                <div className="like">
                  <img src={like} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={style2} alt="" className="style style-1" />
    </div>
  )
}
