import React from 'react'
import './Home.css'
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/navbar/header/Header';
import Featured from '../../Components/navbar/featured/Featured';
import PropertyList from '../../Components/propertyList/PropertyList';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer"></div>
      <Featured/>
      <h1 className="homeTitle">Browser by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">homes guests love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  )
}
