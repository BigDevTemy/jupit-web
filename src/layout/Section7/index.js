import '../../assets/css/Home/section7.css'
import laptop from '../../assets/images/laptopmok.png'
import {FaCheckDouble} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
    return (
        <div className='section7' data-aos="fade-up">
            <div >
                <div className='bestService'>We make crypto easy.</div>
                <div className='startJourney'>Start your journey with us, you can't go wrong with the classics.</div>
                <div className='instantTransaction'>
                    <div><FaCheckDouble color='#4bb543' style={{marginRight:5}}/>Instant Transaction</div>
                    <div><FaCheckDouble color='#4bb543' style={{marginRight:5}}/>Real Time Value</div>
                    <div><FaCheckDouble color='#4bb543' style={{marginRight:5}}/>Low Fee</div>
                    <div><FaCheckDouble color='#4bb543' style={{marginRight:5}}/>Seamless Experience</div>
                </div>
            </div>
            <div>
                <img src={laptop}/>
            </div>

        </div>

    )
}

export default Index;