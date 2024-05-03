import React from "react";
import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import img_1 from "../../assets/images/coffee_scan_1.jpeg";
import img_2 from "../../assets/images/coffee_scan.jpeg";
import img_3 from "../../assets/images/coffee_scan_2.jpeg";


const Hero = () => {
    return (
        <section className="hero">
                <div className="hero_left">
                    <h1>
                        Every business is as good as its tools.
                    </h1>
                    <p className="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos, non id vitae asperiores corrupti repellendus ullam fugiat dolor soluta cum consequuntur distinctio, vel quaerat! Ipsa ratione ipsum tempore dolores?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate facere nostrum accusantium ipsa autem totam modi iusto repellat similique? Dolores quaerat aperiam illo minus est, praesentium enim laborum quibusdam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam laborum explicabo, accusamus error reprehenderit ea dolorem architecto iusto mollitia eligendi nemo repellendus earum ad totam fugit. Natus, corporis? Vitae, cupiditate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt necessitatibus non optio corrupti. Incidunt praesentium fugit exercitationem a dolore totam dolor, consectetur qui! Totam esse minima sunt distinctio deleniti?
                    </p>
                    <div className="hero_btn-container">
                        <a href="#" className="button-primary">
                            Get Started for free 
                        </a>
                        <a href="#" className="button-outline">
                            How it works
                        </a>
                    </div>
                </div>
                <div className="hero_right">
                    <img src={img_1} alt="" />
                    <img src={img_2} alt="" />
                    <img src={img_3} alt="" />
                </div>
        </section>
    )
}

export default Hero;