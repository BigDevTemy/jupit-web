import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit.svg'
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
                        <h1>Secure and Easy to USE</h1>
                    </div>
                    <div className='mobilePhone'>
                            
                    </div>
            </div>
        </div>
    )
}
export default Index;