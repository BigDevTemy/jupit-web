import Hero from '../../layout/Hero'
import Section1 from '../../layout/Section1'
import Section2 from '../../layout/Section2'
import Section3 from '../../layout/Section3'
import Section4 from '../../layout/Section4'
import Section5 from '../../layout/Section5'
import Section6 from '../../layout/Section6'
import Footer from '../../component/Footer'
import Header from '../../component/header'
import { useEffect, useState } from 'react'
const Index = ()=>{
    const [scroll,setscrollPosition] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(window.pageYOffset)
        
        // getscroll(position) 
    };
    
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return (
        <div className="Home">
            <Header scroll={scroll} />
            <Hero/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </div>
    )
}
export default Index;