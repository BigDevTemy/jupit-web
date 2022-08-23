import '../../assets/css/giftcard/giftcard.css'
import GiftCard from '../../assets/images/giftcard1.png'
import convinent from '../../assets/images/remote.jpg'
import secured from '../../assets/images/secured.jpg'
import bestrate from '../../assets/images/bestrate.png'
const Index = ()=>{
    return (
        <div className="giftcardParent">
            <div className="section1-giftcard">
                <div>
                    <img src={GiftCard}/>
                </div>
                <div>
                    <h2 className='h2-join'>Join The Gift Card Trend</h2>
                    <p>
                        Gift cards are no exception in the world of transactions and exchanges, with the global market projected to reach $2,076.51 billion by 2027.
                    </p>
                    <p>
                        It’s an established fact that many consumers have adopt the use of gift cards as an alternative means of secured payments for shopping online. In addition, 7 out of every 10 cash gift or retail incentive is a gift card voucher.
                    </p>
                    <p>
                    Howbeit, for those gift vouchers to satisfy its spendable value, it needs to be converted to real cash and that’s where we positioned ourself at Jupit to help you seamlessly and securely trade your cards.
                    </p>
                </div>
            </div>

            <div className='section2-giftcard'>
                <h3>An awesome place to trade securely with no worries or delay.</h3> 
                <small >It is perfectly built for you.</small>
                <div className='ourdiff'>

                    <div>
                        <div>
                            <img src={bestrate} />
                        </div>
                        <div>Best Rate</div>
                        <div>
                            We Offer the best rate in the market for whatever giftcard you want to trade.
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={convinent} />
                        </div>
                        <div>Convinent</div>
                        <div>
                            Exchange your gift card, anytime using our modern giftcard trading channel.
                        </div>
                        
                    </div>
                    <div>
                        <div>
                            <img src={secured} />
                        </div>
                        <div>Trust & Secure</div>

                        <div>
                            Trade with confidence, as we assure you the highest level of encryption.

                        </div>
                    </div>

                </div>
                
                
            </div>
            
        </div>
    )
}

export default Index;