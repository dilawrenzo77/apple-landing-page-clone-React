import React from 'react';
import "./hero.css";
import Apple1 from "../../assets/apple1.png";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="heroContainer">
                <div className="heroContent1">
                    <h1>iPhone 16<span>e</span></h1>
                    <h2>Latest iPhone. Greatest price</h2>
                    <h3>Available starting 2.28</h3>
                    <div className="heroContent1Btn">
                        <button className='learnMoreBtn'>Learn more</button>
                        <button className='preOrderBtn'>Pre-order</button>
                    </div>
                </div>
                <div className="heroContent2">
                    <img src={Apple1} alt="heroImage" />
                </div>
                <div className="heroContent3">
                    <h2 className='heroContent3Text'>Built for Apple intelligence</h2>
                </div>
            </div>
        </div>
    );
}

export default Hero;
