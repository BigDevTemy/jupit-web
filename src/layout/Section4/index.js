
import '../../assets/css/Home/section4.css'
import quote from '../../assets/images/2x.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Client1 from '../../assets/images/Mask Group.png'
import Client2 from '../../assets/images/Mask Group (1).png'
import { useEffect, useState } from 'react';


const Index = ()=>{

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

      function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    return (
        <div className="section4">
            <div className='card'>
                <div className='testimonia'>
                    <div className='easiest'>Comments from our Customers</div>
                    <div className='quote'><img src={quote} className="quoteImg"/></div>
                   
                </div>
               
                <div className='Comment'>
                    <OwlCarousel className='owl-theme' items={windowSize.innerWidth < 1200 ? 1: 2} lazyLoad  loop margin={10} dots >
                        <div className='item'>
                            <div className='mycard'>
                                <div className='clientName'>
                                    <div>
                                        <img src={Client1} />
                                        
                                    </div>
                                    <div>
                                        <div className='name'>Itua Ebenezer</div>
                                        <div className='country'>Nigeria</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                    I started trading with Jupit as an OTC customer and it feels so good to see their app around.
                                </div>
                             </div>
                        </div>
                        <div className='item'>
                            <div className='mycard'>
                                <div className='clientName'>
                                    <div>
                                        <img src={Client2} />
                                        
                                    </div>
                                    <div>
                                        <div className='name'>Azeez Olaniyi</div>
                                        <div className='country'>Nigeria</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                I am sure this app will emerge as one among the best digital currency exchange app ever. I started my journey with them on WhatsApp and ever since then, it has been a smooth ride so far.
                                </div>
                        </div>
                        </div>
                        <div className='item'>
                            <div className='mycard'>
                                <div className='clientName'>
                                    <div>
                                        <img src={Client1} />
                                        
                                    </div>
                                    <div>
                                        <div className='name'>Oghenekaro</div>
                                        <div className='country'>Nigeria</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                I am grateful to my Neighbor who first introduced me to Jupit WhatsApp Exchange in 2021. Trading gift card with them was honestly convenient and transparent. They had good rate and fast settlement.
                                </div>
                             </div>
                        </div>
                        <div className='item'>
                            <div className='mycard'>
                                <div className='clientName'>
                                    <div>
                                        <img src={Client1} />
                                        
                                    </div>
                                    <div>
                                        <div className='name'>Ogundeji Johnson</div>
                                        <div className='country'>Nigeria</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                    The app looks really nice, easy to operate and with fast responsiveness. I have been around for a while and I will recommend to anyone.
                                </div>
                             </div>
                        </div>
                    </OwlCarousel>
                </div>
                
                
            </div>
        </div>
    )
}

export default Index;