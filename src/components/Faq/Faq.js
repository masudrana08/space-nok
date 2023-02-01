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
                NFT stands for Non-Fungible Token, which is a unique and indivisible digital asset stored on a blockchain.<br/><br/>
                NFTs are used to represent ownership of digital assets such as images, videos, music, and even tweets, providing creators with a new way to monetize their content and giving buyers a way to own and prove the authenticity of their digital purchases. <br/><br/>
                NFTs are different from traditional cryptocurrencies because they are not interchangeable and have different values, making each NFT unique and valuable in its own right.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='accordion'>
                <Accordion.Header>Why Nft is valuable?</Accordion.Header>
                <Accordion.Body className="faq-text">
                NFTs can be valuable because they offer several advantages over traditional ownership models for digital assets. Some of the reasons why NFTs are valuable include: <br/><br/>

                Scarcity: NFTs can be limited in number, creating scarcity and making each NFT unique. This makes them more valuable than a digital asset that can be infinitely reproduced.<br/><br/>

                Ownership: NFTs provide proof of ownership and authenticity for digital assets, which can be especially valuable for rare or one-of-a-kind items.<br/><br/>

                Immutable: NFTs are stored on a blockchain, making them tamper-proof and ensuring that the ownership and authenticity of an NFT can never be changed or disputed.<br/><br/>

                Liquidity: NFTs can be easily bought, sold, and traded on various marketplaces, providing creators and owners with a new source of revenue and making it easier for collectors and investors to buy and sell digital assets.<br/><br/>

                In summary, NFTs can be valuable because they offer a way to assign ownership, scarcity, and liquidity to digital assets, creating new opportunities for creators, collectors, and investors.<br/><br/>
                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='accordion'>
                <Accordion.Header>Future of Nft?</Accordion.Header>
                <Accordion.Body className="faq-text">
                The future of NFTs is still uncertain and subject to change, but they have the potential to revolutionize the way we own, sell, and trade digital assets. Here are a few ways that NFTs could shape the future: <br /><br />

                Art and Collectibles: NFTs could become a new standard for buying, selling, and trading rare digital art and collectibles, allowing artists and collectors to monetize their work and giving buyers a way to own unique and valuable digital assets.<br /><br />

                Gaming: NFTs could be used to represent unique in-game items, such as weapons, skins, and virtual real estate, providing gamers with a new way to monetize their in-game assets and giving players a new way to prove ownership and trade valuable virtual items.<br /><br />

                Digital Identity: NFTs could be used to represent personal information, such as a passport, driving license, or other official documents, providing a secure and decentralized way to prove identity and ownership of personal data.<br /><br />

                Supply Chain Management: NFTs could be used to track and verify the ownership and authenticity of physical assets, such as luxury goods, precious metals, and even food, providing a transparent and secure way to manage supply chains.<br /><br />

                Overall, the future of NFTs is still uncertain, but they have the potential to disrupt and transform multiple industries by providing a new way to assign ownership and value to digital assets.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
          </Col>
      </Row>
  </div>;
}
