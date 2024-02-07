import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assets/imgs/logo.png'
function Banner() {
    return (
        <div className="wrapper">
            <section className="banner">
                <div className="container">
                    <ul className="row">
                        <div className="col-sm-12">
                            <div className="App-logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <nav className="navbar">
                                <ul className="navbar-list">
                                    <li className="navbar-item">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="navbar-item">
                                        <NavLink to="/to-do">To-Do</NavLink>
                                    </li>
                                    <li className="navbar-item">
                                        <NavLink to="/calculator">Calculator</NavLink>
                                    </li>

                                    <li className="navbar-item">
                                        <NavLink to="/click-counter">Click Counter</NavLink>
                                    </li>
                                    <li className="navbar-item">
                                        <NavLink to="/ecommerce">E-commerce</NavLink>
                                    </li>

                                    <li className="navbar-item">
                                        <NavLink to="/Weather-app">Weather App</NavLink>
                                    </li>
                                    <li className="navbar-item">
                                        <NavLink to="./quiz-app">Play Quiz</NavLink>
                                    </li>
                                    <li className="navbar-item">
                                        <NavLink to="/contact">Contact Me</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </ul>
                </div>

            </section>

        </div>

    );
}
export default Banner;
