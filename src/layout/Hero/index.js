import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
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