import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGooglePlusSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return <>
  <div className="footerContainer  pt-5">
      <Row className='gap-5 d-flex justify-content-center'>
          <Col xs={10} md={3} className='about'>
            <h4>About Us</h4>
            <p>
                At the end of the day, going forward, a new normal that has evolved generation
                end of the day, going forward, a new normal that 
            </p>
            {/* <div>
                <AiFillFacebook style={{fontSize:'32px', color:'rgb(165 165 163)'}} />
                <AiFillTwitterSquare style={{fontSize:'32px', color:'rgb(165 165 163)'}} />
                <AiFillGooglePlusSquare style={{fontSize:'32px', color:'rgb(165 165 163)'}} />
                <AiFillLinkedin style={{fontSize:'32px', color:'rgb(165 165 163)'}} />
                <AiOutlineInstagram style={{fontSize:'32px', color:'rgb(165 165 163)'}} />
            </div> */}
          </Col>
          <Col xs={10} md={3} className='contact'>
            <h4>Contact Us</h4>
            <p> 10, Mc Donald Avenue, Sunset Park, Newyork </p>
            <p> +99 999 9999</p>
            <p>info@yourdomain.com </p>
          </Col>
          <Col xs={10} md={3} className='newsletter'>
            <h4>Newsletter</h4>
            <p>
            Stay Updated with our latest news. We promise not to spam
            </p>
            <input type="text" placeholder='Your Email' />
          </Col>
      </Row>
      <Row>
        
      </Row>
      
  </div>
    <Row className='copyright'>
          <Col xs={12}>
          <div style={{display:'flex', justifyContent:'center'}}>
          Copyright ©. All Rights Reserved
          </div>
          </Col>
      </Row>
  </>
}
