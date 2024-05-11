import React from "react";
import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import img_5 from "../../assets/images/no_1.png";



const Hero = () => {
    return (
        <section className="hero">
                <div className="hero_left">
                    <h1 className="h1">
                        Every business is as good as its tools.
                    </h1>
                    <div className="hero_btn-container">
                        <a href="#" className="button-outline">
                            How it works
                        </a>
                        <a href="#" className="button-primary button_1">
                            Get Started for free 
                        </a>
                    </div>
                </div>
                <div className="hero_right">
                    <div className="img_container">
                        <img src={img_5} alt="" />
                    </div>
                </div>
        </section>
    )
}

export default Hero;