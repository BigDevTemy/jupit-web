import '../../assets/css/Home/section5.css'
import Processor from '../../assets/images/processor.png'
import Server from '../../assets/images/server.png'
import Security from '../../assets/images/security.png'
import Aos from 'aos'
import { Link } from 'react-router-dom'
const Index = ()=>{
    return (
        <div className="section5">
            <div className='mycontainer'>
                <div className='gateway'>Gateway to the global economy</div>
                <div className='CryptoWalletIn'>
                    Cryptocurrency in Every Wallet
                </div>
                    <div className='motto'>
                         <div data-aos="flip-right">
                                <div className='motoImageDiv'>
                                    <img src={Processor}/>
                                </div>
                                <div className='mottoTextTitle'>
                                    Future Trade Week
                                </div>
                                <div className='mottonText'>
                                    BCQ crypto supports a variety of the most popular digital crypto currencies.
                                </div>
                               
                                    <Link to="/blog">
                                        <div className='readmore'> Read more</div>
                                    </Link>
                                
                        </div>
                        <div data-aos="flip-right">
                            <div className='motoImageDiv'>
                                <img src={Security}/>   
                            </div>
                            <div className='mottoTextTitle'>
                                    Future Trade Week
                            </div>
                            <div className='mottonText'>
                                    BCQ crypto supports a variety of the most popular digital crypto currencies.
                            </div>
                            <Link to="/blog">
                                <div className='readmore'> Read more</div>
                            </Link>
                            
                        </div>
                        <div data-aos="flip-right">
                            <div className='motoImageDiv'>
                                <img src={Server}/>           
                            </div>
                            <div className='mottoTextTitle'>
                                    Future Trade Week
                            </div>
                            <div className='mottonText'>
                                    BCQ crypto supports a variety of the most popular digital crypto currencies.
                            </div>
                            
                            <Link to="/blog">
                                <div className='readmore'> Read more</div>
                            </Link>
                           
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index;