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
const Index= ()=>{
    return (
        <div className="my_footer">
            <div className='footerContent'>
                <div className='userCount'>12,500,601 </div>
                <div className='userText'>Users & Still Counting</div>

                <div className='whatareyou'>What are you waiting for?</div>
                <div className='footerBtn'>Get Started</div>

                <div className='footerInfor'>
                        <div>
                            <div>
                                <img src={footerLogo} className="footerlogo"/>
                                <small>...simplicity exchange</small>
                            </div>
                            <div className='QuickLink'>
                                <div>Quick Link</div>
                                <div className='link'>
                                    <div>
                                        <div>About Us</div>
                                        <div>FAQ</div>
                                        <div>What We Do</div>
                                        <div>Our Team</div>
                                    </div>
                                    <div>
                                        <div>About Us</div>
                                        <div>FAQ</div>
                                        <div>What We Do</div>
                                        <div>Our Team</div>
                                    </div>
                                    <div>
                                        <div>About Us</div>
                                        <div>FAQ</div>
                                        <div>What We Do</div>
                                        <div>Our Team</div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>




                        <div>2</div>
                        <div>3</div>
                </div>
                   
            
            </div>
           
            
        </div>
    )
}

export default Index;