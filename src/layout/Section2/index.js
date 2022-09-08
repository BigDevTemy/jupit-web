import '../../assets/css/Home/section2.css'
import icon1 from '../../assets/images/icons/Group.png'
import icon2 from '../../assets/images/icons/award.png'
import icon3 from '../../assets/images/icons/trade.png'
import icon4 from '../../assets/images/icons/user.png'
import Aos from 'aos';
const Index = ()=>{
    return (
        <div className="section2">
            <div className='statement'>
                    <div data-aos="zoom-out-down">
                            <div className='wemakecrypoeasy'>Best Service that Works for You.</div>
                            <div className='specific'>We provide a wide range of services to our users. Take a look at few of the solutions that you can expect from us.</div>
                            <div className='getitnow'>
                                <div className='getitnowBtn'>
                                    Learn more
                                </div>
                            </div>
                    </div>
                    <div className='specificIcon' data-aos="fade-up">
                        <div>
                             <div className='side'>
                                <div>
                                    <img src={icon1}/>
                                </div>
                                <div>
                                    <div className='securestorage'>Fast Transaction</div>
                                    <div className='We_store'>
                                        Fast and easy-to-use trading services in one integrated platform.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='side'>
                                <div>
                                    <img src={icon4}/>
                                </div>
                                <div>
                                    <div className='securestorage'>Secure Wallet</div>
                                    <div className='We_store'>
                                        You can rest easy knowing that your asset is safe with us anytime!.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className='side'>
                                <div>
                                    <img src={icon3}/>
                                </div>
                                <div>
                                    <div className='securestorage'>Built for You</div>
                                    <div className='We_store'>
                                    We want anyone and everyone with need for cryptocurrency gets prompt and clear access in their transactions.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className='side'>
                                <div>
                                    <img src={icon4}/>
                                </div>
                                <div>
                                    <div className='securestorage'>Customer First</div>
                                    <div className='We_store'>
                                    We pride ourselves on providing excellent customer service.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
        </div>
    )
}
export default Index;