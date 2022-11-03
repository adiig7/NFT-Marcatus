import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/ui/Common-section/CommonSection'
import NFTCard from '../components/ui/Nft-card/NFTCard'
import img from './../images/images/img-01.jpg'
import avatar from '../images/images/ava-01.png'
import './../styles/create-item.css'
const item = {
  id: "03",
  title: "Civilian",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  imgUrl: img,
  creator: "Trista Francis",
  creatorImg: avatar,
  currentBid: 6.89,
}
const Create = () => {
  return (
    <>
      <CommonSection title="Create Item" />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <h5 className='mb-4 text-light'>Preview Item</h5>
              <NFTCard item={item} />
            </Col>

            <Col lg='9' md='8' sm='6'>
              <div className="create__item">
                <form>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" placeholder='Browse' className='upload__input'/>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder='Enter Price for one item'/>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder='Enter Minimum Bid Amount'/>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                  <div className="form__input w-50">
                    <label htmlFor="">Starting Date</label>
                    <input type="date" />
                  </div>

                  <div className="form__input w-50">
                    <label htmlFor="">Expiration Date</label>
                    <input type="date"/>
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter title'/>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description' className='w-100'></textarea>
                  </div>
                </form>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Create