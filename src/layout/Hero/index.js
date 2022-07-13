import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit.svg'
import Phone from '../../assets/images/phone1.png'
const Index = ()=>{
    return (
        <div className="Hero">
            <div className='nav'>
                <div className='logoDiv'>
                       <img src={logo}/>
                </div>
                <div className='navItems'>
                    <div>About us</div>
                    <div>Wallet</div>
                    <div>Exchange</div>
                    <div>Explorer</div>
                    <div>Who We Are</div>

                </div>
                <div className='authButtons'>
                    <div className='loginbtn'>Login</div>
                    <div className='signUpbtn'>Signup</div>
                   
                </div>
            </div>
            <div className='herobody'>
                    <div className='heroText'>
                        <div className='joinus'>Join our crypto exchange platform</div>
                        <div className='textcontent'>
                                <div className='secure'>
                                    Secure and easy <br/> way to trade.    
                                </div>  
                        </div>
                        <div className='secure_text'>
                            You can not discover new oceans unless you have the courage to lose<br/> the sight of your shore...and move on.
                        </div>
                        <div className='email'>
                            <input type="email"  placeholder="Enter your email" className='form-control' /> <div className='tryBtn'>Try now</div>
                        </div>
                    </div>
                    <div className='mobilePhone'>
                            <img src={Phone}/>
                    </div>
            </div>
        </div>
    )
}
export default Index;