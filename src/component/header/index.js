import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import jupit from '../../assets/images/jupit.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
import umbrella from '../../assets/images/umbrella.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
const Index = ({scroll})=>{
    
    return (
            <div className={scroll > 0 ? 'Tab TabCg' :'Tab Tabbg'}>
                <div>
                    <img src={scroll > 0 ? jupit :logo} className="imgLogo"/>
                </div>
                <div className='navItems'>
                    <div className={scroll > 0 ? 'navLinkScroll':'navLink'}><Link to='/aboutus'><button className='btn btn-md feature'>About us</button></Link></div>
                    <div className={scroll > 0 ? 'navLinkScroll product':'navLink product'}>
                        
                        <div class="dropdown">
                            <button  className={scroll > 0 ? 'dropbtn scrolldown':'dropbtn scrollnone'}>Product</button>
                            <div class="dropdown-content">
                                <Link to='/otc'>OTC</Link>
                                
                            </div>
                        </div>

                    </div>
                    <div className={scroll > 0 ? 'navLinkScroll':'navLink'}>What Defines Us</div>
                    <div className={scroll > 0 ? 'navLinkScroll':'navLink'}>Faq</div>
                    <div className={scroll > 0 ? 'navLinkScroll':'navLink'}>Contact</div>
                </div>
                <div className={scroll >0 ? 'signupDivScroll':'signupDiv'}>
                    <div>Signin</div>
                    <button className='btn btn-md registerbtn'>
                        Register
                    </button>
                </div>
            </div>
    )
}

export default Index;