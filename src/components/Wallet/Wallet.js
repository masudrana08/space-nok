import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './wallet.css'
import Wallet2 from '../../images/wallet2.png'
import Smart from '../../images/smart-plat.png'
import Nft from '../../images/nft-plat.png'
import Ether from '../../images/ether.png'
import Platform from '../../images/platform.png'


export default function Wallet() {
  return <div className="walletContainer">
      <Row>
          <Col xs={8} md='5' className='m-auto text-center mt-5 pt-5'>
            <h5 className="gradient-text">Connect Your Wallet</h5>
            <h2 className='mt-3 mb-3'>Connect Wallet</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </Col>
      </Row>
      <Row className="mt-5 d-flex justify-content-center gap-5">
          <Col xs={8} md={4} className="wall-card">
          <div className="header">
            <img style={{width: '100px'}} src={Wallet2} alt="" />
              <h4 className='mt-3 mb-3'>
                  Start collecting, Buying and Selling NFTs with simple and easy steps.
              </h4>
          </div>
           <div className="wall-bottom">
            <div>
                  <img src={Smart} alt="" />
                  <p>Included NFT Minting with IPFS</p>
              </div>
              <div>
                  <img src={Nft} alt="" />
                  <p>Powerful Samart Contract with Solidity</p>
              </div>
              <div>
                  <img style={{height:'34px'}} src={Ether} alt="" />
                  <p>Buy and Sell NFTs With ETH</p>
              </div>
           </div>
          </Col>
          <Col xs={8} md={6} className="">
            <img style={{width:'100%'}} src={Platform} alt="" />
          </Col>
      </Row>
  </div>;
}
