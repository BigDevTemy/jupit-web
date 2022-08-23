import '../../assets/css/Footer/footer.css'
import backgroundFooter from '../../assets/images/BackgroundFooter.svg'
import footerLogo from '../../assets/images/footerlogo.svg'
import blogpost1 from '../../assets/images/blogpost1.png'
import blogpost2 from '../../assets/images/blogpost2.png'
import blogpost3 from '../../assets/images/blogpost3.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import facebook from '../../assets/images/facebook.png'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
const Index= ()=>{
    return (
        <div className="my_footer">
            <div className='footerContent'>
                <div className='userCount'>3,620 </div>
                <div className='userText'>Users & Still Counting</div>

                <div className='whatareyou'>What are you waiting for?</div>
                <div className='footerBtn'>Get Started</div>

                <div className='footerInfor'>
                        <div className='footerlogoarea'>
                            <div className='logoReal'>
                                <img src={footerLogo} className="footerlogo"/>
                                <small>...simplifying exchange</small>
                            </div>
                            <div className='QuickLink'>Quick Link</div>
                            <div className='link'>
                                <div>
                                    <div className='titleLink'>Company</div>
                                    <div>About Us</div>
                                    <div>Contact Us</div>
                                    
                                </div>
                                <div>
                                    <div className='titleLink'>Product</div>
                                    <div>Bitcoin</div>
                                    <div>Usdt</div>
                                    <div>Gift Card</div>
                                    <div>OTC</div>
                                    
                                </div>
                                <div>
                                    <div className='titleLink'>Legal</div>
                                    <div><Link to='/privacy-policy'>Terms Of Service</Link></div>
                                    <div><Link to='/privacy-policy'>Policy</Link></div>
                                    <div><Link to='/privacy-policy'>Anti-Money laundering Policy</Link></div>
                                    
                                </div>
                                
                                <div>
                                    <div className='titleLink'>Resources</div>
                                    <div>Blog</div>
                                    <div>FAQ</div>
                                    
                                </div>
                            
                            </div>
                        </div>

                        
                        <div className='socialmediaParent'>
                                <div className='socialmedia'>
                                    <img src={facebook} className="socialmedia-img"/>
                                    <img src={twitter} className="socialmedia-img"/>
                                    <img src={instagram} className="socialmedia-img"/>
                                    <img src={linkedin} className="socialmedia-img"/>
                                </div>

                        </div>
                </div>
                   
            
            </div>
           
            
        </div>
    )
}

export default Index;