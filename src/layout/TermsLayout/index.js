import '../../assets/css/Policy/policy.css'
import logo from '../../assets/images/jupit_white.svg'
import Phone from '../../assets/images/phone1.png'
import banner from '../../assets/images/banner.svg'
import umbrella from '../../assets/images/umbrella.svg'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useEffect, useState } from 'react'
const Index = ()=>{
   
    return (
        <div className="policy">
             <div className='privacyText'>
                    <div className='policyText'>
                        <div className='policyText-Title'>Terms of Service</div>
                        <div className='policyText-content'>
                        One of our top priorities at Jupit Technologies accessible through https://jupitapp.co, is the terms and condition that applies to our service. Please ensure to read this Agreement carefully.
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Overview</div>
                        <div className='policyText-content'>
                        <p>These Terms of Use is entered into between you (hereinafter referred to as “you” or “your”) and Jupit Technologies (hereinafter referred to as Jupit Technologies). By accessing, using, downloading, or clicking on “I agree” to accept any Jupit Services, it will be regarded that you agreed to have read, understood and accepted all of the terms and conditions stipulated in these Terms of Use as well as our Privacy Policy at www.jupitapp.co/terms-of-service.</p>
                        <p>In addition, when using some features of the Services, you may be subject to specific additional terms and conditions applicable to those features. But if you disagree with any part of this context, please do not use the Jupit Platform or purchase any Jupit Services.</p>
                        
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Jupit Services</div>
                        <div className='policyText-content'>
                        Jupit is an online wallet service that allows users to securely hold digital assets in their wallet or exchange it as settlement for transactional engagements.
                        </div>

                    </div>

                   

                    

                    <div className='policyText'>
                        <div className='policyText-Title'>Eligibility</div>
                        <div className='policyText-content'>
                            <p>To be eligible to use or access any Jupit Services, the following conditions must be met by you: -.</p>
                                <p className='paragraph'>
                                
                                    <p className='checkI'>
                                        <span>I.</span> <p>You must have attained the age of eighteen (18) years or be of legal age to form a binding contract as required by law.</p>
                                    </p>
                                </p>

                                <p className='paragraph'>
                                
                                    <p className='checkI'>
                                         <span>II.</span><p> You must be a duly registered customer on the Jupit website accessible through <a href="https://www.jupit.co/signup">www.jupit.co</a></p>
                                    </p>
                                </p>
                                <p className='paragraph'>
                                
                                    <p className='checkI'>
                                         <span>III.</span><p>As an individual, legal person, employee or agent of a legal business entity, you must have full power, authority and capacity to accept these Terms of Use;</p>
                                    </p>
                                </p>
                                <p className='paragraph'>
                                
                                    <p className='checkI'>
                                         <span>IV.</span><p>You have not been previously restricted from using or accessing any Jupit Services</p>
                                    </p>
                                </p>
                                <p className='paragraph'>
                                
                                    <p className='checkI'>
                                         <span>V.</span><p>Your use of Jupit Services will not violate any applicable laws and regulations applicable to you, including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing.</p>
                                    </p>
                                </p>
                                    
                            
                                
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>KYC Information</div>
                        <div className='policyText-content'>
                            <p>
                                You hereby acknowledge that in order to use or access the Jupit Platform or Jupit Services, you must provide us with correct and updated Personal Information.
                            </p>
                            <p>
                                Personal Information may include – identity data, identity documents, transaction data, and technical data. Your Personal Information shall be properly protected and kept confidential at all times.
                            </p>
                            <p>
                                We may use, process, store and transfer your Personal Information in order to: -
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt' >.</span> Provide Jupit services to you;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Comply with applicable laws and regulatory requirements;;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Secure your Jupit user account and maintain data and information security;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Verify the identity details and bank account details which you provide to us;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Protect our vital interests and that of others;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Provide service communications;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Provide customer service;</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Facilitate corporate reorganizations; and</p>
                                <p style={{marginTop:20,marginLeft:10}}><span className='alphabelt'>.</span> Implement direct marketing campaigns.</p>


                            </p>
                            
                        </div>

                    </div>
                    <div className='policyText'>
                        <div className='policyText-Title'>More information is provided below.</div>
                        <div className='policyText-content'>
                            <p className='paragraph'>
                              
                                <p className='specialParagraph'>
                                    <p className='alphabelt'>a.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Public identity check specialist/organizations</span> - In request to distinguish and forestall deceitful transaction and conform to pertinent regulations and administrative prerequisites, we might impart your information to third party identity confirmation specialist/organizations who will verify your identity/personality against accessible openly available reports and other public database.
                                        </p>	
                                </p>
                                <p className='specialParagraph'>
                                    <p className='alphabelt'>b.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Banks and other monetary institution</span> - In request to handle payments and settlements and follow appropriate regulations and administrative necessities we might impart your information to banks and monetary establishments.
                                        </p>	
                                </p>

                                <p className='specialParagraph'>
                                    <p className='alphabelt'>c.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Service providers</span> - We might impart your information to service source that we connect with their administrations to execute different business capacities. Instances of these service instructions incorporate: cloud depository, network infrastructure, product campaigns, data analytics and so forth.
                                        </p>	
                                </p>
                                <p className='specialParagraph'>
                                    <p className='alphabelt'>d.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Proficient consultants</span> - We might impart your information to proficient consultants to avail ourselves with specialized, monetary or lawful counseling administrations or in consistence with our lawful commitments.
                                        </p>	
                                </p>
                                <p className='specialParagraph'>
                                    <p className='alphabelt'>e.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Organizations or other establishments during corporate redesigns</span> - If an adjustment of our corporate design happens because of the deal, move or consolidation of parts of our business or our resources or that of another establishment by us, then, at that point, the new corporate substance might involve your own information similarly as set out in this protection strategy. You will get earlier notification of any adjustment of appropriate approaches.
                                        </p>	
                                </p>

                                <p className='specialParagraph'>
                                    <p className='alphabelt'>f.</p>
                                        <p className='divalphabelt'>
                                            <span className='alphabelt'>Law Enforcement/Regulatory proxy and authorities</span> - We might impart your information to regulation authorization proxy and authorities assuming we are limited by regulation or any legitimate technique to share same or when we trust sincerely that the exposure of your data is important to forestall actual damage or monetary misfortune, to report presumed criminal behavior, or to research infringement of our Terms of Services or some other relevant arrangements.
                                        </p>	
                                </p>




                                
                            </p>
                            
                        </div>

                    </div>
             </div>
          
        </div>
    )
}
export default Index;