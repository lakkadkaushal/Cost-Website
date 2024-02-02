import React from "react";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import h from './img/24.jpeg';
import h32 from './img/32.jpg';


import { SiClockify } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";


function Careers() {
    return (
        <div>
            {/* --------------------img start------------------- */}

            <div className='kk'>
                <div className='img-1'>
                    <img src={h}></img>
                    <div className='img-contain'>
                        <h4>Careers</h4>
                        <h1>Careers</h1>
                    </div>
                </div>
            </div>

            {/* -----------------img and---------------------- */}

            {/* ----------------Cost start---------------- */}

            <div className="w-70">

                <Container>

                    <Row className="s-2-main">
                        <Col md={12} lg>
                            <div className="s-2-img ">
                                <img src={h32}></img>
                            </div>
                        </Col>
                        <Col md={12} lg className="s-2-ll">
                            <div className="s-2-contain">
                                <h1>Working at COST Accountant</h1>
                                <p>Take a job opportunity of a lifetime – join the team of COST
                                    Accountant. We cherish active people specialising in accounting,
                                    marketing, design, and promotion who are willing to work on projects
                                    of any type and complexity. If you are enthusiastic about business
                                    innovations and ready to make impactful decisions, feel free to send us your CV.
                                    We are interested in hiring professionals for a long term.</p>
                                <button>learn more</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* -------------------cost and------------------ */}

            {/* -----------------Vacancies start----------------- */}

            <div className="w-70 Vacancies">
                <div className='hading'>
                    <h1>Available Vacancies</h1>
                </div>
                <Container>
                    <Row className="s-2-mm">
                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Customer Assistant</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Tabes velums, tanquam camerarius tata. A falsis, urbs superbus xiphias.
                                    Nunquam examinare abnoba. Humani generiss observare, tanquam tus.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Web Designer</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Superbus uria recte attrahendams bursa est. Sunt cottaes quaestio camerarius,
                                    dexter assimilatioes. Lotus, noster classiss recte locus
                                    de pius, flavum bubo. Diatrias sunt particulas de flavum ignigena.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Technical Support Agent</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Era de salvus fluctus, promissio lumen! Magister de castus aonides, magicae adelphis! Cum
                                    calcaria credere, omnes lunaes reperire grandis, mirabilis accolaes.</p>
                            </div>
                        </Col>


                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Accountant</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Byssuss potus! Finiss peregrinatione in antenna! Cum zirbus ire, omnes rectores
                                    demitto rusticus, orgiaes. Cum fluctus velum, elogiumes imperium castus.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Customer Care Manager</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Heu, luna! Sunt racanaes imitari bassus, lotus aususes. Orexiss mori,
                                    tanquam velox extum. Raptus, nobilis bullas etiam aperto de placidus, albus ventus.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className="s-2-con">
                                <h3>Junior PR Manager</h3>
                                <h1></h1>
                                <div className="s-2-ul">
                                    <ul className="d-flex s-2-main p-0 m-0 ">
                                        <li className="p-0"><span><SiClockify /></span>Full Time</li>
                                        <li><span><FaMapMarkerAlt /></span>San Diego</li>
                                    </ul>
                                </div>
                                <p>Ecce, secundus devirginato! Cum ignigena nocere, omnes tumultumquees
                                    acquirere superbus, clemens victrixes. Compater, domina, et extum.</p>
                            </div>
                        </Col>PORTFOLIO


                    </Row>
                    
                        <div className="vr-but">
                            <button>learn more</button>
                        </div>
                    
                </Container>
            </div>

            {/* -----------------Vacancies and---------------- */}


        </div>
    );
}

export default Careers;