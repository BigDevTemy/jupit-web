import '../../assets/css/Home/hero.css'
import logo from '../../assets/images/jupit_white.svg'
import jupit from '../../assets/images/jupit.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
import umbrella from '../../assets/images/umbrella.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FcAbout} from 'react-icons/fc'
import {FaHome} from 'react-icons/fa'
import {GiRegeneration} from 'react-icons/gi'
import {GrResources} from 'react-icons/gr'
import {BiSupport} from 'react-icons/bi'
import { Offcanvas,Collapse  } from "react-bootstrap";
import {BsArrowRightShort} from 'react-icons/bs'
const Index = ({scroll})=>{
    const [show,setshow] = useState(false);
    const handleClose = ()=>{
        setshow(false)
    }
    const [isVisible, setisVisible] = useState(false)
    const[isVisibleResource,setisVisibleResource] =useState(false)
    const handleProductClick = ()=>{
        setisVisible(!isVisible);
    }
    const handleResourceClick = ()=>{
        setisVisibleResource(!isVisibleResource);
    }
    return (
            <div className={scroll > 0 ? 'Tab TabCg' :'Tab Tabbg'}>
                <div>
                    <Link to="/"><img src={scroll > 0 ? jupit :logo} className="imgLogo"/></Link>
                </div>
                <div className='navItems Itemnav'>
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
                    <div className="hamburg">
                    <GiHamburgerMenu  color={scroll === 0 ? '#fff':'#000'} size={35} className="hamburger" onClick={()=>setshow(true)}/>
                </div>

                </div>

                <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:'50%',backgroundColor:'#070722'}}>
                    <Offcanvas.Header closeButton closeVariant='white' >
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=''>
                        <Link  to="/" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FaHome color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Home</div>
                            </div>
                        </Link>
                        <Link  to="/aboutus" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <FcAbout color='#fff' size={20} />
                                </div>
                                <div className='tagName'>About Us</div>
                            </div>
                        </Link>
                        
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <GiRegeneration color='#fff' size={20} />
                                </div>
                                <div className='tagName'  onClick={()=>handleProductClick()}>Product <BsArrowRightShort size={20} /></div><br/>
                                    
                                        <Collapse in={isVisible}>
                                            <div className='collpaseP'>
                                               <Link to="/our-cryptoasset" style={{marginBottom:10,marginTop:10}}> <div className='tagName'>Crypto Assets</div></Link>
                                               <Link to="/our-giftcard" style={{marginBottom:10}}> <div className='tagName'>Gift Card</div></Link>
                                               <Link to="/otc" style={{marginBottom:10}}> <div className='tagName'>OTC</div></Link>
                                        
                                            </div>
                                                
                                            
                                        </Collapse>
                                    
                            </div>
                    
                       
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <GiRegeneration color='#ffffff' size={20} />
                                </div>
                                <div className='tagName' onClick={()=>handleResourceClick()}>Resources<BsArrowRightShort size={20} /></div>
                                <Collapse in={isVisibleResource}>
                                            <div className='collpaseP'>
                                               <Link to="/blog" style={{marginBottom:10,marginTop:10}}> <div className='tagName'>Blog</div></Link>
                                                <Link to="/faq" style={{marginBottom:10}}><div className='tagName'>Faq</div></Link>
                                                
                                            </div>
                                                
                                            
                                        </Collapse>
                            </div>
                        
                        {/* 
                        <Link  to="faq" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <MdVideoLibrary color='#fff' size={20} />
                                </div>
                                <div className='tagName'>faq</div>
                            </div>
                        </Link> */}
                        {/* <Link  to="roadmap" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <ImPriceTags color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Roadmap</div>
                            </div>
                        </Link> */}
                        

                       
                        <Link  to="/contact" spy={true} smooth={true} onClick={handleClose}>
                            <div className='tag'>
                                <div className='tagIcon'>
                                     <BiSupport color='#fff' size={20} />
                                </div>
                                <div className='tagName'>Get In Touch</div>
                            </div>
                        </Link>

                        
                       </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
    )
}

export default Index;