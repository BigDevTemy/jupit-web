import '../../assets/css/otc/otc.css'
import Trainer from '../../assets/images/trainer.jpg'
import Circle from '../../assets/images/service-image-2.png'
import feature6 from '../../assets/images/feature-6.png'
import feature2 from '../../assets/images/feature-2.png'
import feature7 from '../../assets/images/feature-7.png'
import feature3 from '../../assets/images/feature-3.png'
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
                                <div><img src={feature3}/></div>
                                <div>Block Trades</div>
                                <div>
                                    a minimum amount of 5,000 USDT or equivalent.
                                </div>
                                    
                        </div>

                        <div className='moreFacts'>
                            <div><img src={feature7}/></div>
                            <div>Competitive Rate</div>
                            <div>
                                Our trading desk provides you with a custom quote instantly and securely.
                            </div>
                                
                        </div>

                        <div className='moreFacts'>
                            <div><img src={feature2}/></div>
                            <div>Fast Settlement</div>
                            <div>
                            Execute your trades in seconds without the involvement of any third-party and get settlement for your trade almost instantaneous.
                            </div>
                                
                        </div>

                        <div className='moreFacts'>
                            <div><img src={feature6}/></div>
                            <div>24/7 Trade</div>
                            <div>
                             Our team is well positioned to manage your trade execution at any time of the day.
                            </div>
                                
                        </div>
 
                    </div>
                    <div className='inadditonal'>
                        <div> In addition, the Jupit OTC desk support settlement in more than one fiat currency and digital assets currencies:</div>
                        <div className='checks'>
                                <div>
                                    <div>Digital assets:</div>
                                    <div>Bitcoin (BTC)</div>
                                    <div>Etherum (ETH)</div>
                                    <div>Tether (USDT)</div>
                                    <div>USD Coin (USDC)</div>
                                    <div>Binance (BUSD)</div>
                                    <div>Binance (BNB)</div>
                                    <div>And more..</div>
                                </div>
                                <div>
                                     <div>Fiat currencies:</div>
                                     <div>Naira (NGN)</div>
                                     <div>US Dollars (USD)</div>
                                     <div>US Dollars (USD)</div>
                                     <div>Euro (EUR)</div>
                                     <div>British Pounds (GBP)</div>
                                </div>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Index;