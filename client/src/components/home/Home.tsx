import React from 'react'
import TopBanners from './TopBanners'
import Features from './Features'
import MiddleBanner from './MiddleBanner'
import Category from './Category'



export default function Home() {
  return (
    <div>
      <TopBanners/>
      <br /><br />
      <Category/>
      <MiddleBanner/>
      <Features/>
    </div>
  )
}
