// import Hero from '../../layout/HeroPolicy'
import Hero from '../../layout/HeroOthers'
import AmlLayout from '../../layout/AmlLayout'
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
        window.scrollTo(0,0)
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    },[])
    return (
        <div className="Home">
            <Header scroll={5}/>
            <Hero title="Anti-Money Laundering"/>
            <AmlLayout/>
            <Footer/>
        
            
        </div>
    )
}
export default Index;