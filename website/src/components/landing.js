import React from 'react'

import './landing.css'
import NavbarComponent from "./LandComponents/NavbarComponent";
import HeaderComponent from "./LandComponents/HeaderComponent";
import DetailComponent from "./LandComponents/DetailComponent";
import IconComponent from "./LandComponents/IconComponent";
import AboutComponent from "./LandComponents/AboutComponent";
import FooterComponent from "./LandComponents/FooterComponent";

 const Landing = () => {
    return (
        <div>
            <NavbarComponent />
            <HeaderComponent />
            <DetailComponent />
            <IconComponent />
            <AboutComponent />
            <FooterComponent />
        </div>
    )
}
export default Landing;