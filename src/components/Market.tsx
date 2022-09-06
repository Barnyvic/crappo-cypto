import React from 'react'
import investImg from "../images/InvestImg.png"
import statImg from "../images/Statistic.png"
import TableImg from "../images/Table.png"
import Newsletter from './Newsletter'

function Market() {
  return (
        <section className="market-section">
            <div>
                <div className="container Market_container p-3">
                    <h1  className="text-center p-3">Market sentiments, portfolio, and run the infrastructure of your choice</h1>
                    <div className="investContent">
                        <div  data-aos="fade-right" data-aos-offset="1000"data-aos-easing="ease-in-sine" className="investSmart">
                            <p className="h1 text-uppercase mb-3">invest Smart</p>
                            <p className='info mb-4'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                            <button className="btnR">Learn More</button>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="investIMg">
                            <img className="img-fluid" src={investImg}  alt="Chat" />
                        </div>
                    </div>
                </div>
                <div className="Statdiv py-5">
                    <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="img-fluid" src={statImg}  alt="Chat" />
                    <div className="container stat">
                            <p className="h1 text-uppercase mb-3">Detailed Statistics</p>
                            <p className='statext mb-4'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
                            <button className="btnR">Learn More</button> 
                    </div>
                </div>
                <div className="container Market_container p-5">
                    <div className="investContent">
                        <div className="investSmart">
                            <p className="h1 text-uppercase mb-3 grow">Grow your profit and track your investments</p>
                            <p className='info mb-4'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                            <button className="btnR">Learn More</button>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="investIMg">
                            <img className="img-fluid" src={TableImg}  alt="Chat" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter p-2 pb-5">
                 <div className="container">
                <Newsletter/>
             </div>
            </div>
        </section>
  )
}

export default Market