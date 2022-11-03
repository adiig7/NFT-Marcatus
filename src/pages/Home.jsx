import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/live-auction/LiveAuction'
import SellerSection from '../components/ui/seller-section/SellerSection'
import StepSection from '../components/ui/Step-section/StepSection'
import Trending from '../components/ui/trending-section/Trending'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  )
}

export default Home