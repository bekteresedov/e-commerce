import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'
import ProductList from '../components/productList/ProductList'

function HomePages() {
  return (
    <div className='container'>
      <Header/>
      <Navigation/>
    <div className='container mt-2'>
      <ProductList/>
    </div>
    <Footer/>
    </div>
  )
}

export default HomePages