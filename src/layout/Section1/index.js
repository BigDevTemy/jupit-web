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
                <div className='globe' data-aos="fade-up">
                    <img src={Globe}/>
                </div>
                <div className='BCQparent' data-aos="fade-up">
                    <div className='gateway'>Your gateway to bordeless freedom.</div>
                    <div className='gatewayText'>
                        Trade with confidence on Nigeria’s safest digital asset exchange.
                    </div>
                    <div className='Institution'>
                        By building this simple and secure solution for trading digital assets,we hope to have eliminate the limits that previous forestalled everybody.
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