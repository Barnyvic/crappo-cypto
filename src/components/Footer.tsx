import React from 'react'
import Footerlogo from "../images/logo.svg"
import Paybit from "../images/bitcoin.png"
import Paymaster from "../images/mastercard.png"
import Payvisa from "../images/visa.png"
import social1 from "../images/facebook.png"
import social2 from "../images/twitter.png"
import social3 from "../images/instagram.png"
import social4 from "../images/youtube.png"
import social5 from "../images/linkedin.png"

function Footer() {
  return (
    <section className="footer-section">
      <div className="container p-2 mt-5">
        <div className="footerContent mb-5">
          <div className="footerImg">
            <a href="/"><img src={Footerlogo} alt="footer logo" /></a>
          </div>
          <div className="Fcontent1">
            <ul>
              <li className="bold h3 mb-4">Quick Link</li>
              <li className="fs-5 mb-2"><a href="/">Home</a></li>
              <li className="fs-5 mb-2"><a href="/">Products</a></li>
              <li className="fs-5 mb-2"><a href="/">About</a></li>
              <li className="fs-5 mb-2"><a href="/">Features</a></li>
              <li className="fs-5 mb-2"><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="Fcontent1">
            <ul>
              <li className="bold h3 mb-4">Resources</li>
              <li className="fs-5 mb-2"><a href="/">Download Whitepapper</a></li>
              <li className="fs-5 mb-2"><a href="/">Smart Token</a></li>
              <li className="fs-5 mb-2"><a href="/">Blockchain Explorer</a></li>
              <li className="fs-5 mb-2"><a href="/">Crypto API</a></li>
              <li className="fs-5 mb-2"><a href="/">Interest</a></li>
            </ul>
          </div>
          <div className="Fcontent3">
            <p className="h2 mb-5">
              We accept following payment systems
            </p>
            <div className="Payment img-fluid">
             <img src={Payvisa} className="img-fluid" alt="Visa card" />
             <img src={Paymaster} className="img-fluid" alt="Master card" />
             <img src={Paybit} className="img-fluid" alt="Bitcoins card" />
            </div>
          </div>
        </div>
        <div className="FooterContent2 p-1">
          <p className='copywrite'>&copy;{new Date().getFullYear()}. All rights reserved</p>
          {/* <div className="socials img-fluid">
            <img className="img-fluid" src={social1} alt="facebook" />
            <img className="img-fluid" src={social3} alt="instagram" />
            <img className="img-fluid" src={social4} alt="twitter" />
            <img className="img-fluid" src={social2} alt="youtube" />
            <img className="img-fluid" src={social5} alt="linkedin" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Footer