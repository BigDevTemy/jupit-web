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
                    <div className='mobile' data-aos="fade-up-up">
                        <img src={mobile} className="mobilephone"/>
                    </div>

                    <div className='Install' data-aos="fade-down">
                        <div className='installapp'>INSTALL THE APP</div>
                        <div className='installprogress'>Install Our Progressive Web App(PWA) for faster access</div>
                        <div className='Installapp'>
                            The PWA works just like your regular App, it’s super easy and convenient. To install, please follow the process below:
                        </div>
                        <div className='mobiledevice'>On your Mobile device:</div>
                        <div className='step'><span>1.</span> <div>Launch www.jupitapp.co/signin from your Mobile Device or Tablet</div></div>
                        <div className='step'><span>2.</span> <div>Navigate to the Browser Option on your Android device or tap the share button on your IOS device</div></div>
                        <div className='step'><span>3.</span> <div>Select Add Page to Home Screen.</div></div>
                        <div className='step'><span>4.</span> <div>Return to Home Menu to launch the Application shortcut.</div></div>
                        


                    </div>
                </div>
                
        </div>
    )
}

export default Index;