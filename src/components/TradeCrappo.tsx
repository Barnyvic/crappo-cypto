import React from 'react' 
import BitconImg from '../images/bitcon2.png'
import litecoinIMG from '../images/litecoin.png'
import ethereumImg from '../images/ethereum.png'
import {BsChevronRight} from 'react-icons/bs'

function TradeCrappo() {

    

return (
    <section className="Tradesection">
        <div className="container pb-5">
            <div className="TradeContents p-2">
                <h1 className="text-center pb-5">Trade securely and market the high growth cryptocurrencies.</h1>
                <div className="Tradecontent2">
                    <div className="coin" >{
                        data2.map((items)=>(
                            <div className="p-4" data-aos="zoom-in-down"  data-aos-easing="linear" data-aos-duration="3000" key={items.id}>
                                <img src={items.image}  className='pt-5 pb-5' alt="CoinImage" />
                                <p className="mb-2">{items.title} <span>{items.abr}</span></p>
                                <p className="fs-5 mb-4 coincointent">{items.content}</p>
                                <button> <BsChevronRight className='coin-icon'/></button>
                            </div>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    </section>
)
}

const data2 = [
    {
        id:1,
        title: 'Bitcion',
        content: 'Digital currency in which a record of transactions is maintained.',
        image:BitconImg,
        icon: <BsChevronRight className='coin-icon'/>,
        abr:'BTC'
    },
    { 
         id:2,
        title: 'Ethereum',
        content:'Blockchain technology to create and run decentralized digital applications.',
        image:ethereumImg,
        icon: <BsChevronRight className='coin-icon'/>,
         abr:'ETH'
    },
    { 
        id:3,
        title: 'Litecoin',
        content:'Cryptocurrency that enables instant payments to anyone in the world.',
        image:litecoinIMG,
        icon: <BsChevronRight className='coin-icon'/>,
         abr:'LTC'
    }
]

export default TradeCrappo