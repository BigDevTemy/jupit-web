import '../../assets/css/Home/section3.css'
import mobile from '../../assets/images/mobile.png'
const Index = ()=>{
    return(
        <div className="section3">
                <div className='yourgateway'>
                    {/* <div>
                        <div className='globaleconomy'>Your gateway to the global economy</div>
                        <div className='CryptoWallet'>The Easiest and Most Powerful Crypto Wallet</div>
                        <div className='bitcoinuses'>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. </div>
                        <div className='getitnow'>
                            <div className='getitnowBtn'>
                                    Get it now
                            </div>
                        </div>
                    </div> */}
                    <div className='mobile' data-aos="fade-up-left">
                        <img src={mobile}/>
                    </div>

                    <div className='Install'>
                        <div className='installapp'>INSTALL THE APP</div>
                        <div className='installprogress'>Install Our Progressive Web App(PWA) for faster access</div>
                        <div className='Installapp'>
                            The PWA works just like your regular App, it’s super easy and convenient. To install, please follow the process below:
                        </div>
                        <div>On your Mobile device:</div>
                        <div>- Launch Browser</div>
                        <div>- Navigate to the Browser Options (Android) or</div>
                        <div>- Tap the share button (IOS)</div>
                        <div>- Select Add Page to Home Screen.</div>
                        


                    </div>
                </div>
                
        </div>
    )
}

export default Index;