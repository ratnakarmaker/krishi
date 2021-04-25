import React, { useEffect } from 'react';
// import Fade from 'react-reveal';
import About1 from '../img/about1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Dashboard from '../Components/MainDashboard/DashboardContent'

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    const DashBoard = () => {
        // You can use Hooks here!
        console.log("Dashboard cliked")
      }

    return (
        <>
            <section data-aos="fade-up" className="about section bd-container" id="about">
                <div className="services__container  bd-grid">
                    <div className="about__data">
                        <span className="section-subtitle about__initial about_padding">About Us</span>
                        <h2 className="section-title about__initial about_padding">WHO WE ARE</h2>
                        <p className="services__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence.</p>
                    </div>
                    <div className="about__data">
                        <div className=" ">
                            <span className="section-subtitle about__initial ">Dashboard</span>
                            <h2 className="section-title about__initial ">TODAY OFFERS</h2>
                            <div >
                                <Table striped hover size="sm" >
                                    <thead >
                                        <tr>
                                            <th >Products</th>
                                            <th >Price</th>
                                            <th >Difference</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Potato</td>
                                            <td className="text-center">30</td>
                                            <td className="def text-center"><i class="def fas fa-sort-up"></i>+0.75%</td>
                                        </tr>
                                        <tr>
                                            <td>Tomato</td>
                                            <td className="text-center">20</td>
                                            <td className="abc text-center"><i class="abc fas fa-sort-down"></i>-0.25%</td>
                                        </tr>
                                        <tr>
                                            <td>Cucumber</td>
                                            <td className="text-center">60</td>
                                            <td className="abc text-center"><i class="abc fas fa-sort-down"></i>-0.50%</td>
                                        </tr>
                                        <tr>
                                            <td>Carrot</td>
                                            <td className="text-center">80</td>
                                            <td className="def text-center"><i class="def fas fa-sort-up"></i>+0.75%</td>
                                        </tr>
                                        <tr>
                                            <td>Onion</td>
                                            <td className="text-center">40</td>
                                            <td className="abc text-center"><i class="abc fas fa-sort-down"></i>-0.15%</td>
                                        </tr>
                                    </tbody>
                                    <Link class="button dashboard_btn" to="/dashboard">Dashboard</Link>

                                </Table>
                            </div>
                        </div>
                    </div>
                    <img src={About1} alt="" className="about__img" />
                </div>
            </section>
        </>
    )
}

export default About



