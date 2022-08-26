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
                        <div className='policyText-Title'>Privacy Policy</div>
                        <div className='policyText-content'>
                             One of our top priorities at Jupit Technologies accessible through https://jupitapp.co, is the privacy of our users and visitors.
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Overview</div>
                        <div className='policyText-content'>
                        This Privacy Policy applies to our online activities and is important to our website visitors who submit and/or collect data at https://jupitapp.co/. This clause is not applicable to data collected offline or via channels other than this website. Under any applicable law or regulation, each user reserves the right to privacy and security.
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Consent</div>
                        <div className='policyText-content'>
                        You acknowledge and consent to the phrases of this Privacy Policy while you order, sign on or have interaction with us or any of our services irrespective of how they may be accessed or used.
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Changes to this Privacy Policy</div>
                        <div className='policyText-content'>
                            <p>We can also additionally regulate this Privacy Policy occasionally by posting or importing an updated model on our website. The updated model will be effective from the date of publication.</p>
                            <p>However, users will also be notified by email (sent to the email address specified in your account) and via a notification on the Jupit platform if the updated model contains many terms.</p>
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Custodian</div>
                        <div className='policyText-content'>
                            <p>Jupit Technologies is the custodian and is responsible for protecting the privacy of all personal data that is shared and/or collected through access to https://jupitapp.co.</p>
                            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us below –<br/><br/>
                                Customer Service Desk<br/>
                                Email address: hello@jupitapp.co

                            </p>
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Private Data We Collect About You</div>
                        <div className='policyText-content'>
                            <p>Private or personal data means any information about a natural person by which that individual can be identified. Data intentionally excluded (anonymous data) is not included.</p>
                            <p className='paragraph'>
                               <div>I.	Private Information</div> 
                                <p>
                                     Private information includes first name, last name and other name, username or related identifier, date of birth, gender, signature, residence address, billing address, email address and national identity card/number etc. 
                                </p>
                                <p>
                                    We may gather and process the identifying information for the purposes of product campaign or conducting direct marketing, complying with applicable laws and regulations, detecting and preventing fraud, protecting our corporate role and of others as it may relate to customer satisfaction and cooperate accomplishment.
                                </p>
                            </p>
                            <p className='paragraph'>
                               <div>II.	Identity Documentation</div> 
                                <p>
                                    Official documents of identification include government-issued identification documents such as international passports, driver's licenses and national ID cards.
                                </p>
                                <p>
                                We provide our services, comply with applicable laws and regulations, detect and prevent fraud, protect the vital interests of us and others, provide communications within the Services, provide services to our customers and protect data; we may collect and process your publicly identifiable documents for storage.
                                </p>
                            </p>
                            <p className='paragraph'>
                               <div>III.	Transaction Data</div> 
                                <p>
                                    Transaction data includes payment details about you, bank account details and other information about the services you have received from us.
                                </p>
                                <p>
                                    We provide our services within the applicable financial regulations, detect and prevent fraud, protect the vital interests of us and others. We're committed to provide you exceptional customer experience, ensure quality control, and store data and information and in order to do so, we may collect and process data about your transactions. Security, research and development, customer service improvement and direct marketing campaigns.
                                </p>
                            </p>
                            <p className='paragraph'>
                               <div>IV.	Comunication Data</div> 
                                <p>
                                    Communication records carries all messages, communications, demands, records, and so forth to make use of or related to the purpose of consumer management demands. 
                                </p>
                                <p>
                                    We can gather and process your communication data for the purpose of customer satisfaction, maintain best control, facts security, inquire approximately and development reason, observe pertinent legal guidelines and controls, make strides consumer involvement, and execute coordinate marketing.
                                </p>
                            </p>
                            
                            <p className='paragraph'>
                               <div>V.	Technical Data</div> 
                                <p>
                                Technical data includes User Activity, Time Zone and Location, Device or Browser Type and Version, Operating System, and Platform, Browser Plugin and Version, Authentication and Security data, Cookies or every other technology associated to CLICK-PATH technology.
                                </p>
                                <p>
                                We may gather and process your technical data to improve user satisfaction and to comply with applicable laws and regulatory requirements. 
                                </p>
                            </p>
                            <p className='paragraph'>
                               <div>VI.	Anonymized and Amassed Information </div> 
                                <p>
                                     We may gather, utilize and share amassed Information as well as combine your exchange information with professional information such as factual or statistic data for the purpose of customer satisfaction, analyzing usefulness of our website and its traffic. 
                                </p>
                                <p>
                                    For case; Totaled Information may well be inferred from your individual information but isn't considered individual information in law as this information will not straightforwardly or by implication uncover your identity.
                                </p>
                                <p>
                                    In any event, if the collected information is combined or linked with your personal data to allow us to identify you specifically or indirectly, we will treat the combined information as individual information that can be used in accordance with necessary protection mechanism.
                                </p>
                            </p>
                        </div>

                    </div>

                    <div className='policyText'>
                        <div className='policyText-Title'>Divulgence Of Your Individual Data</div>
                        <div className='policyText-content'>
                            <p>
                            We might impart your information with certain third-party which we regard vital in arrange to supply our Administrations viably or comply with pertinent laws and administrative requirements. Our engagement terms with these third parties might entirely require them to as it were utilizing your data in association with the administrations, they perform for us and forbid them from offering your data to anybody else. Such engagements should moreover be subject to proficient obligation of privacy where appropriate.
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