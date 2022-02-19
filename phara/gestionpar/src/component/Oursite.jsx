import React from 'react'
 import '../styles/oursite.css'
 import image1 from '../images/user.png'
 import image2 from '../images/bulb.png'
 import image3 from '../images/telegram.png'

function Oursite() {
    return (
        <section className="our">
            <div className="max-width">
                <div className="container">
                    <div className="title">Welcome to Our Site!</div>
                    <div className="text">We are a biopharmaceutical company focused on the discovery, development and commercialization of <br></br> innovative therapies intended to improve outcomes in patients sufferings</div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="img-our">
                                <img src={image1} alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Company was founded by scientists dedicated to create new therapeutics</div>
                            <div className='btn'>
                                <button className='button'> Our team</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-our">
                                <img src={image2} alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Company was founded by scientists dedicated to create new therapeutics</div>
                            <div className='btn'>
                                <button className='button'> Discover New</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-our">
                                <img src={image3} alt="" />
                        </div>
                        <div className="text">
                            <div className="title">Company was founded by scientists dedicated to create new therapeutics</div>
                            <div className='btn'>
                                <button className='button'> Check It</button>
                             </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Oursite;
