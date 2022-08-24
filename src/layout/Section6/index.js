import '../../assets/css/Home/section6.css'
const Index=()=>{
    return (
        <div className="section6" id="contact">
                   <div className='CryptoWallet'>Get in touch</div>
                   <div className='formDiv'>
                    <div className='form'>
                            <div className='form-group fm-group'>
                                <input type="text" placeholder='Your name' className='form-control fg-input'/>
                            </div>
                            <div className='form-group fm-group'>
                                <input type="text" placeholder='Your Email' className='form-control fg-input'/>
                            </div>
                            <div className='form-group fm-group'>
                               <textarea className='form-control' rows="10" placeholder='Message'>

                               </textarea>
                            </div>
                            <div className='form-group'>
                                <input type="button" value="Submit" className='btn btn-primary-me form-control' />
                            </div>
                    </div>
                   </div>
                   
        </div>
    )
}

export default Index;