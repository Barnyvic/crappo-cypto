import React from 'react'
import contact from "../images/contact.png"
import graph from "../images/graph.png"
import world from "../images/world.png"
import whyimg from "../images/why-img.png"

function Whycrappo() {
  return (
    <section className='Whycrappo-Maincontainer'>
        <div className="container">
            <div className="content1 p-3">{
                    data1.map((items)=>(
                        <div className="contact-item" data-aos="fade-up" data-aos-duration="3000" key={items.id}>
                            <img className='img-fluid' src={items.image} alt="" />
                            <div>
                                <h2>{items.name}</h2>
                                <p>{items.paga}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="content2 p-3">
               <div>
                <img src={whyimg} data-aos="zoom-in" data-aos-duration="3000" className='img-fluid'alt="crptoImg" />
               </div>
               <div className="content2_contents" data-aos-duration="2000" data-aos="fade-up">
                <h1>Why you should choose CRAPPO</h1>
                <p>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                <a href="/">Learn More</a>
               </div>
            </div>
        </div>
    </section>
  )
}

const data1 = [
    {
        id: 1,
        image: contact,
        name:"$30B",
        paga:"Digital Currency Exchanged"
    },
    {   id:2,
        image:graph,
        name:"10M+",
        paga:"Trusted Wallets Investor"
    },
    {
        id:3,
        image:world,
        name:"195",
        paga:"Countries Supported"
    },
]

export default Whycrappo