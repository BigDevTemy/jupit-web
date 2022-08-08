import '../../assets/css/Footer/footer.css'
import backgroundFooter from '../../assets/images/BackgroundFooter.svg'
const Index= ()=>{
    return (
        <div className="my_footer">
            <div className='footerBg'>
                <img src={backgroundFooter}/>
            </div>
            <div className='footerContent'>
                    <div className='userCount'>12,500,601 </div>
                    <div className='userText'>Users & Still Counting</div>

                    <div className='whatareyou'>What are you waiting for?</div>
                    <div className='footerBtn'>Get Started</div>
            </div>
            
        </div>
    )
}

export default Index;