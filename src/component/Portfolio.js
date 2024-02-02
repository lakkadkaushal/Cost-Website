import React from "react";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import h from './img/24.jpeg';
import j0 from './img/34.jpg';
import j1 from './img/33.jpg';
import j2 from './img/35.jpg';
import j3 from './img/36.jpg';
import j4 from './img/37.jpg';
import j5 from './img/38.jpg';
import j6 from './img/39.jpg';
import j7 from './img/40.jpg';
import j8 from './img/41.jpg';




function Portfolio()
{
    return(
        <div>
            {/* --------------------img start------------------- */}

            <div className='kk'>
                <div className='img-1'>
                    <img src={h}></img>
                    <div className='img-contain'>
                        <h4>grid layout</h4>
                        <h1>grid layout</h1>
                    </div>
                </div>
            </div>

            {/* -----------------img and---------------------- */}

            {/* --------------gria layout start-------------- */}

            <div className="w-70">
                <Container>
                    <Row  >
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j0}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>iGadget</h4>
                                    <p className="p-0 m-0">Art Direction, Design, Production</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j1}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>Computerize Ltd.</h4>
                                    <p className="p-0 m-0">Event Organization, Branding</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j2}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>MNGRZ Co.</h4>
                                    <p className="p-0 m-0">Strategic Planning, Digital Marketing</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row  >
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j3}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>CompuTerra</h4>
                                    <p className="p-0 m-0">Email Marketing, Branding</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j4}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>Fruits Inc.</h4>
                                    <p className="p-0 m-0">Customer Support, Web Design</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j5}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>Accessories</h4>
                                    <p className="p-0 m-0">Content Creation, SEO</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row  >
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j6}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>NewOffice Ltd.</h4>
                                    <p className="p-0 m-0">Web Design, Accounting, SMM</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j7}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>EcoWorld</h4>
                                    <p className="p-0 m-0">Copywriting, TV Advertising</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="p-2">
                            <div className="s-4-img">
                                <img src={j8}></img>
                                <div className="s-4-contain">
                                    <div>
                                    <h4>Stationery Inc.</h4>
                                    <p className="p-0 m-0">Branding, Design, Marketing Strategy</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    

                
                </Container>
            </div>


            {/* ---------------grid and------------- */}
        </div>
    );
} 

export default Portfolio;