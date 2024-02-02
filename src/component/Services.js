import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
// import Heder from './Heder.js'


import h from './img/24.jpeg';
import h2 from './img/25.jpeg';
import n6 from './img/6.jpeg'
import n7 from './img/7.jpeg'
import n8 from './img/8.jpeg'
import n9 from './img/9.jpeg'
import h3 from './img/26.jpeg'
import h4 from './img/27.jpeg'
import h5 from './img/28.jpeg'
import h6 from './img/29.jpeg'


function Services() {
    return (

        <div className='main'>

         

            {/* --------------------img start------------------- */}

            <div className='kk'>
                <div className='img-1'>
                    <img src={h}></img>
                    <div className='img-contain'>
                        <h4>SERVICES</h4>
                        <h1>Services</h1>
                    </div>
                </div>
            </div>

            {/* -----------------img and---------------------- */}

            {/* ----------------about start--------------- */}

            <div className='about w-70'>
                <Container>
                    <Row className='j-s'>
                        <Col md={12} lg>
                            <div className='about_contain'>
                                <h1>A Few Words About Us</h1>
                                <p>We are a team of talented marketers who happen to love
                                    creating smart ideas for those who will have us. We use our
                                    creative potential to provide the smartest ideas.</p>
                                <p>
                                    We have a wide range of experience, expertise and tools to create and implement your campaigns, from carefully curating awesome content to optimising
                                    it with our great SEO powers as well as outdoor marketing skills.
                                </p>
                                <button>learn more</button>
                            </div>
                        </Col>
                        <Col md={12} lg>
                            <div className='img-2'>
                                <img src={h2}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* -----------------about and------------------ */}

            {/* -----------------Services start----------------- */}

            <div className='w-70'>
                <Container>
                    <div className='hading'>
                        <h1>Services</h1>
                        <div className='h-k'>
                            <p>As the most qualified accounting services provider, we offer an amazing variety of financial solutions
                                designed to help you solve all bookkeeping issues, no matter big or small.</p>
                        </div>
                    </div>

                    <Row className='Services'>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={n6}></img>
                                <div className='img_contain'>
                                    <h4>Cash Management</h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1'>
                                <img src={n7}></img>
                                <div className='img_contain'>
                                    <h4>Payments</h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={n8}></img>
                                <div className='img_contain'>
                                    <h4>M&A Assistance  </h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={n9}></img>
                                <div className='img_contain'>
                                    <h4>CLocal Expertise</h4>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <Row className='Services'>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={h3} className='img-2'></img>
                                <div className='img_contain'>
                                    <h4>Video & Photo Production</h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1'>
                                <img src={h4} className='img-2'></img>
                                <div className='img_contain'>
                                    <h4>Graphic Design</h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={h5} className='img-2'></img>
                                <div className='img_contain'>
                                    <h4>Strategy </h4>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg >
                            <div className='img-1' >
                                <img src={h6} className='img-2'></img>
                                <div className='img_contain'>
                                    <h4>Branding</h4>
                                </div>
                            </div>
                        </Col>

                    </Row>

                   
                </Container>
            </div>


            {/* ------------------Services and----------------- */}

        </div>


    );
}

export default Services;