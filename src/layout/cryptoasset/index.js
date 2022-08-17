
import '../../assets/css/crypto-asset/crypto-asset.css'
import buynsell from '../../assets/images/banner-03.png'
import fast from '../../assets/images/fast.png'
import secure from '../../assets/images/secure.png'
import customer from '../../assets/images/customer.png'
import happyclient from '../../assets/images/happy-client.png'
import laptop from '../../assets/images/laptop.png'
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
                        <div>
                            <div className='transaction-img'><img src={fast}/></div>
                            <div className='transaction'>Fast Transaction</div>
                            <div className='transaction-text'>Fast and easy-to-use trading services in one integrated platform.</div>
                        </div>
                        <div>
                            <div className='transaction-img'><img src={secure}/></div>
                            <div className='transaction'>Secure Transaction</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                        <div>
                            <div className='transaction-img'><img src={customer}/></div>
                            <div className='transaction'>Customer First</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                        <div>
                            <div className='transaction-img'><img src={happyclient}/></div>
                            <div className='transaction'>Built For You</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                    </div>
            </div>

            <div class="your-crypto">
                <div className='laptopDiv'>
                
                    <div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;