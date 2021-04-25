import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './BuyerRegistration.css';
import { Form } from 'react-bootstrap';

const BuyerRegistration = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="bg_color pt-5">
            <header id="page-header">
                <div class="container pt-5 mt-5">
                    <div class="row">
                        <div class="col-md-6 m-auto text-center text-light mt-5 contact">
                            <h1>Members Registration</h1>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, saepe.</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5">
                <div className="container reg_container col-md-10">
                    <div className="registration_text text-center">Registration Form</div>
                    <div className="title pt-5">Members Information</div>
                    <div className="content">
                        <form action="#" className="information">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Company/Legal Name</span>
                                    <input type="text" placeholder="Enter name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" placeholder="Enter number" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Address</span>
                                    <input type="text" placeholder="Enter your address" required />
                                </div>
                                
                                {/* <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="text" placeholder="Enter your password" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="text" placeholder="Confirm your password" required />
                                </div> */}
                            </div>

                            <section className="pt-5">
                                <div className="title">Representative Information</div>
                                <div className="content">
                                    <form action="#" className="information">
                                        <div className="user-details">
                                            <div className="input-box">
                                                <span className="details">First Name</span>
                                                <input type="text" placeholder="Enter your first name" required />
                                            </div>
                                            <div className="input-box">
                                                <span className="details">Last Name</span>
                                                <input type="text" placeholder="Enter your last name" required />
                                            </div>
                                            <div className="input-box">
                                                <span className="details">Email</span>
                                                <input type="text" placeholder="Enter your email" required />
                                            </div>
                                            <div className="input-box">
                                                <span className="details">Phone Number</span>
                                                <input type="text" placeholder="Enter your number" required />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>

                            <div className="gender-details">
                                <input type="radio" name="representative" id="dot-1" />
                                <input type="radio" name="representative" id="dot-2" />
                                <input type="radio" name="representative" id="dot-3" />
                                <input type="radio" name="representative" id="dot-4" />
                                <span className="gender-title">Buyers Type</span>
                                <div className="category">
                                    <label for="dot-1">
                                        <span className="dot one"></span>
                                        <span className="gender">Non-profit</span>
                                    </label>
                                    <label for="dot-2">
                                        <span className="dot two"></span>
                                        <span className="gender">Limited</span>
                                    </label>
                                    <label for="dot-3">
                                        <span className="dot three"></span>
                                        <span className="gender">Government</span>
                                    </label>
                                    <label for="dot-4">
                                        <span className="dot four"></span>
                                        <span className="gender">Proprietorship</span>
                                    </label>
                                </div>
                            </div>

                            <div className="gender-details">
                                <input type="radio" name="representative1" id="dot-5" />
                                <input type="radio" name="representative1" id="dot-6" />
                                <span className="gender-title">Type of Account</span>
                                <div className="category type_width">
                                    <label className="account" for="dot-5">
                                        <span className="dot five"></span>
                                        <span className="type">Buyer</span>
                                    </label>
                                    <label className="account" for="dot-6">
                                        <span className="dot six"></span>
                                        <span className="type">Seller</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-12 textarea_padding">
                                <div className="form-group pt-2">
                                    <textarea cols="30" rows="3" placeholder="Message" className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="registration_button">
                                <input type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </section>
        </div >
    );
};

export default BuyerRegistration;