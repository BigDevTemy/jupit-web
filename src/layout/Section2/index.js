import '../../assets/css/Home/section2.css'
import icon1 from '../../assets/images/icons/Group.png'
import icon2 from '../../assets/images/icons/award.png'
import icon3 from '../../assets/images/icons/trade.png'
import icon4 from '../../assets/images/icons/user.png'
const Index = ()=>{
    return (
        <div className="section2">
            <div className='statement'>
                    <div>
                            <div className='wemakecrypoeasy'>We make crypto easy.</div>
                            <div className='specific'>Specific cryptocurrencies work and get a bit of  crypto to try out for yourself. Here are a few reasons why you should choose besnik crypto</div>
                            <div className='getitnow'>
                                <div className='getitnowBtn'>
                                    Learn more
                                </div>
                            </div>
                    </div>
                    <div className='specificIcon'>
                        <div>
                             <div className='side'>
                                <div>
                                    <img src={icon1}/>
                                </div>
                                <div>
                                    <div className='securestorage'>Secure storage</div>
                                    <div className='We_store'>
                                        We store the vast majority of the digital assets in secure offline storage.
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
                                    <div className='securestorage'>Protected by insurance</div>
                                    <div className='We_store'>
                                      Cryptocurrency stored on our servers is covered by our insurance policy.
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
                                    <div className='securestorage'>Industry best practices</div>
                                    <div className='We_store'>
                                    Besnik crypto supports a variety of the most popular digital crypto currencies.
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
                                    <div className='securestorage'>Trade Assets</div>
                                    <div className='We_store'>
                                    Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin.
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