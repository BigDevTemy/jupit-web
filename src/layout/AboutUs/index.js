import '../../assets/css/aboutus/aboutus.css'
import Jupit from '../../assets/images/jupit.svg'
const Index = ()=>{
    return (
        <div className="aboutus">
            <div className='whoweare'>
                <h1>Who we are?</h1>
                <p>
                    We're all about simplifying your daily exchange.
                    Beyond operating a secure channel, we're dedicated to providing you with the best service,
                    with a focus on dependability matched with satisfaction.
                </p>

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
                    <img src={Jupit} className='logo'/>
                </div>
                

            </div>

            
        </div>
    )
}

export default Index;