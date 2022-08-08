import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'

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
            </div>
        </div>
    )
}
export default Index;