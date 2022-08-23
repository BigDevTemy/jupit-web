import '../../assets/css/blog/blog.css'
import blog1 from '../../assets/images/laptop_5.jpg'
import profile from '../../assets/images/Mask Group.png'
const Index = ()=>{
    return(
        <div className="blogParent">
            <div className='blogStart'>
                    <div>
                        <img src={blog1}/>
                    </div>

                    <div>
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
            <div className='blogOthers'>

            </div>
        </div>

    )
}

export default Index;