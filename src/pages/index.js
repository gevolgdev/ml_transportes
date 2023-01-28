import React from "react"
import { Helmet } from 'react-helmet'
//components
import Header from '../components/Header'
import Footer from '../components/Footer'
// sections
import { Intro, Confidence, Infos } from '../containers'
//style
import img from '../assets/images/imgHome.png'
import favicon from '../assets/images/favicon.png'

const IndexPage = () => {
  return (
    <>
    <Helmet>
      <title>ML Transportes</title>
      <link rel="icon" type="image/png" href={favicon}></link>
    </Helmet>

      <img src={img} className='w-full absolute top-0' alt=''/>
      <div className="px-72 py-8 max-2xl:px-44 max-sm:px-6 mx-auto relative">
        <Header/>
        <Intro/>
        <Confidence/>
        <Infos/>
      </div>
      <Footer/>
    </>
  )
}

export default IndexPage
