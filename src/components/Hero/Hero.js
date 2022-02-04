import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './hero.css'
export default function Hero() {
  return <Row>
      <div  className='heroContainer'>
          <div className='background'></div>
            <Col md={5} className=' m-5'>
            <div className='textContainer'>
            <h4 className="gradient-text">
                Full NFT Marketplace with Smart Contract
            </h4>
            <h1>
                Discover, Buy and Sell NFT Assets The Easy Way
            </h1>
            <p>
                Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem .
            </p>
            <button className="gradient-btn">Get Started</button>
            <button className="gradient-btn">Learn more</button>

          </div>
            </Col>
      </div>
  </Row>;
}
