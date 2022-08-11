import '../../assets/css/aboutus/aboutus.css'
import about1 from '../../assets/images/about1.png'
const Index = ()=>{
    return (
        <div className="aboutus">
           
            <div className='whoweare'>
                <div>
                    <div className='title'>
                        <div>Who we are?</div>
                        <small>who we are @ jupit.</small>
                    </div>
                    
                    <p>
                        We're all about simplifying your daily exchange.<br/>
                        Beyond operating a secure channel, we're dedicated to providing you with the best service,
                        with a focus on dependability matched with satisfaction.
                    </p>
                </div>
                <div>
                    <img src={about1}/>
                </div>

            </div>
            <div className='achievement'>
                <div>
                    <div>1,578</div>
                    <div>Users</div>
                </div>
                <div>
                    <div>1,200,578</div>
                    <div>Asset Undermanagement Crypto</div>
                </div>
                <div>
                    <div>1,500,578</div>
                    <div>Asset Undermanagement Fiat</div>
                </div>
                <div>
                    <div>1,500,578</div>
                    <div>Assets</div>
                </div>
            </div>


            <div className='ourmission'>
                
                <div>
                    <h1>Our Mission</h1>
                    <p>
                        Our platform is intended mainly to simplify your daily exchange in a most reliable and secured way..
                    </p>

                    <h1 className="vision">Our Vision</h1>
                    <p>
                    Our vision is to advance the use of borderless currency within the Africa communities. We want to make sure anyone and everyone who wants to engage in borderless payments gets prompt and clear access in their transactions.
                    </p>
                </div>
                <div>
                    {/* <img src={Jupit} className='logo'/> */}
                </div>
                

            </div>

            
        </div>
    )
}

export default Index;