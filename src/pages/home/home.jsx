import React from 'react';
import "./home.css";
import Hero from "../../components/Hero/hero";
import { FaApple } from "react-icons/fa";
import Img from "../../assets/hand5.jpg";


const Home = () => {
    return (
        <div>
            <Hero />
            <div className="section1">
                <div className="sectionContainer">
                    <div className="section1Content1">
                        <h1>iPhone 16 Pro</h1>
                        <h2>Hello, Apple intelligence</h2>
                        <div className="section1Content1Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='buyBtn'>Buy</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="section2">
                <div className="section2Container">
                    <div className="section2Content1">
                        <h1>iPhone 16 Pro</h1>
                        <h2>Hello, Apple intelligence</h2>
                        <div className="section2Content1Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='buyBtn'>Buy</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="section3">
                <div className="section3Container">
                    <div className="section31 content1">
                        <h4>Watch opening weekend of<br/> the biggest MLS season yet</h4>
                        <p className='starts'>Starts February 22nd at 11:30 a.m PT</p>
                        <button className="streamBtn">Stream now</button>
                    </div>
                    <div className="section31 content2">
                        <h2><FaApple size={35}/>Watch</h2>
                        <h3>Serie 10</h3>
                        <h4>Thinstant classic</h4>
                        <div className="section3Content2Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='buyBtn'>Buy</button>
                        </div>
                    </div>
                    <div className="section31 content3">
                        <h2>iPad Pro</h2>
                        <h4>Unbelivably Thin. Incredibly power</h4>
                        <div className="section3Content3Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='buyBtn'>Buy</button>
                        </div>
                    </div>
                    <div className="section31 content4">
                        <h2>Macbook Air</h2>
                        <h4>Lean. Mean. M3 machine</h4>
                        <div className="section3Content4Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='buyBtn'>Buy</button>
                        </div>
                    </div>
                    <div className="section31 content5">
                        <h2><FaApple size={35}/>Trade In</h2>
                        <h4>Get $180-$650 in credit when you<br/>  trade in iphone 12 or higher</h4>
                        <button className='getEstimateBtn'>Get Estimate</button>
                    </div>
                    <div className="section31 content6">
                        <h2><FaApple size={35}/>Card</h2>
                        <h4>Get up to 3%  daily cash back<br/>  with every purchase</h4>
                        <div className="section3Content6Btn">
                            <button className='learnMoreBtn'>Learn more</button>
                            <button className='applyNowBtn'>Apply now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="section4Content1">
                    <h1>Apple Intelligence</h1>
                    <FaApple size={35}/>
                    <div className="section4Content2">
                        <div className="content41">
                            <img src={Img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5">
                <div className="section5Content1">
                    <p>1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.</p>
                    <br/>
                    <p>Subscription required for MLS Season Pass.</p>
                    <br/>
                    <p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                    <br/>   
                    <p>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</p>
                    <br/>
                    <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
                        
                    <p>Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English (Australia, Canada, Ireland, New Zealand, South Africa, UK, or U.S.), as part of an iOS 18, iPadOS 18, and macOS Sequoia software update. Additional features and Chinese (Simplified), English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese (Brazil), and Spanish language support available in early April, with more languages coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.</p>
                    <br/>   
                    <p>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</p>
                    <br/>   
                    <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
                </div>
                <hr className='line'/>
                <div className="section5Content2">
                    <div className='section5Content2Container1'>
                        <div id="con1">
                            <p className="header">Shop and Learn</p>
                            <p>Store</p>
                            <p>Mac</p>
                            <p>iPad</p>
                            <p>iPhone</p>
                            <p>Watch</p>
                            <p>Vision</p>
                            <p>AirPods</p>
                            <p>TV & Home</p>
                            <p>AirTag</p>
                            <p>Accessories</p>
                            <p>Gift Cards</p>
                        </div>
                        <div id="con2">
                            <p className="header">Apple Wallet</p>
                            <p>Wallet</p>
                            <p>Apple Card</p>
                            <p>Apple Pay</p>
                            <p>Apple Cash</p>
                        </div>
                    </div>
                    <div className='section5Content2Container2'>
                        <div id="con3">
                            <p className="header">Account</p>
                            <p>Manage Your Apple Account</p>
                            <p>Apple Store Account</p>
                            <p>iCloud.com</p>
                        </div>
                        <div id="con4">
                            <p className="header">Entertainment</p>
                            <p>Apple TV+</p>
                            <p>Apple One</p>
                            <p>Apple Music</p>
                            <p>Apple Arcade</p>
                            <p>Apple Fitness+</p>
                            <p>Apple News+</p>
                            <p>Apple Podcasts</p>
                            <p>Apple Books</p>
                            <p>App Store</p>
                        </div>
                    </div>
                    <div className='section5Content2Container3'>
                        <div id="con5">
                            <p className="header">Apple store</p>
                            <p>Find a Store</p>
                            <p>Genius Bar</p>
                            <p>Today at Apple</p>
                            <p>Group Reservations</p>
                            <p>Apple Camp</p>
                            <p>Apple Store App</p>
                            <p>Certified Refurbished</p>
                            <p>Apple Trade In</p>
                            <p>Financing</p>
                            <p>Carrier Deals at Apple</p>
                            <p>Order Status</p>
                            <p>Shopping Help</p>
                        </div>
                    </div>
                    <div className='section5Content2Container4'>
                        <div id="con6">
                            <p className="header">For Business</p>
                            <p>Apple and Business</p>
                            <p>Shop for Business</p>
                        </div>
                        <div id="con7">
                            <p className="header">For Education</p>
                            <p>Apple and Education</p>
                            <p>Shop for K-12</p>
                            <p>Shop for College</p>
                        </div>
                        <div id="con8">
                            <p className="header">For Healthcare</p>
                            <p>Apple in Healthcare</p>
                            <p>Mac in Healthcare</p>
                            <p>Health on Apple Watch</p>
                            <p>Health Records on iPhone and iPad</p>
                        </div>
                        <div id="con9">
                            <p className="header">For Government</p>
                            <p>Shop for Government</p>
                            <p>Shop for Veterans and Military</p>
                        </div>
                    </div>
                    <div className='section5Content2Container5'>
                        <div id="con10">
                            <p className="header">Apple values</p>
                            <p>Accessibility</p>
                            <p>Education</p>
                            <p>Environment</p>
                            <p>Inclusion and Diversity</p>
                            <p>Privacy</p>
                            <p>Racial Equity and Justice</p>
                            <p>Supply Chain</p>
                        </div>
                        <div id="con11">
                            <p className="header">About apple</p>
                            <p>Newsroom</p>
                            <p>Apple Leadership</p>
                            <p>Career Opportunities</p>
                            <p>Investors</p>
                            <p>Ethics & Compliance</p>
                            <p>Events</p>
                            <p>Contact Apple</p>
                        </div>
                    </div>

                </div>
                <p className='footerContact'>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
                <div className="footer">
                    <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <div className="footerContent2">
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>Sales of refund</p>
                        <p>Legal</p>
                        <p>Site Map</p>
                    </div>
                    <p>Nigeria</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
