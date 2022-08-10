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
                    <img src={Jupit}/>
                </div>
                

            </div>

            
        </div>
    )
}

export default Index;