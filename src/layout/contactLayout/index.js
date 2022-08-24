import '../../assets/css/contact/contact.css'
import {IoHomeOutline} from 'react-icons/io5'
const Index = ()=>{
    return (
        <div className="contactIndex">
            <div className='heroContact'>
                    <div className='cardContact'>
                        <div className='iconHome'>
                            <IoHomeOutline  size="30" color='#4bb543' style={{cursor:'pointer'}}/>
                        </div>
                        <div className='say_hello'>Say Hello to Us</div>
                        <div className='question'>Do you have any questions? Are you ready to reduce cost and create new revenue? Or you simply want to say hi? Drop us a message.</div>
                    </div>
            </div>
        </div>
    )
}

export default Index