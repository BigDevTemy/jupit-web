
import '../../assets/css/crypto-asset/crypto-asset.css'
import buynsell from '../../assets/images/banner-03.png'
import fast from '../../assets/images/fast.png'
import secure from '../../assets/images/secure.png'
import customer from '../../assets/images/customer.png'
import happyclient from '../../assets/images/happy-client.png'
import account from '../../assets/images/account.png'
import bank from '../../assets/images/bank.png'
import buy from '../../assets/images/buy.png'
import Hodl from '../../assets/images/hodl.png'
import datatransfer from '../../assets/images/data-transfer.png'
import buy1 from '../../assets/images/buy-1.png'
import {TiArrowRightThick} from 'react-icons/ti'
import {FiCheckCircle} from 'react-icons/fi'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
    return (
        <div className="crypto-asset">
            <div className='buynsell' >
                    <div data-aos="fade-up">
                        <div className='tradewithjupitTitle'>Buy and Sell Crypto in minutes.</div>
                        <div className='tradewithjupit'>
                            Trade with Jupit and experience one of the most convenient, fastest and secure way to sell your crypto. It takes just 120 seconds!
                        </div>
                        <div>
                            <button className='btn btn-primary btn-lg'>Get Started</button>
                        </div>

                    </div>
                    <div data-aos="fade-up">
                        <img src={buynsell}/>
                    </div>
            </div>
            <div className='whatyoucando'>
                    <div className='whatyoucando_title'>What Can You Do With Your Crypto Wallet?</div>
                    <div className='whychooseus'>
                        <div data-aos="fade-up" class="fade-up">
                            <div className='transaction-img' data-aos="flip-right"><img src={buy1}/></div>
                            <div className='transaction'>Sell And Buy</div>
                            <div className='transaction-text'>Sell and buy at the best rate and cash out fiat to your bank account instantly.</div>
                        </div>
                        <div data-aos="fade-up" class="fade-up">
                            <div className='transaction-img' data-aos="flip-right"><img src={datatransfer}/></div>
                            <div className='transaction'>Send and Receive</div>
                            <div className='transaction-text'>
                                Transfer or receive assets with ease, no matter where you are or who you are with.
                            </div>
                        </div>
                        <div  data-aos="fade-up" class="fade-up">
                            <div className='transaction-img' data-aos="flip-right"><img src={Hodl}/></div>
                            <div className='transaction'>Hodl</div>
                            <div className='transaction-text'>
                                Hold your crypto assets safe and secure in your Jupit account indefinitely. We have you covered!
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="whatyoucando_title getStarted">Get started in a few minutes</div>
                    <div className='createAccount'  data-aos="fade-up">
                        <div>
                            <div>
                                <img src={account} className="acctImage"/>
                            </div>
                            <div className='acctImageText'>
                                Create an Account
                            </div>
                            </div>
                        <hr className='hr'/>
                        <div>
                            <div>
                                <img src={bank} className="acctImage"/>
                            </div>
                            <div className='acctImageText'>Link Your Bank Account</div>
                        </div>
                           
                        <hr className='hr'/>
                        <div>
                            <div>
                                <img src={buy} className="acctImage"/>
                            </div>
                            <div className='acctImageText'>Start buying and Selling</div>
                        </div>
                    </div>
                    <div><button className='btn btn-primary btn-lg'>Get Started</button></div>
            </div>
            {/* <div className='mostused'>
                    <div className='mosttrusted'>The most trusted crypto exchange platform</div>
                    <div className='smallTalk'>Here are a few reasons why you should choose Jupit</div>
                    <div className='whychooseus'>
                        <div data-aos="fade-up">
                            <div className='transaction-img'><img src={fast}/></div>
                            <div className='transaction'>Fast Transaction</div>
                            <div className='transaction-text'>Fast and easy-to-use trading services in one integrated platform.</div>
                        </div>
                        <div data-aos="fade-down">
                            <div className='transaction-img'><img src={secure}/></div>
                            <div className='transaction'>Secure Transaction</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='transaction-img'><img src={customer}/></div>
                            <div className='transaction'>Customer First</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                        <div data-aos="fade-down">
                            <div className='transaction-img'><img src={happyclient}/></div>
                            <div className='transaction'>Built For You</div>
                            <div className='transaction-text'>
                                You can rest easy knowing that your crypto is safe with us anytime!
                            </div>
                        </div>
                    </div>
            </div> */}

            <div class="your-crypto">
                <div className='laptopDiv'>
                    <div className='mockup' data-aos="fade-left"></div>
                    <div>
                        <div className='spotlight'>
                            <div className='SportlightDiv' data-aos="fade-up">
                                <div className='check'><FiCheckCircle size={30} color="#4BB543"/></div>
                                <div className='Yourcrypto'>Your crypto on-the-go</div>
                            </div>
                            <div className='YourcryptoText' data-aos="fade-up" >
                                Manage your wallet easily anywhere, anytime, and from any device.
                            </div>
                        </div>

                        <div className='spotlight' >
                            <div className='SportlightDiv' data-aos="fade-up">
                                <div className='check'><FiCheckCircle size={30} color="#4BB543"/></div>
                                <div className='Yourcrypto'>You are in control</div>
                            </div>
                            <div className='YourcryptoText' data-aos="fade-up" >
                            Have complete control of your funds on our secured platform.
                            </div>
                        </div>

                        <div className='spotlight' >
                            <div className='SportlightDiv' data-aos="fade-up">
                                <div className='check'><FiCheckCircle size={30} color="#4BB543"/></div>
                                <div className='Yourcrypto'>Move Beyond borders</div>
                            </div>
                            <div className='YourcryptoText' data-aos="fade-up">
                                Complete your payments around the world instantly with your asset on Jupit.
                            </div>
                        </div>

                        
                        
                        
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Index;