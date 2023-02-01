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
            Discover the future of ownership with NFTs. Buy and sell unique digital assets with confidence on our marketplace. Own a piece of digital history today!
            </p>
            <button className="gradient-btn">Get Started</button>
            <button className="gradient-btn">Learn more</button>

          </div>
            </Col>
      </div>
  </Row>;
}
