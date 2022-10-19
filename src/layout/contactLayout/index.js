import '../../assets/css/contact/contact.css'
import {IoHomeOutline} from 'react-icons/io5'
import {BsArrowLeft} from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import {RiWhatsappFill} from 'react-icons/ri'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
const chat = ()=>{

}
    return (
        <div className="contactIndex">
            <div className='whatsappIcon'>
                    <a href="https://wa.me/2348088213177" target="_blank"><RiWhatsappFill size={50} style={{cursor:'pointer'}} color="#25D366"  /></a>
                </div>
            <div className='heroContact'>
                
                    <div className='cardContact'>
                        <div className='iconHome'>
                            <div className='homeDiv'>
                                <IoHomeOutline  size="30" color='#4bb543' style={{cursor:'pointer'}} data-aos="fade-up" />
                            </div>
                            <Link to='/' className='hide'>
                                <div className='backDiv '>
                                    <BsArrowLeft size="25" color="#4bb543" data-aos="fade-left"  data-aos-duration="4000"/>
                                </div>
                            </Link>
                            
                        </div>
                        <div className='say_hello'>Say Hello to Us</div>
                        <div className='question'>Do you have any question or simply want to say hi? Drop us a message.</div>
                        <div className='forms'>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Full name *" variant="filled" className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <TextField required id="filled-basic" label="Email" variant="filled" className='form-control' />
                                </div>
                            </div>

                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Phone number *" variant="filled" className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <TextField id="filled-basic" label="Company" variant="filled" className='form-control' />
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" 
                                        label="Message *"
                                        multiline
                                        rows={5}
                                        variant="filled" 
                                        className='form-control' />
                                </div>
                                
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <Button fullWidth variant="contained" style={{backgroundColor:'#1c1c93',height:50}}>Send Message</Button>
                                </div>
                                
                            </div>

                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index