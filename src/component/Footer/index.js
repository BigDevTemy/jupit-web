import '../../assets/css/Footer/footer.css'
import backgroundFooter from '../../assets/images/BackgroundFooter.svg'
import footerLogo from '../../assets/images/footerlogo.svg'
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
                            <div><img src={footerLogo}/></div>
                            <small>..your fast and reliable exchange</small>

                            <div className='quickLinkDiv'>Quick Links</div>
                            <div className='quickLink'>
                                <div>About Us</div>
                                <div>Faq</div>
                                <div>Who we are</div>
                                <div>Our Team</div>
                                <div>Our Products</div>
                                <div>Our Mission</div>
                            
                                
                            </div>

                    </div>
                    <div>
                            <h1>Blog POst</h1>
                    </div>
                    <div>
                        <h1>Social Media</h1>
                    </div>
            </div>
            </div>
           
            
        </div>
    )
}

export default Index;