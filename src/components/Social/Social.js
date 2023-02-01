import React from "react";
import { Col, Row } from "react-bootstrap";
import "./social.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Social() {
  return (
    <div className="socialContainer">
      <Row>
        <Col className="title">
          <h3>Social Networks</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center ml-0">
        <Col xs={10} md={8} className="socialBtn">
          <div className="singleBtn">
            <a target='_blank' href="https://facebook.com">
              <div className="svg">
                <AiFillFacebook />
              </div>
              <p>Facebook</p>
            </a>
          </div>
          <div className="singleBtn">
            <a target='_blank' href="https://twitter.com">
              <div className="svg">
                <AiFillTwitterSquare />
              </div>

              <p>Twitter</p>
            </a>
          </div>
          
          <div className="singleBtn">
            <a target='_blank' href="https://linkedin.com">
              <div className="svg">
                <AiFillLinkedin />
              </div>
              <p>Linkedin</p>
            </a>
          </div>
          
        </Col>
      </Row>
    </div>
  );
}
