import React from 'react'

const HowmuchEarn = () => {
  return (
    <section>
            <div className="earn  text-center p-2 pt-5">
              <h2 className="h1 fs-1 mb-2">Check how much you can earn</h2>
              <p >Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className="calculate" data-aos="zoom-in-up" data-aos-duration="2000">
               <div className="Options">
                <input type="text" placeholder='Enter your hash rate' />
                <select>
                    <option value="TH/s">TH/s</option>
                    <option value="H/s">H/s</option>
                    <option value="KH/s">KH/s</option>
                    <option value="MH/s">MH/s</option>
                    <option value="GH/s">GH/s</option>
                </select>
                <button type="submit">Calculate</button>
               </div>
               <p className="esx">ESTIMATED 24 HOUR REVENUE:</p>
               <p className="numbers h1">0.055 130 59 ETH <span>($1275)</span></p>
               <p className="mining">Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
            {/* <div className="trade">
                <h1>come trade with me </h1>
            </div> */}
    </section>
  )
}

export default HowmuchEarn