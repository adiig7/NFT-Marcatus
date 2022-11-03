import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './live-auction.css'
import NFTCard from '../Nft-card/NFTCard'
import {NFT__DATA} from './../../../data/data.js'

import img01 from '../../../images/images/img-01.jpg'
import ava01 from '../../../images/images/ava-01.png'
const LiveAuction = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <div className="live__auction__top d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>Explore More</Link></span>
                    </div>
                </Col>
                {NFT__DATA.slice(0, 4).map((item) => (
                    <Col lg='3'>
                        <NFTCard key={item.id} item={item} />
                    </Col>
                        ))
                }

            </Row>
      </Container>
  </section>
}

export default LiveAuction