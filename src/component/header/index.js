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
                    <Link to="/"><img src={scroll > 0 ? jupit :logo} className="imgLogo"/></Link>
                </div>
                <div className='navItems'>
                    <div className={scroll > 0 ? 'navLinkScroll':'navLink'}><Link to='/aboutus'><button className='btn btn-md feature'>About us</button></Link></div>
                    <div className={scroll > 0 ? 'navLinkScroll product':'navLink product'}>
                        
                        <div class="dropdown">
                            <button  className={scroll > 0 ? 'dropbtn scrolldown':'dropbtn scrollnone'}>Product</button>
                            <div class="dropdown-content">
                                
                                <Link to='/our-cryptoasset'>Crypto Assets</Link>
                                <Link to='/our-giftcard'>Gift Card</Link>
                                <Link to='/otc'>OTC</Link>
                                
                                
                            </div>
                        </div>

                    </div>
                    <div className={scroll > 0 ? 'navLinkScroll product':'navLink product'}>
                        
                        <div class="dropdown">
                            <button  className={scroll > 0 ? 'dropbtn scrolldown':'dropbtn scrollnone'}>Resources</button>
                            <div class="dropdown-content">
                                <Link to='/blog'>Blog</Link>
                                <Link to='/faq'>FAQs</Link>
                                
                                
                                
                                
                            </div>
                        </div>

                    </div>
                    <div className={scroll > 0 ? 'navLinkScroll product':'navLink product'}><Link to='/contact' style={{textDecoration:'none'}}  className={scroll > 0 ? 'navLinkScroll product':'navLink product'}>Contact</Link></div>
                    
                    
                </div>
                <div className={scroll >0 ? 'signupDivScroll':'signupDiv'}>
                    <div><a href="https://app.jupitapp.co/client/signin" target="_blank" className={scroll >0 ? 'a_signupDivScroll':'a_signupDiv'} >Signin</a></div>
                    <button className='btn btn-md registerbtn'>
                       <a className={scroll >0 ? 'a_signupDivScroll':'a_signupDiv'} href="https://app.jupitapp.co/client/signup" target="_blank">Register</a> 
                    </button>
                </div>
            </div>
    )
}

export default Index;