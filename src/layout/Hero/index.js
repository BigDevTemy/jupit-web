import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
import umbrella from '../../assets/images/umbrella.svg'

const Index = ()=>{
    return (
        <div className="Hero">
           <img src={banner} />
            <div className='navTab'>
                   <div className='Tab'>
                        <div>
                            <img src={logo} className="imgLogo"/>
                        </div>
                        <div className='navItems'>
                            <div><button className='btn btn-md feature'>Feature</button></div>
                            <div>How it Works</div>
                            <div>Benefit</div>
                            <div>About us</div>
                            <div>Who we are</div>
                        </div>
                        <div>
                            <div>Signin</div>
                            <button className='btn btn-md registerbtn'>
                                Register
                            </button>
                        </div>
                   </div>
                   <div className='heroContent'>
                        <div className='contentHero'>
                            <div>Digital currency leads at market in the right amount.</div>
                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                        </div>
                        <div>
                            <img src={umbrella}/>
                        </div>
                   </div>
                   <div className='heroButton'>
                            <div>Get Started</div>
                            <div>View more</div>
                   </div>
            </div>
        </div>
    )
}
export default Index;