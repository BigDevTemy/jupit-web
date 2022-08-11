import '../../assets/css/Home/section1.css'
import Globe from '../../assets/images/globe.png'
import {Animator,  ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Aos from 'aos';

import { useEffect } from 'react';
const Index = ()=>{

    useEffect(()=>{
            Aos.init({duration:2000})
    },[])
    return (
        <div className="section1">
            <div className='globeSession'>
                <div className='globe' data-aos="fade-down-right">
                    <img src={Globe}/>
                </div>
                <div className='BCQparent' data-aos="fade-up">
                    <div className='gateway'>Your gateway to your global economy</div>
                    <div className='gatewayText'>
                        BCQ crypto lending, trading, and custody for worldwide
                    </div>
                    <div className='Institution'>
                        Institutional Markets is a full-stack crypto services platform that works worldwide with crypto-native businesses and institutional clients on trading, and custody solutions.
                    </div>
                    <div className='getitnow'>
                        <div className='getitnowBtn'>
                                Get it now
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Index;