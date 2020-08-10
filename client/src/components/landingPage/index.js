import React, { useState, useEffect, useContext } from "react";
import Particles from 'react-particles-js';
import Contact from '../contact/contact.js';
import reactLogo from '../../assets/Images/reactlogo.png';
import jsLogo from '../../assets/Images/jsLogo.png';
import cssLogo from '../../assets/Images/cssLogo.png';
import htmlLogo from '../../assets/Images/htmlLogo.png';
import profile2 from '../../assets/Images/profile2.JPG';
import nodejsLogo from '../../assets/Images/nodejsLogo.png';
import qlok from '../../assets/Images/qlok.png';
import taurus from '../../assets/Images/taurusQuill.png';
import ReactSkillbar from 'react-skillbars';
import { Link } from "react-router-dom";
import '../../main.scss';
import './index.scss';
import '../navBar/nav.scss';
import { GiSpeedometer } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { MdPhonelink } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";

import { Context } from '../../contextApi/newIndex.js';


const LandingPage = () => {
    const [state, dispatch] = useContext(Context);

    const skills = [
        { type: "CSS", level: 90 },
        { type: "HTML", level: 80 },
        { type: "Javascript", level: 90 },
        { type: "TypeScript", level: 70 },
        { type: "REACT", level: 85 },
        { type: "REACT-NATIVE", level: 65 },
        { type: "NODE.JS", level: 75 },
        { type: "GIT", level: 90 },
        { type: "UI DESIGN", level: 60 },
        { type: "Photoshop", level: 40 },
    ];

    function pageLoads() {
        setTimeout(() => {
        }, 1000)
    }

    useEffect(() => {
        pageLoads();
    }, [])

    function offsets(props) {
        if (props === "about") {
            window.scrollTo(0, document.getElementById("about").offsetTop);
        }
    }

    let Data = {
        images: [reactLogo, jsLogo, cssLogo, htmlLogo, nodejsLogo],
        imageAlts: ['Javascript react Logo', 'javaScript Logo', 'css3 Logo', 'html5 Logo', 'nodeJs Logo'],
        workImages: [taurus, qlok],
    }
    const renderLogos = Data.images.map((img, index) => {
        return <img key={index} src={img} alt={Data.imageAlts[index]}></img>
    });

    return (
        <div>
            {/* Home Section */}
            <section id="home" classname="flex">
                <Particles
                    width="100vw"
                    height="100vh"
                    params={{
                        background: { color: { value: "#252934", } },

                        interactivity: {
                            detectsOn: "canvas", events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                                resize: true,
                            },
                            modes: {
                                bubble: { distance: 200, duration: 2, opacity: 0.8, size: 20 },
                                push: { quantity: 2 },
                                repulse: { distance: 100, duration: 0.4 },
                            }
                        },
                        particles: {
                            color: { value: "#4D5059" },
                            line_linked: { color: { value: "#fff" } },
                            number: { value: 60 },
                            size: { value: 3 },
                        },
                    }} />
                <div className="flex">
                    <div class="text slideInLeftTilt">
                        <p> Hello, I'm
                    <span class="highlight"> Edward Kumerius</span>.
                    <br />
                    I'm a Front-End web developer. </p>
                    </div>
                    <div >
                        <Link onClick={() => offsets("about")} className="link slideInRightTilt"> <p> About </p> </Link>
                    </div>

                </div>
            </section>
            {/* About Section */}
            <section id="about">
                <div className="headText slideInLeft">
                    <h1> About </h1>
                </div>
                <div className="content">
                    <div className="aboutWrapper">
                        <div className="item-flex slideInRight">
                            <div className="columnItems ">
                                <div className="items">
                                    <GiSpeedometer />
                                    <p> Optimised </p>
                                </div>
                                <p>
                                    Fast load times and lag free interaction,
                                    my highest priority.
                            </p>
                                <div className="items">
                                    <IoIosRocket />
                                    <p> Dynamic </p>
                                </div>
                                <p>
                                    Websites don't have to be static,
                                    I love making pages come to life.
                                </p>
                            </div>
                            <div className="columnItems">
                                <div className="items">
                                    <MdPhonelink />
                                    <p> Responsive</p>
                                </div>
                                <p> My layouts will work on any device, big or small. </p>

                                <div className="items">
                                    <RiLightbulbFlashLine />
                                    <p> Creative </p>
                                </div>
                                <p> Strong preference for easy to use, intuitive UX/UI. </p>
                            </div>
                        </div>
                    </div>

                    <div className="skillWrapper">
                        <div >
                            <div className="profileImg">
                                <img src={profile2} />
                                <p>
                                    I'm a Front-End Developer In Stockholm, Sweden.
                                    <br />
                                    I have serious passion for UI effects, animations and creating optimised, intuitive, dynamic user experiences.
                                    <br />
                                    Let's make something great.
                            </p>
                            </div>
                        </div>
                        <div className="skillBox ">
                            <div className="skillImageContainer">
                                {renderLogos}
                            </div>
                            <p> Skills: JavaScript( Vanilla, TypeScript, React, NodeJS ), HTML & CSS. </p>
                            <ReactSkillbar classname="skillBar" skills={skills} height={50} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Work Section */}
            <section id="work">
                <div className="headText slideInLeft">
                    <h1> Projects </h1>
                </div>
                <div className="flex">
                    <div className="qlok workImages">
                        <a href="https://github.com/Eddyking1/Qlok"> <p> Github</p></a>
                    </div>
                    <div className="taurus workImages">
                        <a href="https://github.com/bayev/Taurus"> <p> Github</p></a>
                    </div>
                </div>
            </section>
            {/*Contact Section */}
            <section id="contact">
                <div className="flex">
                    <div className="headText">
                        <h1> contact</h1>
                    </div>
                    <p>
                        Have a question or want to work together?
                    </p>
                    <Contact />
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
