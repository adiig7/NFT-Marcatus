import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

const NFTCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { title, id, currentBid, creatorImg, nftImg, imgUrl, creator } = props.item;
  return (
      <div className="single__nft__card">
          <div className="nft__img">
              <img src={imgUrl} alt="" className='w-100' />
          </div>

          <div className="nft__content">
              <h5 className='nft__title'><Link to={`/market/${id}`}></Link>{title}</h5>
              <div className="creator__info-wrapper gap-3 d-flex">
                  <div className="creator__img">
                      <img src={creatorImg} alt="" className='w-100' />
                  </div>
                  <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                      <div>
                          <h6>Created By</h6>
                          <p>{creator}</p>
                      </div>

                      <div>
                          <h6>Current Bid</h6>
                          <p>{currentBid}</p>
                      </div>
                  </div>
              </div>

              <div className='d-flex align-items-center justify-content-between'>
                  <button className="bid__btn d-flex align-items-center gap-2" onClick={() => setShowModal(true)}><i class="ri-shopping-bag-line"></i>Place Bid</button>

                  {showModal && <Modal setShowModal={setShowModal} />}
                  <span className='history__link'>
                      <Link to='#'>View History</Link>
                  </span>
              </div>
          </div>
      </div>
  )
}

export default NFTCard