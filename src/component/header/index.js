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
                    <div><Link to='/aboutus'><button className='btn btn-md feature'>About us</button></Link></div>
                    <div>Product</div>
                    <div>What Defines Us</div>
                    <div>Faq</div>
                    <div>Contact</div>
                </div>
                <div>
                    <div>Signin</div>
                    <button className='btn btn-md registerbtn'>
                        Register
                    </button>
                </div>
            </div>
    )
}

export default Index;