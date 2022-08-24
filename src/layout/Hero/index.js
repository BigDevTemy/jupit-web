import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.png'
import umbrella from '../../assets/images/umbrella.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
const Index = ()=>{
   
    return (
        <div className="Hero">
           <img src={banner} />
            <div className='navTab'>
                  
                   <div className='heroContent'>
                        <div className='contentHero'>
                            <div>Make your digital assets transactions easier anywhere anytime.</div>
                            <div>A place for everyone who simply buy and sell digital assets. It takes 120 seconds</div>
                        </div>
                        <div>
                            <img src={umbrella}/>
                        </div>
                   </div>
                   <div className='heroButton'>
                            <div>Get Started</div>
                            {/* <div>View more</div> */}
                   </div>
            </div>
        </div>
    )
}
export default Index;