
import '../../assets/css/Home/section4.css'
import quote from '../../assets/images/2x.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Client1 from '../../assets/images/Mask Group.png'

const Index = ()=>{
    return (
        <div className="section4">
            <div className='card'>
                <div className='testimonia'>
                    <div className='easiest'>The Easiest and Most</div>
                    <div className='quote'><img src={quote} className="quoteImg"/></div>
                   
                </div>
                <div className='Comment'>
                       
                       <div className='mycard'>
                            <div className='clientName'>
                                <div>
                                    <img src={Client1} />
                                    
                                </div>
                                <div>
                                    <div className='name'>Alexander Nicole</div>
                                    <div className='country'>Nigerian</div>
                                </div>
                                
                            </div>
                       </div>
                       <div className='mycard'>
                            Welome
                       </div>
                        
                </div>
                
                
            </div>
        </div>
    )
}

export default Index;