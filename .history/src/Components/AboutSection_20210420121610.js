import React,{useEffect} from 'react';
// import Fade from 'react-reveal';
import About1 from '../img/about1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Table} from 'react-bootstrap'

function About() {
    useEffect(() => {
        Aos.init({duration: 2000});
       },[]);
    return (
        <>
           
                <section data-aos="fade-up" className="about section bd-container" id="about">
                    <div className="about__container bd-grid">


                    


                        <div className="about__data">
                            <span className="section-subtitle about__initial">About Us</span>
                            <h2 className="section-title about__initial">WHO WE ARE</h2>
                            <p className="about__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence and consistency.</p>
                            <button className="button">Explore history</button>
                        </div>
                        <div className="about__data">
                    <div className="col-md-4 ">
                        <h2>Product List</h2>
                        <div className="price_list">
                            <Table striped hover size="sm" className="table-earning">
                                <thead >
                                    <tr>
                                        
                                        <th className="table-radius-left"> Product Name</th>
                                        <th className="table-radius-right">Product Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>Potato</td>
                                        <td className="text-center">30</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Tomato</td>
                                        <td className="text-center">20</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Cucumber</td>
                                        <td className="text-center">60</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Carrot</td>
                                        <td className="text-center">80</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Onion</td>
                                        <td className="text-center">40</td>
                                    </tr>
                                   
                                    
                                </tbody>
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
