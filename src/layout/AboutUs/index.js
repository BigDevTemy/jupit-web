import '../../assets/css/aboutus/aboutus.css'
import about1 from '../../assets/images/about-2.jpg'
import about2 from '../../assets/images/about-3.png'
import googleplay from '../../assets/images/googleplay.svg'
import image1 from '../../assets/images/1.jpg'
import image4 from '../../assets/images/4.jpg'
import image5 from '../../assets/images/5.jpg'
import favicon from '../../assets/images/favicon.svg'
import Aos from 'aos';
import Vision from '../../assets/images/zoom.png'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
    return (
        <div className="aboutus">
           
            <div className='whoweare' data-aos="fade-up">
                <div>
                    <div className='title'>
                        <div>Who We Are</div>
                        {/* <small>who we are @ jupit.</small> */}
                    </div>
                    
                    <p>
                    To put it simple, we are all about simplifying your daily exchange. Beyond operating a secure channel, we're dedicated to providing you with the best service, with a focus on dependability matched with satisfaction.
                    </p>
                </div>
                <div data-aos="fade-up">
                    <img src={about1} />
                </div>

            </div>
            <div className='achievement_parent'>
                <div className='achievement'>
                    <div>
                        <div className='happy'>Trades per day</div>
                        <div>418+</div>
                        
                    </div>
                    <div>
                        <div className='happy'>Digital Assets</div>
                        <div>100m+</div>
                        
                    </div>
                    <div>
                        <div className='happy'>Happy users</div>
                        <div>3.5k</div>
                        
                    </div>
                    
                </div>

            </div>
            

            
                
                    <div className='missionStatement'>
                        <div className='ourmission' data-aos="fade-up" >
                            <div className='whatdefinesus_parent'>
                                   

                                    <div className='whatdefinesus_txt'>
                                        <div className='modify'>
                                            <div className="mtitle">What Defines Us</div>
                                                {/* <div className='msubtext'>Jupit Mission Statement</div> */}
                                        </div>
                                        <div className='aboutPlatform'>
                                            <div className='whatdefinesus'>At Jupit, we understand that digital assets can be adopted in a fair and facilitated structure and that's why we've done a few exceptionally curious things to help you seamlessly and consistently trade or exchange your digital assets from anywhere at anytime. Jupit is preeminent with astonishing values.</div>
                                            
                                        </div>
                                    </div>
                                    <div className='whatdefinesus_img'>
                                        <img src={about2} />
                                    </div>

                            </div>
                    
                        </div>

                        <div className='myMission'>
                                <div data-aos="fade-down">
                                    <div className='ourmission' data-aos="fade-up">
                                        <div className='myMissionTitle'>
                                                <div className="mtitlex">PROVIDING RELIABLE SOLUTIONS</div>
                                                {/* <div className='msubtext'>Jupit Mission Statement</div> */}
                                        </div>
                                        <div className='aboutPlatform'>
                                            <div>Our platform is intended mainly to simplify your daily exchange in a most reliable and secured way.</div>
                                            <div className='smallText'>- Mission</div>
                                        </div>
                        
                                    </div>
                                </div>


                                <div data-aos="fade-down">
                                    <div className='ourmission' >
                                        <div className='myMissionTitle'>
                                                <div className="mtitlex">BORDERLESS FREEDOM</div>
                                                {/* <div className='msubtext'>Jupit Vision Statement</div> */}
                                        </div>
                                        <div className='aboutPlatformII'>
                                            <div className='borderlessText'>Our vision is to advance the use of borderless currency within the Africa communities. We want to make sure everyone and who wants to engage in borderless payments gets prompt and clear access in their transactions.</div>
                                            <div className='smallText'>- Vision</div>
                                        </div>
                            
                                    </div>


                                </div>
                        </div>

                        

                        
                    </div>

            

            
            {/* <div className='ceopunditDiv'>
                <div className='Opacity'></div>
                <div className='ceopundit'>
                    <div className='ceopunditdiv1'>
                        <div>CEO PUNDIT</div>
                        <small>Get ready to start an interesting journey.</small>
                        <small>Our services and simplicity will aid you walk through the world of crytoexchange.</small>
                    </div>
                    <div className='ceopunditdiv2' data-aos="flip-right">
                        <img src={googleplay}/>
                    </div>
                </div>
                
            </div> */}
            <div className='corevalues'>
                <div className='msubtext addcolor'>OUR CORE VALUES</div>
                <div className='jupitvalues'>
                    <div className='j' data-aos="fade-up">
                        <div><span className='span_name'>J</span>ubilant</div>
                        <div>
                            We're grateful, positive, laugh and accelerate each other. We work hard and make it fun too.
                        </div>
                    </div>
                    <div className='u' data-aos="fade-down">
                        <div><span className='span_name'>U</span>nity</div>
                        <div>
                            Our diversity is celebrated in unity by combining the individual experiences, diverse abilities, and distinctive talents of each team member to create an unstoppable momentum and propels unthinkable accomplishments.
                        </div>
                    </div>
                    <div className='p' data-aos="fade-up">
                        <div><span className='span_name'>P</span>assion</div>
                        <div>
                        Through innovation, we generate solutions for our customers and raise the bar both within our workplace and throughout our industry.
                        </div>
                    
                    </div>
                    <div className='i' data-aos="fade-down">
                        <div><span className='span_name'>I</span>nnovation</div>
                        <div>
                            With our Passion at the heart of everything we do, we nurture ideas, inspire excellence, and find creative ways to eliminate obstacles to help us serve our customers better.
                        </div>
                    </div>
                    <div className='t' data-aos="fade-up">
                        <div><span className='span_name'>T</span>eam Spirit</div>
                        <div>
                            Our team is made of the most brilliant minds that are consistently demonstrating an unselfish commitment to work with others to create a collaborative culture.
                        </div>
                    </div>
                </div>
                <div className='ceoSpeech'>
                    <div>
                        <div className='circleCEOimg' data-aos="flip-down">
                                
                        </div>

                        <div className='ceo-name' > Femi A. Somoye</div>
                        <div className='ceo-title'>Business Manager/CEO</div>

                    </div>
                    
                   
                   <div>
                        <div data-aos="zoom-out">
                            “
                                I believe few things are difficult to get done in life and your digital asset exchanges shouldn't be one of them. That's why at Jupit, we have created a secure channel to help you seamlessly and consistently trade your digital assets. It is also important that people can hold their digital assets securely, or exchange it with friends, families or business partners around the world. Now this isn´t just about the one percent; we want to make sure everyone and anyone who wants to engage in borderless payments gets prompt and clear access in their transactions.
                            
                            ”
                        </div>
                   </div>
                </div>
               


            </div>

            <div className='crew'>
                        <div>
                            {/* <div className="mtitle">OUR AWESOME SQUAD</div> */}
                            <div className='msubtext'>OUR AWESOME SQUAD</div>
                        </div>
                        <div className='teamDiv'>
                                <div className='teammember' data-aos="flip-left">
                                    <div>
                                        <img src={image1}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                        <div className='circleDetails'>
                                                <div >
                                                    Femi A. Somoye.
                                                </div>
                                                <div>
                                                    Business Manager.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'  data-aos="flip-right">
                                    <div>
                                        <img src={image4}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Ejire Sylvester.
                                                </div>
                                                <div>
                                                   Finance Manager
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'  data-aos="flip-right">
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Oladimeji  Qazeem.
                                                </div>
                                                <div>
                                                   Operation Manager
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className='teammember'  data-aos="flip-left">
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Peace  Oriola.
                                                </div>
                                                <div>
                                                   Brand Specialist.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                  
                                   
                                </div>
                                <div className='teammember'  data-aos="flip-up">
                                    <div>
                                        <img src={image5}/>
                                    </div>
                                    <div className='teambody'>
                                        <div className='teamdescription'>
                                            <div className='circleDetails'>
                                                <div>
                                                    Temiloluwa  Vincent.
                                                </div>
                                                <div>
                                                   Software Developer.
                                                </div>
                                            </div>
                                            <div className='circle'>
                                                <img src={favicon} className="fav"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                  
                                   
                                </div>
                              
                        </div>

            </div>

            
        </div>
    )
}

export default Index;