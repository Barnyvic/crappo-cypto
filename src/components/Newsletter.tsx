import React from 'react'

function Newsletter() {
  return (
    <section className='Newsletter-container'>
        <div className="p-5 News-content">
            <div className="stratMining">
                <p className="h2">Start mining now</p>
                <p className='fs-5 join'>Join now with CRAPPO to get the latest news and start mining now</p>
            </div>
            <input type="text" placeholder='Enter your email' />
            <button className="btnN">Subscribe</button>
        </div>
    </section>
  )
}

export default Newsletter