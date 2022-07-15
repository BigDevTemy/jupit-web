
import '../../assets/css/Home/section4.css'
import quote from '../../assets/images/2x.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Index = ()=>{
    return (
        <div className="section4">
            <div className='card'>
                <div className='testimonia'>
                    <div className='easiest'>The Easiest and Most</div>
                    <div className='quote'><img src={quote} className="quoteImg"/></div>
                   
                </div>
                <div className='testimoniaComment'>
                    

                </div>
                
                
            </div>
        </div>
    )
}

export default Index;