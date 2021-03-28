import React from 'react';
import Typed from "react-typed"
//import laptop from '../assests/laptop.jpg';

const Header = () => {
    return (
        <div className="header-wrapper">
            {/* <img src={laptop} alt="bgImg" /> */}
            <div className="main-info">
                <h1>
                    web development and website
                </h1>
                <Typed 
                    className="typed-text"
                    strings={["WebDesign", "Web Development","UI/UX", "Google Ads"]}
                    typespeed={40}
                    backSpeed={60}
                    loop
                    />
                <a href="#" className="btn-main-offer">
                        Contact Me
                </a>
                
            </div>
        </div>
    )
}

export default Header
