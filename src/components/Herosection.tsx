import React from 'react'
import Navbar from './Navbar'
import heroBgimg from '../images/hero-img.png'

function Herosection() {
  return (
    <section>
        <Navbar/>
        <section className="Hero-Maincontainer">
          <div className="Hero-Container container">
            <div className="hero-content-Container">
            <div className="blackfriday">
              <span className="save">75% Save</span> <span className="black">For the Black Friday weekend</span>
            </div>
            <div className="content">
              <h1>
                Fastest & secure platform to invest in crypto
              </h1>
              <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
              <div className="forFree">
                <span>Try for Free</span>
              </div>
            </div>
          </div>
          <div className="hero-img-container">
            <img src={heroBgimg} className="img-fluid" alt="Bitcionimage" />
          </div>
          </div>
        </section>
    </section>
  )
}

export default Herosection