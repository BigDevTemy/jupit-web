import '../../assets/css/otc/otc.css'
import Trainer from '../../assets/images/trainer.jpg'
import Circle from '../../assets/images/service-image-2.png'
import feature6 from '../../assets/images/feature-6.png'
import feature2 from '../../assets/images/feature-2.png'
import feature7 from '../../assets/images/feature-7.png'
import feature3 from '../../assets/images/feature-3.png'
import serviceimage from '../../assets/images/service-image-1.png'
import {FaArrowRight} from 'react-icons/fa'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Aos from 'aos';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect,useState } from 'react'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])


const [Form,setForm] = useState({})
const [btn_name,setbtnname] = useState('Send Message')
const [disabled,setDisabled] = useState(false)

const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({...Form,[name]:value});
    console.log(Form)
}

const RegisterValidForm = !Form.fullname?.length 
    || !Form.email?.length 
    || !Form.phonenumber?.length
    || !Form.message?.length
    || !Form.address?.length
    || !Form.business_name?.length
    || !Form.whatsapp_no?.length
    || !Form.business_address?.length
    || !Form.business_tel?.length
    
const submitContact =()=>{
    
   
    setbtnname('Please Wait')
    setDisabled(true)
     
    axios({
            method: "POST",
            url: `https://jupit.app/otc/submit/request`,
            headers: {
            "Content-Type": "application/json"
            },
            data:JSON.stringify({Form})
        })
    .then(res=>{
        setbtnname('Send Message')
        setDisabled(false)
        setForm({...Form,
            'fullname':'',
            'email':'',
            'phonenumber':'',
            'message':'',
            'alternate_phonenumber':'',
            'idcard':'',
            'whatsapp_no':'',
            'address':'',
            'business_name':'',
            'business_tel':'',
            'business_address':'',
            'user_type':'',
            'means_comm':''
    
    
        });
        Swal.fire({
            title: 'Success',
            text: 'Message successfully submitted..A feedback will be provided shortly.',
            icon: 'success',
            confirmButtonText: 'Thank you'
          })
    
    
    })
    .catch(err=>{
        setbtnname('Send Message')
        setDisabled(false)
        Swal.fire({
            title: 'opps',
            text: 'An Error Occurred.pls try again',
            icon: 'error'
          })
       console.log(err)
        // console.log('REs',err.response)
    
    })
   
}
    
    return (
        <div>
            <div className="whatis" >
                <div data-aos="fade-down">
                        <div className='jupitTitle'>What is Jupit OTC Desk?</div>
                        <div className='jupittext'>
                            Our Over-The-Counter (OTC) desk is by nature a secure and bespoke service that allows institutions, high net-worth individuals and high-volume traders to trade off the Jupit App with access to instant trade execution and settlement services that are discreet, secure and ultra-competitive.
                        </div>
                </div>
                <div data-aos="fade-up" >
                    <img src={Circle}/>
                </div>

                 
            </div>
            <div className='jupitBuilt'>
                    <div className='largeOrders'>
                        Jupit OTC - Built for large orders
                    </div>
                    <div className='ourOTCtitle'>
                        Our OTC Service offers more than secure and discreet transactions and deep liquidity.
                    </div>
                    <div className='tradeType'>
                        <div className='moreFacts'>
                                <div data-aos="fade-down-right"><img src={feature3}/></div>
                                <div data-aos="fade-up">Block Trades</div>
                                <div data-aos="fade-up">
                                    a minimum amount of 5,000 USDT or equivalent.
                                </div>
                                    
                        </div>

                        <div className='moreFacts'>
                            <div data-aos="fade-down-left"><img src={feature7}/></div>
                            <div data-aos="fade-up">Competitive Rate</div>
                            <div data-aos="fade-up">
                                Our trading desk provides you with a custom quote instantly and securely.
                            </div>
                                
                        </div>

                        <div className='moreFacts'>
                            <div data-aos="fade-up-right"><img src={feature2}/></div>
                            <div data-aos="fade-up">Fast Settlement</div>
                            <div data-aos="fade-up">
                                Execute your trades in seconds without the involvement of any third-party and get settlement for your trade almost instantaneous.
                            </div>
                                
                        </div>

                        <div className='moreFacts'>
                            <div data-aos="fade-down-left"><img src={feature6}/></div>
                            <div data-aos="fade-up">24/7 Trade</div>
                            <div data-aos="fade-up">
                                Our team is well positioned to manage your trade execution at any time of the day.
                            </div>
                                
                        </div>
 
                    </div>
                    <div className='inadditonal'>
                        <div> In addition, the Jupit OTC desk support settlement in more than one fiat currency and digital assets currencies:</div>
                        <div className='checks'>
                                <div>
                                    <div>Digital assets:</div>
                                    <div>Bitcoin (BTC)</div>
                                    <div>Etherum (ETH)</div>
                                    <div>Tether (USDT)</div>
                                    <div>USD Coin (USDC)</div>
                                    <div>Binance USD(BUSD)</div>
                                    <div>Binance Coin (BNB)</div>
                                    <div>And more..</div>
                                </div>
                                <div>
                                     <div>Fiat currencies:</div>
                                     <div>Naira (NGN)</div>
                                     <div>US Dollars (USD)</div>
                                     <div>US Dollars (USD)</div>
                                     <div>Euro (EUR)</div>
                                     <div>British Pounds (GBP)</div>
                                </div>
                        </div>
                    </div>
                    <div className='tradeflow'>
                       <div data-aos="flip-down">
                            <img src={serviceimage}/>

                       </div>
                       <div data-aos="fade-down">
                            <div className='ourtradeflow'>Our OTC Trade Flow</div>
                            <div className='signup' >
                                <div>
                                    <FaArrowRight color='#3042c9'/>
                                </div>
                                <div>
                                    <div className='signupTitle'>Signup</div>
                                    <div  className='signupmessage'>Get started by filling out the OTC registration form or by simply emailing otc@jupit.com with your inquiry.</div>
                                </div>
                            </div>
                            <div className='signup'>
                                <div>
                                    <FaArrowRight color='#3042c9'/>
                                </div>
                                <div>
                                    <div className='signupTitle'>Onboarding</div>
                                    <div className='signupmessage'>To become an OTC client with us, it is important to go through the standard onboarding process obtaining the highest level of verification by providing documents such as a Government ID, Proof of Residence and Proof of Wealth to enable large transactions.</div>
                                </div>
                            </div>
                            <div className='signup'>
                                <div>
                                    <FaArrowRight color='#3042c9'/>
                                </div>
                                <div>
                                    <div className='signupTitle'>Communication</div>
                                    <div  className='signupmessage'>A private Chat Group for trade will be setup either by WhatsApp or Signal Messaging App and our OTC agents will walk you through your bespoke experience.</div>
                                </div>
                            </div>
                            <div className='signup'>
                                <div>
                                    <FaArrowRight color='#3042c9'/>
                                </div>
                                <div>
                                    <div className='signupTitle'>Open Trade</div>
                                    <div  className='signupmessage'>Request a quote for your trade in the private chat group to start executing your orders. Your trade agent will be available at all time to provide you with any support you may need.</div>
                                </div>
                            </div>
                            <div className='signup'>
                                <div>
                                    <FaArrowRight color='#3042c9'/>
                                </div>
                                <div>
                                    <div className='signupTitle'>Settlement of Fiat/Crypto</div>
                                    <div  className='signupmessage'>Once the OTC Desk receives the payment confirmation for your order, our agent will send the settlement asset or fiat to the specified wallet/account, along with a confirmation email to your inbox, and the trade is complete.</div>
                                </div>
                            </div>

                       </div>
                    </div>

                    <div className='xform'>
                        <div className='start'>Start Your Borderless Journey Here</div>
                        <div className='ourOTCtitle'>Complete the form and seatback, we will contact you soon.</div>
                        <div className='forms'>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Fullname *" value={Form.fullname || ''}  name="fullname" variant="filled" className='form-control'  />
                                </div>
                                <div className='form-group'>
                                    <TextField required id="filled-basic" onChange={handleChange} label="Phone number *" variant="filled" value={Form.phonenumber || ''} name="phonenumber" className='form-control' />
                                </div>
                            </div>

                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Alternate Phone number " variant="filled" className='form-control'  value={Form.alternate_phonenumber || ''} name="alternate_phonenumber"  />
                                </div>
                                <div className='form-group'>
                                        <TextField id="filled-basic" onChange={handleChange} label="Email*"  value={Form.email || ''} name="email" variant="filled" className='form-control' />
                                    </div>
                                
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                        <InputLabel id="demo-simple-select-label">Select ID Card Type</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        className='form-control'
                                        onChange={handleChange}
                                        value={Form.idcard || ''}
                                        name="idcard"
                                        >
                                            <MenuItem value="">Select Age</MenuItem>
                                            <MenuItem value="driver license">Driver License</MenuItem>
                                            <MenuItem value="intl passport">Int'l Passport</MenuItem>
                                            <MenuItem value="nimc">NIMC</MenuItem>
                                        </Select>
                                </div>
                                <div className='formDiv'>
                                    <div className='form-group'>
                                        <TextField id="filled-basic" onChange={handleChange} label="WhatsApp/Signal No*"  value={Form.whatsapp_no || ''} name="whatsapp_no" variant="filled" className='form-control' />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Address *" variant="filled" className='form-control' value={Form.address || ''} name="address"  />
                                </div>
                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Business Name *" variant="filled" className='form-control' name="business_name" value={Form.business_name || ''}  />
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Business Address *" variant="filled" className='form-control'  value={Form.business_address || ''} name="business_address"  />
                                </div>
                                <div className='form-group'>
                                    <TextField id="filled-basic" onChange={handleChange} label="Business Tel *" variant="filled" className='form-control'  value={Form.business_tel || ''} name="business_tel"  />
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                        <InputLabel id="demo-simple-select-label">Select Type of User</InputLabel>
                                        <Select
                                        onChange={handleChange}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        className='form-control'
                                        label=""
                                        name="usertype"
                                        value={Form.usertype || ''}  
                                        
                                        >
                                            
                                            <MenuItem value="jupit">Jupit User</MenuItem>
                                            <MenuItem value="non-jupit">Non-Jupit User (Individuals)</MenuItem>
                                            <MenuItem value="business">Business/Institution</MenuItem>
                                        </Select>
                                </div>
                                <div className='form-group'>
                                        <InputLabel id="demo-simple-select-label">Preferred Means of Communication</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        className='form-control'
                                        onChange={handleChange}
                                        label="Age"
                                        name="means_commm"
                                        value={Form.means_commm || ''} 
                                         
                                        >
                                            
                                            <MenuItem value="whatsapp">Whatsapp</MenuItem>
                                            <MenuItem value="signal-messaging">Signal Messaging App</MenuItem>
                                            <MenuItem value="email">Email</MenuItem>
                                        </Select>
                                </div>
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <TextField id="filled-basic" 
                                        label="write your message? *"
                                        multiline
                                        rows={5}
                                        variant="filled" 
                                        className='form-control'
                                        name="message"
                                        onChange={handleChange}
                                        value={Form.message || ''}  
                                        />
                                </div>
                                
                            </div>
                            <div className='formDiv'>

                                <div className='form-group'>
                                    <Button fullWidth variant="contained" style={{backgroundColor:'#1c1c93',height:50}} disabled={RegisterValidForm || disabled} onClick={()=>submitContact()}>{btn_name}</Button>
                                </div>
                                
                            </div>

                            
                        </div>

                        <div className='terms_of_service'>
                            <div className='terms_OTC'>OTC Terms of Service</div>
                            <div className='list-terms'>
                                <li>The minimum  order size is $5,000</li>
                                <li>Jupit OTC does not custody assets on behalf of trading partners.</li>
                                <li>Eligibility for OTC trading are subject to AML/KYC and other requirement</li>
                            </div>
                        </div>
                    
                    </div>
                    
            </div>
            
        </div>
    )
}

export default Index;