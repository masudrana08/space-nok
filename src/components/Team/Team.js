import React from 'react';
import './team.css'
import { Col, Row } from 'react-bootstrap';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGooglePlusSquare } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

import P1 from '../../images/person/p1.jpg'
import P2 from '../../images/person/p2.jpg'
import P3 from '../../images/person/p3.jpg'
import P4 from '../../images/person/p4.jpg'
import P5 from '../../images/person/p5.jpg'
import P6 from '../../images/person/p6.jpg'

export default function Team() {
  return <div className='teamContainer'>
      <Row className='title'>
          <Col>
            <h3>Meet Our Team</h3>
          </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
          <Col md={3} xs={8} className='teamCard'>
            <img src={P1} alt="" />
            <h5>Mandelief</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
          <Col md={3} xs={8} className="teamCard">
            <img src={P2} alt="" />
            <h5>Serves</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
          <Col md={3} xs={8} className='teamCard'>
            <img src={P3} alt="" />
            <h5>Lara</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
          <Col md={3} xs={8} className='teamCard'>
            <img src={P4} alt="" />
            <h5>Weldel</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
          <Col md={3} xs={8} className='teamCard'>
            <img src={P5} alt="" />
            <h5>Ulke</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
          <Col md={3} xs={8} className='teamCard'>
            <img src={P6} alt="" />
            <h5>Locas</h5>
            <p>I am a full stack developer</p>
            <div>
                <a href="#">
                <AiFillFacebook />
                </a>
                <a href="#">
                <AiFillGooglePlusSquare />
                </a>
                <a href="#">
                <AiFillTwitterSquare />
                </a>
                <a href="#">
                <AiFillLinkedin />
                </a>
                <a href="#">
                <AiOutlineInstagram />
                </a>
            </div>
          </Col>
      </Row>
  </div>;
}
