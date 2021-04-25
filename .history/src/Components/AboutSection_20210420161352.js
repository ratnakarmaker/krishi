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
                    <div className="ab__container bd-grid">


                    


                        <div className="about__data">
                            <span className="section-subtitle about__initial">About Us</span>
                            <h2 className="section-title about__initial">WHO WE ARE</h2>
                            <p className="about__description">Arrot is an organic produce brand owned and operated by Arrot Krishi Ponno Limited. At Arrot we are dedicated to supply quality vegetables free from harmful chemicals to our customers by building strong, lasting relationships with growers who are stewards of the land and their communities. Growers who pack in the Arrot Brand meet our strict criteria for excellence.</p>
                            
                        </div>
                        

                        <div className="about__data">
                    <div className="col-md-4 ">
                        <h2 className="section-title about__initial ">TODAY OFFERS</h2>
                        <div className="price_list">
                            <Table striped hover size="sm" className="table-earning">
                                <thead >
                                    <tr>
                                        
                                        <th className=" table-radius-left">Name</th>
                                        <th className=" table-radius-right">Price</th>
                                        <th className=" table-radius-right">Difference</th>
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
                                    <tr>
                                        
                                        <td>Onion</td>
                                        <td className="text-center">40</td>
                                        <td className="def text-center"><i class="def fas fa-sort-up"></i>+0.15%</td>
                                    </tr>
                                    <tr>
                                        
                                        <td>Onion</td>
                                        <td className="text-center">40</td>
                                        <td className="abc text-center"><i class="abc fas fa-sort-down"></i>-0.15%</td>
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



