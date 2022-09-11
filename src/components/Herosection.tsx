import React from 'react'
import Navbar from './Navbar'
import heroBgimg from '../images/hero-img.png'
import heroRibbon1 from "../images/hero-ribbon-1.png"
import heroRibbon2 from "../images/hero-ribbon-2.png"
import {BsFillArrowRightCircleFill} from "react-icons/bs"


function Herosection() {
  return (
    <section>
        <Navbar/>
        <section className="Hero-Maincontainer">
          <div className="Hero-Container container">
            <div className="hero-content-Container container_horizontal p-2">
            <div className="blackfriday">
              <span className="save"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">75% Save</span> <span className="black">For the Black Friday weekend</span>
            </div>
            <div className="content p-2">
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Fastest & secure platform to invest in crypto
              </h1>
              <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
              <div className="forFree">
                <span>Try for Free <BsFillArrowRightCircleFill data-aos="fade-right"data-aos-offset="300"data-aos-easing="ease-in-sine" className='arrow_right'/></span> 
              </div>
            </div>
          </div>
          <div className="hero-img-container p-3" data-aos="zoom-in" data-aos-duration="3000">
            <img src={heroBgimg} className="img-fluid" alt="Bitcionimage" />
            <img src={heroRibbon1} className="img-fluid ribbon1" alt="Black-line" />
            <img src={heroRibbon2} className="img-fluid ribbon2" alt="Black-line" />
          </div>
          </div>
        </section>
    </section>
  )
}

export default Herosection