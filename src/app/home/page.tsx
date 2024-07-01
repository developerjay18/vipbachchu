import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ProductCard from '../components/layout/Prodctcard'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page
        <Header />
        <br />
        {/* <ProductCard /> */}
      <br />
      <br /><br /><br />
      <Footer />
    </div>
  )
}

export default page