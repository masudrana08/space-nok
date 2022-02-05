import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import './faq.css'

export default function Faq() {
  return <div className='faqContainer'>
       <Row className='title'>
          <Col>
            <h3>FAQ</h3>
          </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
          <Col xs={8}>
          <Accordion >
            <Accordion.Item eventKey="0" className='accordion'>
                <Accordion.Header >What is Nft?</Accordion.Header>
                <Accordion.Body className="faq-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='accordion'>
                <Accordion.Header>Why Nft is valuable?</Accordion.Header>
                <Accordion.Body className="faq-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='accordion'>
                <Accordion.Header>Future of Nft?</Accordion.Header>
                <Accordion.Body className="faq-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </Col>
      </Row>
  </div>;
}
