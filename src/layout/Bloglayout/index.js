import '../../assets/css/blog/blog.css'
import blog1 from '../../assets/images/laptop_5.jpg'
import profile from '../../assets/images/Mask Group.png'
import blogpost1 from '../../assets/images/blogpost-2.png'
import blogpost2 from '../../assets/images/blogpost-3.png'
import blogpost3 from '../../assets/images/blogpost-4.png'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Index = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000})
},[])
    return(
        <div className="blogParent">
            <div className='blogStart'>
                    <div data-aos="fade-up">
                        <div><img src={blog1}/></div>
                        
                    </div>

                    <div data-aos="fade-up">
                        <div className='topicSection'><span>PRODUCT. 8TH AUGUST 2022</span></div>
                        <div className='interview'>Interview - What is Like to work remotely in a big size company?</div>
                        <div className='shortnote'>
                             People says that developing products isnt easy.Neither it is to build long distance relationship. People says that developing products isnt easy.Neither it is to build long distance relationship.
                        </div>
                        <div className='profile'>
                            <div>
                                <img src={profile}/>
                            </div>
                            <div>
                                    <div>Temiloluwa Odewumi</div> 
                                    <div>Admin</div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className='blogOthers' data-aos="fade-up">
                <div>   
                      <div><img src={blogpost1}/>  </div>
                      <div className='categoryBlog'>
                            <div>DEVELOPMENT</div>
                            <div>AUGUST 23rd 2022</div>
                        </div>
                        <div className='blogTitle'>
                            REMOTE VS PHYSICAL ------- Here is how  you can choose who you want.
                        </div>
                        <div className='smallnote'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                        </div>
                        <div className='readmore'>
                            ReadMore.
                        </div>
                </div>
                <div>
                    <div>
                        <img src={blogpost2}/> 
                    </div>
                 
                    <div className='categoryBlog'>
                            <div>DEVELOPMENT</div>
                            <div>AUGUST 23rd 2022</div>
                    </div>
                    <div className='blogTitle'>
                        REMOTE VS PHYSICAL ------- Here is how  you can choose who you want.
                    </div>
                    <div className='smallnote'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                    </div>
                    <div className='readmore'>
                        ReadMore.
                    </div> 
                </div>
                <div>
                    <div><img src={blogpost3}/> </div> 
                    <div className='categoryBlog'>
                            <div>DEVELOPMENT</div>
                            <div>AUGUST 23rd 2022</div>
                    </div>
                    <div className='blogTitle'>
                        REMOTE VS PHYSICAL ------- Here is how  you can choose who you want.
                    </div>
                    <div className='smallnote'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.
                    </div>
                    <div className='readmore'>
                        ReadMore.
                    </div> 
                    
                </div>
            </div>
        </div>

    )
}

export default Index;