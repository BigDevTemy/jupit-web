import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
import umbrella from '../../assets/images/umbrella.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
const Index = ({title})=>{
   
    return (
        <div className="HeroOthers">
             <div className='Opacity'></div>
             <div className='OpacityText'>
                    <h1>{title}</h1>
                    <hr className='underline'/>
                </div>
          
        </div>
    )
}
export default Index;