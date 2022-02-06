import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png'
import './header.css'

export default function Header() {
  return <Row>
      <Col xs={12} className="headerContainer">
        {/* <img src={Logo} alt="" /> */}
        <h1 className='logo'>SpaceNok</h1>
      </Col>
  </Row>;
}
