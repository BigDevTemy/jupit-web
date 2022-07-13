import '../../assets/css/Home/section1.css'
import Globe from '../../assets/images/globe.png'

const Index = ()=>{
    return (
        <div className="section1">
            <div className='globeSession'>
                <div className='globe'>
                    <img src={Globe}/>
                </div>
                <div className='BCQparent'>
                    <div className='gateway'>Your gateway to your global economy</div>
                    <div className='gatewayText'>
                        BCQ crypto lending, trading, and custody for worldwide
                    </div>
                    <div className='Institution'>
                        Institutional Markets is a full-stack crypto services platform that works worldwide with crypto-native businesses and institutional clients on trading, and custody solutions.
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