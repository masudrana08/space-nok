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
  const teamMembers = [
    {
      name: 'Emily',
      title: 'Motivation-Self Starter',
      img: P1
    },
    {
      name: 'Luna',
      title: 'Professional UI Designer',
      img: P2
    },
    {
      name: 'Jamie',
      title: 'Fullstack Web Developer',
      img: P3
    },
    {
      name: 'Sophia',
      title: 'Backend Developer',
      img: P4
    },
    {
      name: 'Emma',
      title: 'UI / UX Designer',
      img: P5
    },
    {
      name: 'Olivia',
      title: 'Web Analyst',
      img: P6
    },
    
  ]
  return <div className='teamContainer'>
      <Row className='title'>
          <Col>
            <h3>Meet Our Team</h3>
          </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
          {
            teamMembers.map((member, i)=>{
              return (
                <Col key={i} xs={5} md={3} className='teamCard'>
                <img src={member.img} alt={member.name} />
                <h5>{member.name}</h5>
                <p>{member.title}</p>
                {/* <div>
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
                </div> */}
              </Col>
              )
            })
          }
          
      </Row>
  </div>;
}
