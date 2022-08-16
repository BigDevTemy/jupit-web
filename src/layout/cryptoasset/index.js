
import '../../assets/css/crypto-asset/crypto-asset.css'
import buynsell from '../../assets/images/banner-03.png'
const Index = ()=>{
    return (
        <div className="crypto-asset">
            <div className='buynsell'>
                    <div>
                        <div className='tradewithjupitTitle'>Buy and Sell Crypto in minutes.</div>
                        <div className='tradewithjupit'>
                            Trade with Jupit and experience one of the most convenient, fastest and secure way to sell your crypto. It takes just 120 seconds!
                        </div>
                        <div>
                            <button className='btn btn-primary btn-lg'>Get Started</button>
                        </div>

                    </div>
                    <div>
                        <img src={buynsell}/>
                    </div>
            </div>
            <div className='mostused'>
                    <div className='mosttrusted'>The most trusted crypto exchange platform</div>
                    <div className='smallTalk'>Here are a few reasons why you should choose Jupit</div>
                    <div className='whychooseus'>
                        <div>Fast Transaction</div>
                        <div>Fast Transaction</div>
                        <div>Fast Transaction</div>
                        <div>Fast Transaction</div>
                    </div>
            </div>
        </div>
    )
}

export default Index;