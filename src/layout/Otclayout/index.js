import '../../assets/css/otc/otc.css'
import Trainer from '../../assets/images/trainer.jpg'
import Circle from '../../assets/images/service-image-2.png'
import logo1 from '../../assets/images/x.png'
const Index = ()=>{
    return (
        <div>
            <div className="whatis">
                <div>
                        <div className='jupitTitle'>What is Jupit OTC Desk?</div>
                        <div className='jupittext'>
                            Our Over-The-Counter (OTC) desk is by nature a secure and bespoke service that allows institutions, high net-worth individuals and high-volume traders to trade off the Jupit App with access to instant trade execution and settlement services that are discreet, secure and ultra-competitive.
                        </div>
                </div>
                <div>
                    <img src={Circle}/>
                </div>

               
            </div>
            <div className='jupitBuilt'>
                    <div className='largeOrders'>
                        Jupit OTC - Built for large orders
                    </div>
                    <div className='ourOTCtitle'>
                        Our OTC Service offers more than secure and discreet transactions and deep liquidity.
                    </div>
                    <div className='tradeType'>
                        <div className='moreFacts'>
                            <div><img src={logo1}/></div>
                            <div>Block Trades</div>
                            <div>
                                a minimum amount of 5,000 USDT or equivalent.
                            </div>
                            
                            
                        </div>
                        <div>Competitive Rate</div>
                        <div>Fast Settlement</div>
                        <div>24/7 Trade</div>
                    </div>
            </div>
            
        </div>
    )
}

export default Index;