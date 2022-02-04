import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './platform.css'
import Wallet from '../../images/wallet.png'
import NFT from '../../images/nft.png'
import NftItem from '../../images/listnft.png'
import Ether from '../../images/ether.png'

export default function Platform() {
     return  <div className='platformContainer'>
       <Row >
        <Col xs={10} md='5' className="m-auto pt-5 pb-5 mb-5 mt-5" >
          <h5 className="gradient-text">How Platform Works</h5>
          <h2 className='mt-3 mb-3'>Start With Easy Steps</h2>
          <p className='p-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!
          </p>
        </Col>
    </Row>
    <Row className='cardContainer' >
      <Col md={2} xs={8} className="card">
        <img src={Wallet} alt="" />
        <h5>Set up your wallet</h5>
        <p>
        it is required to install Metamask wallet as a browser extension, Then you should configure Metamask to connect to required ETH Network.
        </p>
      </Col>
      <Col md={2} xs={8} className="card">
        <img src={NFT} alt="" />
        <h5>Mint Your NFT</h5>
        <p>
        Mint your NFT assets with included IPFS with easiest way, just upload and fill your nft info and click the mint button, and Happpy Minting
        </p>
      </Col>
      <Col md={2} xs={8} className="card">
        <img src={NftItem} alt="" />
        <h5>List Your NFT Item</h5>
        <p>
        once you click the mint button the metamask wallet will pop up to confirm the minting function, just confirm and your nft will be listed
        </p>
      </Col>
      <Col md={2} xs={8} className="card">
        <img src={Ether} alt="" />
        <h5>Buy and Sell NFTs</h5>
        <p>
        once the item is listed, congrats! Now you are ready to sell and buy NFTs, You just need to specify your NFT Price and click offer
        </p>
      </Col>
    </Row>
     </div>

}