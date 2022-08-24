
import '../../assets/css/Home/section4.css'
import quote from '../../assets/images/2x.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Client1 from '../../assets/images/Mask Group.png'
import Client2 from '../../assets/images/Mask Group (1).png'


const Index = ()=>{
    return (
        <div className="section4">
            <div className='card'>
                <div className='testimonia'>
                    <div className='easiest'>The Easiest and Most</div>
                    <div className='quote'><img src={quote} className="quoteImg"/></div>
                   
                </div>
               
                <div className='Comment'>
                    <OwlCarousel className='owl-theme' items={2} lazyLoad  loop margin={10} dots >
                        <div className='item'>
                            <div className='mycard'>
                                <div className='clientName'>
                                    <div>
                                        <img src={Client1} />
                                        
                                    </div>
                                    <div>
                                        <div className='name'>Hector Berlin</div>
                                        <div className='country'>South Africa</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .
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
                                        <div className='name'>Hector Colombo</div>
                                        <div className='country'>Russia</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .
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
                                        <div className='name'>Hector Berlin</div>
                                        <div className='country'>South Africa</div>
                                    </div>
                                    
                                </div>
                                <div className='all_crypto'>All your crypto in one place</div>
                                <div className='message'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled .
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