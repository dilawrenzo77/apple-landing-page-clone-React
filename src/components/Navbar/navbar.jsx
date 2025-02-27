import React from 'react';
import "./navbar.css";
import { Link }  from "react-router";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbarContainer">
                <FaApple className="navIcons" size={22}/>
                <div className="navLink">
                    <Link to='/' className='links'>Store</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Shop</p>
                            <h3>Shop the latest</h3>
                            <h3>Mac</h3>
                            <h3>iPad</h3>
                            <h3>iPhone</h3>
                            <h3>Apple Watch</h3>
                            <h3>Apple vision Pro</h3>
                            <h3>Accessories</h3>
                        </div>
                        <div className="dd2">
                            <p>Quick Links</p>
                            <h4>Find a store</h4>
                            <h4>Order Status</h4>
                            <h4>Apply Trading</h4>
                            <h4>Financing</h4>
                            <h4>Personal Setup</h4>
                        </div>
                        <div className="dd3">
                            <p>Shop Special Stores</p>
                            <h4>Certified refurbish</h4>
                            <h4>Education</h4>
                            <h4>Business</h4>
                            <h4>Veterans and Military</h4>
                            <h4>Government</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Mac</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore Mac</p>
                            <h3>Explore all Mac</h3>
                            <h3>MacBook Air</h3>
                            <h3>MacBook Pro</h3>
                            <h3>iMac</h3>
                            <h3>Mac Mini</h3>
                            <h3>Mac Studio</h3>
                            <h3>Mac pro</h3>
                            <h3>Displays</h3>
                            <h5>compare Mac</h5>
                            <h5>Switch from pc to Mac</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop Mac</p>
                            <h4>Shop Mac</h4>
                            <h4>Help me choose</h4>
                            <h4>Mac Accessories</h4>
                            <h4>Apply in Trade</h4>
                            <h4>Financing</h4>
                        </div>
                        <div className="dd3">
                            <p>More form Mac</p>
                            <h4>Mac Support</h4>
                            <h4>Applecare+ for mac</h4>
                            <h4>macOS sequioa</h4>
                            <h4>Apple intelligence</h4>
                            <h4>Apps by Apple</h4>
                            <h4>Community</h4>
                            <h4>iCloud+</h4>
                            <h4>Mac for Business</h4>
                            <h4>Education</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>iPad</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore iPad</p>
                            <h3>Explore all iPad</h3>
                            <h3>iPad Pro</h3>
                            <h3>iPad Mini</h3>
                            <h3>iPad</h3>
                            <h3>Apple pencils</h3>
                            <h3>Keyboards</h3>
                            <h5>compare iPad</h5>
                            <h5>Why iPad</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop iPad</p>
                            <h4>Shop iPad</h4>
                            <h4>iPad accessories</h4>
                            <h4>Apply trade in</h4>
                            <h4>Financial</h4>
                        </div>
                        <div className="dd3">
                            <p>More from iPad</p>
                            <h4>iPad Support</h4>
                            <h4>AppleCare+ for iPad</h4>
                            <h4>iPadOS 18</h4>
                            <h4>Apple intelligence</h4>
                            <h4>Apps from Apple</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>iPhone</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore iPhone</p>
                            <h3>Explore all iPhones</h3>
                            <h3>iPhone 16</h3>
                            <h3>iPhone 16 pro</h3>
                            <h3>iPhone 16e</h3>
                            <h3>iPhone 15</h3>
                            <h5>compare iPhone</h5>
                            <h5>Switch from android</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop iPhone</p>
                            <h4>Shop iPhone</h4>
                            <h4>iPhone Accessories</h4>
                            <h4>Apply trade in</h4>
                        </div>
                        <div className="dd3">
                            <p>More from iPhone</p>
                            <h4>iPhone Support</h4>
                            <h4>AppleCare+ for iPhone</h4>
                            <h4>iOS 18</h4>
                            <h4>Apple intelligence</h4>
                            <h4>Apps from Apple</h4>
                            <h4>icloud+</h4>
                            <h4>Siri</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Watch</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore Watch</p>
                            <h3>Explore all Watches</h3>
                            <h3>Apple watch series 10</h3>
                            <h3>Apple watch ultra 2</h3>
                            <h3>Apple watch nike</h3>
                            <h3>Apple watch SE</h3>
                            <h3>Apple watch Hermes</h3>
                            <h5>compare Apple Watches</h5>
                            <h5>Why apple watches</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop Watch</p>
                            <h4>Shop Watches</h4>
                            <h4>Watch Accessories</h4>
                            <h4>Apple watch studios</h4>
                            <h4>Apply trade in</h4>
                            <h4>financial</h4>
                        </div>
                        <div className="dd3">
                            <p>More from Watch</p>
                            <h4>Apple watch support</h4>
                            <h4>WatchOS 11</h4>
                            <h4>Apple watch for kids</h4>
                            <h4>Apple fitness</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Version</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore Vision</p>
                            <h3>Explore all Apple vision Pro</h3>
                            <h5>Guided tours</h5>
                            <h5>check specs</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop vision</p>
                            <h4>Shop apple vision pro</h4>
                            <h4>Apple vision accessories</h4>
                            <h4>Book a demo</h4>
                            <h4>Financial</h4>
                        </div>
                        <div className="dd3">
                            <p>More from vision</p>
                            <h4>Apple vision pro support</h4>
                            <h4>Applecare+2</h4>
                            <h4>visionOS</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Airpods</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore Airpods</p>
                            <h3>Explore all airpods</h3>
                            <h3>Airpods 4</h3>
                            <h3>Airpods pro 2</h3>
                            <h3>Airpods max</h3>
                            <h5>Compare Airpods</h5>
                        </div>
                        <div className="dd2">
                            <p>Shop Airpods</p>
                            <h4>Shop all Apple Airpods</h4>
                            <h4>Airpods accessories</h4>
                        </div>
                        <div className="dd3">
                            <p>More from Airpods</p>
                            <h4>Apple airpods support</h4>
                            <h4>Applecare+2 for airpods</h4>
                            <h4>Hearing health</h4>
                            <h4>Apple music</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>TV & Home</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore TV & Home</p>
                            <h3>Apple TV 4k</h3>
                            <h3>HomePod</h3>
                            <h3>HomePod mini</h3>
                        </div>
                        <div className="dd2">
                            <p>Shop TV & Home</p>
                            <h4>Shop Apple TV</h4>
                            <h4>Shop HomePod</h4>
                            <h4>Shop HomePod mini</h4>
                            <h4>Shop siri remote</h4>
                        </div>
                        <div className="dd3">
                            <p>More from TV & Home</p>
                            <h4>Apple TV support</h4>
                            <h4>HomeCare+</h4>
                            <h4>Apple TV +</h4>
                            <h4>Apple TV app</h4>
                            <h4>Home support</h4>
                            <h4>siri</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Entertainment</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Explore Entertainment</p>
                            <h3>Explore all entertainment</h3>
                            <h3>Apple One</h3>
                            <h3>Apple TV</h3>
                            <h3>Apple Music</h3>
                            <h3>Apple arcade</h3>
                            <h3>Apple books</h3>
                            <h3>Apple fitness+</h3>
                            <h3>Apple Podcasts</h3>
                            <h3>App store</h3>
                        </div>
                        <div className="dd2">
                            <p>Support</p>
                            <h4>Apple TV support</h4>
                            <h4>Apple music support</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Accessories</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Shop Accessories</p>
                            <h3>Shop all accessories</h3>
                            <h3>Mac</h3>
                            <h3>iPad</h3>
                            <h3>iPhone</h3>
                            <h3>Apple watch</h3>
                            <h3>Apple vision pro</h3>
                            <h3>TV $ Home</h3>
                        </div>
                        <div className="dd2">
                            <p>Explore accessories</p>
                            <h4>Made by Apple</h4>
                            <h4>Beats by dre</h4>
                            <h4>Airtags</h4>
                        </div>
                    </div>
                </div>
                <div className="navLink">
                    <Link to='/' className='links'>Support</Link>
                    <div className="dropdownContainer">
                        <div className="dd1">
                            <p>Get Help</p>
                            <h3>Community</h3>
                            <h3>Check coverage</h3>
                            <h3>Repair</h3>
                        </div>
                        <div className="dd2">
                            <p>Helpful Topics</p>
                            <h4>Get applecare+</h4>
                            <h4>Apple account and password</h4>
                            <h4>Billing and subscription</h4>
                            <h4>Accessibility</h4>
                        </div>
                    </div>
                </div>
                <CiSearch size={15} className='navIcons'/>
                <BsBag size={15} className='navIcons'/>
            </div>
        </div>
    );
}

export default Navbar;

