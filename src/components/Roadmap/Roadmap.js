import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './roadmap.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Roadmap() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return <div className='roadmapContainer '>
      <Row className='text-center'>
          <Col  className='title'>
            <h3>Roadmap</h3>
            <h3>Launch Timeline</h3>
          </Col>
      </Row>
      <Row>
          <Col>
          <Carousel responsive={responsive} className='carousel'>
            <div className='roadmap-card'>
                <h4>March and Live event</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate asperiores vero totam adipis</p>
            </div>
            <div className='roadmap-card'>
                <h4>The Crypto Bears</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate asperiores vero totam adipis</p>
            </div>
            <div className='roadmap-card'>
                <h4>Metaverse</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate asperiores vero totam adipis</p>
            </div>
            <div className='roadmap-card'>
                <h4>Announcement</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate asperiores vero totam adipis</p>
            </div>
        </Carousel>
          </Col>
      </Row>
  </div>
}
