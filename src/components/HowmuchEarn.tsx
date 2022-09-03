import React from 'react'
import { Calculate } from './Calculate'

const HowmuchEarn = () => {
  return (
    <section>
            <div className="earn  text-center p-2 pt-5">
              <h2 className="h1 fs-1 mb-2">Check how much you can earn</h2>
              <p >Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <Calculate/>
    </section>
  )
}

export default HowmuchEarn